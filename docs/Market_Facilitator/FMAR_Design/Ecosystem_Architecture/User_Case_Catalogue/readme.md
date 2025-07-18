# FMAR Use Case Catalogue

This document outlines the core use cases for the Flexibility Market Asset Register (FMAR).  

FMAR supports registration, qualification, and data sharing for flexible assets participating in GB flexibility markets.  

It is designed to operate through modular components and may leverage a federated architecture via the Data Sharing Infrastructure (DSI).

| UC ID    | 🔶 | Use Case Grouping              | Use Case Name                               | Description |
|----------|----|--------------------------------|---------------------------------------------|-------------|
| UC-01.1  |    | Customer Onboarding            | Register User                               | Support the registration of user identities (individuals, organisations) within the ecosystem, managed through a central trust framework. |
| UC-01.2  |    | Customer Onboarding            | Register Service Provider                   | Onboard a Flexibility Service Provider (FSP) as a recognised commercial entity, creating an authoritative identity record. |
| UC-01.3  |    | Customer Onboarding            | Update / De-register Service Provider       | Manage the lifecycle of an FSP’s core entity data and status. |
| UC-02.1  |    | Asset Registration & Maintenance | Maintain Asset Categories                 | (Admin) Define and manage standard categories and associated schemas for flexible assets. |
| UC-02.2  |    | Asset Registration & Maintenance | Register Asset                            | Submit asset data to create a unique asset ID in the register. |
| UC-02.3  |    | Asset Registration & Maintenance | Validate Asset                            | Ensure asset data is authentic and conforms to the common ontology. |
| UC-02.4  |    | Asset Registration & Maintenance | Update Asset Details                      | Make changes to an asset’s data, with updates accessible to authorised parties. |
| UC-02.5  |    | Asset Registration & Maintenance | De-register Asset (from Market Unit)      | Remove an asset from its associated market grouping. |
| UC-02.6  |    | Asset Registration & Maintenance | Export Asset Data                         | Allow authorised parties to securely export asset data they manage. |
| UC-03.1  | 🔶 | Market Unit Registration         | Create / Update Market Unit                | Define and manage groupings of registered assets (Market Units or SPUs/SPGs). |
| UC-03.2  | 🔶 | Market Unit Registration         | Update Market Unit Qualification status    | Manage pre-qualification status of Market Units for specific flexibility products. |
| UC-03.3  | 🔶 | Market Unit Registration         | Switch Market Unit to New Service Provider | Reassign the FSP responsible for a Market Unit, ensuring ecosystem integrity. |
| UC-03.4  | 🔶 | Market Unit Registration         | Update Market Unit                         | Update the composition of a Market Unit by adding or removing assets. |
| UC-04.1  |    | Product Registration             | Create / Maintain Product Register         | (Admin) Maintain the central catalogue of all flexibility products. |
| UC-05.1  | 🔶 | Market Opportunity Data          | Discover Potential Product Eligibility     | Allow FSPs to check which products their Market Units may be eligible for. |
| UC-06.1  |    | Data Sharing                     | Share Asset Register Data                  | Provide authorised stakeholders with a consolidated view of asset data via APIs. |
| UC-06.2  | 🔶 | Data Sharing                     | Register / Update Connection Limit         | Manage and share non-firm connection limit data associated with assets. |
| UC-07.1  |    | Reporting                        | Provide Reporting & Insights               | Enable Ofgem and market facilitator to generate reports and insights from consolidated data. |

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
| UC-01.1  | Register User                               | SPUM                                |
| UC-01.2  | Register Service Provider                   | SPUM                                |
| UC-01.3  | Update / De-register Service Provider       | SPUM                                |
| UC-02.1  | Maintain Asset Categories                   | ARM (Admin Function)                 |
| UC-02.2  | Register Asset                              | ARM (supported by SPUM)              |
| UC-02.3  | Validate Asset                              | ARM                                 |
| UC-02.4  | Update Asset Details                        | ARM (supported by SPUM)              |
| UC-02.5  | De-register Asset (from Market Unit)        | PSQM (supported by ARM)              |
| UC-02.6  | Export Asset Data                           | ARM                                 |
| UC-03.1  | Create / Update Market Unit                 | 🔶 PSQM (supported by ARM, SPUM)    |
| UC-03.2  | Qualify Market Unit                         | 🔶 PSQM                             |
| UC-03.3  | Switch Market Unit to New Service Provider  | 🔶 PSQM (supported by SPUM)          |
| UC-03.4  | Update Market Unit                          | 🔶 PSQM (supported by ARM)           |
| UC-04.1  | Create / Maintain Product Register          | PSQM (Admin Function)                |
| UC-05.1  | Discover Potential Product Eligibility      | 🔶 PSQM                               |
| UC-06.1  | Share Asset Register Data                   | All Modules (API Layer)              |
| UC-06.2  | Register / Update Connection Limit          | 🔶 GICM (supported by ARM)           |
| UC-07.1  | Provide Reporting & Insights                | All Modules (Reporting Layer)        |

---
