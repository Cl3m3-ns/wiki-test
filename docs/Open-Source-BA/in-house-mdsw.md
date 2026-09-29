# In-house medical device software (MDSW)

## What are in-house and CE-marked medical devices allowed to be used for?

Unlike other products, both can legally be used in patient care. In-house medical devices, however, may only be used within the healthcare facility where they were developed. This could change soon, as the current [MDR/IVDR revision](https://www.europarl.europa.eu/RegData/docs_autres_institutions/commission_europeenne/com/2025/1023/COM_COM(2025)1023_EN.pdf) aims to allow multi-center use as well. Nevertheless, the prohibition on placing them on the market  will remain unaffected (meaning the medical device cannot be sold or given away).

| Usage of medical devices                 | CE-marked | In-house |
| ---------------------------------------- | --------- | -------- |
| Use in patient care                      | yes       | yes      |
| Use in interventional studies            | yes       | yes¹     |
| Use in more than one healthcare facility | yes       | no²      |
| Placing on the market                    | yes       | no       |
*¹ [Less paperwork likely:](studies.md) requirements for a "clinical investigation" under the MDR do not apply provided that the in-house device already complies with all conditions of Article 5(5)*
*² The [current revision](https://www.europarl.europa.eu/RegData/docs_autres_institutions/commission_europeenne/com/2025/1023/COM_COM(2025)1023_EN.pdf) of the MDR/IVDR aims to change this in the future.*

## When am I allowed to develop an in-house medical device?

The in-house medical device exemption under Article 5(5) MDR can be used if the following conditions are met:
1. The device is manufactured and used only within the same legal entity.
2. There is no comparable device in purpose or performance on the market.

#### 1. The device is manufactured and used within the same legal entity.

The original passage in the MDR reads:
> "devices, manufactured and used only within health institutions"
> (...)
> "the devices are not transferred to another legal entity". 

Fortunately, there is guidance document ([MDCG 2023-1](https://health.ec.europa.eu/system/files/2023-01/mdcg_2023-1_en.pdf)) which clarifies (or not) what the MDR understands under the term of "legal entity": 

> Healthcare systems are organised differently in different member states. Therefore, the concept of legal entity can differ. The national competent authority may clarify how legal entity is understood nationally.

Due to these national differences, we can only describe the (likely strict) German interpretation here. According to this, it always comes down to the legally responsible institution. A subsidiary (daughter company) is already a different legal entity. Please note that a university hospital and the university can be two separate legal entities. In these cases, it may be worthwhile to relocate the development department to the university hospital.

#### 2. There is no comparable device in purpose or performance on the market.

The original passage in the MDR reads:
> "the health institution justifies in its documentation that the target patient group's specific needs cannot be met, or cannot be met at the appropriate level of performance by an equivalent device available on the market"

Like so much else here, this basically means you need to put together a document. In this market analysis, the healthcare facility must either demonstrate that there is no device on the market with the same intended purpose, or show that these devices cannot meet the required performance. The market analysis should be updated regularly (e.g., once a year).

*Worth noting:* the [current revision](https://www.europarl.europa.eu/RegData/docs_autres_institutions/commission_europeenne/com/2025/1023/COM_COM(2025)1023_EN.pdf) of MDR/IVDR aims to ease this requirement. The European Commission plans to remove it entirely from the IVDR and to introduce a 10-year transition period under the MDR for existing in-house devices when a comparable device is placed on the market. 

## Which requirements apply for in-house medical devices?

Disclaimer: It feels like we are one of the first to look into this topic more deeply on the MDR side. In detail, many questions are left unanswered (example: officially it is not necessary to define a risk class – but it will be the first thing you are asked by an auditor). It is also important that different levels of effort can be hidden behind one and the same term. Thus, the 'depth' of the same-named documents can be lower for in-house medical devices.

Good news: for in-house medical devices apply only two parts of the MDR: Article 5 (5) and Annex I. What is written in them? First of all, you need an "appropriate quality management system". In other words, a [QMS](quality-management-system.md) that can capture the required documents in both parts of the MDR:

**Article 5 (5):**
- Quality management system
- Market analysis
- Public declaration
- Intended Purpose
- Development plan
- Stakeholder requirements
- System requirements 
- Architecture and design 
- Test plan
- Post-market surveillance

**Annex I (on top):**
- Risk management
- Intended use
- Instructions for use
- SOUP list

An existing hospital-wide QMS can therefore be expanded to include templates for these areas. Companies (manufacturing CE-marked devices) and some institutes (developing early stages of CE-marked devices) use an ISO 13485-certified QMS here. For healthcare facilities manufacturing in-house devices, this additional effort can be avoided.
## What do you mean with "same name - different requirements" for in-house medical devices?

Under the exact same name, the required depth of documentation can differ significantly between in-house and CE-marked medical devices. This is best illustrated by an example. Let us look at the requirements for post-market surveillance: for CE-marked devices, these are comprehensively detailed in Annex III, including its dependencies on Articles 83–86, 88, and Annex XIV. For in-house devices, however, solely the following text passages apply:

>"the health institution reviews experience gained from clinical use of the devices and takes all necessary corrective actions." (MDR Art. 5(5)(h))

and

> "Manufacturers shall (...) maintain a risk management system. (...) Risk management shall be understood as a continuous iterative process throughout the entire lifecycle of a device, requiring regular systematic updating. (...) evaluate the impact of information from the production phase and, in particular, from the post-market surveillance system, on hazards and the frequency of occurrence thereof, on estimates of their associated risks, as well as on the overall risk, benefit-risk ratio and risk acceptability." (MDR Annex I)

A post-market surveillance document is required for both devices. However, the required contents for the in-house version are substantially lower.

## Where do in-house medical devices make things easier?
As mentioned above, in-house devices demand fewer documents (and with less detail) compared to CE-marked devices. This speed up development and allows the developers to focus on what truly matters (e.g. risk management).

A major advantage of in-house devices is that they do not require approval from a notified body (e.g., TÜV). Exempt from this process, in-house developers only need to maintain documentation for a potential audit, saving well over a year. This advantage extends beyond first deployment: while significant changes to the intended purpose of a CE-marked device require resubmission to a notified body, in-house devices avoid this hurdle entirely.

To study the clinical impact of a CDSS on patients, you need a medical device. Currently, there is almost never a commercially available product that already covers the specific intended purpose you wish to study. Even if a suitable commercial manufacturer exists, they must be persuaded to provide their product for the trial (and you will need an agreement on how to handle potential negative outcomes). Consequently, an in-house device is often the only option for such a study.

There is another regulatory advantage that makes things much easier for researchers: if the in-house medical device is developed first and only subsequently evaluated within its intended purpose in an [interventional study](studies.md), it falls outside the heavily regulated framework of a "clinical investigation" under the MDR ([MDCG 2025-5](https://health.ec.europa.eu/document/download/f22f559b-dee5-43b4-9595-3ccdcca9f7ad_en?filename=mdcg_2025-5_en.pdf)). This means the study can be conducted without submitting an application to the national competent authority (in Germany: BfArM), saving a substantial amount of time and effort.

## Are there differences between MDR and IVDR?

Not really. Basically, all questions in this article can be answered in the same way for both regulations. Even the article numbers in the regulations are identical. However, there are a some differences in wording:

| MDR                             | IVDR                                      |
| ------------------------------- | ----------------------------------------- |
| medical device (MD)             | in vitro diagnostic medical device (IVD)  |
| clinical investigation          | interventional clinical performance study |
| clinical evaluation             | performance evaluation                    |
| investigational device          | device for performance study              |
| risk classes (I, IIa, IIb, III) | risk classes (A, B, C, D)                 |

The [current revision](https://www.europarl.europa.eu/RegData/docs_autres_institutions/commission_europeenne/com/2025/1023/COM_COM(2025)1023_EN.pdf) of MDR/IVDR could widen the gap between the two regulations a bit when it comes to in-house devices (providing additional exceptions for in-house IVDs).