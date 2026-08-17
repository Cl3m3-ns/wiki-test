#!/usr/bin/env ruby
# frozen_string_literal: true

require "json"
require "fileutils"
require "pathname"

REPO_ROOT = Pathname.new(__dir__).join("..").expand_path
SITE_DIR = REPO_ROOT.join("_site")
BASEURL = "/ampel-wiki"

def run_jekyll_build
  Dir.chdir(REPO_ROOT) do
    success = system("bundle", "exec", "jekyll", "build")
    abort("Jekyll build failed") unless success
  end
end

def split_url(url)
  before_hash, fragment = url.split("#", 2)
  before_query, query = before_hash.split("?", 2)

  [before_query, query, fragment]
end

def local_target_path(path)
  path = "/" if path.empty?
  path = path.delete_prefix("/")

  return "index.html" if path.empty?
  return "#{path}index.html" if path.end_with?("/")

  path
end

def with_suffix(path, query, fragment)
  result = path.dup
  result << "?#{query}" if query
  result << "##{fragment}" if fragment
  result
end

def local_relative_url(from_file, url)
  path, query, fragment = split_url(url)
  path = path.delete_prefix(BASEURL)

  target = SITE_DIR.join(local_target_path(path)).cleanpath
  relative = target.relative_path_from(from_file.dirname).to_s
  relative = "./#{relative}" unless relative.start_with?(".")

  with_suffix(relative, query, fragment)
end

def local_root_url(url)
  path, query, fragment = split_url(url)
  path = path.delete_prefix(BASEURL)

  with_suffix(local_target_path(path), query, fragment)
end

def rewrite_html_file(file)
  html = file.read

  rewritten = html.gsub(/(["'])#{Regexp.escape(BASEURL)}((?:\/[^"']*)?)\1/) do
    quote = Regexp.last_match(1)
    url = "#{BASEURL}#{Regexp.last_match(2)}"

    "#{quote}#{local_relative_url(file, url)}#{quote}"
  end

  local_search_data = local_relative_url(file, "#{BASEURL}/assets/js/search-data-local.js")
  rewritten = rewritten.sub(
    %r{(\s*<script src="[^"]*assets/js/just-the-docs\.js"></script>)},
    "\n  <script src=\"#{local_search_data}\"></script>\\1"
  )

  file.write(rewritten) if rewritten != html
end

def rewrite_theme_js
  file = SITE_DIR.join("assets/js/just-the-docs.js")
  return unless file.file?

  js = file.read
  js = js.sub(
    "(function (jtd, undefined) {\n",
    <<~JS
      (function (jtd, undefined) {

      var jtdLocalSiteRoot = (function() {
        var script = document.currentScript;
        if (!script || !script.src) return '';
        return script.src.replace(/\\/assets\\/js\\/just-the-docs\\.js(?:[?#].*)?$/, '');
      })();

      function jtdLocalUrl(url) {
        if (url === '#') return url;
        if (url === '#main-content') return url;
        if (url.indexOf('#') === 0) return url;
        if (/^[a-z][a-z0-9+.-]*:/i.test(url)) return url;

        var hashIndex = url.indexOf('#');
        var hash = '';
        if (hashIndex >= 0) {
          hash = url.slice(hashIndex);
          url = url.slice(0, hashIndex);
        }

        var queryIndex = url.indexOf('?');
        var query = '';
        if (queryIndex >= 0) {
          query = url.slice(queryIndex);
          url = url.slice(0, queryIndex);
        }

        var path = url.indexOf('#{BASEURL}') === 0 ? url.slice(#{BASEURL.length}) : '/' + url.replace(/^\\/+/, '');
        if (path === '' || path === '/') {
          path = '/index.html';
        } else if (path.charAt(path.length - 1) === '/') {
          path = path + 'index.html';
        }

        return jtdLocalSiteRoot + path + query + hash;
      }

    JS
  )

  js = js.gsub("'#{BASEURL}/assets/js/search-data.json'", "jtdLocalSiteRoot + '/assets/js/search-data.json'")
  js = js.gsub("'#{BASEURL}/assets/css/just-the-docs-' + theme + '.css'", "jtdLocalSiteRoot + '/assets/css/just-the-docs-' + theme + '.css'")
  js = js.gsub("resultLink.setAttribute('href', doc.url);", "resultLink.setAttribute('href', jtdLocalUrl(doc.url));")
  js = js.sub(
    "function initSearch() {\n",
    <<~JS
      function initSearch() {
        if (window.JTD_SEARCH_DATA) {
          var docs = window.JTD_SEARCH_DATA;

          lunr.tokenizer.separator = /[\\s\\-/]+/

          var index = lunr(function(){
            this.ref('id');
            this.field('title', { boost: 200 });
            this.field('content', { boost: 2 });
            this.field('relUrl');
            this.metadataWhitelist = ['position']

            for (var i in docs) {
              this.add({
                id: i,
                title: docs[i].title,
                content: docs[i].content,
                relUrl: docs[i].relUrl
              });
            }
          });

          searchLoaded(index, docs);
          return;
        }

    JS
  )

  file.write(js)
end

def rewrite_search_data
  file = SITE_DIR.join("assets/js/search-data.json")
  return unless file.file?

  data = JSON.parse(file.read)
  data.each_value do |entry|
    next unless entry["url"]&.start_with?(BASEURL)

    entry["url"] = local_root_url(entry["url"])
  end

  file.write(JSON.pretty_generate(data))
  file.dirname.join("search-data-local.js").write("window.JTD_SEARCH_DATA = #{JSON.generate(data)};\n")
end

def copy_eudamed_local_copy
  source = REPO_ROOT.join("eudamed-local-copy")
  return unless source.directory?

  target = SITE_DIR.join("eudamed-local-copy")
  FileUtils.rm_rf(target)
  FileUtils.cp_r(source, target)
end

run_jekyll_build

SITE_DIR.glob("**/*.html").each do |file|
  rewrite_html_file(file)
end

rewrite_theme_js
rewrite_search_data
copy_eudamed_local_copy

puts "Built local file-friendly site at #{SITE_DIR}/index.html"
