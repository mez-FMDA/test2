# UC-002: Register Flexibility Service Provider (FSP) with FMAR Hub

**Version:** v0.2

**Status:** Draft

**Last Updated:** 2025-05-30

**Owner:** FMAR Architecture Team

**Related FMAR Module(s):** SPUM (Primary), ARM (Indirectly, as FSP owns/manages assets), DSI (for entity verification & secure interaction)

## 1. Use Case Identification

*   **Unique ID:** UC-002
*   **Name:** Register Flexibility Service Provider (FSP) with FMAR Hub
*   **Goal/Objective:** To allow a new or existing Flexibility Service Provider entity to have its core details registered and maintained within the FMAR Hub (SPUM), establishing its recognized identity for participation in GB flexibility markets. This registration can be initiated directly with FMAR or via an authorized external platform.
*   **Scope:**
    *   **In Scope:**
        *   Collection and validation of a defined minimum set of core FSP entity information.
        *   Creation/update of an FSP record in FMAR SPUM.
        *   Assignment/recognition of a Unique FMAR FSP ID.
        *   Initial user account setup for direct FMAR interaction (if applicable).
        *   Standardized API interfaces for external platforms to submit FSP registration data to FMAR SPUM.
        *   Verification against external trusted sources (e.g., Companies House).
    *   **Out of Scope:** Asset registration (see UC-001), product qualification (see UC-XXX), detailed financial vetting beyond basic checks. The internal registration process *within* an external platform.
*   **Priority:** MVP
*   **Frequency:** Ad-hoc (new FSPs) / As needed (updates from existing FSPs/platforms)

## 2. Actors & Roles

| Actor                             | Role in this Use Case                                     | FMAR Module Interaction | DSI Interaction Point |
| :-------------------------------- | :-------------------------------------------------------- | :---------------------- | :-------------------- |
| FSP Administrator (New FSP Rep)   | Initiates registration directly or via their chosen platform, provides FSP details | SPUM (via UI/API)       | DPN-UI (for DPN reg)  |
| **External Platform Operator**    | **(Optional) Facilitates FSP registration with FMAR on behalf of FSP, submits data via API** | **SPUM (via API)**      | **DPN (for API comms)**|
| FMAR System (Elexon)              | Validates data, creates/updates FSP record, assigns FSP ID, manages direct user accounts | SPUM, ARM (links)       | DSM (Trust, Security) |
| DSI Trust Authority (DSI Operator)| Verifies entity identity, issues/manages DPN certificates   | N/A (Indirect via DSM)  | DSM-TS                |
| External Trusted Source (e.g., Companies House) | Provides data for FSP entity validation                 | N/A (Accessed via DSI)  | Potentially via DSI   |

## 3. Preconditions

*   The applying FSP entity is a legitimate business entity.
*   The FSP Administrator (or External Platform acting on their behalf) has the authority to register/update the FSP's details with FMAR.
*   **If via External Platform:** The External Platform is authorized and technically integrated to submit FSP registration data to FMAR SPUM via the defined API.
*   FMAR Hub (SPUM) is operational and accessible.
*   Relevant Actors have installed Data Preparation Node (DPN) (assumption)

## 4. Postconditions

*   **Success:**
    *   FSP entity record is created/updated in FMAR SPUM with a Unique FMAR FSP ID.
    *   (If direct registration) Initial FSP Administrator user account is created in SPUM.
    *   FSP is now recognized by FMAR and can proceed with asset registration (directly or via platform).
    *   Audit trail of registration/update is created.
*   **Failure:**
    *   FSP registration/update is rejected (e.g., validation failure, unauthorized platform).
    *   Error is logged, and feedback is provided to the initiating party (FSP Admin or External Platform).

## 5. Main Success Scenarios (Basic Flows)

**Scenario A: Direct Registration with FMAR Hub**
1.  **FSP Administrator** accesses the FMAR Hub portal/API.
2.  **FSP Administrator** initiates the "Register New FSP" process.
3.  **FMAR System (SPUM)** presents a registration form (or API schema) requesting the **defined minimum set of core FSP details**.
4.  **FSP Administrator** submits the FSP details.
5.  **FMAR System (SPUM)**:
    - a.  Performs initial data validation.
    - b.  (Potentially via DSI) Verifies FSP entity against external trusted sources.
    - c.  If successful, creates a new FSP record in SPUM and assigns a Unique FMAR FSP ID.
    - d.  Creates an initial administrator user account for the FSP Rep.
6.  **FMAR System (SPUM)** notifies the FSP Administrator of successful registration.

**Scenario B: Registration via an Authorized External Platform**
1.  **FSP Administrator** registers/updates their details on their chosen **External Platform** (e.g., aggregator platform, commercial market interface).
2.  **External Platform** (acting on behalf of the FSP, with appropriate authorization) prepares the **defined minimum set of FSP data** required by FMAR.
3.  **External Platform** submits this FSP data to **FMAR System (SPUM) via a standardized "FSP Registration API"**. (This interaction would use DSI principles for secure data exchange if the platform has a DPN).
4.  **FMAR System (SPUM)**:
    - a.  Authenticates the External Platform.
    - b.  Performs initial data validation on the submitted FSP data.
    - c.  (Potentially via DSI) Verifies FSP entity against external trusted sources.
    - d.  If successful, creates/updates the FSP record in SPUM and assigns/confirms the Unique FMAR FSP ID.
5.  **FMAR System (SPUM)** sends an acknowledgement (success/failure with FMAR FSP ID) back to the **External Platform via API**.
6.  **External Platform** updates its local records and informs the FSP Administrator.

## 6. Extensions / Alternative Flows

