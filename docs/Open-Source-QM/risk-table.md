# Risk Analysis Table - LAMPE

|||
|---|---|
|**Template ID**|*local ID*|
|**Template Version**|_Version_|
|**Approval**|_Author name_|

Scope: *Hospital Name*  
Product name: LAMPE  
Version: 1.0

# 1. Definitions

| Term | Definition |
|---|---|
| Process risks | Risks related to management and control of a process, e.g. staff shortages, tight schedules, changing requirements, etc. |
| User session | A specific operating mode, from all possible ways to operate the product, to ensure intended use |
| Hazard | Potential source of harm |
| Hazardous situation | Circumstance in which people, property, or the environment are exposed to one or more hazards |
| Harm | Injury or damage to the health of people, or damage to property or the environment |
| Severity | Measure of the possible consequences of a hazard; see risk acceptance matrix |
| Risk control measures | Measures that can influence the hazard, hazardous situation, harm, or severity |

# 2. Product Risk Acceptance Matrix

| Probability / Severity | S1 Negligible | S2 Minor | S3 Serious | S4 Critical | S5 Catastrophic |
| ---------------------- | ------------- | -------- | ---------- | ----------- | --------------- |
| P1 Very rare           | AL1           | AL1      | AL1        | AL1         | AL2             |
| P2 Rare                | AL1           | AL1      | AL1        | AL1         | AL2             |
| P3 Occasional          | AL1           | AL1      | AL1        | AL2         | AL2             |
| P4 Frequent            | AL1           | AL1      | AL2        | AL2         | AL2             |
| P5 Very frequent       | AL1           | AL1      | AL2        | AL2         | AL2             |

| Probability      | Occurrence of risk-related hazards across n different user sessions                |
| ---------------- | ---------------------------------------------------------------------------------- |
| P1 Very rare     | 0.0001% < n < 0.01%; at least every 1,000,000th and at most every 10,000th session |
| P2 Rare          | n < 0.5%; at most every 200th session                                              |
| P3 Occasional    | n < 2%; at most every 50th session                                                 |
| P4 Frequent      | n < 10%; at most every 10th session                                                |
| P5 Very frequent | n > 10%; every 9th session or more                                                 |

| Severity | Effects of hazards on users, patients, the product, and/or peripherals |
|---|---|
| S1 Negligible | Only minor inconvenience for users or patients, no influence on product functionality, no noteworthy harm to users or patients |
| S2 Minor | Noticeable inconvenience for users or patients; reversible harm to users or patients without need for medical assistance |
| S3 Serious | Noticeable negative influence or loss of core functionality; reversible harm to users or patients requiring medical assistance |
| S4 Critical | Leads to interruption of the user session and not fully reversible or life-threatening harm to users or patients requiring medical treatment |
| S5 Catastrophic | Irreversible damage to the product, irreversible severe data loss, irreversible injury or death of users or patients |

| Risk acceptance level | Description | ID |
|---|---|---|
| Acceptable | Risk can be further minimized but is not blocking; it does not prevent deployment or continued operation of the product. | AL1 |
| Not acceptable | Risk must be further minimized and is blocking; it prevents deployment or continued operation. | AL2 |

# 3. Process Risk Acceptance Matrix

| Probability / Severity | S1 Negligible | S2 Minor | S3 Serious | S4 Critical | S5 Catastrophic |
|---|---|---|---|---|---|
| P1 Very rare | AL1 | AL1 | AL1 | AL1 | AL2 |
| P2 Rare | AL1 | AL1 | AL1 | AL1 | AL2 |
| P3 Occasional | AL1 | AL1 | AL1 | AL2 | AL2 |
| P4 Frequent | AL1 | AL1 | AL2 | AL2 | AL2 |
| P5 Very frequent | AL1 | AL1 | AL2 | AL2 | AL2 |

| Probability | Occurrence |
|---|---|
| P1 Very rare | n <= 1x/year; at most once per year |
| P2 Rare | n <= 1x/month; at most once per month |
| P3 Occasional | n <= 1x/week; at most once per week |
| P4 Frequent | n <= 1x/day; at most once per day |
| P5 Very frequent | n > 1x/day; more than once per day |

