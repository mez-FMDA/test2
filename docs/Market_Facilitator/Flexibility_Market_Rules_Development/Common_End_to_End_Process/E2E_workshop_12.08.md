# Common End to End process – Level 1 and Level 2 Definitions with Time Dimension for Workshop

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
   Collection, processing, and communication of performance data to confirm service delivery.

6. **Settlement**  
   Financial processes to generate invoices and execute payments based on verified service delivery.

---

## Level 2 – Building Blocks v3.0 Overview

| Code  | Building Block Name          | Definition                                                        | Data Object Inputs                                     | Data Object Outputs                  |
|-------|-----------------------------|------------------------------------------------------------------|-------------------------------------------------------|------------------------------------|
| E.1   | Define Sub-Market            | Identify and describe the scope, operator, and objectives of the sub-market. | Market operator mandate, geographical constraints, regulatory framework | Sub-market description object, Rule document |
| E.2   | Understand Markets           | Gather and analyse market design, rules, and price signals.      | BSC rules, Market rules, procurement schedules, historical prices | Market analysis report object      |
| E.3   | Build Investment Case        | Assess costs, revenues, and risks to justify participation.      | Cost data, forecast price signals, asset capability data | Business case object               |
| E.4   | Develop Operational Strategy | Formulate internal processes and readiness plans.               | Business case, operational capability plan             | Operational strategy document      |
| Q.1   | Register Counterparty        | Submit entity information to become a recognised participant with a BSC role. | Corporate registration, contact details, compliance documents | Counterparty registration confirmation |
| Q.2   | Qualify Counterparty (Commercially) | Satisfy credit, compliance, and insurance requirements.          | Credit rating, proof of insurance, financial statements | Counterparty qualification approval |
| Q.3   | Sign Service Contract        | Execute binding agreements with the system operator.             | Contract terms, signature authority                     | Executed service contract          |
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
| D.4   | Dispatch Assets             | Send operational commands to physical assets.                    | Unit dispatch instruction, asset mapping                  | Asset-level operational command(s)|
| D.5   | Cease Units                 | Terminate scheduled operation of units.                          | Dispatch termination signal                               | Unit stop confirmation             |
| D.6   | Cease Assets                | Stop service delivery from physical assets.                      | Asset stop command(s)                                     | Asset stop confirmation            |
| V.1   | Collate Verification Data   | Gather metering and operational data.                            | Metering data, dispatch logs                              | Verification dataset               |
| V.2   | Process Verification Data   | Analyse data to assess compliance with obligations.              | Verification dataset, baseline reference                  | Performance assessment record      |
| V.3   | Communicate Performance     | Report performance outcomes to market participants.              | Performance assessment record                             | Performance report                 |
| V.4   | Manage Disputes             | Resolve disagreements over verification outcomes.                | Dispute submission, evidence documents                    | Dispute resolution record          |
| V.5   | Report on Service Delivery  | Produce regulatory or contractual reports.                       | Performance report, regulatory templates                  | Service delivery report            |
| S.1   | Generate Invoices           | Prepare invoices based on verified delivery.                     | Verified performance data, contract price terms           | Invoice object                    |
| S.2   | Process Payments            | Transfer funds to service providers.                             | Approved invoice, payment details                          | Payment confirmation               |


## Level 3 - Time Dimension 

<details>
<summary><strong>Exploration</strong> (E.1–E.4)</summary>

| Code | Building Block | Definition | Key Time Dimension(s) |
|------|---------------|------------|------------------------|
| E.1  | Define Sub-Market | Identify and describe the scope, operator, and objectives. | [TBD – future alignment milestone dates] |
| E.2  | Understand Markets | Gather and analyse market design, rules, and price signals. | [TBD – market information publication schedule] |
| E.3  | Build Investment Case | Assess costs, revenues, and risks. | [TBD – internal project deadlines] |
| E.4  | Develop Operational Strategy | Formulate internal processes and readiness plans. | [TBD] depends on commerical team <-> operations/control room interfaces|

</details>

---

<details>
<summary><strong>Qualification</strong> (Q.1–Q.9)</summary>

| Code | Building Block | Definition | Key Time Dimension(s) |
|------|---------------|------------|------------------------|
| Q.1  | Register Counterparty | Submit entity info to be recognised. | Registration window close date (e.g., T–X before first GCT) |
| Q.2  | Qualify Counterparty (Commercially) | Credit, compliance, insurance. | Qualification expiry date; requalification cycle |
| Q.3  | Sign Service Contract | Execute binding agreements. | Contract signature deadline before GCT |
| Q.4  | Register Assets | Provide asset info. | Asset registration deadline (T–X before service start) |
| Q.5  | Qualify Assets | Demonstrate assets meet requirements. | Technical test completion deadline |
| Q.6  | Register Units | Define market units. | Unit registration deadline before GCT |
| Q.7  | Qualify Units | Test and verify unit performance. | Unit qualification deadline |
| Q.8  | Test Units | Operational trials to confirm readiness. | Test completion deadline |
| Q.9  | Register Baseline | Submit baseline profile. | Baseline submission deadline (T–X before first delivery MTU); updates locked at GOT |

</details>

---

<details>
<summary><strong>Competition</strong> (C.1–C.3)</summary>

| Code | Building Block | Definition | Key Time Dimension(s) |
|------|---------------|------------|------------------------|
| C.1  | Communicate Buy Requirements | Publish system needs. | Buy requirement publication time (T–X), GOT (Gate Open Time) |
| C.2  | Communicate Sell Requirements | Submit offers/availability. | GOT, GCT (Gate Closure Time) |
| C.3  | Clear Market | Match orders, determine prices. | GCT; market results publication time (T-X) |

</details>

---

<details>
<summary><strong>Scheduling & Dispatch</strong> (D.1–D.6)</summary>

| Code | Building Block | Definition | Key Time Dimension(s) |
|------|---------------|------------|------------------------|
| D.1  | Maintain Unit Availability | Ensure readiness. | [TBD – availability declaration windows] |
| D.2  | Provide Operational Visibility | Share status data. | [TBD – telemetry update intervals] |
| D.3  | Dispatch Units | Issue instructions. | Dispatch issue timestamp (MTU-aligned) |
| D.4  | Dispatch Assets | Send commands to assets. | Dispatch execution timestamp (MTU-aligned) |
| D.5  | Cease Units | Terminate operation. | Cease instruction time (MTU-aligned) |
| D.6  | Cease Assets | Stop service delivery. | Cease execution time (MTU-aligned) |

</details>

---

<details>
<summary><strong>Verification</strong> (V.1–V.5)</summary>

| Code | Building Block | Definition | Key Time Dimension(s) |
|------|---------------|------------|------------------------|
| V.1  | Collate Verification Data | Gather performance data. | [TBD – data submission deadline post-delivery] |
| V.2  | Process Verification Data | Analyse delivery. | Verification processing window |
| V.3  | Communicate Performance | Report outcomes. | Performance report date (T+D) |
| V.4  | Manage Disputes | Resolve verification disagreements. | Dispute submission window |
| V.5  | Report on Service Delivery | Regulatory/contractual reports. | Regulatory reporting date |

</details>

---

<details>
<summary><strong>Settlement</strong> (S.1–S.2)</summary>

| Code | Building Block | Definition | Key Time Dimension(s) |
|------|---------------|------------|------------------------|
| S.1  | Generate Invoices | Prepare invoices. | Invoicing date |
| S.2  | Process Payments | Transfer funds. | Payment due date |

</details>