*   **6a. FSP Entity Validation Failure:**
    1.  Step 5.b (Scenario A) or 4.c (Scenario B): FMAR System (SPUM) fails to validate FSP details against external trusted sources.
    2.  FMAR System (SPUM) logs the failure and notifies the initiating party (FSP Admin or External Platform) with the reason for rejection and instructions for remediation.
    3.  Use case ends.
*   **6b. Incomplete Information Submitted:**
    1.  Step 5.a (Scenario A) or 4.b (Scenario B): FMAR System (SPUM) detects missing mandatory information.
    2.  FMAR System (SPUM) returns an error to the initiating party, highlighting missing fields.
    3.  Initiating party corrects and resubmits.
*   **6c. FSP Already Registered (Update Scenario):**
    1.  FSP Admin/External Platform initiates an update to existing FSP details.
    2.  FMAR System (SPUM) verifies authorization to update the identified FSP record.
    3.  SPUM validates new data and updates the existing FSP record.
    4.  Confirmation sent to the initiating party.

## 7. Key Data Exchanged / Information Requirements

| Data Element / Group        | Description                               | Source(s)                | Destination(s)       | DSI Component |
| :-------------------------- | :---------------------------------------- | :----------------------- | :------------------ |:------------ |
| **(Minimum FMAR FSP Data Set - TBD in workshops)** | *This set needs to be defined to support both direct and platform-based registration.* |                 |                                 |             |               |
| FSP Legal Name              | Official registered name of the FSP       | FSP Admin / Ext. Platform| FMAR SPUM          | N/A           |
| Company Registration Number | FSP's official registration number        | FSP Admin / Ext. Platform| FMAR SPUM, DSI (for validation) |  | DSM-TS (Entity Mgmt) |
| Registered Address          | Official address of the FSP               | FSP Admin / Ext. Platform| FMAR SPUM   | N/A           |
| Primary Contact Email       | Main operational contact for the FSP      | FSP Admin / Ext. Platform| FMAR SPUM   | N/A           |
| Unique FMAR FSP ID          | System-generated/managed unique ID for FSP| FMAR SPUM                | FSP Admin, Ext. Platform, ARM, PSQM | N/A           |
| User Credentials (for direct access) | Login details for FSP Admin               | FMAR SPUM                | FSP Admin         | DSM-SS (Directory) |
| DPN Certificate Info (if platform uses DPN) | Info for DSI Trust Authority to issue DPN cert | FSP Admin (via DPN-UI)/ Ext. Platform  | DSM-TS (Digital Cert) |
| External Platform ID (Optional)| Identifier of the platform submitting data| External Platform        | FMAR SPUM (for audit) | N/A           |

## 8. Non-Functional Requirements (Specific to this UC)

*   **Interoperability:** FMAR SPUM must provide a well-defined, secure, and versioned API for external platforms to submit FSP registration data. This API must use the FMAR Common Ontology.
*   **Data Minimisation:** The "minimum set of required data fields" for platform-based registration must be clearly defined and justified to avoid unnecessary data transfer.
*   **Performance:** FSP registration/update process (UI/API) should complete within [X] minutes upon submission of valid data.
*   **Security:** All FSP data, especially PII and credentials, must be stored and transmitted securely, adhering to NCSC guidelines and GDPR. RBAC enforced by SPUM. Authentication of external platforms is critical.
*   **Availability:** FSP registration service (direct and API) should meet [Y]% availability.
*   **Usability:** Direct registration UI must be intuitive. API for platforms must be well-documented with clear error codes.

## 9. User Interface Considerations (High-Level)

*   For direct FMAR registration: Clear, step-by-step UI form. Progress indicators. Secure credential management.
*   For platform integration: Focus is on robust API design, comprehensive API documentation, and potentially a "developer portal" or sandbox environment for external platform integrators to test against.
*   FMAR UI for Elexon/MF Admins: To manage authorized external platforms, view registration logs, and oversee FSP data.

## 10. Regulatory / Policy Alignment

*   Aligns with Ofgem's objective to simplify FSP onboarding and **not increase FSP workload by allowing registration via existing/preferred platforms.**
*   Supports FMR requirements for identifying and tracking market participants/actors.
*   Data handling must comply with GDPR and relevant data protection laws.
*   Process must align with DSI Trust Framework for entity verification, secure communication, and authorization of platforms acting on behalf of FSPs.

## 11. Open Issues / Questions for Workshop

*   **What is the definitive *minimum set of data fields* FMAR requires for an FSP registration when submitted via an external platform vs. direct registration?**
*   What are the authentication/authorization mechanisms for external platforms to submit data to FMAR SPUM on behalf of FSPs? (Leveraging DSI Trust Services).
*   How are updates/synchronization handled if an FSP's details change on an external platform after initial FMAR registration? (e.g., Event-driven push from platform to FMAR? Periodic FMAR pull?).
*   What is the process for an FSP to authorize/de-authorize an external platform to manage its FMAR data?
*   What are the data validation responsibilities: what checks does the external platform perform vs. what checks does FMAR SPUM perform on data received via API?
*   How will FMAR SPUM handle potential conflicts if an FSP attempts direct registration while also being managed via an external platform?
*   How would DSI Trust Services function to attest for FSP in Scenario B where DPN installed on external platform?

## 12. Related Artefacts

*   UC-001: Asset Registration and Maintenance
*   FMAR Common Ontology (specifically FSP, User, and Platform entity definitions)
*   FMAR SPUM Service Blueprint
*   FMAR API Catalogue (specifically the "FSP Registration API" endpoints for external platforms)
*   **FMAR External Platform Integration Guide (New Artefact to consider)**
*   DSI Specification Document (relevant sections on Entity Management, Trust Services, DPN-DSM API interactions)
