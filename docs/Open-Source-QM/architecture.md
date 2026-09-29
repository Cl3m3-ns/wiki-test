# Architecture and Design - LAMPE

|||
|---|---|
|**Template ID**|*local ID*|
|**Template Version**|_Version_|
|**Approval**|_Author name_|

Scope: *Hospital Name*

# 1. Introduction

## 1.1 Product

| Product name | Version |
|---|---|
| LAMPE | 1.0 |

## 1.2 Definitions

| Term | Definition |
|---|---|
| VM | Virtual machine |
| HIS | Hospital information system |
| CDC | Change data capture |
| ETL | Extract, transform, load |
| High priority | Absence of this component would prevent the overall system from functioning. |
| Medium priority | Absence of this component would severely restrict the overall system function. |
| Low priority | Absence of this component would only slightly restrict the overall system function. |
| message | Individual message assigned to a topic in the Apache Kafka stream-processing platform |
| topic | Data stream of a higher-level data category in the Apache Kafka stream-processing platform |

# 2. System Specification

The system consists of six top-level components: data source component, data stream component, ETL component, scoring component, backend component, and frontend component.!
![[architecture.png]]
Figure 1. Global overview of system components in CDSS LAMPE.

## 2.1 Top-Level Components

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| DQ | Data source component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_ES_SS_DB; SyA_NFA_SQ_SL; SyA_NFA_SQ_DD | No | Yes, implemented by subcomponent | DS |

Provision of structured routine data from patient care at *Hospital Name* in source-system format and near real time for further processing in the decision support system.

**Acceptance criteria:** All acceptance criteria of this component's subcomponents are fulfilled.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| DS | Data stream component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_NFA_SQ_SL | No | Yes, implemented by subcomponent |  |

Processing of structured routine data from *Hospital Name* as messages in higher-level data categories (topics). Message order within a patient is ensured by use of identifying characteristics of the related medical case (case-centric processing). Messages are provided for further processing and use within SCO, BACK, and ETL.

**Acceptance criteria:** All acceptance criteria of this component's subcomponents are fulfilled.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| ETL | ETL component (extract/transform/load) | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_NFA_SQ_SL | No | Yes, implemented by subcomponents | DS |

Conversion/enrichment of incoming messages into a predefined AMPEL format.

**Acceptance criteria:** All acceptance criteria of this component's subcomponents are fulfilled.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO | Scoring component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_SQ_MOD; SyA_NFA_SQ_SL | No | Yes, implemented by subcomponents | DS |

Use of locally provided routine patient data to calculate scores, the results of which form the basis of notifications to CDSS users.

**Acceptance criteria:** All acceptance criteria of this component's subcomponents are fulfilled.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK | Backend component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_SQ_SL | No | Yes, implemented by subcomponents | DS |

Merging and aggregation of all score results and provision for subsequent notification channels: frontend component requests and email notification dispatch.

**Acceptance criteria:** All acceptance criteria of this component's subcomponents are fulfilled.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| FRONT | Frontend component | Medium | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_SQ_SUI; SyA_NFA_SQ_MINI; SyA_NFA_SQ_UEB; SyA_NFA_SQ_SL | No | Yes, implemented by subcomponent | DS |

User interface for querying score results.

**Acceptance criteria:** All acceptance criteria of this component's subcomponents are fulfilled.


![[LAMPE-system-interactions-en.drawio.svg]]

Figure 2. Overview of the interactions between all system components in LAMPE. 

Editable source: [[LAMPE-system-interactions-en.drawio]]

## 2.2 Data Source Component

![[LAMPE-data-source-component-en.drawio.svg]]

Editable source: [[LAMPE-data-source-component-en.drawio]]

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| DQ_CDC | CDC (change data capture) monitoring component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_ES_SS_DB; SyA_NFA_SQ_SL; SyA_NFA_SQ_DD | No | Yes, implemented by SOUP_CDC | DS_STREAM |

The component consists of a Debezium instance (see SOUP) that monitors the transaction log from the AMPEL DB on the designated *local data-source VM* and outputs changes as JSON messages to the data stream component.

**Acceptance criteria:** Changes in AMPEL DB in monitored tables (case, patient, laboratory findings, laboratory metadata, procedures) lead to messages in raw data streams of the data stream component. Ultimately, they lead to results through output channels. A corresponding system test with control of case, patient, laboratory, and procedure data is passed successfully.