| Severity | Effects of hazards on process resource needs |
|---|---|
| S1 Negligible | Process can continue without additional resource needs |
| S2 Minor | Process can continue by reallocating existing planned resources |
| S3 Serious | Process can continue only by using additional resources |
| S4 Critical | Process can continue only by using additional resources that affect other processes |
| S5 Catastrophic | Process can continue only with unacceptable additional resources |

| Risk acceptance level | Description | ID |
|---|---|---|
| Acceptable | Risk can be further minimized but is not blocking; it does not prevent deployment or continued operation of the product. | AL1 |
| Not acceptable | Risk must be further minimized and is blocking; it prevents deployment or continued operation. | AL2 |

# 4. Product Hazard Analysis

The rows in all three tables of each subsection correspond to the same risk entry.

## 4.1 PHA_PD_R001.1 — Examination Result

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R001.1 | Examination result | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education on the use of diagnostic tests | S1 Negligible | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Recipient management: access to the user interface and receipt of emails only for designated user groups<br>Training measures<br>Telephone consultation | S1 Negligible | P2 Rare | Acceptable | Acceptable |

## 4.2 PHA_PD_R001.2 — Examination Result

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R001.2 | Examination result | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Minor harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education on the use of diagnostic tests | S2 Minor | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Recipient management: access to the user interface and receipt of emails only for designated user groups<br>Training measures<br>Telephone consultation | S2 Minor | P2 Rare | Acceptable | Acceptable |

## 4.3 PHA_PD_R001.3 — Examination Result

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R001.3 | Examination result | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Serious harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education on the use of diagnostic tests | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Recipient management: access to the user interface and receipt of emails only for designated user groups<br>Training measures<br>Telephone consultation | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 4.4 PHA_PD_R001.4 — Examination Result

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R001.4 | Examination result | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Critical harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education on the use of diagnostic tests | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Recipient management: access to the user interface and receipt of emails only for designated user groups<br>Training measures<br>Telephone consultation | S4 Critical | P1 Very rare | Acceptable | Acceptable |

## 4.5 PHA_PD_R002.1 — Patient Identity/Information

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R002.1 | Patient identity/information | Due to incorrect information, medical staff assign the result to the wrong patient, who consequently undergoes incorrect treatment and/or diagnostic procedures. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education regarding repeated identity checks | S1 Negligible | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Permanent and prominent display of the patient's identity in every user-interface window | S1 Negligible | P2 Rare | Acceptable | Acceptable |

## 4.6 PHA_PD_R002.2 — Patient Identity/Information

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R002.2 | Patient identity/information | Due to incorrect information, medical staff assign the result to the wrong patient, who consequently undergoes incorrect treatment and/or diagnostic procedures. | Minor harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education regarding repeated identity checks | S2 Minor | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Permanent and prominent display of the patient's identity in every user-interface window | S2 Minor | P1 Very rare | Acceptable | Acceptable |

## 4.7 PHA_PD_R002.3 — Patient Identity/Information

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R002.3 | Patient identity/information | Due to incorrect information, medical staff assign the result to the wrong patient, who consequently undergoes incorrect treatment and/or diagnostic procedures. | Serious harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training and education regarding repeated identity checks | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Permanent and prominent display of the patient's identity in every user-interface window | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 4.8 PHA_PD_R003.1 — Isolated Software Failure

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R003.1 | Isolated software failure | Standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Software-based decision support is always provided in addition to standard care. In the event of a failure, care can therefore continue in accordance with standard care. | S1 Negligible | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Optimization of maintenance windows<br>Support by email and telephone | S1 Negligible | P2 Rare | Acceptable | Acceptable |

## 4.9 PHA_PD_R003.2 — Isolated Software Failure

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R003.2 | Isolated software failure | Standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Minor harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Software-based decision support is always provided in addition to standard care. In the event of a failure, care can therefore continue in accordance with standard care. | S2 Minor | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Optimization of maintenance windows<br>Support by email and telephone | S2 Minor | P1 Very rare | Acceptable | Acceptable |

## 4.10 PHA_PD_R003.3 — Isolated Software Failure

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R003.3 | Isolated software failure | Standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Serious harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Software-based decision support is always provided in addition to standard care. In the event of a failure, care can therefore continue in accordance with standard care. | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Optimization of maintenance windows<br>Support by email and telephone | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 4.11 PHA_PD_R004.1 — Performance

