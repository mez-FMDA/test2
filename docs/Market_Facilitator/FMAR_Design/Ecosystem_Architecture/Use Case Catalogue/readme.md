# FMAR Use Case Catalogue: Complete Summary

This document outlines the core use cases for the Flexibility Market Asset Registration (FMAR) solution.

FMAR supports registration, qualification, and data sharing for flexible assets participating in GB flexibility markets.

It is designed to operate through modular components and may leverage a federated architecture via the Data Sharing Infrastructure (DSI).

### Module Key

- **SPUM** – Service Provider & User Module  
- **ARM** – Asset Registration Module  
- **PSQM** – Product & Service Qualification Module  
- **GICM** – Grid Integration & Constraints Module  
- **API Layer** – Federated data access layer for authorised consumers  
- **Reporting Layer** – Common reporting interface drawing from all modules

**🔶 = Expected to be out of scope for go-live. May be prioritised depending on stakeholder workshop outcomes.**
| UC ID    | Use Case Grouping                      | Use Case Name                                          | Description                                                                                                                                              | 🔶 |
|----------|----------------------------------------|--------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|----|
| UC-01.01 | Customer Onboarding / Offboarding      | Register User                                          | Support the registration of user identities (individuals, organisations) within the FMAR ecosystem, managed via a central trust framework.              |    |
| UC-01.02 | Customer Onboarding / Offboarding      | Register Organisation                                  | Onboard a Flexibility Service Provider (FSP) as a recognised commercial entity, creating an authoritative identity record accessible through FMAR.      |    |
| UC-01.03 | Customer Onboarding / Offboarding      | Update Organisation                                    | Manage the lifecycle of an FSP's core entity data and status within the FMAR ecosystem.                                                                  |    |
| UC-01.04 | Customer Onboarding / Offboarding      | De-register Organisation                               | The formal, auditable process for an organisation to be de-registered from FMAR.                                                                         |    |
| UC-02.01 | Asset Registration & Maintenance       | Maintain Asset Categories                              | (Admin) Define and manage the standard categories and associated schemas for flexible assets recognisable within the FMAR ecosystem.                    |    |
| UC-02.02 | Asset Registration & Maintenance       | Register and Validate Asset                            | The primary process for an FSP or user to submit asset data, ensure it is authentic and conforms to FMAR ontology, resulting in a unique FMAR ID.       |    |
| UC-02.03 | Asset Registration & Maintenance       | De-register Asset                                      | The formal process for removing an asset from FMAR, ensuring auditability and traceability.                                                              |    |
| UC-02.04 | Asset Registration & Maintenance       | Update Asset Details                                   | Modify the attributes of a registered asset, including its link to an FSP, ensuring the updated view is propagated.                                     |    |
| UC-02.05 | Asset Registration & Maintenance       | Export Asset Data                                      | Allow an authorised entity to securely extract its managed asset data from FMAR via a standardised interface.                                           |    |
| UC-02.06 | Asset Registration & Maintenance       | Manage Connection Limit                                | Manage the connection limits of assets via the Grid Interaction & Constraints Module (GICM), ensuring safe operational thresholds.                      | 🔶 |
| UC-03.01 | Market Unit Registration & Maintenance | Create Market Unit                                     | Enable an FSP to group one or more of its registered assets into a new Market Unit (e.g., SPU or SPG).                                                  | 🔶 |
| UC-03.02 | Market Unit Registration & Maintenance | Reassign Market Unit to New Service Provider           | Manage the change of the FSP responsible for a Market Unit, ensuring the update is reflected consistently.                                               | 🔶 |
| UC-03.03 | Market Unit Registration & Maintenance | Update Market Unit Composition                         | Modify the composition of a Market Unit by adding or removing assets, potentially triggering re-qualification.                                          | 🔶 |
| UC-03.04 | Market Unit Registration & Maintenance | Process Owner-Initiated Asset Switch Between FSPs      | Handle the process of transferring consumer-owned assets between FSPs, initiated and authorised by the consumer.                                         |    |
| UC-03.05 | Market Unit Registration & Maintenance | De-register Market Unit                                | The formal, auditable process for removing a Market Unit from FMAR.                                                                                      | 🔶 |
| UC-04.01 | Product & Qualification Management     | Create and Maintain Product Catalogue                  | (Admin) Create and maintain the central catalogue of all flexibility products accessible through the FMAR Hub.                                          |    |
| UC-04.02 | Product & Qualification Management     | Record Market Unit Qualification Status                | Manage the workflow for FSPs to apply for qualification, and for SOs to record outcomes of external assessments in FMAR.                                | 🔶 |
| UC-04.03 | Product & Qualification Management     | Discover Market Opportunities                          | Enable FSPs to identify applicable products for their Market Units via CMZ or a Table of Equivalences managed in PSQM.                                  | 🔶 |
| UC-05.01 | System-Wide Functions & Integrations   | Share FMAR System Details                              | Provide authorised stakeholders with access to unified data views via FMAR Hub APIs, integrating all modules.                                            |    |
| UC-05.02 | System-Wide Functions & Integrations   | Provide Analytics                                      | Enable Ofgem and the Market Facilitator to generate consolidated reports and insights from FMAR data.                                                   |    |
| UC-05.03 | System-Wide Functions & Integrations   | Dispute Resolution & Data Correction                   | A formal process for managing data disputes and corrections raised by authorised parties.                                                                |    |
| UC-05.04 | System-Wide Functions & Integrations   | Onboard & Manage Third-Party Platforms                 | Register and manage access rights for Independent Market Platforms (IMPs) and other software providers integrating with FMAR.                           |    |
| UC-05.05 | System-Wide Functions & Integrations   | Consumer Consent Interface & Verification              | Define API interactions between FMAR and the national Consumer Consent solution to manage and verify user permissions.                                  |    |
| UC-05.06 | System-Wide Functions & Integrations   | Audit Trail Access & Reporting                         | Allow authorised parties to access a secure, immutable audit trail of changes across FMAR modules.                                                      |    |


