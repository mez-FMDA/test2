# Common End to End process – Level 1 and Level 2 Definitions with Time Dimension for Workshop

| Version | Date       | Changes                      | Author   |
|---------|------------|------------------------------|----------|
| v1.0  | 2025-05 | Shared over email post-E2E workshop #2 | MB   |
| v1.5  | 2025-06 | Changed L1 Registration to Qualification following FDI workshop. Condensed R.1-R.3 Register User/Organisation/Related Entity to R.1 Register Counterparty, added V.5 Report on Service Delivery, following SME interviews. | MB   |
| v2.0  | 2025-07-29 | Published in markdown on GitHub, linked in FlexNews pre- FMAR workshop #1| MB   |
| v2.1  | 2025-08 | Addition of R.9 Register Baseline, addition of Data Object Inputs/Outputs, addition of Time Dimensions| MB   |
| v3.0  | 2025-08 | Published in markdown on GitHub, shared in E2E Workshop pre-consultation| MB   |
| v3.1  | 2025-08 | Inclusion of JSON for v3.0 building blocks| MB   |
| v3.2  | 2025-08 | Added V.4 Communicate Penalties, Updated Verification Data Objects to embed penalties and compliance| MB   |


## Level 1 – Market Phases

1. **Exploration**  
   Activities to understand market opportunities, assess potential participation, and form an initial strategy for flexibility provision.

2. **Qualification**  
   Steps required for a participant and their assets/units to become eligible to offer services in a sub-market.

3. **Competition**  
   Market-facing activities to communicate buy/sell requirements, receive offers/bids, and clear transactions.

4. **Schedule / Dispatch**  
   Processes to maintain operational readiness, provide visibility, and deliver contracted services in real time.

5. **Verification**  
   Collection, processing, and communication of performance and penalty data to confirm service delivery.

6. **Settlement**  
   Financial processes to generate invoices and execute payments based on verified service delivery.

---

## Level 2 – Building Blocks v3.2 Overview

| Code  | Building Block Name          | Definition                                                        | Data Object Inputs                                     | Data Object Outputs                  |
|-------|-----------------------------|------------------------------------------------------------------|-------------------------------------------------------|------------------------------------|
| E.1   | Define Sub-Market            | Identify and describe the scope, operator, and objectives of the sub-market. | Market operator mandate, geographical constraints, regulatory framework | Sub-market definition record, Rule document |
| E.2   | Understand Markets           | Gather and analyse market design, rules, and price signals.      | BSC rules, Market rules, procurement schedules, historical prices | Market analysis report object      |
| E.3   | Build Investment Case        | Assess costs, revenues, and risks to justify participation.      | Cost data, forecast price signals, asset capability data | Business case object               |
| E.4   | Develop Operational Strategy | Formulate internal processes and readiness plans.               | Business case, operational capability plan             | Operational strategy document      |
| Q.1   | Register Counterparty        | Submit entity information to become a recognised participant with a BSC role. | Corporate registration, contact details, compliance documents | Counterparty registration confirmation |
| Q.2   | Qualify Counterparty (Commercially) | Satisfy credit, compliance, and insurance requirements.          | Credit rating, proof of insurance, financial statements | Counterparty qualification approval |
| Q.3   | Sign Service Contract        | Execute binding agreements with the system operator.             | Contract terms, signature authority                     | Service contract record             |
| Q.4   | Register Assets              | Provide detailed information about physical assets.              | Asset specifications, location data, metering point IDs | Asset registration record          |
| Q.5   | Qualify Assets              | Demonstrate assets meet technical and operational requirements.   | Technical test results, certification documents         | Asset qualification record         |
| Q.6   | Register Units              | Define market units for bidding, dispatch/scheduling, and settlement. | Asset-to-unit mapping, capacity data                     | Unit registration record           |
| Q.7   | Qualify Units               | Test and verify unit performance capabilities.                    | Unit performance test results                            | Unit qualification record          |
| Q.8   | Test Units                  | Conduct operational trials to confirm readiness.                  | Dispatch instructions, telemetry                         | Unit test report                   |
| Q.9   | Register Baseline           | Submit reference consumption/generation profile for performance assessment. | Historical metering data, baseline methodology statement | Approved baseline reference object |
| C.1   | Communicate Buy Requirements | Publish system needs for flexibility services.                    | System need forecast, procurement terms                 | Buy requirement publication        |
| C.2   | Communicate Sell Requirements | Submit offers or availability declarations.                       | Availability declarations, bid prices                    | Offer submission record            |
| C.3   | Clear Market                | Match buy and sell orders, determine clearing prices.             | All valid bids/offers, buy requirements                  | Market clearing report             |
| D.1   | Maintain Unit Availability  | Ensure units remain operationally ready.                          | Maintenance schedules, operational status reports        | Updated availability status        |
| D.2   | Provide Operational Visibility | Share availability and constraint data with SOs.                 | Unit telemetry, constraint data                           | Operational visibility report      |
| D.3   | Dispatch Units              | Issue instructions to market units.                              | Market clearing results, unit availability                | Dispatch instruction object        |
| D.4   | Dispatch Assets             | Send operational commands to physical assets.                    | Unit dispatch instruction, asset mapping                  | Asset-level operational command(s) |
| D.5   | Cease Units                 | Terminate scheduled operation of units.                          | Dispatch termination signal                               | Unit stop confirmation             |
| D.6   | Cease Assets                | Stop service delivery from physical assets.                      | Asset stop command(s)                                     | Asset stop confirmation            |
| V.1   | Collate Verification Data   | Gather metering and operational data.                            | Metering data, dispatch logs                              | Verification dataset               |
| V.2   | Process Verification Data   | Analyse data to assess compliance with obligations.              | Verification dataset, baseline reference                  | Performance assessment record, Penalty assessment record |
| V.3   | Communicate Performance     | Report performance outcomes to market participants.              | Performance assessment record                             | Performance report to participants |
| V.4   | Communicate Penalties       | Report penalties to market participants.                         | Penalty assessment record                                 | Penalty notice                     |
| V.5   | Manage Disputes             | Resolve disagreements over verification or penalties.             | Performance report, Penalty notice, Dispute evidence documents | Dispute resolution record       |
| V.6   | Report on Service Delivery  | Produce regulatory or contractual reports.                       | Performance report, Penalty notice, regulatory reporting templates | Service delivery compliance report |
| S.1   | Generate Invoices           | Prepare invoices based on verified delivery.                     | Verified performance data, contract price terms           | Invoice object                    |
| S.2   | Process Payments            | Transfer funds to service providers.                             | Approved invoice, payment details                          | Payment confirmation               |


