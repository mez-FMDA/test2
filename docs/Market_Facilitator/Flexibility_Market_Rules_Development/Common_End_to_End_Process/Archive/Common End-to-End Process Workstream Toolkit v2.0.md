# Common End-to-End Process Workstream Toolkit v2.0

| Version | Date       | Changes                      | Author   |
|---------|------------|------------------------------|----------|
| v1.0  | 2025-05 | Shared over email post-E2E workshop #2 | MB   |
| v1.5  | 2025-06 | Changed L1 Registration to Qualification following FDI workshop. Condensed R.1-R.3 Register User/Organisation/Related Entity to R.1 Register Counterparty. Added V.5 Report on Service Delivery.  Was shown in select interviews post workshop #2 | MB   |
| v2.0  | 2025-07-29 | Discussion page link included to be published in FlexNews pre-workshop #1 | MB   |
| v2.1  | 2025-08-06 | Added raw JSON for the latest building blocks | MB   |


This workstream has three main lofty aims:
1) to provide a framework to align business processes between System Operators, which is a prerequisite for any efficient technical solutions (like FMAR) that aims to promote interoperability and market liquidity
2) to produce a useful toolkit for FSPs on the user journey to signpost basic inputs/outputs required for each market phase and
3) to provide foundation for a machine-readable conceptual model of the 'flexibility market' to support reasoning in the flexibility market catalogue.

This document outlines the conceptual model for flexibility market business processes with a focus on aspects relevant to the **FSP User Journey**, as part of the Common End-to-End Process workstream.


### Interview Discussions

In initial stakeholder interviews, we will explore:

- **a)** Business processes you undertake, including pre-conditions, post-conditions and data object input/outputs that are useful for FSPs to know

Where possible:
- **b)** Data and communication flows supporting information exchange
- **c)** Interfacing systems and platforms

We focus primarily on FSP interactions and Independent Market Platforms, with secondary attention to DERMS and System Operators.

### Workstream Phases

| Phase                | Focus                                                                 |
|----------------------|------------------------------------------------------------------------|
| **June–July**        | Interviews with SOs/Market Operators (deep dive on Qualification)       |
| **July–August**      | Interviews focused on remaining phases                                 |
| **August**       | Open industry workshop to review as-is swimlanes captured from interviews (Level 3 Enterprise Model views) date TBC |
| **September**        | Confirm role of this toolkit in Day 1 Flexibility Market consultation   |
| **Continuous**       | Open contributions via collaboration tools                             |

---

## Community Participation

Have suggestions or feedback?  
[Join the discussion forum](https://github.com/mez-FMDA/MF_Repository_test/discussions)

---

## Building Block Catalogue

You can explore the business processes by phase below:

<details>
<summary><strong>Exploration</strong></summary>

| Code | Process                     |
|------|-----------------------------|
| E.1  | Define Sub-Market           |
| E.2  | Understand Markets          |
| E.3  | Build Investment Case       |
| E.4  | Develop Operational Strategy|

</details>

<details>
<summary><strong>Qualification</strong></summary>

| Code | Process                           |
|------|-----------------------------------|
| Q.1  | Register Counterparty       |
| Q.2  | Qualify Counterparty (Commercially) |
| Q.3  | Sign Service Contract       |
| Q.4  | Register Assets            |
| Q.5  | Qualify Assets                    |
| Q.6  | Register Units             |
| Q.7 | Qualify Units                     |
| Q.8 | Test Units                        |

</details>

<details>
<summary><strong>Competition</strong></summary>

| Code | Process                                 |
|------|------------------------------------------|
| C.1  | Communicate Buy Requirements             |
| C.2  | Communicate Sell Requirements            |
| C.3  | Clear Market                             |

</details>

<details>
<summary><strong>Schedule / Dispatch</strong></summary>

| Code | Process                              |
|------|--------------------------------------|
| D.1  | Maintain Unit Availability           |
| D.2  | Provide Operational Visibility       |
| D.3  | Dispatch Units                       |
| D.4  | Dispatch Assets                       |
| D.5  | Cease Units                          |
| D.6  | Cease Assets                         |


</details>

<details>
<summary><strong>Verification</strong></summary>

| Code | Process                      |
|------|------------------------------|
| V.1  | Collate Verification Data    |
| V.2  | Process Verification Data    |
| V.3  | Communicate Performance      |
| V.4  | Manage Disputes              |
| V.5  | Report on Service Delivery    |

</details>

<details>
<summary><strong>Settlement</strong></summary>

| Code | Process             |
|------|---------------------|
| S.1  | Generate Invoices   |
| S.2  | Process Payments    |

</details>

---

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
    { "code": "Q.8", "process": "Test Units" }
  ],
  "Competition": [
    { "code": "C.1", "process": "Communicate Buy Requirements" },
    { "code": "C.2", "process": "Communicate Sell Requirements" },
    { "code": "C.3", "process": "Clear Market" }
  ],
  "Schedule/Dispatch": [
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
    { "code": "V.4", "process": "Manage Disputes" },
    { "code": "V.5", "process": "Report on Service Delivery" }
  ],
  "Settlement": [
    { "code": "S.1", "process": "Generate Invoices" },
    { "code": "S.2", "process": "Process Payments" }
  ]
}