## 2.3 Data Stream Component

![[LAMPE-data-stream-component-en.drawio.svg]]

Editable source: [[LAMPE-data-stream-component-en.drawio]]

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| DS_STREAM | Streaming component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_CONT; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_NFA_SQ_SL | No | Yes, implemented by SOUP_AK |  |

The component consists of a single-node Apache Kafka instance and receives JSON messages from the data source component as primary input. These are made available as raw topics for connected services. Services can also return processed or new topics to the streaming component and make them available to other services, e.g. result data stream or AMPEL-compliant data streams.

**Acceptance criteria:** See acceptance criteria ETL_PROCESS (integration test) and SCO_AKI (integration test).

## 2.4 ETL Component

![[LAMPE-etl-components-en.drawio.svg]]

Editable source: [[LAMPE-etl-components-en.drawio]]

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| ETL_PROCESS | Stream processing component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_NFA_L_EV; *local data mapping* | No | Yes, implemented by SOUP_AF | DS_STREAM |

A single-node Apache Flink instance (SOUP) coordinates parallel ETL processes on raw data streams of the streaming component and acts as scheduler. This enables execution of stream-processing jobs, e.g. transformation, combination, enrichment, within ETL_PAT, ETL_PROZ, ETL_FALL, and ETL_LAB.

**Acceptance criteria:** Outgoing data streams are AMPEL-compliant topics. All incoming raw-format data streams from the local source system for patient, case, laboratory findings, laboratory metadata, and procedures are cleaned according to required data quality. Relevant source-system and AMPEL-compliant topics and quality features are listed in the *local data mapping*.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| ETL_PAT | Patient component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_NFA_L_EV; FMEA_PD_R011.1; FMEA_PD_R012.1; *local data mapping* | Yes | Yes, SOUP_MDB_SYNC, SOUP_JCOMM, SOUP_CM3, SOUP_SLF4J, SOUP_LOG4J, SOUP_AF_KC_LIB, SOUP_AF_LIB | ETL_PROCESS; SCO_FRAME_KAFKA_W; SCO_FRAME_KAFKA_R |

Raw messages for the patient data stream from the streaming component are converted according to the *local data mapping* into an enriched patient data stream (= AMPEL-compliant patient data stream) and played back to the streaming component.

**Acceptance criteria:** Successful transformation of patient data into the corresponding AMPEL format.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| ETL_LAB | Laboratory component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_NFA_L_EV; FMEA_PD_R011.1; FMEA_PD_R012.1; *local data mapping* | Yes | Yes, SOUP_MDB_SYNC, SOUP_JCOMM, SOUP_CM3, SOUP_SLF4J, SOUP_LOG4J, SOUP_AF_KC_LIB, SOUP_AF_LIB | ETL_PROCESS; SCO_FRAME_KAFKA_W; SCO_FRAME_KAFKA_R |

Raw messages for laboratory value and laboratory metadata streams from the streaming component are merged/formatted into an enriched laboratory data stream according to the *local data mapping* and played back to the streaming component.

**Acceptance criteria:** Correct function of the filters (time filter for laboratory data, time filter for laboratory metadata, value-based filter for laboratory data). Successful transformation of laboratory data and laboratory metadata into the corresponding AMPEL format.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| ETL_PROZ | Procedure component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_NFA_L_EV; FMEA_PD_R011.1; FMEA_PD_R012.1; *local data mapping* | Yes | Yes, SOUP_MDB_SYNC, SOUP_JCOMM, SOUP_CM3, SOUP_SLF4J, SOUP_LOG4J, SOUP_AF_KC_LIB, SOUP_AF_LIB | ETL_PROCESS; SCO_FRAME_KAFKA_W; SCO_FRAME_KAFKA_R |

Raw messages for the procedure data stream from the streaming component are converted according to the *local data mapping* into an enriched procedure data stream and played back to the streaming component.

