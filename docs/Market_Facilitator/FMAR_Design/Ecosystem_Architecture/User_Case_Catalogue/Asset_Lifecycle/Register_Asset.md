# UC-001: Register Flexible Asset

**Version:** v0.1

**Status:** Draft

**Last Updated:** 2025-05-29

**Owner:** FMAR Architecture Team

**Related FMAR Module(s):** ARM (Primary), SPUM (for FSP/User context), DSI (for data exchange & external validation sources)

## 1. Use Case Identification

*   **Unique ID:** UC-001
*   **Name:** Register Flexible Asset
*   **Goal/Objective:** To allow an authorized user (typically representing a registered FSP) to register a new flexible asset into the FMAR Hub, providing all necessary technical, locational, and commercial data, resulting in the assignment of a Unique FMAR Asset ID.
*   **Scope:**
    *   **In Scope:** Collection of core and technology-specific asset attributes, validation of data against the FMAR Common Ontology and business rules, assignment of a Unique FMAR Asset ID, linking the asset to the registering FSP and potentially the Asset Owner. Initial capture of data to support future product qualification and dispatch API FMR. Referencing consumer consent status.
    *   **Out of Scope:** Detailed product qualification of the asset (see UC-XXX: Qualify Asset/SPU for Product), real-time operational control of the asset, detailed validation against live network conditions (that's more GICM/grid prequalification), ongoing updates post-initial registration (see UC-YYY: Update Asset Details).
*   **Priority:** MVP
*   **Frequency:** Ad-hoc (as new assets are brought into flexibility markets)

## 2. Actors & Roles

| Actor                             | Role in this Use Case                                     | FMAR Module Interaction | DSI Interaction Point |
| :-------------------------------- | :-------------------------------------------------------- | :---------------------- | :-------------------- |
| FSP Representative (e.g., Asset Onboarding Specialist) | Initiates registration, provides asset details            | ARM, SPUM (via UI/API)  | DPN (for data push)   |
| Asset Owner (Indirect)            | Provides asset details and consent to the FSP             | N/A (Data source for FSP)| N/A                   |
| Installer (Indirect)              | May provide initial commissioning data to FSP/Owner       | N/A (Data source for FSP)| N/A                   |
| FMAR System (Elexon)              | Validates data, creates asset record, assigns Asset ID, links to FSP | ARM, SPUM               | DSM (for external validation lookups if needed) |
| External Trusted Data Source (e.g., OEM Catalogue, ENA TTR, MPAS) | Provides data for validation/enrichment of asset details | N/A (Accessed via DSI/FMAR) | Potentially via DSI   |
| Consumer Consent Solution         | Provides status of consumer consent for data sharing/use  | N/A (Interface with FMAR)| Potentially via DSI   |


## 3. Preconditions

*   The FSP entity is registered in FMAR SPUM (UC-002).
*   The FSP Representative initiating the registration is an authenticated and authorized user in FMAR SPUM, with permissions to register assets on behalf of their organisation.
*   The FSP has obtained necessary consent from the Asset Owner (especially for consumer-owned assets) for registration and data sharing, and this consent status is verifiable/referenceable by FMAR (e.g., via an interface with a Consumer Consent Solution).
*   The FSP has collected all required core and technology-specific data for the asset.

## 4. Postconditions

*   **Success:**
    *   A new asset record is created in FMAR ARM with a Unique FMAR Asset ID.
    *   The asset record is linked to the registering FSP (from SPUM) and potentially the Asset Owner.
    *   Asset data is validated against the FMAR Common Ontology and defined business rules.
    *   The asset is now discoverable by authorized System Operators via FMAR.
    *   The asset is eligible to be included in an SPU/SPG for product qualification (PSQM).
*   **Failure:**
    *   Asset registration is rejected (e.g., data validation failure, missing mandatory information, duplicate asset, consent issue).
    *   Error is logged, and feedback is provided to the FSP Representative.

## 5. Main Success Scenario (Basic Flow)

1.  **FSP Representative** logs into the FMAR Hub portal or accesses FMAR via API.
2.  **FSP Representative** initiates the "Register New Asset" process.
3.  **FMAR System (ARM)** presents a form (or API schema) requesting asset details, structured according to the FMAR Common Ontology. This includes:
    - a.  Core asset attributes (e.g., proposed name/identifier, location (MPAN), technology type).
    - b.  Technology-specific attributes (e.g., for BESS: capacity, power rating; for EV Charger: max rate).
    - c.  Linkage to Asset Owner (if different from FSP).
    - d.  Reference to Consumer Consent (e.g., Consent ID from a Consumer Consent Solution).
    - e.  (Potentially) Existing identifiers like MRID or OEM serial numbers.
4.  **FSP Representative** submits the asset details.
5.  **FMAR System (ARM)**:
    - a.  Performs initial data validation (mandatory fields, data types, formats against FMAR Ontology).
    - b.  **De-duplication Check:** Verifies if an identical asset (e.g., based on MPAN + key tech identifier) already exists.
    - c.  **(Optional/Future) Data Enrichment/Validation via DSI:** May query external trusted sources (OEM catalogues via DSI, MPAS via DSI) to validate or enrich submitted data (e.g., verify MPAN details, lookup default tech specs from OEM).
    - d.  **Consent Verification:** Checks/references the provided Consumer Consent ID/status against the Consumer Consent Solution.
    - e.  If all validations pass, creates a new asset record in ARM.
    - f.  Assigns a **Unique FMAR Asset ID**.
    - g.  Links the asset to the registering FSP's record in SPUM.
6.  **FMAR System (ARM)** notifies the FSP Representative of successful registration and provides the Unique FMAR Asset ID.
7.  The asset is now visible to the FSP within their FMAR portfolio and to authorized SOs.

## 6. Extensions / Alternative Flows

*   **6a. Data Validation Failure:**
    1.  Step 5.a, 5.b, 5.c, or 5.d: FMAR System (ARM) detects a validation error (e.g., invalid MPAN format, missing mandatory tech spec, duplicate asset, consent issue).
    2.  FMAR System (ARM) logs the error and returns detailed error messages to the FSP Representative, highlighting fields needing correction.
    3.  FSP Representative corrects and resubmits (Return to Step 4).
*   **6b. Bulk Asset Registration:**
    1.  FSP Representative initiates a bulk registration process (e.g., via API or file upload).
    2.  FMAR System (ARM) processes each asset record as per the Main Success Scenario, providing a consolidated success/failure report for the batch.
*   **6c. Asset Already Has an MRID:**
    1.  Step 3: FSP Representative provides the existing MRID.
    2.  Step 5.e: FMAR System (ARM) stores the MRID as a key attribute and ensures its FMAR Asset ID is clearly linked to this MRID. FMAR still assigns its own primary Unique FMAR Asset ID for internal consistency.

## 7. Key Data Exchanged / Information Requirements

| Data Element / Group        | Description                               | Source                | Destination(s)      | DSI Component |
| :-------------------------- | :---------------------------------------- | :-------------------- | :------------------ |   :------------ |
| FMAR FSP ID                 | ID of the registering FSP                 | FSP Rep (Implicit from login) | FMAR ARM            | SPUM (source) |
| Asset Location (MPAN)       | Meter Point Administration Number         | FSP Rep               | FMAR ARM            |  (Validation via DSI-MPAS) |
| Asset Technology Type       | e.g., BESS, EV_Charger, SolarPV           | FSP Rep               | FMAR ARM            |  (Validation via DSI-OEM Cat.) |
| Asset Capacity (Power)      | Max import/export capacity                | FSP Rep               | FMAR ARM            |        |
| Asset Capacity (Energy)     | For storage: MWh                          | FSP Rep               | FMAR ARM            |      |
| *(Other tech-specific attrs)*| *(as defined in FMAR Ontology)*           | FSP Rep               | FMAR ARM            |  |
| Consumer Consent ID/Ref     | Link to consent record                    | FSP Rep               | FMAR ARM            |Consumer Consent Sol. (via DSI) |
| Existing MRID (Optional)    | Master Resource Identifier if exists      | FSP Rep               | FMAR ARM            | (Validation via DSI-NESO) |
| Unique FMAR Asset ID        | System-generated unique ID for the asset  | FMAR ARM              | FSP Rep, SOs, PSQM  |  N/A           |

## 8. Non-Functional Requirements (Specific to this UC)

*   **Performance:** Registration of a single asset via UI/API should be near real-time. Bulk registration performance targets TBD.
*   **Scalability:** System must handle registration of millions of assets.
*   **Data Integrity:** Strong validation rules to ensure high-quality data. Audit trail of all registrations and changes.
*   **Security:** Role-based access control; FSPs can only register/manage their own assets.

## 9. User Interface Considerations (High-Level)

*   Intuitive forms for single asset registration, with dynamic fields based on technology type.
*   Clear error messaging and guidance.
*   Mechanism for bulk upload (e.g., CSV template, API).
*   Dashboard for FSPs to view and manage their registered asset portfolio.

## 10. Regulatory / Policy Alignment

*   Supports Ofgem's objective of a "one-stop-shop" for asset registration.
*   Must align with DSI principles for data exchange and external data source integration.
*   Requires robust handling of consumer consent in line with GDPR and Ofgem's Consumer Consent policy.

## 11. Open Issues / Questions for Workshop

*   What is the definitive list of core and technology-specific attributes for ARM MVP? 
*   What is the agreed strategy for de-duplication (e.g., MPAN + Serial Number)?
*   How deep should validation against external sources (MPAS, OEM catalogues) be for MVP? What are the DSI interfaces?
*   What are the specific requirements and SLAs for the Consumer Consent Solution interface?
*   How are "boundary point metering" assets registered vs. "asset-level metering" assets?

## 12. Related Artefacts

*   UC-002: Register Flexibility Service Provider
*   UC-XXX: Update Asset Details
*   UC-YYY: Validate Asset (if a separate UC)
*   FMAR Common Ontology (Asset entity, technical attributes)
*   FMAR ARM Service Blueprint
*   FMAR API Catalogue (endpoints for asset registration)
*   DSI Specification Document
*   ENA GB Profile Dispatch API Implementation Guide (for Asset ID considerations)