| ID            | Hazard      | Hazardous Situation                                                                                                                                                                                               | Harm                                              |
| ------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- |
| PHA_PD_R004.1 | Performance | Excessive unnecessary or false-positive notification cause alert fatigue. Medical staff pay less attention to notifications, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Selection of scoring algorithms with a more specific, less sensitive configuration<br>Feedback option for continuous improvement | S1 Negligible | P2 Rare | Acceptable | Acceptable |

## 4.12 PHA_PD_R004.2 — Performance

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R004.2 | Performance | Excessive unnecessary or false-positive alerts cause alert fatigue. Medical staff pay less attention to notifications, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Minor harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S2 Minor | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Selection of scoring algorithms with a more specific, less sensitive configuration<br>Feedback option for continuous improvement | S2 Minor | P2 Rare | Acceptable | Acceptable |

## 4.13 PHA_PD_R004.3 — Performance

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R004.3 | Performance | Excessive unnecessary or false-positive alerts cause alert fatigue. Medical staff pay less attention to notifications, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Serious harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Selection of scoring algorithms with a more specific, less sensitive configuration<br>Feedback option for continuous improvement | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 4.14 PHA_PD_R005.1 — User Error

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R005.1 | User error | Incorrect use of the software causes misunderstandings or non-use. Medical staff interpret the notifications incorrectly, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training measures on the use of digital software and AI-based decision support | S1 Negligible | P4 Frequent | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Users cannot influence software results; results cannot be changed or deleted<br>Training measures<br>Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Telephone consultation | S1 Negligible | P3 Occasional | Acceptable | Acceptable |

## 4.15 PHA_PD_R005.2 — User Error

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R005.2 | User error | Incorrect use of the software causes misunderstandings or non-use. Medical staff interpret the notifications incorrectly, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Minor harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training measures on the use of digital software and AI-based decision support | S2 Minor | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Users cannot influence software results; results cannot be changed or deleted<br>Training measures<br>Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Telephone consultation | S2 Minor | P2 Rare | Acceptable | Acceptable |

## 4.16 PHA_PD_R005.3 — User Error

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R005.3 | User error | Incorrect use of the software causes misunderstandings or non-use. Medical staff interpret the notifications incorrectly, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Serious harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training measures on the use of digital software and AI-based decision support | S3 Serious | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Users cannot influence software results; results cannot be changed or deleted<br>Training measures<br>Disclaimer warning that notifications must always be assessed in the overall clinical context<br>Telephone consultation | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 4.17 PHA_PD_R005.4 — User Error

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R005.4 | User error | Incorrect use of the software causes misunderstandings or non-use. Medical staff interpret the notifications incorrectly, resulting in suboptimal diagnosis or treatment or in complications being overlooked. | Critical harm due to an unjustified diagnostic intervention, incorrect treatment, or progression of the disease |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| General training measures on the use of digital software and AI-based decision support | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures                                                                                                                                                                                                 | Severity    | Probability  | Acceptance | Final Evaluation |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------ | ---------- | ---------------- |
| Users cannot influence software results; results cannot be changed or deleted<br>Training measures<br>Disclaimer that notifications must always be assessed in the overall clinical context<br>Telephone consultation | S4 Critical | P1 Very rare | Acceptable | Acceptable       |

## 4.18 PHA_PD_R006.1 — Data Confidentiality

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PD_R006.1 | Data confidentiality | Generated notifications or raw clinical data reach unauthorized persons. | Impairment of privacy |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Certification as an operator of critical infrastructure (KRITIS) | S2 Minor | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Isolated automated processing through sandboxing on a virtual machine in the *local hospital network*<br>Recipient management: access to the user interface and receipt of emails only for designated user groups | S2 Minor | P1 Very rare | Acceptable | Acceptable |

# 5. Process Hazard Analysis

The rows in all three tables of each subsection correspond to the same risk entry.

## 5.1 PHA_PZ_R001.1 — Data Availability

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R001.1 | Data availability | Required clinical data may temporarily become unavailable. Software components cannot be tested or validated. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Central backup strategy<br>Certification as an operator of critical infrastructure (KRITIS) | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| None specified | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 5.2 PHA_PZ_R002.1 — Personnel

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R002.1 | Personnel | Due to staff shortages, required development activities can only be completed with delays. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Permanent employment contracts extending over several years | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Every task within the team can be performed by at least two employees through redundant team staffing | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 5.3 PHA_PZ_R003.1 — Personnel

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R003.1 | Personnel | A lack of expertise at the technical, regulatory, and medical levels leads to delayed or defective development. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| A large organization with more than 6,000 employees enables the involvement of diverse expertise | S3 Serious | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Continuous training and professional development | S3 Serious | P2 Rare | Acceptable | Acceptable |

