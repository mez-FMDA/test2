# UC-003: Register User Account in FMAR Hub

**Version:** v0.1

**Status:** Draft

**Last Updated:** 2025-05-29

**Owner:** FMAR Architecture Team

**Related FMAR Module(s):** SPUM (Primary)

## 1. Use Case Identification

*   **Unique ID:** UC-003
*   **Name:** Register User Account in FMAR Hub
*   **Goal/Objective:** To allow an authorized individual (e.g., an FSP Administrator, or an Elexon administrator for other entity types) to create a new user account within the FMAR Hub, associate it with a registered entity (like an FSP), and assign appropriate roles and permissions.
*   **Scope:**
    *   **In Scope:** Collection of individual user details, creation of a unique user identity within FMAR, association with a parent FMAR-registered entity (e.g., an FSP from SPUM), assignment of initial user roles/permissions. Password management and authentication mechanisms.
    *   **Out of Scope:** Registration of the FSP entity itself (see UC-002), management of detailed asset data (see UC-001).
*   **Priority:** MVP
*   **Frequency:** Ad-hoc (as new users need access or existing users' roles change)

## 2. Actors & Roles

| Actor                             | Role in this Use Case                                     | FMAR Module Interaction | DSI Interaction Point |
| :-------------------------------- | :-------------------------------------------------------- | :---------------------- | :-------------------- |
| FSP Administrator                 | Initiates registration for a new user within their FSP    | SPUM (via UI/API)       | N/A                   |
| New User (from FSP)               | May need to complete parts of registration (e.g., set password) | SPUM (via UI)           | N/A                   |
| FMAR System Administrator (Elexon)| Potentially registers users for SOs, Regulators, or Elexon itself | SPUM (via UI)           | N/A                   |
| FMAR System (Elexon)              | Validates data, creates user record, manages credentials & permissions | SPUM                    | DSM-SS (Directory - for authN/authZ) |

## 3. Preconditions

*   The parent entity (e.g., FSP "FlexiSource Ltd") is already registered in FMAR SPUM (see UC-002).
*   The Actor initiating the user registration (e.g., FSP Administrator) is authenticated and has the necessary permissions within SPUM to manage users for their entity.
*   The new user has a valid email address.

## 4. Postconditions

*   **Success:**
    *   A new user account is created in FMAR SPUM, linked to the specified parent entity.
    *   The user is assigned a Unique FMAR User ID.
    *   The user is assigned initial roles and permissions within FMAR.
    *   The new user can securely authenticate and access FMAR functionalities according to their assigned permissions.
*   **Failure:**
    *   User registration is rejected (e.g., invalid email, duplicate user for that entity, insufficient permissions of initiator).
    *   Error is logged, and feedback is provided to the initiating Actor.

## 5. Main Success Scenario (Basic Flow - FSP Admin registering a new user for their FSP)

1.  **FSP Administrator** logs into the FMAR Hub portal.
2.  **FSP Administrator** navigates to the user management section for their FSP within SPUM.
3.  **FSP Administrator** initiates the "Add New User" process.
4.  **FMAR System (SPUM)** presents a form (or API schema) requesting new user details (e.g., Full Name, Email Address, Job Title/Role within FSP, desired FMAR roles).
5.  **FSP Administrator** submits the new user's details.
6.  **FMAR System (SPUM)**:
    a.  Performs data validation (e.g., valid email format, checks for existing user with that email under the same FSP).
    b.  Creates a new user record, associating it with the FSP Administrator's parent FSP entity.
    c.  Assigns a Unique FMAR User ID.
    d.  Assigns the selected initial FMAR roles/permissions to the new user.
    e.  Initiates a secure account activation process for the new user (e.g., sends an activation email with a temporary password or a link to set a password).
7.  **FMAR System (SPUM)** notifies the FSP Administrator of successful user creation.
8.  **New User** receives the activation email, completes the activation process (e.g., sets their password).
9.  **New User** can now log in to the FMAR Hub with their credentials and access permitted functionalities.

## 6. Extensions / Alternative Flows

*   **6a. User Self-Registration (with FSP Admin Approval - Future Consideration):**
    1.  A potential user (knowing their FSP is registered) attempts to self-register.
    2.  FMAR System (SPUM) captures details and sends an approval request to the registered FSP Administrator for that FSP.
    3.  FSP Administrator approves/rejects. If approved, flow continues from Step 6.e in Main Success Scenario.
*   **6b. FMAR System Administrator Registers User for Non-FSP Entity:**
    1.  Similar flow to Main Success Scenario, but initiated by an Elexon FMAR Admin for an entity like a DSO or Regulator.
*   **6c. Duplicate User Email within the Same Entity:**
    1.  Step 6.a: FMAR System (SPUM) detects an existing user with the same email address already associated with that FSP.
    2.  FMAR System (SPUM) notifies the FSP Administrator of the duplication and prevents creation.
    3.  Use case ends or FSP Admin investigates.

## 7. Key Data Exchanged / Information Requirements

| Data Element / Group        | Description                               | Source                | Destination(s)      | Format/Standard (FMAR Ontology) | FMR Linkage | DSI Component |
| :-------------------------- | :---------------------------------------- | :-------------------- | :------------------ | :------------------------------ | :---------- | :------------ |
| User Full Name              | Full name of the individual user          | FSP Admin / User      | FMAR SPUM           | `fmarOntology:PersonName`       | N/A         | N/A           |
| User Email Address          | Unique email for login & communication    | FSP Admin / User      | FMAR SPUM           | `fmarOntology:Email` (Validated)| N/A         | N/A           |
| Associated FSP ID           | Unique FMAR FSP ID of the parent entity   | FSP Admin (Implicit)  | FMAR SPUM           | `fmarOntology:FspID`            | N/A         | N/A           |
| FMAR User Role(s)           | Assigned roles within FMAR (e.g., Asset Manager, Data Viewer) | FSP Admin             | FMAR SPUM           | `fmarOntology:UserRole` (Enum)  | N/A         | N/A           |
| Unique FMAR User ID         | System-generated unique ID for the user   | FMAR SPUM             | User, FSP Admin     | `fmarOntology:UserID` (UUID)    | N/A         | N/A           |
| User Password / Credentials | For authentication                        | User / FMAR System    | FMAR SPUM (Hashed)  | (Secure Hashed)                 | N/A         | DSM-SS (Directory) |

## 8. Non-Functional Requirements (Specific to this UC)

*   **Security:** Robust password policies, secure storage of credentials, MFA options. All user management actions must be logged for audit.
*   **Performance:** User creation and login should be near real-time.
*   **Usability:** Clear interface for FSP Admins to manage users. Simple and secure activation process for new users.

## 9. User Interface Considerations (High-Level)

*   FSP Admin dashboard: View/add/edit/deactivate users for their FSP.
*   New user registration form.
*   User profile page for individuals to manage their own details (e.g., password changes).
*   Secure password reset mechanism.

## 10. Regulatory / Policy Alignment

*   User access must comply with GDPR regarding personal data handling.
*   Role-based access control must be enforced to ensure users only access data and functions they are authorized for (aligns with NIS2 principles for critical systems).
*   Audit trails of user creation and permission changes support compliance.

## 11. Open Issues / Questions for Workshop

*   What is the definitive list of user roles and associated permissions for FMAR MVP?
*   What is the agreed password policy and MFA strategy?
*   Should there be a limit on the number of administrators per FSP entity?
*   What is the process for de-activating/deleting user accounts when an individual leaves an FSP?

## 12. Related Artefacts

*   UC-002: Register Flexibility Service Provider
*   FMAR Common Ontology (User, Role, Permission entity definitions)
*   FMAR SPUM Service Blueprint
*   FMAR Security Model for App Layer
