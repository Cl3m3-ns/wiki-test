# Test Plan - LAMPE

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
| Test iteration | Software version completed and execution and recording of all tests |

# 2. Review Process

The first draft and every change to the requirements documents ([[stakeholder-requirements]], [[system-requirements]], and [[architecture]]) lead to a review of the respective documents by inspection and, where required, revision. At least the project lead, responsible developers, and one staff member not involved in the drafting process must participate.

## 2.1 [[stakeholder-requirements-review|Stakeholder Requirements Review]]

According to the document template "Stakeholder Requirements Review for In-House Software", the requirements in [[stakeholder-requirements]] are reviewed for completeness and correctness and revised where required.

## 2.2 [[system-requirements-review|System Requirements Review]]

According to the document template "System Requirements Review for In-House Software", the requirements in [[system-requirements]] are reviewed for completeness and correctness and revised where required.

## 2.3 [[architecture-review|Architecture and Design Review]]

According to the document template "Architecture and Design Review for In-House Software", [[architecture]] is reviewed for completeness and correctness and revised where required.

# 3. Test Strategy

## 3.1 Test Prioritization

Each planned test object, test, and test case must be assigned one of the following priorities:

| Priority | Value | Description |
|---|---:|---|
| Low | 0 | Failure has only minor impact on development success |
| Medium | 1 | Failure has medium impact on development success |
| High | 2 | Failure has major impact on development success |

## 3.2 Test Status

Each planned test object and each test must be in one of the following statuses:

- Not specified
- Pending
- In progress
- Overdue
- Completed

## 3.3 Error Classes

| Error class | Value | Description |
|---|---:|---|
| None | 0 | Flawless and compliant with requirements |
| Irrelevant | 1 | Usable/functionality is present; the error should normally not occur |
| Minor | 2 | Usable, but with slightly restricted functionality |
| Major | 3 | Functionality is still present, but usability is strongly restricted |
| Critical | 4 | Not usable, essential functionality is missing, operation is not justifiable, or function is not tested |

## 3.4 Handling Errors

### 3.4.1 Process Errors

Errors that directly affect success of the development process are assessed according to error class and priority and handled accordingly.

For error classes 1-2 (irrelevant to minor): each overdue test object with error class 2 and priority 2 that is not corrected within 3 test iterations leads to an independent review by at least one additional person from the development and test team to determine whether the error is far-reaching and requires further consequences.

For error classes 3-4 (major to critical): correction of overdue test objects is prioritized. Each overdue test object with error class 3-4 that is not corrected within 3 test iterations leads to a joint review with at least one additional person from the development and test team to determine whether the error is far-reaching and requires further consequences.

Each overdue test object with error class 4 and priority 2 that is not corrected within 3 test iterations leads to mandatory notification of the project lead within 7 working days. If the problem cannot be corrected within an appropriate period, the affected component is redesigned.

### 3.4.2 Test Object Errors

The error class of the test object is at least as critical as the most critical error class of the underlying tests with priority >= 1.

For error classes 1-2: analysis is performed by the responsible developer. The issue is documented in the defect management system with label "improvement potential", e.g. "enhancement" or "UX improvement". Correction is optional and performed if capacity allows or as part of downstream improvement measures.

For error classes 3-4: each overdue test with error class 3 or 4 and priority 0 leads to analysis by the responsible developer and documentation in the defect management system. Correction is optional and performed if capacity allows or as part of downstream improvement measures. Each overdue test with error class 3 or 4 and priority >= 1 that is not corrected within three test iterations leads to code review by another developer or to a pair-programming session.

### 3.4.3 Test Errors

Test cases are jointly classified by the responsible developer and tester by error class and priority. If an error is so serious that the test result is not meaningful, e.g. test data not loaded or setup failed, the test case is classified at least as error class 3. Errors caused by test tools, e.g. crash of test frameworks or CI/CD incompatibility, are set to error class 3 if they occur reproducibly and systematically.

The error class of the test is at least as critical as the most critical error class of the underlying test cases with priority >= 1.

Each failed test case leads to corresponding classification of the parent test and, depending on the resulting error class, to the mandatory actions defined above.

# 4. Test Phases

## 4.1 Acceptance Tests

The requirements in [[stakeholder-requirements]] are covered by the following tests:

| Test object ID | Test object name | Test specification | Risk control measure? | Priority | Date |
|---|---|---|---|---|---|
| StA_NA_001 | Aggregated LAMPE status (overall CDSS status in HIS) | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_002 | Transition to LAMPE detail information | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_003 | CDSS overview | [[test-specifications]] | Yes | Medium | Day-Month-Year |
| StA_NA_004 | Notification text (detail view) | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_005 | Contributing data (detail view) | [[test-specifications]] | No | Low | Day-Month-Year |
| StA_NA_006 | Further information (detail view) | [[test-specifications]] | No | Low | Day-Month-Year |
| StA_NA_007 | Traceability (detail view) | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_008 | Feedback (detail view) | [[test-specifications]] | No | Low | Day-Month-Year |
| StA_NA_009 | Email alert | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_010 | Email attribution | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_011 | Email traceability | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_016 | Near-real-time processing | [[test-specifications]] | No | Medium | Day-Month-Year |
| StA_NA_017 | AKI scoring algorithm | [[test-specifications]] | No | High | Day-Month-Year |

## 4.2 System Tests

The requirements in [[system-requirements]] are covered by the following tests:

| Test object ID      | Test object name                            | Test specification         | Risk control measure? | Priority | Date        |
| ------------------- | ------------------------------------------- | -------------------------- | --------------------- | -------- | ----------- |
| SyA_ES_NS_UI        | User interface                              | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_ES_HS_PC        | local standard PC hardware                  | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_ES_HS_VM        | Linux virtual machine                       | [[test-specifications]] | No                    | High     | Day-Month-Year |
| SyA_ES_SS_DB        | Database interface (input)                  | [[test-specifications]] | No                    | High     | Day-Month-Year |
| SyA_ES_SS_PC        | local standard PC software                  | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_ES_SS_KAS       | CDSS interface to the CWS                   | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_ES_SS_MAIL      | CDSS interface for email dispatch           | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_BU_INST_SPALTE  | Displaying the CDSS column                  | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_BU_INST_DOCKER  | System startup                              | [[test-specifications]] | Yes                   | Low      | Day-Month-Year |
| SyA_ES_IFU          | [[instructions-for-use]]                    | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |
| SyA_FA_UI_STAMM     | Patient master data                         | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_FA_UI_FB        | Feedback                                    | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_UI_START     | Start view (overview)                       | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_UI_DETAIL    | Transition to detail view                   | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_UI_HINWEIS   | Notification text (detail view)             | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_UI_DATEN     | Contributing data (detail view)             | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_UI_LINK      | Access to further information (detail view) | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_MAIL_VERS    | Email dispatch conditions                   | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_FA_MAIL_STAMM   | Patient master data in email                | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |
| SyA_FA_MAIL_INH     | Email content                               | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_FA_SCORE_STATUS | CDSS status                                 | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_FA_SCORE_SCHWER | CDSS severity                               | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_FA_SCORE_AGGR   | Aggregated CDSS status                      | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_FA_SCORE_AKI    | Detection of AKI and VA-AKI                 | [[test-specifications]] | No                    | High     | Day-Month-Year |
| SyA_NFA_L_EV        | Real-time processing                        | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_NFA_SA_CONT     | Container                                   | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_NFA_SA_SAND     | Sandboxing                                  | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |
| SyA_NFA_SA_AUI      | UI authentication                           | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |
| SyA_NFA_SA_AVM      | VM authentication                           | [[test-specifications]] | Yes                   | High     | Day-Month-Year |
| SyA_NFA_SA_MINI     | Data minimization                           | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_NFA_SQ_SUI      | Static UI                                   | [[test-specifications]] | Yes                   | Low      | Day-Month-Year |
| SyA_NFA_SQ_MINI     | Minimal interaction                         | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_NFA_SQ_UEB      | Clarity                                     | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_NFA_SQ_SL       | System uptime                               | [[test-specifications]] | No                    | Medium   | Day-Month-Year |
| SyA_NFA_SQ_DD       | Defective data input                        | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |
| SyA_NFA_SQ_W        | Maintenance                                 | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |
| SyA_NFA_SQ_MOD      | Modularity                                  | [[test-specifications]] | No                    | Low      | Day-Month-Year |
| SyA_NFA_SQ_KONF     | Configuration (authorization)               | [[test-specifications]] | Yes                   | Medium   | Day-Month-Year |

## 4.3 Unit and Integration Tests