## 5.4 PHA_PZ_R004.1 — Material/Hardware

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R004.1 | Material/hardware | Limited hardware resources delay or prevent development activities. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S2 Minor | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| None specified | S2 Minor | P3 Occasional | Acceptable | Acceptable |

## 5.5 PHA_PZ_R005.1 — Software Libraries

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R005.1 | Software libraries | No suitable open-source libraries are available for planned or unforeseen requirements. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| None specified | S4 Critical | P1 Very rare | Acceptable | Acceptable |

## 5.6 PHA_PZ_R006.1 — Funding

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R006.1 | Funding | Funding for software development can no longer be fully secured, resulting in staff layoffs. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Funding of the project independently of third-party-funded projects | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 5.7 PHA_PZ_R006.2 — Funding

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R006.2 | Funding | Funding for software development can no longer be secured at all, resulting in staff layoffs. | Development stop |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S5 Catastrophic | P1 Very rare | Not acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Funding of the project independently of third-party-funded projects | S4 Critical | P1 Very rare | Acceptable | Acceptable |

## 5.8 PHA_PZ_R007.1 — Communication

| ID | Hazard | Hazardous Situation | Harm |
|---|---|---|---|
| PHA_PZ_R007.1 | Communication | Misunderstandings occur during collaboration. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S2 Minor | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Shared infrastructure for exchanging information<br>Consistent use of German as the team language | S2 Minor | P2 Rare | Acceptable | Acceptable |

# 6. Product Failure Mode and Effects Analysis (FMEA)

The rows in all three tables of each subsection correspond to the same FMEA entry.

Components considered: data-source, data-stream, ETL, scoring, result, frontend, and notification components.

For clarity, harms with a higher severity that already have an occurrence probability of P1 (very rare) are omitted for each hazardous situation. The maximum identified severity of all assessed harms with an occurrence probability of P1 is S3.

## 6.1 FMEA_PD_R001.1 — Frontend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R001.1 | Frontend component | Maintenance of the service causes the user interface to become unavailable. | General standard care remains possible, as does use of the software through the remaining communication channels, such as email. However, medical staff cannot access decision-support information for certain scoring algorithms, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Coordinated maintenance windows during which maintenance work on the product is performed | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.2 FMEA_PD_R002.1 — Frontend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R002.1 | Frontend component | Incorrect assignment of a medical case and patient in the HIS cannot be verified within the product, causing patient-identifying information to be displayed incorrectly to the user. | Based on incorrect information, medical staff assign the result to the wrong patient, who consequently receives incorrect treatment and/or diagnostic procedures. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Option to cancel the medical case in the HIS | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Support contact option<br><br>Note: No additional relevant potential failure modes were identified for the incorrect display or processing of patient-identifying data within the product. | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.3 FMEA_PD_R003.1 — Backend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R003.1 | Backend component | Failure of the SMTP relay causes email notifications to fail. | General standard care remains possible, as does use of the software through the remaining communication channels, such as the user interface. However, medical staff cannot access decision-support information for certain scoring algorithms, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated restart of the SMTP relay component | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.4 FMEA_PD_R004.1 — Backend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R004.1 | Backend component | During maintenance of the *local target email server*, the target server is unavailable. | Standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Inclusion in the information chain for maintenance processes and scheduling of the product's own maintenance immediately afterward<br>Queue for outgoing emails as part of the SMTP server | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.5 FMEA_PD_R005.1 — Scoring Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R005.1 | Scoring component | An implementation error in the scoring component produces incorrect scoring-algorithm results. | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated tests, including validation of the scoring system | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.6 FMEA_PD_R006.1 — Scoring Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R006.1 | Scoring component | Maintenance of the scoring service causes the system to become unavailable. | General standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Inclusion in the information chain for maintenance processes and scheduling of the product's own maintenance immediately afterward | S1 Negligible | P2 Rare | Acceptable | Acceptable |

## 6.7 FMEA_PD_R007.1 — Backend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R007.1 | Backend component | An implementation error produces incorrect scoring-algorithm results. | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated tests | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.8 FMEA_PD_R008.1 — Backend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R008.1 | Backend component | Maintenance of the service causes the system to become unavailable. | General standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Inclusion in the information chain for maintenance processes and scheduling of the product's own maintenance immediately afterward | S1 Negligible | P2 Rare | Acceptable | Acceptable |

