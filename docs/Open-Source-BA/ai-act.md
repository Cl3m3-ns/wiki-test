# AI Act

The MDR does not differentiate based on AI per se; it focuses solely on risk. However, if an system falls under the definition of "AI", the AI Act's general requirements are translated into the MDR context. This means a non-medical-device AI has to meet fewer requirements than a medical device AI. That's the bad news. The good news is that the additional requirements are manageable, and the best news is that, as it currently stands (Caution: this is actively evolving!), in-house medical device software is only classified as limited-risk AI.

## Definition of AI
Bad news for any CDS scientist looking here for the reassuring answer that their algorithm isn't AI under the AI Act. For the AI Act, practically everything used in the field of CDS qualifies as AI. When pushed, regulators can trace even strictly rule-based systems back to a 'knowledge-based approach' (admittedly open to argument, but you should come well-prepared for that discussion).

Article 3 (1) of the [AI Act](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng) defines an AI system as follows:
> “‘AI system’ means a machine-based system that is designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment, and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments;”

Recital 12 explains the scope limitations used and clarifies that the Regulation applies both to data-trained machine learning systems and to symbolic AI systems (e.g. if-then rule-based systems which are grounded in deterministic medical rules):

> The techniques that enable inference while building an AI system include machine learning approaches that learn from data how to achieve certain objectives, and logic- and knowledge-based approaches that infer from encoded knowledge or symbolic representation of the task to be solved.

For those who want to dive deeper into this, the European Commission has published an [additional guideline (20241689)](https://ec.europa.eu/newsroom/dae/redirection/document/112455).

## Additional requirements
### High risk AI
*The AMPEL platform is currently only designed as a 'limited-risk AI'. However, based on various considerations, we aim to meet the documentation standard for a high-risk AI in the near future.*

On top of the standard MDR the AI Act requires: 
- A data management and data governance process (bias assessment!)
- Traceability of product decisions during operation​ (logs/records)
- Transparency requirements​ (don't confuse this with open source transparency, we're talking about little notes that there is 'AI included')
- Human oversight (e.g. human-in-the-loop decisions)

| **AI Act (Supplement to MDR)**                                                               | **AMPEL Platform (first assessment)**                                                                                                                                |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Bias:** Data management and data governance                                                | Additional documentation may be required (data use and processing are already covered in the IT security concept and DPIA - additional measures potentially needed?) |
| **Logs:** Record-keeping obligations for the traceability of product decisions in operation  | Already captured via stakeholder requirements                                                                                                                        |
| **Transparency:** Requirements and provision of relevant information for deployers and users | Already met for in-house medical devices + notice regarding AI in instructions for use (IFU)                                                                         |
| **Human oversight** over AI systems (e.g., stop button)                                      | Already in place - documentation may need to be expanded                                                                                                             |
| **Cybersecurity** for AI-specific vulnerabilities (data/model poisoning)                     | Technically possible in future algorithms. Additional documentation needed.                                                                                          |

### Limited risk AI
A note should be included stating that the product involves AI. This can be included in the instructions for use (IFU). That's all.


## Risk categorization of in-house medical devices

As described in [MDCG 2025-6](https://health.ec.europa.eu/latest-updates/mdcg-2025-6-faq-interplay-between-medical-devices-regulation-vitro-diagnostic-medical-devices-2025-06-19_en), in-house medical devices are classified as limited-risk AI systems (and NOT as high-risk AI systems):

> - A MDAI is considered a high-risk AI system under Article 6(1) AIA if it meets both of the following conditions:
> 	1. the MDAI is a safety component or the AI system is itself a medical device and
> 	2. the MDAI **is subject to a third-party conformity assessment by a notified body** in accordance with the MDR/IVDR.
> - Question 35: Should ‘in-house’ MDAI manufactured and used only within health institutions be classified as a high-risk AI system?
> 	- As stated in Question 2 of this FAQ, one of the conditions to determine if an AI- system is high-risk is that the MDAI must be subject to a third-party conformity assessment by a notified body designated under the MDR and or IVDR. Consequently, MDR/IVDR in-house developed medical devices and in vitro diagnostic medical devices manufactured and used only within health institutions established in the Union are not subject to third-party conformity assessment, provided that the conditions of Article 5(5) are met. Therefore, **such a MDAI is not classified as a high-risk AI system**. Nevertheless, other AIA obligations apply including but not limited to prohibited practices.