**Acceptance criteria:** Correct function of the filters, value-based filter regarding procedure execution. Successful transformation of procedure data into the corresponding AMPEL format.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| ETL_FALL | Case component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_NFA_L_EV; FMEA_PD_R011.1; FMEA_PD_R012.1; *local data mapping* | Yes | Yes, SOUP_MDB_SYNC, SOUP_JCOMM, SOUP_CM3, SOUP_SLF4J, SOUP_LOG4J, SOUP_AF_KC_LIB, SOUP_AF_LIB | ETL_PROCESS; SCO_FRAME_KAFKA_W; SCO_FRAME_KAFKA_R |

Raw messages for the case data stream from the streaming component are converted according to the *local data mapping* into an enriched case data stream and played back to the streaming component.

**Acceptance criteria:** Correct function of the filters (time filter, status filter). Successful transformation of case data into the corresponding AMPEL format.

## 2.5 Scoring Components

![[LAMPE-scoring-components-en.drawio.svg]]

Editable source: [[LAMPE-scoring-components-en.drawio]]

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO_FRAME_KAFKA_R | Kafka reader of the scoring framework | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_NFA_SQ_MOD; SyA_NFA_SA_CONT; FMEA_PD_R005.1 | Yes | Yes, SOUP_LOMBOK, SOUP_LOGBACK, SOUP_AKC, SOUP_JACKSON | DS_STREAM |

Allows configuration of read access to a Kafka cluster (bootstrap server, topic, consumer group ID, etc.). It commits read messages to Kafka and forwards read messages from the configured data stream to user-defined functions, e.g. result topic to BACK_ERG or AMPEL-compliant topics to SCO_AKI.

**Acceptance criteria:** See acceptance criteria in ETL_PROCESS and SCO_AKI.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO_FRAME_KAFKA_W | Kafka writer of the scoring framework | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_L_EV; SyA_NFA_SQ_MOD; SyA_NFA_SA_CONT; FMEA_PD_R005.1 | Yes | Yes, SOUP_LOMBOK, SOUP_LOGBACK, SOUP_AKC, SOUP_JACKSON | DS_STREAM |

Allows configuration of write access to a Kafka cluster (bootstrap server, topic, client ID, etc.). Messages to be written are queued according to the configured topic; order is important. Messages are written, for example, to AMPEL_RESULTS using schema `ResultMessage`: id, orderId, scoringSystemName, scoringSystemVersion, patientId, medicalCaseId, resultStatus, severityRepresentation, severityComment, analyteName, analyteValue, analyteValueUnit, analyteMeasuringTime, resultCreationDateTime, meta.

**Acceptance criteria:** See acceptance criteria in SCO_AKI.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO_FRAME_WORK_DSG | Workflow designer of the scoring framework | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SQ_MOD; SyA_NFA_SA_CONT; FMEA_PD_R005.1 | Yes | Yes, SOUP_LOGBACK, SOUP_LOMBOK |  |

Allows creation of DAGs (acyclic graphs) for initial implementation of algorithms provided as flowcharts. Graph nodes are predefined building blocks or freely implementable functions. Transitions between nodes can be direct or conditional. SCO_AKI uses this component to create the AKI workflow stored in SCO_AKI.

**Acceptance criteria:** See acceptance criteria in SCO_AKI.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO_FRAME_WORK_SCH | Workflow scheduler of the scoring framework | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SQ_MOD; SyA_NFA_SA_CONT; FMEA_PD_R005.1 | Yes | Yes, SOUP_LOGBACK, SOUP_LOMBOK | SCO_FRAME_WORK_DSG |

Allows execution planning of workflows based on key information (case ID). Workflow execution within a key occurs sequentially while maintaining original order. Across several keys, i.e. processing of medical cases, workflows are executed in parallel.

**Acceptance criteria:** See acceptance criteria in SCO_AKI.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO_AKI | AKI component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_NFA_L_EV; SyA_FA_SCORE_SCHWER; SyA_FA_SCORE_STATUS; SyA_FA_SCORE_AKI; FMEA_PD_R005.1; [[algorithm-aki]] | Yes | Yes, SOUP_LOMBOK, SOUP_LOGBACK, SOUP_VAVR, SOUP_C3P0 | SCO_FRAME_WORK_SCH; SCO_FRAME_WORK_DSG; SCO_FRAME_KAFKA_W; SCO_FRAME_KAFKA_R; SCO_AKI-DB |