## 6.9 FMEA_PD_R009.1 — Backend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R009.1 | Backend component | Connection problems with the data-stream component cause a partial system failure. | New results are no longer taken into account. Medical staff see only the last state before the system failure. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated reconnection attempts using exponential backoff | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.10 FMEA_PD_R010.1 — Backend Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R010.1 | Backend component | Connection problems with the database cause the system to become unavailable. | Medical staff cannot access any decision-support information. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated reconnection attempts using exponential backoff<br>Automated alerting if the database connection is interrupted | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.11 FMEA_PD_R011.1 — ETL Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R011.1 | ETL component | An implementation error produces incorrect scoring-algorithm results. | Medical staff receive an incorrect result and consequently decide on an incorrect diagnosis and/or treatment. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated tests | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.12 FMEA_PD_R012.1 — ETL Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R012.1 | ETL component | The input format deviates from the standard, causing data to be ignored. | Standard care remains possible. Medical staff cannot access decision-support information, or can access it only after a delay. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Specification of input formats for `ETL_PAT`, `ETL_LAB`, `ETL_PROZ`, and `ETL_FALL` | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.13 FMEA_PD_R013.1 — ETL Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R013.1 | ETL component | Connection problems with the data-stream component cause a partial system failure. | New results are no longer taken into account. Medical staff see only the last state before the system failure. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated reconnection attempts using exponential backoff | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

## 6.14 FMEA_PD_R014.1 — Scoring Component

| ID | Element (Product Component) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PD_R014.1 | Scoring component | Connection problems with the data-stream component cause a partial system failure. | New results are no longer taken into account. Medical staff see only the last state before the system failure. This may result in suboptimal diagnosis or treatment, overlooked complications, and general uncertainty. | Delays in treatment and prolonged hospitalization |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S1 Negligible | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Automated reconnection attempts using exponential backoff | S1 Negligible | P1 Very rare | Acceptable | Acceptable |

# 7. Process Failure Mode and Effects Analysis (FMEA)

The rows in all three tables of each subsection correspond to the same FMEA entry.

## 7.1 FMEA_PZ_R001.1 — Product Planning

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R001.1 | Product planning | The planned resource requirement after product planning partly exceeds the initial cost estimate, so some costs cannot be covered. | Funding for software development can no longer be fully secured. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Existing experience from the preceding project | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Funding of the project independently of third-party-funded projects | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 7.2 FMEA_PZ_R001.2 — Product Planning

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R001.2 | Product planning | The planned resource requirement after product planning significantly exceeds the initial cost estimate, so the costs cannot be covered. | Funding for software development cannot be secured sufficiently. | Development stop |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Existing experience from the preceding project | S5 Catastrophic | P1 Very rare | Not acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Funding of the project independently of third-party-funded projects | S4 Critical | P1 Very rare | Acceptable | Acceptable |

## 7.3 FMEA_PZ_R002.1 — Product Planning

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R002.1 | Product planning | Required expertise is missing, so product-planning activities cannot be planned or estimated. | A lack of expertise at the technical, regulatory, and medical levels leads to delayed or defective development. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| A team with the required expertise already exists from the preceding project | S3 Serious | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Continuous training and professional development | S3 Serious | P2 Rare | Acceptable | Acceptable |

## 7.4 FMEA_PZ_R003.1 — Stakeholder Requirements

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R003.1 | Stakeholder requirements | Requirements are too extensive and/or too divergent, making it difficult to define common ground and resulting in unrealistic expectations. | The requirements cannot be implemented. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Existing experience from the preceding project with the same stakeholders | S2 Minor | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Multiple meetings in different group compositions with a focus on the objectives | S2 Minor | P1 Very rare | Acceptable | Acceptable |

## 7.5 FMEA_PZ_R004.1 — System Requirements

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R004.1 | System requirements | System requirements are not communicated adequately between the project team and hospital IT, resulting in incorrect requirements. | Misunderstandings occur during collaboration. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Existing experience from the preceding project | S2 Minor | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Shared infrastructure for exchanging information<br>Consistent use of German as the team language | S2 Minor | P2 Rare | Acceptable | Acceptable |