---



Out-of-scope modules:
- 🔶 PSQM = Product & Service Qualification Management
- 🔶 GICM = Grid Integration & Constraint Management

| UC ID    | Use Case Name (>needs updating)                              | Delivered By Module(s)                |
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


## FMAR Actors

The following table lists the primary actors who interact with the FMAR system across the defined use cases. Actors can be human users or external systems.

| Actor                                      | Description                                                                                                                                                | Key Use Case Interactions                                                                                                     |
| :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| **Flexibility Service Provider (FSP)**     | A commercial entity that aggregates and manages flexible assets to offer services to the market. The primary user of FMAR for managing their portfolio.        | Registering/updating their company, users, and assets. Creating and qualifying Market Units. Accessing their own data.          |
| **System Operator (SO)**                   | Includes Distribution System Operators (DSOs) and the National Energy System Operator (NESO). They operate the grid and procure flexibility services.        | Accessing asset and qualification data for planning and procurement. Recording qualification outcomes. Managing connection limits. |
| **Asset Owner**                            | The legal owner of a flexible asset (e.g., a commercial site or a residential consumer). Typically interacts with FMAR via their chosen FSP.                   | Granting consent (via external solution). Potentially a direct user for viewing their own asset data.                             |
| **FMAR Administrator**                     | Elexon personnel responsible for the administration, governance, and maintenance of the FMAR Hub.                                                              | Maintaining asset categories and the product catalogue. Managing user disputes and system governance.                         |
| **Third-Party Platform**      | Third-party software platforms that provide market access and other services to FSPs. A key system-level actor.                                                | Onboarding as a platform (UC-09.01), then acting on behalf of FSPs to perform various FMAR functions via API.                  |
| **Installer**                              | An entity responsible for the physical installation of flexible assets. May be an early data provider for asset registration.                                  | Potential actor in the initial "Register Asset" use case, providing technical data at the point of installation.                |
| **Ofgem / Regulatory Body**                | The regulator of the GB energy market.                                                                                                                     | Primary consumer of anonymised, aggregated data from the "Provide Analytics" use case for market monitoring and policy making.    |
| **Consumer Consent Solution**              | A critical external system that manages consumer consent. Interacts with FMAR programmatically.                                                              | Provides consent status verification to FMAR and notifies FMAR of consent revocations.                                        |


## Quick Definitions > needs updating

• An 'Asset' (or in the European case a Controllable Unit (CU)) is defined as a single power-generating module and/or demand unit (i.e., an ESA) with a unique relationship to an Accounting Point.

• A Service Providing Unit (SPU) refers to one or more controllable units connected to a single
connection point, as defined by the service provider.

• A Service Providing Group (SPG) is an aggregation of CUs or SPUs connected to more than one
connection point within the same scheduling area, also defined by the service provider

<img width="969" height="440" alt="image" src="https://github.com/user-attachments/assets/b858a238-da34-4b64-95e5-b3890c1714ed" />

Image source: https://magnusenergy.com/wp-content/uploads/2025/06/NC-DR-Brief-FINAL.pdf

---