Reads AMPEL-compliant streams (AMPEL_PATIENTS, AMPEL_CASES, AMPEL_LABORATORY, AMPEL_PROCEDURES) from the streaming component. It filters relevant contents (serum creatinine values, vancomycin values, dialysis procedures) and stores them case-centrically in a separate AKI DB component. Each incoming serum creatinine message triggers processing according to the workflow in [[algorithm-aki]], including relevant information from the AKI DB. Workflow output messages are returned to AMPEL_RESULTS in DS_STREAM and contain the CDSS result (red, yellow, green) plus metadata from relevant AKI algorithm inputs.

**Acceptance criteria:** Incoming AMPEL-compliant topics (case, patient, laboratory, procedure) in the streaming component lead to the expected result. Correct calculation and persistence of all possible LAMPE states for the AKI scoring system are performed.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| SCO_AKI-DB | AKI DB component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_SCORE_SCHWER; SyA_FA_SCORE_STATUS; SyA_FA_SCORE_AKI; FMEA_PD_R005.1 | Yes | Yes, SOUP_DB_MONGO, SOUP_JACKSON |  |

Persists and indexes contents passed to the database by SCO_AKI and makes them available for querying. Contents include `Procedure`, `Patient`, `MedicalCase`, and `Laboratory` data with medical case, patient, laboratory, procedure, and timing fields.

**Acceptance criteria:** See acceptance criteria in SCO_AKI.

## 2.6 Backend Components

![[LAMPE-backend-components-en.drawio.svg]]

Editable source: [[LAMPE-backend-components-en.drawio]]

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_SER | Result web server component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_SCORE_AGGR; SyA_ES_SS_KAS; FMEA_PD_R007.1 | Yes | Yes, SOUP_JACKSON, SOUP_LOMBOK, SOUP_LOGBACK, SOUP_SPRING | BACK_ERG; BACK_META; BACK_DB |

FRONT_CASE requests all score states for a submitted medical case and the related patient header data here. BACK_SER instructs BACK_ERG and BACK_META to compile these states/information and returns them to FRONT_CASE. Individual requests for aggregated CDSS status arrive here from the CWS and are processed analogously to FRONT_CASE requests, then returned to the CWS.

**Acceptance criteria:** Backend information is output correctly when requested through the HTTP interface.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_DB | Backend DB component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_SCORE_AGGR; FMEA_PD_R007.1 | Yes | Yes, SOUP_DB_POST, SOUP_LOMBOK, SOUP_LOGBACK, SOUP_DB_POST_LIB, SOUP_SPRING |  |

Persists and indexes contents of the result data stream and data streams for medical cases and patients passed to the database by BACK_ERG and BACK_META, making them available for querying. Data include results, medical cases, and patients.

**Acceptance criteria:** The backend can correctly persist and provide case and result data in the system.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_ERG | Result component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_MAIL; SyA_FA_SCORE_STATUS; SyA_FA_SCORE_SCHWER; SyA_FA_SCORE_AGGR; SyA_ES_SS_KAS; FMEA_PD_R007.1 | Yes | Yes, SOUP_LOMBOK, SOUP_LOGBACK | SCO_FRAME_KAFKA_R; DS_STREAM; BACK_DB; BACK_ORC |

Uses the Kafka reader to pull the result data stream from DS_STREAM. Each message immediately triggers downstream processes organized in BACK_ORC. One process triggers the notification service: hold result message, add associated metadata from BACK_DB, check stored logic for email dispatch depending on CDSS status, and pass result message and metadata to BACK_MAIL if positive. Business logic for result transfer to BACK_SER is also stored here. Requests from the workstation return aggregated CDSS status; requests from FRONT_CASE return all individual case results.

**Acceptance criteria:** The service layer between backend application layer and infrastructure layer can process result data from scoring systems for medical cases.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_META | Metadata component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_MAIL_STAMM; SyA_FA_MAIL_INH; SyA_FA_UI_STAMM; FMEA_PD_R007.1 | Yes | Yes, SOUP_LOMBOK, SOUP_LOGBACK | SCO_FRAME_KAFKA_R; DS_STREAM; BACK_DB |

Uses the Kafka reader to pull metadata of medical cases, i.e. AMPEL-compliant case and patient topics, from DS_STREAM. Each message immediately triggers storage in BACK_DB. Business logic for metadata transfer to BACK_SER is also stored here, i.e. database request for metadata to be forwarded to FRONT_CASE.

