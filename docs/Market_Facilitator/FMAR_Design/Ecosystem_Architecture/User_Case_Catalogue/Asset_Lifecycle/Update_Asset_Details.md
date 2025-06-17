# UC-004: Update Asset Details

**Version:** v0.1

**Status:** Draft

**Last Updated:** 2025-05-29

**Owner:** FMAR Architecture Team

**Related FMAR Module(s):** ARM (Primary), SPUM (for FSP/User context), PSQM (potential impact), GICM (potential impact), DSI (for external validation if needed)

## 1. Use Case Identification

*   **Unique ID:** UC-004
*   **Name:** Update Asset Details
*   **Goal/Objective:** To allow an authorized user (typically representing the registered FSP for an asset) to modify existing information for a registered flexible asset within the FMAR Hub, ensuring the "Single Source of Truth" remains accurate and up-to-date.
*   **Scope:**
    *   **In Scope:** Modification of previously registered asset attributes (technical, locational, commercial links), versioning of asset records, validation of updated data, notification of relevant parties about material changes. Changes to asset ownership or primary FSP responsibility.
    *   **Out of Scope:** Initial asset registration (see UC-001), de-registration of an asset (see UC-005), changes to product qualification status directly (this is managed via PSQM, though asset updates might *trigger* a PSQM review).
*   **Priority:** MVP (core functionality)
*   **Frequency:** Ad-hoc (e.g., asset refurbishment, change of ownership, correction of data, change in consent status)

## 2. Actors & Roles

| Actor                             | Role in this Use Case                                     | FMAR Module Interaction | DSI Interaction Point |
| :-------------------------------- | :-------------------------------------------------------- | :---------------------- | :-------------------- |
| FSP Representative                | Initiates update, provides new/corrected asset details    | ARM, SPUM (via UI/API)  | DPN (for data push)   |
| FMAR System (Elexon)              | Validates updated data, versions asset record, notifies relevant parties | ARM, SPUM, PSQM (notify), GICM (notify) | DSM (for external validation if needed) |
| System Operator (DSO/NESO)        | Receives notification of material asset changes           | ARM (read-only access)  | N/A                   |
| Consumer Consent Solution         | May provide updated consent status triggering an asset update | N/A (Interface with FMAR)| Potentially via DSI   |

## 3. Preconditions

*   The asset is already registered in FMAR ARM (UC-001).
*   The FSP Representative initiating the update is an authenticated and authorized user in FMAR SPUM, with permissions to manage the specific asset.
*   If changing ownership or FSP, necessary legal/commercial agreements are in place externally.
*   If consent status is changing, the update is triggered/verified via the Consumer Consent Solution interface.

## 4. Postconditions

*   **Success:**
    *   The specified asset record in FMAR ARM is updated with the new information.
    *   A new version of the asset record is created (if versioning is implemented), preserving history.
    *   Updated data is validated.
    *   Relevant parties (e.g., connected SOs, potentially PSQM for re-assessment triggers) are notified of material changes.
    *   The "Single Source of Truth" for the asset reflects the latest details.
*   **Failure:**
    *   Asset update is rejected (e.g., data validation failure, insufficient permissions, conflict with business rules).
    *   Error is logged, and feedback is provided to the FSP Representative. Original asset data remains unchanged.

## 5. Main Success Scenario (Basic Flow)

1.  **FSP Representative** logs into the FMAR Hub portal or accesses FMAR via API.
2.  **FSP Representative** searches for and selects the specific asset (by FMAR Asset ID or other searchable criteria) they wish to update within ARM.
3.  **FMAR System (ARM)** displays the current details of the selected asset.
4.  **FSP Representative** modifies the relevant asset attributes (e.g., updates capacity after a refurbishment, changes Asset Owner details, updates consent reference).
5.  **FSP Representative** submits the updated asset details.
6.  **FMAR System (ARM)**:
    - a.  Performs data validation on the changed fields (mandatory fields, data types, formats against FMAR Ontology, business rules e.g., capacity cannot be negative).
    - b.  **(Optional/Future) Data Enrichment/Validation via DSI:** If certain fields are updated (e.g., MPAN), may re-query external trusted sources.
    - c.  If changing FSP or critical technical parameters, may flag for SO review or trigger re-assessment in PSQM/GICM.
    - d.  If all validations pass, updates the asset record in ARM, potentially creating a new version of the record.
8.  **FMAR System (ARM/Hub)**:
    - a.  Notifies the FSP Representative of successful update.
    - b.  If material changes occurred (e.g., capacity change, FSP change), publishes an "AssetUpdated" event or sends notifications to subscribed/relevant System Operators and other FMAR modules (PSQM, GICM).

## 6. Extensions / Alternative Flows

*   **6a. Data Validation Failure:**
    1.  Step 6.a: FMAR System (ARM) detects a validation error in the updated data.
    2.  FMAR System (ARM) logs the error and returns detailed error messages to the FSP Representative. The update is not applied.
    3.  FSP Representative corrects and resubmits (Return to Step 4).
*   **6b. Update Triggers Re-Qualification/Re-Assessment:**
    1.  Step 6.c: FMAR System (ARM) identifies that a change (e.g., significant capacity change) necessitates a review of the asset's product qualifications or grid prequalification.
    2.  FMAR System (ARM) flags the asset and notifies PSQM and/or GICM (and the relevant SO) to initiate a re-assessment process. The asset update in ARM still proceeds.
*   **6c. Change of Primary FSP for an Asset:**
    1.  FSP_New Representative initiates a request to take over an asset currently managed by FSP_Old.
    2.  FMAR System (SPUM/ARM) facilitates an approval workflow (e.g., requires confirmation from Asset Owner or FSP_Old).
    3.  Upon approval, ARM updates the FSP linkage for the asset.

## 7. Key Data Exchanged / Information Requirements

*   FMAR Asset ID (to identify the asset being updated).
*   Specific attribute(s) being changed and their new values.
*   Timestamp of update.
*   User ID of the FSP Representative making the change (for audit).
*   Reason for update (optional, for audit/tracking).
*   (All data elements defined in UC-001 are potentially updatable, subject to business rules).

## 8. Non-Functional Requirements (Specific to this UC)

*   **Auditability:** All changes to asset data must be logged with user, timestamp, and previous/new values.
*   **Versioning:** A mechanism to view historical versions of asset data is desirable.
*   **Performance:** Updates should be processed and reflected near real-time.
*   **Concurrency Control:** System must handle multiple potential updates gracefully (though typically one FSP manages an asset at a time).

## 9. User Interface Considerations (High-Level)

*   Ability to search/filter for assets to update.
*   Clear presentation of editable vs. non-editable fields (some fields might only be changeable by Elexon admins).
*   "Track changes" or "view history" functionality.

## 10. Regulatory / Policy Alignment

*   Ensures ongoing accuracy of the central asset register.
*   Supports FMRs that may require FSPs to maintain up-to-date asset information.
*   Changes to asset data must continue to respect consumer consent.

## 11. Open Issues / Questions for Workshop

*   What specific asset attributes, if changed, should automatically trigger a notification to SOs or a re-assessment in PSQM/GICM?
*   What is the detailed versioning strategy for asset records in ARM?
*   What is the agreed workflow for handling a change of FSP for an asset? Does it require approval from the outgoing FSP or Asset Owner via FMAR?

## 12. Related Artefacts

*   UC-001: Register Flexible Asset
*   UC-005: De-register Asset
*   FMAR Common Ontology
*   FMAR ARM Service Blueprint
*   FMAR API Catalogue (endpoints for asset updates)
