
# FMAR Potential Dependencies on DSI Components

**Version:** v0.1

**Status:** Draft

**Last Updated:** 2025-06-18

**Owner:** FMAR Architecture Team

**Related FMAR Module(s):** All


## Purpose of this Artefact:

To clearly articulate an emerging view on potential FMAR dependencies and functional requirements on the DSI components (DPN and DSM) as defined in the "Virtual Energy System - Data Sharing Infrastructure - Specification (Rev 0.3 | June 2024)".  

This ensures FMAR's design aligns with DSI capabilities and helps inform DSI development priorities to support FMAR as a key use case.

Note this artefact has been produced in advance of any joint-architecture team meetings to clarify shared meaning of terms. An updated version of this artefact can be produced following this session.

## Content of the Artefact (Structured by DSI Component Groups):

### Introduction:

Ofgem has outlined their strategic intent for FMAR to be a use case of the DSI, with DSI being the foundational common data standardisation and sharing mechanism capable of enabling use of common data standards and wider IT architecture, common compliance tools and aspects of common registration of users, as part of FDI outcomes.  

Elexon fully supports this intent, recognising that there is is a wealth of learnings about contamperaneous initiatives to FMAR in the European Union (e.g., ACER’s Flexibility Information System recommendation) which are defined with respect to the well-defined concept of data spaces as the cornerstone to interoperable data sharing.   

The DSI Specification document published in June 2024 provides a helpful overview of the components currently available (developed as part of the Pilot) vs., the components planned (for MVP and Live), under the development of the Virtual Energy System programme.  

This document outlines FMAR's initial, emerging needs from DSI, which will be refined through 2025 FMAR design workshops (as required by Ofgem) and as DSI itself evolves.  

For further details on the latest FMAR requirements (currently only defined within the business/ecosystem architecture) please see the Programme overview and Use Case catalogue found on the MF repository.


## Assumptions:

- The FMAR Hub (operated by Elexon) will itself act as a sophisticated DSI participant, likely deploying its own instance of DPN-like functionalities or directly interfacing with DSM services for its centralised operations.
- Flexibility Service Providers (FSPs) and System Operators (SOs) participating in FMAR data exchange will deploy their own DPNs to interact with the FMAR Hub and potentially each other (though FMAR aims to be the central point).
- For simplicity, FSPs and SOs are the only Actors considered below when illustrating potential dependencies. In practice, FMAR Hub will interface with a wider range of stakeholders who have deployed DPNs, to be defined in the Role/Actor mappings artefact.
- DPNs and DSM will align on foundational technical standards used by international data space connectors (as outlined [here](https://dssc.eu/space/BVE2/1071254873/Building+on+Top+of+Foundational+Technical+Standards)) to ensure interoperability and reduce transaction costs for inbound and outbound flexibility market participants. Where divergence occurs, rationale would be clearly outlined, and mapping support (within reason) would be provided.

## DPN Component Potential Dependencies

| DPN Component ID | FMAR Role |
|------------------|-----------|
| DPN | The containerised software deployed by each FMAR data provider/consumer. |
| DPN-DC-01: Metadata Repository (Pilot) | FSPs/SOs use this in their DPN to store local metadata about datasets they intend to share with FMAR (e.g., "My Portfolio of BESS Assets - Q1 2025"). This metadata must align with FMAR's required metadata standards (derived from FMAR Ontology). FMAR Hub's DPN would use this for its own published data products. |
| DPN-DC-02: Tagging & Categorisation (MVP) | FSPs/SOs use this to apply FMAR-specific tags (e.g., assetTechnology:BESS, fmarModule:ARM, qualifiedSub-marketService:DynamicContainment) to their local datasets, aiding discovery and processing by FMAR Hub. |
| DPN-DC-03: Data Quality Scan (Public Beta) | (Future): Could be used by FSPs/SOs to perform initial local data quality checks against FMAR-defined rules before sharing, improving overall data integrity. |
| **DPN-DM-01: DPN Data Mapping Pipelines (Pilot)** | **CRITICAL. FSPs/SOs use this to transform their internal data formats into the FMAR Common Ontology compliant format required by ARM, SPUM, PSQM. FMAR Hub's DPN uses this to process incoming data or prepare outgoing data.** |
| DPN-DM-02: DPN Ingest Connectors (Push) (Pilot) | Primary mechanism for FSPs/SOs to push their standardised FMAR data (asset registrations, updates) from their DPN to the FMAR Hub's DPN/API. |
| DPN-DM-03: DPN Ingest Connectors (Pull) (Public Beta) | (Future): FMAR Hub might use this to pull data from FSP/SO DPNs if a push model isn't suitable for all scenarios or data types. |
| DPN-DS-01: DPN Datastore (Standardised) (Pilot) | In FSP/SO DPNs, stores data already transformed to FMAR Common Ontology format, ready for sharing with FMAR Hub. In FMAR Hub's DPN, this is where core FMAR data (ARM, SPUM, PSQM records) would reside. |
| DPN-DS-02: DPN Datastore (Subscribed) (Pilot) | In FSP/SO DPNs, could store data subscribed from FMAR Hub (e.g., product catalogue updates). |
| DPN-DS-03: DPN Datastore (Unstandardised) (MVP) | In FSP/SO DPNs, temporary storage for raw data before it's mapped by DPN-DM. |
| DPN-IN-01: DPN Message Service (Pilot) | If FMAR uses pub/sub for certain data flows (e.g., FMAR Hub broadcasting product updates, FSPs publishing asset status changes), FSP/SO DPNs and FMAR Hub's DPN would use their message connectors (DPN-IN-01.01 Published, DPN-IN-01.02 Subscribed). |
| DPN-IN-02: DPN Message Broker (Pilot) | The underlying queues (DPN-IN-02.01 Published, DPN-IN-02.02 Subscribed) used by the Message Service for FMAR data exchanges. |
| **DPN-IN-03.01 (API Endpoints - Pilot)** | **CRITICAL FSP/SO DPNs expose FMAR-compliant APIs for FMAR Hub to pull data (if that model is used) or for their internal systems to interact with their DPN. FMAR Hub's DPN exposes APIs for FSPs/SOs to push data or query FMAR data.**| 
| DPN-IN-03.02.01 (Data API Connector - Pilot) | Used by FMAR Hub to connect to FSP/SO DPN APIs, and vice-versa.| 
| DPN-IN-03.02.02 (Ingestion API Connector - MVP)| Used by FSP/SO DPNs to connect to FMAR Hub's ingestion APIs.| 
| DPN-IN-03.03 (API Endpoint Management - Pilot) | Consistent expectations around local management of these DPN-exposed APIs.|
| DPN-MON: DPN Monitoring & Management (MVP) | FSPs/SOs use this to monitor their DPN's health and its data exchange activities related to FMAR. This data feeds into DSM-MAN-02 for central oversight by FMAR Hub/DSI Operator. |
| DPN-SA: DPN Schema Assurance (Pilot) | In FSP/SO DPNs, validates outgoing data against the FMAR Common Ontology (likely by referencing the master schema in DSM-SA-01). In FMAR Hub's DPN, validates incoming data. |
| **DPN-SS: DPN Security Services (Pilot for most)** | All sub-components are essential for secure FSP/SO DPN operation when handling FMAR data (User Directory, Session Auth, Message Integrity, Policy Mgmt, Cert Repository, Access Control, Digital Signatures). |
| DPN-UI: DPN User Interface (Pilot for most) | FSPs/SOs use their DPN UI to manage their FMAR data sharing and could leverage all Pilot capabilities|


## DSM Component Dependencies

| DSM Component ID | FMAR Role |
|------------------|-----------|
| DSM | The central control plane that FMAR Hub uses to govern data sharing with FSP/SO DPNs. |
| DSM-DC-01: Metadata Repository (Pilot) | FMAR Hub publishes metadata about its core data services (e.g., "FMAR Registered Asset View," "FMAR FSP Directory") here. FSPs/SOs discover these FMAR services here. |
| DSM-DC-02: Search Engine (Pilot) | Enables FSPs/SOs to search for FMAR data services and potentially (with right permissions) specific asset data. |
| DSM-DC-03: Data Request Service (Pilot) | How FSPs/SOs formally request access to FMAR data services or specific datasets if not open. |
| DSM-DC-04: Notification System (Pilot) | FMAR Hub uses this to notify FSPs/SOs of data request approvals/rejections, or significant FMAR system updates. |
| DSM-DC-05: Catalogue Management (Pilot) | Elexon (as FMAR operator) uses this to manage FMAR's entries in the central catalogue. |
| DSM-DC-07: Subscription Management (MVP) | Manages FSP/SO subscriptions to FMAR data feeds or event notifications. |
| DSM-DC-08: Tagging & Categorisation (MVP) | Ensures FMAR data services in the central catalogue are correctly tagged for discoverability. |
| DSM-DC-09: Data Quality Indicators (Public Beta) | (Future): FMAR Hub could publish DQIs for its data. |
| **DSM-DC-10: Data Lineage Engine (Pilot)** | **CRITICAL Tracks lineage of data within the FMAR Hub (e.g., source of an asset update).** |
| **DSM-IN: DSM Integration (Live - but FMAR needs support NOW)** | **CRITICAL. FMAR Hub will be a primary user of these.**|
| DSM-IN-01 (API Integration)| FMAR Hub exposes its primary APIs (for ARM, SPUM, PSQM) via these centrally managed DSM API Endpoints (DSM-IN-01.01), managed by DSM-IN-01.02, with subscriptions via DSM-IN-01.03 and throttling DSM-IN-01.04. |
| DSM-IN-02 (Message Broker)| If FMAR Hub uses pub/sub for broadcasting (e.g., ontology updates, new product definitions), it will use these DSM queues (DSM-IN-02.01.01 etc.) and management services. (Other DSM-IN components like Monitoring, Logging, HA/Failover are essential for FMAR Hub's operational resilience).|
| DSM-MAN-01: DPN Integration Management (Pilot) | FMAR Hub (as DSI Operator for its specific use case) uses this to orchestrate data flows with FSP/SO DPNs for FMAR purposes. |
| DSM-MAN-02: Node Health & Monitoring (MVP) | FMAR Hub uses this to get a central view of the health/status of FSP/SO DPNs participating in FMAR data exchange. |
| **DSM-SA-01: Schema Repository (MVP)** | **CRITICAL. This is where the master FMAR Common Ontology and associated schemas (e.g., API schemas) must be stored, versioned, and governed.** |
| DSM-SA-02 (Validation Engine - MVP) & DSM-SA-03 (Versioning and Validation - MVP) | FMAR Hub uses these to validate all data exchanges against the FMAR Common Ontology. |
| DSM-SA-06 (Schema Governance & Compliance Monitoring - MVP) | Elexon, in its FMAR role, would be a key stakeholder in the governance of the FMAR-related schemas within this DSM component. |
| **DSM-SS: DSM Security Services (Pilot/MVP)** | All sub-components are critical for the FMAR Hub's secure operation and its interactions: DSM-SS-01 (Directory Services - Pilot): Central directory of all FMAR participants (FSPs, SOs, their DPNs, FMAR Hub itself). DSM-SS-02 (Key Vault - Pilot): For FMAR Hub's master keys and certificates. DSM-SS-03 (User and System Logging - MVP) & DSM-SS-04 (Auditing & Monitoring - MVP): For FMAR Hub's central audit and security monitoring. |
| **DSM-TS: Trust Services (Pilot/MVP)** | **All sub-components are essential for establishing trust in FMAR interactions: DSM-TS-01 (Entity Management - Pilot): Registers FMAR Hub, FSPs, SOs as trusted DSI entities. DSM-TS-02 (Digital Certification Service - Pilot): Issues certificates to FMAR Hub and participating DPNs. DSM-TS-03 (Data Licenses Repository - MVP): Stores the data sharing agreements and licenses governing the use of FMAR data. DSM-TS-04 (Policy Engine and Reporting - MVP): Enforces FMAR-specific data access and usage policies.** |
| DSM-UI: DSM User Interface (Pilot/MVP) | Elexon (as FMAR operator) uses this for central administration of FMAR's presence and configuration within the DSI. |

### Summary of FMAR's Key Potential DSI Dependencies:
- **Ontology/Schema Management (DSM-SA)**: FMAR needs a robust, central place to host and govern its Common Ontology.
- **API Gateway & Management (DSM-IN)**: FMAR's API-first approach relies heavily on these DSM capabilities for exposing FMAR Hub services.
- **Identity & Trust (DSM-SS, DSM-TS)**: Securely identifying and authenticating FSPs, SOs, and their DPNs is fundamental.
- **Data Discovery (DSM-DC)**: Making FMAR data services (and potentially aggregated data) discoverable.
- **DPN Capabilities**: FMAR relies on FSPs/SOs having DPNs capable of data mapping (to FMAR Ontology), secure API interaction, and local data cataloguing.


## Open Issues
- What is the timeline for the FMAR Common Ontology to be formally hosted and governed within DSM-SA-01? What support can NESO, NDTP or BSI provide as part of the standards development work required (e.g., tooling support, international engagement support, strategic leadership?
- How will FMAR's specific API requirements (e.g., for high-volume asset registration, real-time status queries) be prioritised within DSM-IN development?
- What are the DSI's mechanisms for managing dependencies between use cases like FMAR and the DSI platform's own development lifecycle?

