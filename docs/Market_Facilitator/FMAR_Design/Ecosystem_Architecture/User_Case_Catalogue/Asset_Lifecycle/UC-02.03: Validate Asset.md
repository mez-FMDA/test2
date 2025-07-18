# Use Case UC-02.03: Validate Asset  
**Primary Module:** ARM  

| Element          | Description                                                                                                                               |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Description      | Ensures that the data provided for a registered asset is authentic and accurate.                                                          |
| Goal             | To build trust in FMAR data by verifying it against external, authoritative sources where possible.                                        |
| Actors           | FMAR System (automated), FMAR Administrator.                                                                                              |
| Preconditions    | • An asset is registered in ARM.                                                                                                          |
| Process Summary  | 1. ARM receives asset data (e.g., MPAN, device serial number). <br> 2. FMAR initiates an automated check against a federated, trusted external data source (e.g., DNO's connection data via DSI, OEM device registry). <br> 3. The asset record in ARM is updated with a validation status (e.g., "Verified," "Unverified," "Query"). |
| Postconditions   | • The asset record in ARM has a clear, auditable validation status.                                                                        |
| Dependencies     | • Relies on the availability and accessibility of trusted external data sources via DSI.                                                   |
| Key Considerations | • The scope and sources for validation need to be clearly defined and governed.                                                           |
