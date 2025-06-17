# FMAR Programme Vision and Scope
>define all acronyms
>boilerplate text about the vision from UC descriptions document

## Vision:

**FMAR Hub:**

**ARM:** To be the definitive, central registry for all flexible assets participating, or intending to participate, in GB flexibility markets. It is the Single Source of Truth for asset-specific data.

**SPUM:** To be the central registry for all entities (Flexibility Service Providers, System Operators, Asset Owners, etc.) that interact with the FMAR Hub. It manages their identity, roles, general market standing (where applicable), and user accounts. 

**PSQM:** To manage the qualification and verification status of specific Service Providing Units (SPUs - single asset or co-located assets at one connection point) or Service Providing Groups (SPGs - aggregated assets across multiple connection points) for defined GB flexibility products and services.

**GICM:** To manage and disseminate information about the grid-related operational status of SPUs/SPGs, including their grid prequalification status and any temporary operational limits imposed by System Operators due to network conditions.

## Design workflow:

1. **Artefact Publication:** Architecture Team publishes vX.Y of an artefact to the main branch (or your primary working branch).
2. **Feedback via Issues:** Stakeholders use the Issue Templates to provide feedback, questions, or proposals, referencing the specific artefact version.
3. **Triage & Labelling:** Architecture Team triages new Issues, labels them (e.g., status:under-review, artefact:asset-identity-paper, version:v0.1).
4. **Discussion:**
- Clarifications happen in Issue comments.
- Broader points are taken to relevant workshops (and the Issue is labelled status:workshop-input-needed). Workshop outcomes are summarized back in the Issue.
5. **Internal Decision:** Architecture Team decides on the Issue (Accepted, Rejected, etc.).
6. **Offline Artefact Refinement:** If accepted, the Architecture Team incorporates the changes into their offline working copy of the artefact.
7. **New Version Publication:** The Architecture Team publishes the new version of the artefact (e.g., vX.Y+1) to the main branch in a new commit. The commit message should ideally summarize key changes and can reference Issue numbers (e.g., "Update Asset Identity Paper to v0.2, incorporating feedback from #123, #128. Addresses VTN prefix query.").
8. **Close Issues:** Relevant Issues are closed, with a comment linking to the commit/new version where the feedback was addressed (e.g., "Addressed in v0.2 of Asset Identity Paper - see commit [commit hash]").


## Roles and responsibilities:

FMAR Architecture Team: Owns the repository, triages issues, drafts/updates artefacts.

Flexibility Team (Ontology): Might have a dedicated section/branch for ontology development, close alignment with Architecture team.

Industry Insights Design Group & Experts Group: Primarily use GitHub Issues to provide structured feedback on draft artefacts published by the Architecture Team. They can also be invited to review specific artefacts being drafted 'offline' if appropriate.

Wider Industry: Can view all public artefacts and raise Issues for questions or general feedback. 


## Overview of Artefact delivery plan

The following provides a comprehensive list of artefacts that will be developed iteratively throughout the entire design programme, with each workshop series contributing to their refinement. >API-led design

**Ecosystem Architecture:**

Ecosystem Use Case Catalogue (IEC 62559): Workshop #1 starts defining core asset registration. Subsequent workshops (e.g., on PSQM, GICM) will define further use cases.

User Case Diagrams (UML): Developed for each key journey explored in workshops.

Business Process Models (BPMN 2.0): Detailed out for MVP processes after initial workshop agreement, and then for future phase processes. Undertaken in full as part of End-to-End workstream.

Role/Actor Mapping: Initial roles discussed in Workshop #1 (FSP, SO for ID usage). This will be expanded significantly as SPUM, PSQM, GICM are detailed.

Policy–Process–Data Traceability Matrix: This will be a living document, updated as FMAR flows are defined and mapped to regulatory obligations like NIS2, GDPR.

**Data Architecture:**

Information Map (ISO 11179 / UML): Workshop #1 initiates the core "Asset" entity. This map will grow significantly with SPUM, PSQM, GICM data objects. The FMAR Common Ontology is the detailed expression of this.

Data Exchange Contracts (JSON Schema / OpenAPI): Directly derived from the API Catalogue (Application Architecture) and refined based on data needs identified in workshops.

Data Lineage Diagrams: Developed as data flows between FMAR modules and external systems are defined.

Data Sharing Matrix: Critical for defining access controls (linked to SPUM user roles and Consumer Consent). Aligned to NIS2.

Metadata Specification (ISO 8601, IEC 61850): Defined iteratively as data attributes for ARM, SPUM, PSQM, GICM are finalized.

**Application Architecture:**

Service Blueprint (TBD): Evolves from high-level FMAR Hub in Workshop #1 to detailed module interactions.

API Catalogue (TBD): Core APIs for ARM discussed in Workshop #1. Expands with SPUM, PSQM, GICM APIs.

MVP Design Patterns (TBD): Architectural decisions made by the FMAR Architecture Team, informed by workshop outputs.

**Technology Architecture** 

These artefacts will be subject to decisions the Architecture Team make with the Delivery Partner about **infrastructure stack**, **security model**, and consideration of **ongoing monitoring and observability assurances** needed; in addition to responses from the MVP consultation on Ecosystem/Data/Application at the conclusion of the Industry Design working groups.

These are generally produced by the FMAR Architecture Team, with input/review from the Industry Experts Committee and potentially the Insights Design Group. The "Assurance Traceability Matrix" is key for linking requirements to all these design components.

**Supporting Artefacts:**

DSI specification requirements

Unique ID conventions for Dispatch API

**Running the Workshops with this Artefact-Driven Approach:**

Before Each Workshop Series/Theme: The FMAR Architecture Team drafts/updates relevant v0.x artefacts (e.g., Information Map snippet, draft Data Exchange Contract for a specific interaction, BPMN for a process being discussed). These are published to the Repository.

During Workshops: Use these draft artefacts as the basis for discussion. Participants review, critique, and propose changes. The "Key Design Questions" guide this.

After Workshops: The FMAR Architecture Team refines the artefacts based on industry feedback and decisions, publishing new versions to the Repository.

**Phase 2 Delivery - Notes:**
>at what point do we start to consider Phase 2 delivery model? Testing requirements for a set of Use Cases. What is in our architecture compliance framework?

>When do we convene 'coaltion of the willing group e.g., testing sandpit'..? what's the comms plan for this? Who are the minimum necessary Actors to be involved?