The components in [[architecture]] are covered by the following tests:

| Test object ID | Test object name | Test specification | Risk control measure? | Priority | Date |
|---|---|---|---|---|---|
| ETL_PROCESS | Stream processing component | [[test-specifications]] | No | High | Day-Month-Year |
| ETL_PAT | Patient component | [[test-specifications]] | Yes | High | Day-Month-Year |
| ETL_LAB | Laboratory component | [[test-specifications]] | Yes | High | Day-Month-Year |
| ETL_PROZ | Procedure component | [[test-specifications]] | Yes | High | Day-Month-Year |
| ETL_FALL | Case component | [[test-specifications]] | Yes | High | Day-Month-Year |
| DS_STREAM | Streaming component | [[test-specifications]] | No | High | Day-Month-Year |
| SCO_FRAME_KAFKA_R | Kafka reader of the scoring framework | [[test-specifications]] | Yes | High | Day-Month-Year |
| SCO_FRAME_KAFKA_W | Kafka writer of the scoring framework | [[test-specifications]] | Yes | High | Day-Month-Year |
| SCO_FRAME_WORK_DSG | Workflow designer of the scoring framework | [[test-specifications]] | Yes | High | Day-Month-Year |
| SCO_FRAME_WORK_SCH | Workflow scheduler of the scoring framework | [[test-specifications]] | Yes | High | Day-Month-Year |
| SCO_AKI | AKI component | [[test-specifications]] | Yes | High | Day-Month-Year |
| SCO_AKI-DB | AKI DB component | [[test-specifications]] | Yes | High | Day-Month-Year |
| BACK_SER | Result web server component | [[test-specifications]] | Yes | High | Day-Month-Year |
| BACK_DB | Backend DB component | [[test-specifications]] | Yes | High | Day-Month-Year |
| BACK_ERG | Result component | [[test-specifications]] | Yes | High | Day-Month-Year |
| BACK_META | Metadata component | [[test-specifications]] | Yes | High | Day-Month-Year |
| BACK_ORC | Workflow orchestration component | [[test-specifications]] | No | High | Day-Month-Year |
| BACK_MAIL | Mail client component | [[test-specifications]] | Yes | Medium | Day-Month-Year |
| FRONT_CASE | Case dashboard component | [[test-specifications]] | Yes | Medium | Day-Month-Year |

# 5. Test Team Members

| ID | Name | Role | Responsibility | Qualification | Affiliation |
|---|---|---|---|---|---|
| TTM_1 | _Project lead name_ | Project lead | Leading and monitoring the project development process | Specialist in laboratory medicine with focus on medical informatics | *Hospital Name* |
| TTM_2 | _Technical expert name_ | Developer, architect, tester | Design of architecture and design and implementation of system components for the specified requirements; definition and execution of specific frontend tests | Master Computer Science, Head of Software Development | *Hospital Name* |
| TTM_3 | _Technical tester name_ | Frontend developer, tester | Definition and execution of specific tests; frontend implementation | Bachelor Biomechatronics, Master Bioinformatics | *Hospital Name* |
| TTM_4 | _Data processing expert name_ | Architect, tester, data processing expert | Design of architecture and system components for specified requirements; definition and execution of validation tests; creation of architecture/design, stakeholder, and system requirements | Diploma biologist, biometrician with focus on medical informatics | *Hospital Name* |
| TTM_5 | _Medical and risk expert name_ | Medical-technical expert, project and risk manager | Project management for test documentation; support for medical-technical requirements and content creation; risk management | Physician with focus on medical informatics | *Hospital Name* |

# 6. Monitoring and Evaluation Metrics

| ID | Name | Description | Sufficient | Needs improvement | Insufficient |
|---|---|---|---|---|---|
| UBM_StA | Stakeholder requirement coverage | Percentage of requirements in [[stakeholder-requirements]] that could be considered fulfilled by at least one test. | 100% | >=90% | <90% |
| UBM_SyA | System requirement coverage | Percentage of requirements in [[system-requirements]] that could be considered fulfilled by at least one test. | 100% | >=90% | <90% |
| UBM_ADA | Architecture and design requirement coverage | Percentage of requirements in [[architecture]] that could be considered fulfilled by at least one test. | 100% | >=90% | <90% |
| UBM_COV | Code coverage | Percentage of all instructions/statements in the code covered by a test case. Framework modules, config modules, SOUP, and the scoring component tested without automation are not considered. | >=60% | >=50% | <50% |
| UBM_RIS | Tests per risk control measure | Average number of tests per risk control measure from the requirements in [[architecture]]. | >=1.5 | >=1 | <1 |
| UBM_ABN | Number of acceptance testers | Number of users who accepted the acceptance test as stakeholders. | >=5 | >=3 | <3 |