**Acceptance criteria:** The service layer between backend application layer and infrastructure layer can query metadata on medical cases.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_ORC | Workflow orchestration component | High | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_MAIL_VERS | No | Yes, SOUP_TEMP, SOUP_DB_POST, SOUP_TEMP_LIB |  |

Enables complete processing of BACK_ERG processes so that they run reliably from beginning to end. Stored processes are saving each message in BACK_DB and triggering the notification service of BACK_ERG.

**Acceptance criteria:** Result data can be used correctly in the backend using the orchestration component.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_MAIL | Mail client component | Medium | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_MAIL_INH; SyA_ES_SS_MAIL; PHA_PD_R006.1 | Yes | Yes, SOUP_JM_API, SOUP_ANGUSM, SOUP_HANDLE | BACK_RELAY; BACK_DB; BACK_ERG; BACK_META |

Receives an order from BACK_ERG to send an email together with relevant result and metadata. These data are inserted into an email template, provided with sender and recipient, and passed to BACK_RELAY. Email template, sender address, and recipient address are stored here. The recipient is the *local notification mailbox*.

**Acceptance criteria:** Email recipients are exclusively within the *local email domain*. A system test confirms sending and receiving of emails.

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| BACK_RELAY | Mail relay component | Medium | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_FA_MAIL_VERS | No | Yes, SOUP_POST |  |

Receives an order from BACK_MAIL to send a predefined email. The email is forwarded to the *local SMTP service*; adequate error handling occurs if the service cannot be reached.

**Acceptance criteria:** A system test confirms sending and receiving of emails.

## 2.7 Frontend Component

![[LAMPE-frontend-component-en.drawio.svg]]

Editable source: [[LAMPE-frontend-component-en.drawio]]

| ID | Name | Priority | Traceability | Risk control measure? | SOUP? | Dependencies |
|---|---|---|---|---|---|---|
| FRONT_CASE | Case dashboard component | Medium | SyA_ES_HS_VM; SyA_BU_INST_DOCKER; SyA_NFA_SA_SAND; SyA_NFA_SA_CONT; SyA_ES_SS_PC; SyA_ES_HS_PC; SyA_ES_NS_UI; SyA_FA_UI_STAMM; SyA_FA_UI_FB; SyA_FA_UI_START; SyA_FA_UI_DETAIL; SyA_FA_UI_HINWEIS; SyA_FA_UI_DATEN; SyA_FA_UI_LINK; SyA_NFA_SA_AUI; SyA_NFA_SQ_SUI; SyA_NFA_SQ_MINI; SyA_NFA_SQ_UEB; PHA_PD_R001.1; PHA_PD_R002.1; PHA_PD_R003.1; PHA_PD_R004.1; PHA_PD_R005.1; FMEA_PD_R002.1; [[algorithm-aki]] | Yes | Yes, SOUP_FAKER, SOUP_LUCIDE_REACT, SOUP_REACT_ROUTER, SOUP_REACT_DOM, SOUP_RECHARTS, SOUP_ZOD | BACK_SER |

Reproduces the contents of the result DB for a selected medical case in detailed and structured form. This includes individual scoring algorithm results, patient header data for the medical case (patient number, case ID, name, date of birth), contact options, and the notification text. The initial view is the overview page:

![[LAMPE-case-dashboard-overview-en.drawio.svg]]

Editable source: [[LAMPE-case-dashboard-overview-en.drawio]]

Clicking a status tile in "critical states" or "warning states" opens the detail page for the selected scoring algorithm.

![[LAMPE-case-dashboard-detail-en.drawio.svg]]

Editable source: [[LAMPE-case-dashboard-detail-en.drawio]]

Notification history, including measurement time, laboratory analyte, measured value, and calculated CDSS status, is visible as a table or as a chart after clicking. If CDSS data and/or patient master data are missing, a corresponding error page is displayed.

**Acceptance criteria:** All UI components, including error views, work and render as expected. Contact information is visible. Patient-identifying information is prominently displayed.

# 3. Applicable Documents

| Document name | Reference (local ID) |
|---|---|
| *local data mapping* | *local ID* |
| [[algorithm-aki]] | *local ID* |
| [[soup-list]] | *local ID* |
| [[system-requirements]] | *local ID* |
| [[risk-table]] | *local ID* |
