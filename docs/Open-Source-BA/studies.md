# Studies

## Why do studies on patient outcomes require a certified medical device?

To achieve patient outcomes, a CDSS must be used in patient care. Consequently, the CDSS automatically meets the [definition of a medical device](mdr-medical-devices.md) and falls under the scope of the MDR.

This well-known requirement has led to a far less recognized consequence: there is remarkably little evidence on how AI medical devices impact patient outcomes. That is because every "workaround study design" shares the same limitation: they cannot evaluate the impact of a CDSS in patient care, leaving them restricted to measuring theoretical proxies as endpoints (e.g., hypothetical case studies with healthcare professionals).

## What is a clinical evaluation and what is a clinical investigation under the MDR?

Both are established, defined terms under the MDR. A "clinical evaluation" involves analyzing existing data or literature and is always required (even if it is not reviewed by a notified body for Class I devices). A "clinical investigation" refers to prospective studies that gather product-specific data. Requirements vary depending on the risk class:

| **Risk Class**    | **Clinical Investigation Required?** |
| ----------------- | ------------------------------------ |
| **Class I**       | No                                   |
| **Class IIa/IIb** | Sometimes                            |
| **Class III**     | Always                               |

For a CDSS, the clinical evaluation without a clinical investigation is usually sufficient. Furthermore, requirements for the clinical evaluation of in-house medical devices are less extensive and formal. The guidance document [MDCG 2023-1](https://health.ec.europa.eu/latest-updates/mdcg-2023-1-guidance-health-institution-exception-under-article-55-regulation-eu-2017745-and-2023-01-10_en) outlines the following requirements for demonstrating the clinical performance of in-house devices:

> "Performance data: according to Annex I of the IVDR/MDR, devices shall be designed and manufactured in such a way that they are suitable with regard to the performance they are intended to achieve, taking account of the generally acknowledged state of the art. A description of, where applicable, the analytical and the clinical performance data supporting the intended purpose should be provided."

Validating a CDS model with retrospective data and reporting statistical metrics (e.g., AUROC, sensitivity, specificity, PPV, NPV) is equivalent to the clinical evaluation standard for comparable CE-marked products.

## What needs to be considered for interventional studies with in-house medical devices under the MDR?

It must be checked if the study is considered a "clinical investigation" under the MDR. If sufficient "analytical and clinical performance data supporting the intended purpose" is missing, the medical device is still "in development." In this case, any interventional study conducted with the device qualifies as a "clinical investigation." However, if sufficient data is already available (meaning the in-house medical device has reached the stage where it can be used in routine patient care) the classification depends on whether the device is being used within or outside its intended purpose:

| In-house medical devices                      | Clinical investigation under MDR |
| --------------------------------------------- | -------------------------------- |
| Interventional study in development           | yes                              |
| Interventional study outside intended purpose | yes                              |
| Interventional study within intended purpose  | no                               |
*Categorization of interventional studies with in-house medical devices as described in [MDCG 2025-5](https://health.ec.europa.eu/document/download/f22f559b-dee5-43b4-9595-3ccdcca9f7ad_en?filename=mdcg_2025-5_en.pdf).*

For any interventional study on the patient outcomes of an in-house CDSS, which is "finalized" and used within its intended purpose, the regulatory framework for a "clinical investigation" under the MDR no longer applies. If sufficient (retrospective) data is already available for the clinical evaluation, any further prospective evaluation conducted within its intended purpose falls outside the scope of a "clinical investigation". This significantly lowers regulatory hurdles, enabling a fast-track process for interventional studies with in-house medical devices.

## What types of study designs exist, and how do their requirements vary?

In summary, possible study designs with clinical decision support systems can be divided into four groups:

|                   | No change in patient care                               | Change in patient care                        |
| ----------------- | ------------------------------------------------------- | --------------------------------------------- |
| **Retrospective** | Retrospective observational<br>(e.g. model development) | Before-and-after<br>(e.g. PMCF investigation) |
| **Prospective**   | Prospective observational<br>(e.g. silent testing)      | Interventional randomized<br>(e.g. RCT / PCT) |
*Categorization of potential studies in clinical decision support. PMCF: Post-Market Clinical Follow-up; RCT: Randomized Controlled Trial; PCT: Pragmatic Clinical Trial

The following simplified table provides you an overview of the German requirements for each study design. Similar regulations apply across Europe.

|                                                         | Retrospective observational | Prospective observational | Before-and-after | Interventional randomized (in-house MD) | "Clinical investigation" under MDR |
| ------------------------------------------------------- | --------------------------- | ------------------------- | ---------------- | --------------------------------------- | ---------------------------------- |
| **Level of evidence**                                   | low                         | medium                    | high             | gold standard                           | variable                           |
| **Medical device software required**                    | no                          | no                        | yes              | yes                                     | yes                                |
| **Patient consent required**                            | no                          | yes¹                      | no               | yes¹                                    | yes                                |
| **Patient insurance required**                          | no                          | no                        | no               | no²                                     | yes²                               |
| **Permission of national competent authority required** | no                          | no                        | no               | no                                      | yes³                               |
*Overview of evidence levels and requirements by study design. A German example for an national competent authority is the "BfArM".¹Exceptions exist but require proving that consent procedures impose undue burden or compromise the scientific validity. ²A patient insurance is not required for "other clinical investigations" (Art. 82, MDR), provided that the medical device is used within its intended purpose and without any additional invasive or burdensome procedures. If the same conditions exist for a study with an in-house medical device, it can accordingly be assumed that the same [exception](https://www.gesetze-im-internet.de/mpdg/__26.html) applies. ³An analog [exception](https://www.gesetze-im-internet.de/mpdg/__47.html) also applies here.*

For all study designs, early consultation with the ethics committee is recommended. Ultimately, the committee determines whether ethical approval is required (or a certificate of "no objection" is recommended), as well as if and how informed patient consent must be obtained.

## Is a patient insurance required for interventional randomized studies with a in-house medical device within its intended purpose?

Within the domain of clinical decision support, interventions generally involve minimal risk. A concept that ethics committees often struggle to assess. Here, the MDR serves as an effective benchmark. Given its rigorous approach to risk assessment, an MDR determination that a device does not pose sufficient risk to warrant measures such as mandatory patient insurance provides ethics committees with a widely recognized regulatory foundation for their evaluation.

Let's take a closer look into the MDR: It must be assumed that the requirements for a interventional study with an in-house medical device within its intended purpose and without any additional invasive or burdensome procedures will not exceed those set for "other clinical investigation" with a medical device that is used within its intended purpose and without any additional invasive or burdensome procedures. Following the assessment for comparable studies in the MDR a patient insurance should not be required here.

But wait, what is considered "additional burdensome or invasive procedures"? Fortunately, this have been clarified. The most important point is that these procedures are "additional to those performed under the normal conditions of use of the device" ([MDCG 2021-6](https://health.ec.europa.eu/system/files/2023-12/mdcg_2021-6_en.pdf)). Therefore, if an invasive measure is already part of the device's standard usage (e.g., a diabetes alert triggering an insulin injection), and you simply randomize which patients receive the medical device (e.g. alerts) and which do not, this leads to no "additional burdensome or invasive procedures". 

However, national regulations can differ. Early alignment with the ethics committee is key!
