# Open Source

## Why is open source better?

Open source makes reproducibility possible, opening two paths for innovation that closed-source software simply cannot deliver:

**1. Progress**
Open-source projects are published globally. Provided a true open-source license is used, virtually anyone in the world can build directly upon what already exists. Whenever someone makes a step forward, everybody makes a step forward. No one needs to reinvent the wheel. Everyone can immediately focus on the next challenge. The core mission of the AMPEL platform is to bridge the evidence gap for AI-driven medical devices. The more studies build upon one another, the faster this gap can be closed.

**2. Control**
Algorithmic transparency was a matter of trust long before the rise of modern "AI". The more transparent a software solution is, the easier it is to verify whether it truly delivers on its promises and to identify possible bias and discrimination. Maximum transparency creates maximum control. Fulfilling this need is essential for both medical staff and patients.

## Can medical device software be developed as open source project?

Yes, in principle, medical device software can be released as open source. Worldwide, there is currently only a single medical device software published open source (Tidepool, USA, FDA clearance). A corresponding open-source release of a CE-marked product under the MDR [is analogously possible](https://doi.org/10.1111/dme.15246). For in-house devices, it is more complex. Here, some interpretations assume that an open-source release of an in-house device constitutes a "placement on the market" and is therefore prohibited. To avoid this uncertainty, we have developed the AMPEL regulatory framework for in-house medical device software.

## How does the AMPEL regulatory framework solves the challenge for in-house medical device software?

If you picture an open-source medical device software as an assembled Lego set, the AMPEL platform can be thought of as building blocks with an instruction manual, where a major block has been intentionally left out. While this is slightly inconvenient, it allows us to combine the best of three worlds:

1. We can develop without lengthy notified body involvement and skip specific MDR requirements (we gain speed).
2. Stripped of medical device status, the community gains the freedom to collaborate on it just like any other open-source project (better collaboration).
3. Site-specific in-house medical devices encourage the development of additional algorithms and extensions, and do leverage the fast-track pathway for interventional studies (more evidence incoming).

## Why is a major building block intentionally left out in the AMPEL regulatory framework?

Placing an in-house medical device on the market revokes its in-house status. Releasing software as open source can be interpreted as such a placement on the market. The AMPEL regulatory framework safeguards against this through three key mechanisms:

1. The published AMPEL platform does not include a data input module. As a result, a critical component required to run the software is absent. The remaining code represents a partial product and, lacking an intended medical purpose, is not a medical device under the MDR. 
2. Without the capability to process medical input data, the platform objectively falls outside the definition of "software" under the MDR. 
3. Furthermore, the release is not carried out "in the course of a commercial activity" as specified in the MDR's definition of "placing on the market".

## What are the alternatives to the AMPEL regulatory framework?
An open-source alternative would be releasing a CE-marked device (similar to [OSS Tidepool](https://doi.org/10.1111/dme.15246)). This approach would allow for publishing complete, fully functional software, making implementation easier for clinics that lack the resources for dedicated in-house development. However, when evaluating the overall "time-to-evidence," the advantages of the in-house pathway clearly win out. We have outlined the reasons for this decision in the articles [studies](studies.md) and [in-house medical device software](in-house-mdsw.md).

## How is the AMPEL platform different from existing open source projects?

While traditional open source projects typically aim to provide a single, complete product for everyone, the AMPEL platform is by design built for individualized in-house solutions with a shared core. The individualized in-house medical devices that result from this approach have requirements regarding technical and regulatory implementation that far exceed the scope of traditional OSS projects. In the AMPEL platform, comprehensive documentation is essential rather than optional, as the platform would generally be unusable without it.

|                                      | **Traditional OSS Projects**                                    | **AMPEL Platform**                                                                                                                                                        |
| ------------------------------------ | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Usage**                            | Software outside of patient care, research-only software        | Software within patient care                                                                                                                                              |
| **Algorithms**                       | Isolated algorithms (typically biased toward research datasets) | Ready-to-use algorithms based on real routine clinical data                                                                                                               |
| **Documentation**                    | Technical documentation                                         | - Technical documentation<br><br>- Medical device documentation  <br><br>- Regulatory guide for in-house medical device software  <br><br>- Wiki for studies and evidence |
| **Technology Readiness Level (TRL)** | 1–7 out of 9 (no routine care)                                  | 9 out of 9                                                                                                                                                                |
| **Application**                      | Rare (legal gray area for individual use)                       | Day-to-day clinical use                                                                                                                                                   |
| **Effort**                           | Low-high                                                        | High (defined parts must be programmed in-house)                                                                                                                          |
| **Governance**                       | Project-bound / Voluntary                                       | Institutionalized via university hospital department                                                                                                                      |

## I'm new to open source. What role can I play?

The interdisciplinary AMPEL platform thrives on participation. You don't need to know how to code to contribute to development. 

**Developer**
We welcome every contribution! However, because we must maintain strict alignment with our Quality Management System (QMS), such as writing tests and documenting them as required by regulations, delays or pull request rejections may occur. There is currently no established best practice for combining open-source software with the MDR-regulated domain, but we are actively building one!

**Researcher**
Our goal is to close the evidence gap in Clinical Decision Support (CDS). Naturally, we can only achieve this with researchers like you! Your involvement can take many forms depending on your expertise. You can externally validate existing algorithms or develop new ones for integration into the platform. Research beyond classic CDS studies (ideally focusing on patient outcomes) can also strengthen the AMPEL ecosystem. Key examples include usability or interoperability studies, as well as systematic reviews on relevant clinical topics. 

**Regulatory Expert**
Nearly half of the AMPEL platform is is regulatory framework. Your support in refining and optimizing our documentation can play a major role in driving this open-source project toward success. The GitHub Issues section is the best starting point for your contributions. Feel free to drop a comment there on anything that can be improved from your perspective. But of course, you can also send us an email (see below)!

**Clinician**
Your feedback helps us continuously improve the AMPEL platform. Every issue helps us build our software in a way that offers real clinical value - so that "support" isn't just part of the title. The more detailed your description of what you would like to change, the better!

Feel free to reach out to us in GitHub or by email : ampel@medizin.uni-leipzig.de