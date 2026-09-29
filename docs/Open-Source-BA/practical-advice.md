# Practical Advice

## How to incorporate AMPEL into your in-house medical device 

*Note: Developer of in-house medical devices always take full responsibility for their products. The following different development pathways differ only in the necessary documentation and workload - and not in the degree of responsibility.*
### SOUP: Fast and easy (recommended)
Take all, don't change anything in the AMPEL source code and incorporate AMPEL as SOUP (Software of Unknown Provenance). As always, you have to develop at least the data input on your own. This variant allows customization only outside of the AMPEL source code. You can develop independent components but you can't adjust technical interfaces or existing components of AMPEL. This approach not only speeds up production but also makes future updates easier.

### Copy&Paste: Full customization 
If you customize the code in a way that it can't be updated from the "manufacturer" this code can't be handled as SOUP anymore. Instead you have to use it as in-house code, even when most of it was copy&pasted elsewhere. This means full documentation and testing. Even though you will need to review all individual cases, measures, tests (...) on your own, you can still use our technical documentation as an template or example of what this full documentation might look like.

## Project management

*Note: All advice here is focused on the implementation of a comprehensive, hospital-wide CDSS. Smaller projects can be significantly less time-consuming (e.g. development of in-house IVDs along familiar procedures in a laboratory facility).*

- Plan with at least 24 PMs ("personal months") to implement the first in-house medical device software. 
- Plan your team with at least one professional software developer (sorry, medical/bio/... informatics!).
- Plan your team with at least one physician with experience in both worlds: clinical routine care AND medical informatics.
- Plan with at least one clinical internal QM professional. This person could be part of the central QM department. She/he is part of the department’s or project team’s inner circle? Even better.
- You haven't done an in-house medical device software before? Then you will need consulting. Hire an external medical device consulting firm with experience in software and in-house development (MDR/IVDR Article 5). While many companies can help you to build a new ISO-13485-QMS (which is not mandatory!) or to supplement the existing QMS to meet the requirements of MDR Article 5, only few have real experiences with in-house medical device software. Ask for an example of a successful in-house software the company has already supported.
- Is it the first in-house medical device software at your healthcare facility? You will need the commitment of the "C-level" of the healthcare facility (recommended first step), the departments of quality and risk management, the medtech department, legal department, IT department, the data protection officer and the IT security officer. The software will touch all of their areas of responsibility. Talk with all of them at least once.
- Your institute and the healthcare facility are two different legal entities? Make sure that your development team is incorporated into the legal entity of the healthcare facility. There are other options we've heard of - but this is the simplest one. The in-house medical device will (likely) be part of patient routine care and your healthcare facility will be legally responsible for software operation and maintenance - so it stands to reason that the team is employed by the healthcare facility.
- Many hospital insurance plans already cover in-house medical devices, but it's always best to double-check. Consider reaching out to your point of contact at the clinic or contacting your insurance provider directly to confirm.


## Quality management

- Read all our technical documentation. Get familiar with the [V-Model](https://en.wikipedia.org/wiki/V-model) if you aren't already. Try to understand how the documents play together.
- Stick closely to the templates provided by your QMS and/or stay with our approach. Likely you are a scientist and you are naturally searching for improvements. Be aware of danger. Quality management is open ended in all directions!
- Assessing risks is another never-ending topic. Define a scope - what does really matter? Usually, it's a good start to find concrete patient damage and then go backwards. Here, elegance comes from thoughtful simplification.
- Everything in medicine can lead to death, but nobody has told this quality management. Be confident and do not consider scenarios with lower probability than your definition (e.g., 1:1000000).
- Set up fixed dates in your calendar, where you think about "What does really matter?". Focus on these topics. You will never have the "perfect" documentation. No project on the world has endless time. Your job is to do the best out of the resources you have.
- If you don't know what matters most focus on risk mitigating measures.
- The amount of software tests and their protocols can be overwhelming. Use automatically generated logs (e.g. in the repository) and only link to this in your official QMS documentation.