## 7.6 FMEA_PZ_R005.1 — Architecture and Design

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R005.1 | Architecture and design | Requirements depend on specific libraries that cannot be identified and configured to the required extent, so software components must be developed from scratch. | No suitable open-source software libraries are available. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Previous experience with similar software and libraries already in use | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Recruitment of an additional developer with further open-source expertise | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 7.7 FMEA_PZ_R006.1 — Implementation

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R006.1 | Implementation | Implementation requires more time and/or personnel than planned, increasing costs so that some costs can no longer be covered. | Funding for software development can no longer be fully secured. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S4 Critical | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Funding of the project independently of third-party-funded projects<br>Planning the funding requirement for a further three years at the start of development | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 7.8 FMEA_PZ_R006.2 — Implementation

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R006.2 | Implementation | Implementation requires more time and/or personnel than planned, increasing costs so that the overall costs can no longer be covered. | Funding for software development cannot be secured sufficiently. | Development stop |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| None specified | S5 Catastrophic | P1 Very rare | Not acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Funding of the project independently of third-party-funded projects<br>Planning the funding requirement for a further three years at the start of development | S4 Critical | P1 Very rare | Acceptable | Acceptable |

## 7.9 FMEA_PZ_R007.1 — Implementation

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R007.1 | Implementation | A software developer resigns or becomes unavailable due to illness, resulting in a staff shortage. | Due to the staff shortage, required development activities can only be completed with delays. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Permanent employment contracts extending over several years | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Every task within the team can be performed by at least two employees through redundant team staffing | S3 Serious | P1 Very rare | Acceptable | Acceptable |

## 7.10 FMEA_PZ_R008.1 — Implementation

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R008.1 | Implementation | Hardware-resource requirements are higher than estimated, or fewer resources are available than planned, requiring new hardware to be procured. | Limited hardware resources delay or prevent development activities. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Existing hospital IT infrastructure, such as standard PCs, can be used | S2 Minor | P3 Occasional | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Early provisioning of the required virtual machines<br>Procurement of additional laptops to improve failure resilience and performance | S2 Minor | P2 Rare | Acceptable | Acceptable |

## 7.11 FMEA_PZ_R009.1 — Unit, Integration, System, and Acceptance Tests

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R009.1 | Unit, integration, system, and acceptance tests | Required test data cannot be made available, so some software components cannot be tested satisfactorily. | Tests cannot be performed. | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Central backup strategy<br>Certification as an operator of critical infrastructure (KRITIS)<br>Existing datasets from the preceding project | S3 Serious | P1 Very rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Creation of a test dataset at the start of the development of each scoring algorithm | S2 Minor | P1 Very rare | Acceptable | Acceptable |

## 7.12 FMEA_PZ_R009.2 — Unit, Integration, System, and Acceptance Tests

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R009.2 | Unit, integration, system, and acceptance tests | Required test data cannot be made available, so software components cannot be tested adequately. | Tests cannot be performed. | Development stop |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| Central backup strategy<br>Certification as an operator of critical infrastructure (KRITIS)<br>Existing datasets from the preceding project | S5 Catastrophic | P1 Very rare | Not acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Creation of a test dataset at the start of the development of each scoring algorithm | S4 Critical | P1 Very rare | Acceptable | Acceptable |

## 7.13 FMEA_PZ_R010.1 — Product Release

| ID | Element (Process Step) | Potential Failure Mode | Hazardous Situation | Harm |
|---|---|---|---|---|
| FMEA_PZ_R010.1 | Product release | Risks cannot be reduced sufficiently during development, so the final risk report identifies risks that are too high relative to the expected benefit and the product cannot be released in its current form. | Insufficient risk mitigation | Development delay |

| Risk Control Measures (Already Implemented) | Severity | Probability | Acceptance |
|---|---|---|---|
| The product has a comparatively very low overall risk from the outset | S3 Serious | P2 Rare | Acceptable |

| Risk Control Measures | Severity | Probability | Acceptance | Final Evaluation |
|---|---|---|---|---|
| Iterative risk assessment throughout the development process | S3 Serious | P1 Very rare | Acceptable | Acceptable |

# 8. Document Metadata

| Field | Value |
|---|---|
| Local ID | *local ID* |
| Revision | *local revision* |
| Approver | _Project lead name_ |
| Created from | *local risk-analysis-table template*, *local revision* |
