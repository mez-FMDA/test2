# FMAR Use Case Catalogue: Complete Summary

This document outlines the core use cases for the Flexibility Market Asset Register (FMAR).

FMAR supports registration, qualification, and data sharing for flexible assets participating in GB flexibility markets.

It is designed to operate through modular components and may leverage a federated architecture via the Data Sharing Infrastructure (DSI).

| UC ID    | Use Case Grouping                  | Use Case Name                                  | Description                                                                                                                   | 🔶 |
|----------|----------------------------------|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|----|
| UC-01.01 | Customer Onboarding / Offboarding | Register User                                 | Support the registration of user identities (individuals, organisations) within the FMAR ecosystem, managed via a central trust framework. |    |
| UC-01.02 | Customer Onboarding / Offboarding | Register Service Provider                     | Onboard a Flexibility Service Provider (FSP) as a recognized commercial entity, creating an authoritative identity record accessible through the FMAR Hub. |    |
| UC-01.03 | Customer Onboarding / Offboarding | Update/De-register Service Provider           | Manage the lifecycle of an FSP's core entity data and status within the FMAR ecosystem.                                        |    |
| UC-02.01 | Asset Registration & Maintenance  | Maintain Asset Categories                      | (Admin) Define and manage the standard categories and associated schemas for flexible assets recognizable within the FMAR ecosystem. |    |
| UC-02.02 | Asset Registration & Maintenance  | Register Asset                                | The primary process for an FSP/user (identified in SPUM) to submit asset data, resulting in the assignment of a unique, resolvable FMAR ID for that asset in ARM. |    |
| UC-02.03 | Asset Registration & Maintenance  | Validate Asset                                | Ensure submitted asset data is authentic and conforms to the FMAR Common Ontology, potentially by cross-referencing with federated, trusted external data sources via DSI. |    |
| UC-02.04 | Asset Registration & Maintenance  | Update Asset Details                          | Modify the attributes of a registered asset, including its link to an FSP (from SPUM), ensuring the updated view is propagated. |    |
| UC-02.05 | Asset Registration & Maintenance  | Export Asset Data                            | Allow an authorised entity to securely extract its managed asset data from the ecosystem via a standardised interface.        |    |
| UC-03.01 | Market Unit Registration & Maintenance | Create Market Unit                           | Enables an FSP to logically group one or more of its registered assets to form a new "Market Unit" (equivalent to an SPU/SPG).  | 🔶 |
| UC-03.02 | Market Unit Registration & Maintenance | Record Market Unit Qualification Status     | Manages the workflow for an FSP to request qualification and for an SO to authoritatively record the outcome of their external assessment process within FMAR. | 🔶 |
| UC-03.03 | Market Unit Registration & Maintenance | Switch Market Unit to a new Service Provider | Manage the change of the FSP (from SPUM) responsible for a Market Unit (in PSQM), ensuring the update is reflected consistently. | 🔶 |
| UC-03.04 | Market Unit Registration & Maintenance | Update Market Unit Composition               | Enables an FSP to modify the composition of an existing Market Unit by adding or removing constituent assets, potentially triggering re-assessment. | 🔶 |
| UC-04.01 | Product Registration & Maintenance | Create Product Register + Maintain            | (Admin) Create and maintain the central, authoritative catalogue of all flexibility products, made accessible through the FMAR Hub. |    |
| UC-05.01 | Market Opportunity Data          | Provide potential Market Unit Qualifications | Enable FSPs to discover which products their Market Units may be eligible for, leveraging a centrally managed Table of Equivalences within PSQM. | 🔶 |
| UC-06.01 | Data Sharing                     | Share FMAR System Details                     | The core function of providing authorized stakeholders with a unified view of data via standardised FMAR Hub APIs, drawing from all modules as needed. |    |
| UC-06.02 | Data Sharing                     | Register/update Connection Limit              | A specific use case where a connection limit is associated with an asset (in ARM) and managed/disseminated via GICM.            | 🔶 |
| UC-07.01 | Reporting                        | Provide Analytics                             | Enable Ofgem and the Market Facilitator to generate reports and analytics based on a consolidated view of the data within the FMAR ecosystem. |    |
| UC-08.01 | Governance & Assurance           | Dispute Resolution & Data Correction          | A formal process for authorised parties to raise and manage the resolution of data disputes within FMAR.                        |    |
| UC-09.01 | Platform & System Integration    | Onboard & Manage Third-Party Platforms         | Register and manage the identities and access rights of Independent Market Platforms (IMPs) or other software vendors that interact with FMAR. |    |
| UC-10.01 | Platform & System Integration    | Consumer Consent Interface & Verification      | Detail the specific API interactions between FMAR and the national Consumer Consent solution to manage and verify consent status. |    |
| UC-11.01 | Governance & Assurance           | Audit Trail Access & Reporting                  | Enable authorized parties to access a detailed, immutable audit trail of all changes made to a record within FMAR.             |    |

---

### Module Key

- **SPUM** – Service Provider & User Management  
- **ARM** – Asset Registration & Maintenance  
- **PSQM** – Product & Service Qualification Management  
- **GICM** – Grid Integration & Constraint Management  
- **API Layer** – Federated data access layer for authorised consumers  
- **Reporting Layer** – Common reporting interface drawing from all modules

**🔶 = Expected to be out of scope for go-live. May be prioritised depending on stakeholder workshop outcomes.**

Out-of-scope modules:
- 🔶 PSQM = Product & Service Qualification Management
- 🔶 GICM = Grid Integration & Constraint Management

| UC ID    | Use Case Name                               | Delivered By Module(s)                |
|----------|---------------------------------------------|-------------------------------------|
| UC-01.01 | Register User                               | SPUM                                |
| UC-01.02 | Register Service Provider                   | SPUM                                |
| UC-01.03 | Update / De-register Service Provider       | SPUM                                |
| UC-02.01 | Maintain Asset Categories                   | ARM (Admin Function)                 |
| UC-02.02 | Register Asset                              | ARM (supported by SPUM)              |
| UC-02.03 | Validate Asset                              | ARM                                 |
| UC-02.04 | Update Asset Details                        | ARM (supported by SPUM)              |
| UC-02.05 | Export Asset Data                           | ARM                                 |
| UC-03.01 | Create Market Unit                          | 🔶 PSQM (supported by ARM, SPUM)    |
| UC-03.02 | Record Market Unit Qualification Status    | 🔶 PSQM                             |
| UC-03.03 | Switch Market Unit to New Service Provider  | 🔶 PSQM (supported by SPUM)          |
| UC-03.04 | Update Market Unit Composition              | 🔶 PSQM (supported by ARM)           |
| UC-04.01 | Create / Maintain Product Register          | PSQM (Admin Function)                |
| UC-05.01 | Provide Potential Market Unit Qualifications| 🔶 PSQM                             |
| UC-06.01 | Share FMAR System Details                    | All Modules (API Layer)              |
| UC-06.02 | Register / Update Connection Limit          | 🔶 GICM (supported by ARM)           |
| UC-07.01 | Provide Analytics                            | All Modules (Reporting Layer)        |
| UC-08.01 | Dispute Resolution & Data Correction         | All Modules (Governance Layer)       |
| UC-09.01 | Onboard & Manage Third-Party Platforms       | SPUM                                |
| UC-10.01 | Consumer Consent Interface & Verification    | ARM (Interface)                     |
| UC-11.01 | Audit Trail Access & Reporting                | All Modules (Logging/Audit Layer)    |
