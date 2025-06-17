# UC-005: De-register Flexible Asset

**Version:** v0.1

**Status:** Draft

**Last Updated:** 2025-05-29

**Owner:** FMAR Architecture Team

**Related FMAR Module(s):** ARM (Primary), SPUM (for FSP/User context), PSQM (impact), GICM (impact)

## 1. Use Case Identification

*   **Unique ID:** UC-005
*   **Name:** De-register Flexible Asset
*   **Goal/Objective:** To allow an authorized user (typically representing the registered FSP for an asset) to formally remove an asset from active participation in flexibility markets via the FMAR Hub, or to mark it as permanently decommissioned.
*   **Scope:**
    *   **In Scope:** Changing the status of an asset in ARM to "De-registered," "Withdrawn," or "Decommissioned." Archiving asset data according to data retention policies. Notifying relevant parties of the de-registration. Unlinking the asset from active SPUs/SPGs in PSQM.
    *   **Out of Scope:** Physical decommissioning of the asset, resolution of outstanding contractual/settlement obligations (these are external processes, though FMAR data supports them).
*   **Priority:** MVP (core functionality)
*   **Frequency:** Ad-hoc (e.g., asset reaches end-of-life, asset no longer offered for flexibility, FSP contract ends)

## 2. Actors & Roles

| Actor                             | Role in this Use Case                                     | FMAR Module Interaction | DSI Interaction Point |
| :-------------------------------- | :-------------------------------------------------------- | :---------------------- | :-------------------- |
| FSP Representative                | Initiates de-registration of an asset they manage         | ARM, SPUM (via UI/API)  | N/A                   |
| FMAR System (Elexon)              | Processes de-registration, updates status, archives data, notifies parties | ARM, PSQM (notify), GICM (notify) | N/A                   |
| System Operator (DSO/NESO)        | Receives notification of asset de-registration            | ARM (read-only access)  | N/A                   |

## 3. Preconditions

*   The asset is currently registered in FMAR ARM (UC-001) with an "Active" or similar status.
*   The FSP Representative initiating the de-registration is an authenticated and authorized user in FMAR SPUM, with permissions to manage the specific asset.
*   Any outstanding market commitments for the asset have been managed/concluded externally (FMAR may not enforce this but should note it).

## 4. Postconditions

*   **Success:**
    *   The asset's status in FMAR ARM is updated to "De-registered" (or "Decommissioned," "Withdrawn").
    *   The asset is no longer considered active for new flexibility market participation via FMAR.
    *   The asset is unlinked from any active SPUs/SPGs in PSQM.
    *   Relevant parties (e.g., connected SOs) are notified.
    *   Asset data is archived according to FMAR data retention policies (but may still be accessible for historical reporting/audit).
*   **Failure:**
    *   Asset de-registration is rejected (e.g., insufficient permissions, asset has critical open commitments that FMAR *is* aware of – though unlikely for MVP).
    *   Error is logged, and feedback is provided to the FSP Representative. Asset status remains unchanged.

## 5. Main Success Scenario (Basic Flow)

1.  **FSP Representative** logs into the FMAR Hub portal or accesses FMAR via API.
2.  **FSP Representative** searches for and selects the specific asset (by FMAR Asset ID) they wish to de-register within ARM.
3.  **FSP Representative** initiates the "De-register Asset" process, potentially providing a reason for de-registration (e.g., Decommissioned, End of Contract, No Longer Flexible).
4.  **FMAR System (ARM)**:
    - a.  Confirms the FSP Representative's authority to de-register this asset.
    - b.  Updates the asset's status in ARM to "De-registered" (or the specified final status).
    - c.  Records the de-registration reason and timestamp.
5.  **FMAR System (ARM/Hub)**:
    - a.  Notifies the FSP Representative of successful de-registration.
    - b.  Publishes an "AssetDeRegistered" event or sends notifications to:
        *   Relevant System Operators.
        *   PSQM (to update any SPUs/SPGs containing this asset).
        *   GICM (to remove from active constraint considerations).
    - c.  Initiates data archiving procedures for the asset record as per FMAR data retention policy.

## 6. Extensions / Alternative Flows

*   **6a. De-registration due to FSP Ceasing to Manage Asset (but asset remains):**
    1.  FSP Representative indicates they are no longer managing the asset, but it's not decommissioned.
    2.  FMAR System (ARM) might change status to "Inactive - Awaiting New FSP" or similar, rather than full "De-registered." This asset could then be claimed/re-registered by a new FSP.
*   **6b. Bulk De-registration:**
    1.  FSP Representative initiates a bulk de-registration process for multiple assets.
    2.  FMAR System (ARM) processes each asset as per the Main Success Scenario, providing a consolidated report.

## 7. Key Data Exchanged / Information Requirements

*   FMAR Asset ID (to identify the asset being de-registered).
*   Reason for de-registration (enum or free text).
*   Timestamp of de-registration.
*   User ID of the FSP Representative making the change (for audit).

## 8. Non-Functional Requirements (Specific to this UC)

*   **Auditability:** All de-registrations must be logged with user, timestamp, and reason.
*   **Data Retention:** Clear policies for how long de-registered asset data is retained and accessible for audit/historical purposes.
*   **Irreversibility (of certain statuses):** A "Decommissioned" status should likely be final.

## 9. User Interface Considerations (High-Level)

*   Clear option to de-register an asset from the asset management view.
*   Confirmation step before final de-registration.
*   Ability to view de-registered/archived assets (for authorized users).

## 10. Regulatory / Policy Alignment

*   Ensures FMAR accurately reflects active flexible capacity.
*   Supports FMRs related to asset lifecycle management.
*   Data retention policies must comply with relevant legal and regulatory requirements.

## 11. Open Issues / Questions for Workshop

*   What are the definitive final statuses for an asset (De-registered, Withdrawn, Decommissioned, Archived)? What are the implications of each?
*   What is the agreed FMAR data retention policy for de-registered assets?
*   What is the process if an asset is de-registered by one FSP but is immediately re-registered by another? How is continuity handled?
*   Should SOs have any ability to flag assets for de-registration review (e.g., if an asset consistently fails to perform or is known to be physically gone)?

## 12. Related Artefacts

*   UC-001: Register Flexible Asset
*   UC-004: Update Asset Details
*   UC-XXX: Export Registered Asset Data
*   FMAR Data Retention Policy (to be developed)
*   FMAR Common Ontology
*   FMAR ARM Service Blueprint
*   FMAR API Catalogue (endpoints for asset de-registration)