</details>




<details>
<summary><strong>Raw Glossary (JSON)</strong></summary>

```json
{
  "Exploration": [
    { "code": "E.1", "process": "Define Sub-Market" },
    { "code": "E.2", "process": "Understand Markets" },
    { "code": "E.3", "process": "Build Investment Case" },
    { "code": "E.4", "process": "Develop Operational Strategy" }
  ],
  "Qualification": [
    { "code": "Q.1", "process": "Register Counterparty" },
    { "code": "Q.2", "process": "Qualify Counterparty (Commercially)" },
    { "code": "Q.3", "process": "Sign Service Contract" },
    { "code": "Q.4", "process": "Register Assets" },
    { "code": "Q.5", "process": "Qualify Assets" },
    { "code": "Q.6", "process": "Register Units" },
    { "code": "Q.7", "process": "Qualify Units" },
    { "code": "Q.8", "process": "Test Units" },
    { "code": "Q.9", "process": "Register Baseline" }
  ],
  "Competition": [
    { "code": "C.1", "process": "Communicate Buy Requirements" },
    { "code": "C.2", "process": "Communicate Sell Requirements" },
    { "code": "C.3", "process": "Clear Market" }
  ],
  "Scheduling & Dispatch": [
    { "code": "D.1", "process": "Maintain Unit Availability" },
    { "code": "D.2", "process": "Provide Operational Visibility" },
    { "code": "D.3", "process": "Dispatch Units" },
    { "code": "D.4", "process": "Dispatch Assets" },
    { "code": "D.5", "process": "Cease Units" },
    { "code": "D.6", "process": "Cease Assets" }
  ],
  "Verification": [
    { "code": "V.1", "process": "Collate Verification Data" },
    { "code": "V.2", "process": "Process Verification Data" },
    { "code": "V.3", "process": "Communicate Performance" },
    { "code": "V.4", "process": "Communicate Penalties" },
    { "code": "V.5", "process": "Manage Disputes" },
    { "code": "V.6", "process": "Report on Service Delivery" }
  ],
  "Settlement": [
    { "code": "S.1", "process": "Generate Invoices" },
    { "code": "S.2", "process": "Process Payments" }
  ]
}

