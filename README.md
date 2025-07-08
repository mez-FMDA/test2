# FMAR Design Artefacts Repository

**Welcome to the official design artefact repository for the Flexibility Market Asset Registration (FMAR) Programme, managed by Elexon as the GB Market Facilitator.**

## 1. Purpose of This Repository

This repository serves as the **single source of truth** for all public-facing design artefacts related to the FMAR programme. It is a central collaboration space for Elexon's FMAR Architecture Team and our valued industry stakeholders to engage in an open, iterative, and transparent design process.

Our primary goal is to co-design a robust and future-proof FMAR system that will:
*   **Simplify asset registration** with a "register once, use many times" capability, initially focusing data collection at the 'point of market entry'.
*   **Lower barriers to entry** for flexibility providers by managing the lifecycle of asset and flexibility service data (data related to a counterparty and their contract with the asset owner).
*   **Enhance visibility and data quality** for System Operators who will require improvements to operational visibility in a high- DER and CER system.
*   **Provide a public interest digital asset** that supports an efficient, competitive, and decarbonised GB energy system.

Our design process is guided by a long-term strategic vision for FMAR as as a public interest digital asset, guided by Ofgem's Flexibility Digital Infrastructure workstream. To read more about Elexon's vision for FMAR please read **[here](https://github.com/mez-FMDA/MF.github.io/blob/main/docs/Market_Facilitator/FMAR_Design/Programme_Level/FMAR_Design_Project_Overview.md)**

## 2. Overview of Artefacts in This Repository

### Programme Level

* `FMAR Common Glossary & Ontology Principles`: A shared programme artefact providing key terms used by FMAR and the Flexibility Market Rules Repository to ensure a shared understanding
* `FMAR Vision and Scope`: An overview of the vision and scope of FMAR and an overview of it's relationship to Flexibility Market Rules

### Ecosystem Architecture

#### Business Process Modelling

* `BPMN business process models (as part of E2E workstream)_PLACEHOLDER.md`: Placeholder for BPMN business process models developed as part of the E2E workstream.

#### Use Case Diagrams

* `Use case diagram (as part of EBIX modelling in E2E workstream)_PLACEHOLDER.md`: Placeholder for use case diagrams developed.

#### User Case Catalogue

* `Role_Actor_Mappings.md`: Document outlining role and actor mappings.
* `Use_case_catalogue`: Existing use case catalogue.
* `All Use-case descriptions (highlighting which are in MVP scope)_PLACEHOLDER.md`: Placeholder for all use-case descriptions, with MVP scope highlighted.
* `List of actor-role mapping_PLACEHOLDER.md`: Placeholder for a detailed list of actor-role mappings.
* `Use case catalogue_PLACEHOLDER.md`: Placeholder for an additional use case catalogue.
* `Policy-process-data traceability matrix (links to standards information base)_PLACEHOLDER.md`: Placeholder for the policy-process-data traceability matrix, with links to the standards information base.

### Data Architecture

* `Information_Map.md`: Document detailing the information map.
* `Data exchange contracts_PLACEHOLDER.md`: Placeholder for data exchange contracts.
* `Data lineage diagrams_PLACEHOLDER.md`: Placeholder for data lineage diagrams.
* `Data sharing matrix_PLACEHOLDER.md`: Placeholder for the data sharing matrix.
* `Metadata specification_PLACEHOLDER.md`: Placeholder for the metadata specification.

### Application Architecture

* `API_catalogue.md`: Details of the Application Programming Interface catalogue.
* `Service blueprint_PLACEHOLDER.md`: Placeholder for the service blueprint.
* `MVP design patterns_PLACEHOLDER.md`: Placeholder for MVP design patterns.
* `Component diagrams_PLACEHOLDER.md`: Placeholder for component diagrams.
* `Application-layer security model_PLACEHOLDER.md`: Placeholder for the application-layer security model.

### Supporting Artefacts

* `Emerging Requirements from DSI`: Placeholder for documentation on emerging requirements.
* `Emerging Requirements from GB Profile Dispatch API`: Placeholder for documentation on emerging requirements.
* `Emerging Requirements from Consumer Consent Solution`: Placeholder for documentation on emerging requirements.

## 3. How to Engage with This Repository

We actively encourage participation from all industry stakeholders. Your expertise is crucial to our success.

*   **To Review Artefacts:** All published design documentation can be found within the repository's directory structure. We recommend starting with the `00-Programme-Level` and `01-Ecosystem-Architecture` folders to read the detailed descriptions of the core user journeys and functionalities FMAR will support.

Use the table of contents below to navigate through the different architectural domains and artefacts.

## Table of Contents

* [Programme Level](#programme-level)
    * [FMAR Common Glossary & Ontology Principles](#programme)
    * [FMAR Vision and Scope](#programme)
 * [Ecosystem Architecture](#ecosystem-architecture)
    * [Business Process Modelling](#business-process-modelling)
        * [BPMN Business Process Models (E2E Workstream)](#business-process-modelling)
    * [Use Case Diagrams](#use-case-diagrams)
        * [Use Case Diagram (EBIX Modelling in E2E Workstream)](#use-case-diagrams)
    * [User Case Catalogue](#user-case-catalogue)
        * [Role Actor Mappings](FMAR_Design/Ecosystem_Architecture/User_Case_Catalogue/Role_Actor_Mappings.md)
        * [Use Case Catalogue (in scope for go-live](FMAR_Design/Ecosystem_Architecture/User_Case_Catalogue/Use_case_catalogue)
        * [Use Case Descriptions](#user-case-catalogue)
        * [List of Actor-Role Mapping](#user-case-catalogue)
        * [Use Case Catalogue (future vision)](#user-case-catalogue)
    * [Policy-Process-Data Traceability Matrix](#ecosystem-architecture)
* [Data Architecture](#data-architecture)
    * [Information Map](FMAR_Design/Data_Architecture/Information_Map.md)
    * [Data Exchange Contracts](#data-architecture)
    * [Data Lineage Diagrams](#data-architecture)
    * [Data Sharing Matrix](#data-architecture)
    * [Metadata Specification](#data-architecture)
* [Application Architecture](#application-architecture)
    * [API Catalogue](#application-architecture)
    * [Service Blueprint](#application-architecture)
    * [MVP Design Patterns](#application-architecture)
    * [Component Diagrams](#application-architecture)
    * [Application-Layer Security Model](#application-architecture)
* [Supporting Artefacts](#supporting-artefacts)
    * [Emerging Requirements from NESO DSI](#supporting-artefacts)

---

*   **To Provide Feedback or Raise a Change:** The primary method for providing feedback is by commenting on the appropriate thread in **[GitHub Discussions](https://github.com/mez-FMDA/MF.github.io/discussions/categories/general-discussion)**. This can then be formalised as Change to be raised via a **[GitHub Issue](https://github.com/mez-FMDA/MF.github.io/issues)**. Please use the available templates to ensure your feedback uses the correct structured issue template and can be effectively triaged by our team. If you are unsure whether to provide feedback or raise a change, please refer to our **[Contribution Guidelines and Code of Conduct](./CONTRIBUTING.md)**.  

*   **To Track Progress:** You can "Watch" this repository to receive notifications on new Issues, discussions, and artefact updates. Progress on key design themes is also tracked on our **[FMAR Design Project Board](https://github.com/users/mez-FMDA/projects/7/views/2)**.

**Please Note:** Only authorized members of the FMAR Architecture Team can commit changes and merge pull requests to the main branches of this repository to ensure quality and control. All industry feedback provided via Issues will be reviewed, and if accepted, incorporated into subsequent versions of the artefacts by the team. For more detail on our Architectural Team workflow, please refer to our overview on the programme page.

---

---

## 4. Upcoming Workshops & Engagement

We will be running a series of thematic design workshops to collaboratively define the FMAR system. Artefacts in this repository will serve as pre-reading and will be updated based on workshop outcomes.

*   **Next Workshop:** 
*   **Date:** *[Insert Date]*
*   **Registration & Details:** *[https://www.elexon.co.uk/what-we-do/about-our-services/market-facilitator-for-distributed-flexibility/]*
*   **[View the full Workshop Series Roadmap](./Workshops/README.md)**

---

## 5. Contribution & Code of Conduct

All engagement in this repository is governed by our **[Contribution Guidelines and Code of Conduct](./CONTRIBUTING.md)**. We are committed to fostering an open, respectful, and collaborative environment.

## 6. Licensing and security policy

Documentation (docs and docs-dev) is licensed under the CC-BY-4.0 License. Attribution should be made to Elexon Ltd.

Elexon takes security and privacy of our software products and services seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

If you believe you have found a security vulnerability or privacy concern in any of our systems, please send an e-mail to MF@elexon.co.uk . Please do not report security vulnerabilities through open channels such as GitHub issues or pull requests.

---
