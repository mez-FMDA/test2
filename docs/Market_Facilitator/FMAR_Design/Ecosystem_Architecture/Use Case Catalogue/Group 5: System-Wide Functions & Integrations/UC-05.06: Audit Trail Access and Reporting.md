
# Use Case UC-05.06: Audit Trail Access and Reporting
**Primary Module:** All Modules (Logging/Audit Layer)

| Element             | Description                                                                                                                                                                                                                          |
| :------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description**     | Enables authorised parties to access a detailed, immutable, and user-friendly audit trail of all significant changes made to data records within FMAR for which they have a legitimate interest.                                        |
| **Goal**            | To provide complete transparency and accountability for all data management activities within FMAR, supporting forensic analysis, dispute resolution, and regulatory oversight.                                                      |
| **Actors**          | FSP (for their own data), System Operator (for data they interact with), Ofgem, FMAR Administrator.                                                                                                                                 |
| **Preconditions**   | • The user is authenticated and authorised via SPUM. |
| **Process Summary** | 1. An authorised user makes an API query to the FMAR Audit Layer for a specific record (e.g., by FMAR Asset ID or Market Unit ID). <br> 2. The system retrieves the full version history for that record, including what data was changed, who made the change, and the precise timestamp. <br> 3. The audit trail is returned in a secure, machine-readable format. |
| **Postconditions**  | • The user receives a complete and trustworthy history of a data record. |
| **Dependencies**    | • Requires every data-modifying transaction in every FMAR module to be written to an immutable audit log. |
| **Key Considerations** | • The audit trail itself must be protected from tampering. <br> • The level of detail and retention period for audit logs needs to be defined in a clear data policy. |