# 7. Test Resources

## 7.1 Standards

No standards are specified.

## 7.2 Methods

| ID | Name | Purpose | Reference |
|---|---|---|---|
| TR_M_01 | Black-box tests | Integration tests | https://de.wikipedia.org/wiki/Black-Box-Test |
| TR_M_02 | White-box tests | Review of correct use of the Google coding standard throughout the source code | https://de.wikipedia.org/wiki/White-Box-Test |
| TR_M_03 | Snapshot tests | Integration or system tests | https://vitest.dev/guide/snapshot.html |
| TR_M_04 | Unit tests | Component tests | https://de.wikipedia.org/wiki/Modultest |
| TR_M_05 | Checklist with protocol | Acceptance test, system test |  |

## 7.3 Tools

| ID | Name | Purpose | Reference |
|---|---|---|---|
| TR_WZ_01 | GitHub Actions | Automated test runs | https://github.com/features/actions |
| TR_WZ_02 | JUnit 5 | Test framework for Java-based tests | https://junit.org/junit5/docs/current/user-guide/ |
| TR_WZ_03 | Mockito | Mocks | https://site.mockito.org/ |
| TR_WZ_04 | Testcontainers | Provides dependencies for integration tests | https://testcontainers.com/ |
| TR_WZ_05 | Vitest | Test framework for TypeScript-based tests (frontend) | https://vitest.dev |
| TR_WZ_06 | Docker | Container runtime environment for building images, starting/stopping containers, and managing networks and volumes | https://www.docker.com/ |
| TR_WZ_07 | GitHub | Platform for versioned management of the code base | https://github.com/ |
| TR_WZ_08 | Docker Registry | Image repository similar to GitHub, but for Docker images | https://hub.docker.com/_/registry |
| TR_WZ_09 | Faker | Library for generating realistic frontend test data | https://github.com/faker-js; https://fakerjs.dev/ |
| TR_WZ_10 | testing-library/jest-dom | Custom Jest matchers for DOM tests, e.g. `toBeInTheDocument` | https://github.com/testing-library/jest-dom |
| TR_WZ_11 | testing-library/react | React-specific testing utilities for component rendering | https://testing-library.com/docs/react-testing-library/intro; https://github.com/testing-library/react-testing-library |
| TR_WZ_12 | vitest/coverage-v8 | Coverage reporter for Vitest based on the V8 engine | https://vitest.dev; https://github.com/vitestdev/vitest/tree/main/packages/coverage-v8 |

## 7.4 Test Environments

| ID | Description | Provision date |
|---|---|---|
| TR_TU_01 | For component/unit and integration tests: GitHub Runner hardware (cloud-based); software GitHub Actions, JUnit 5, Vitest, Mockito, Testcontainers; location worldwide; access rights GitHub account; personnel test team members. Integration tests are triggered automatically for all project changes entering a main branch (Develop, Master, Release-*). | Day-Month-Year |
| TR_TU_02 | For system tests: local VM; CPU 4 vCores, 64-bit kernel and CPU support for virtualization; no minimum graphics requirements; 32 GB RAM; 50 GB storage; Unix-based operating system; software JUnit 5, Mockito, Testcontainers; location *local site*; access rights according to local authentication and authorization requirements; personnel test team members. | Day-Month-Year |
| TR_TU_03 | For acceptance test: local VM; CPU 4 vCores, 64-bit kernel and CPU support for virtualization; no minimum graphics requirements; 32 GB RAM; 50 GB storage; Unix-based operating system; software JUnit 5, Mockito, Testcontainers; location *local site*; access rights according to local authentication and authorization requirements; personnel test team members and clinical medical staff (users). | Day-Month-Year |

# 8. Applicable Documents

| Document name | Reference (local ID) |
|---|---|
| [[test-specifications]] | *local ID* |
| [[stakeholder-requirements-review]] | *local ID* |
| [[system-requirements-review]] | *local ID* |
| [[architecture-review]] | *local ID* |
