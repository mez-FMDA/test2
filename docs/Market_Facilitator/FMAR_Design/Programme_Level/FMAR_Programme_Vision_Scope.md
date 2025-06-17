# FMAR Programme Vision and Scope

## Roles and responsibilities:

FMAR Architecture Team: Owns the repository, triages issues, drafts/updates artefacts, manages PRs.

Flexibility Team (Ontology): Might have a dedicated section/branch for ontology development, with PRs for changes.

Industry Insights Design Group & Experts Group: Primarily use GitHub Issues to provide structured feedback on draft artefacts published by the Architecture Team. They can also be invited to review specific PRs if appropriate.

Wider Industry: Can view all public artefacts and raise Issues for questions or general feedback. 


## Overview of Artefact delivery plan

The following provides a comprehensive list of artefacts that will be developed iteratively throughout the entire design programme, with each workshop series contributing to their refinement.

**Ecosystem Architecture:**

Ecosystem Use Case Catalogue (IEC 62559): Workshop #1 starts defining core asset registration. Subsequent workshops (e.g., on PSQM, GICM) will define further use cases.

User Case Diagrams (UML): Developed for each key journey explored in workshops.

Business Process Models (BPMN 2.0): Detailed out for MVP processes after initial workshop agreement, and then for future phase processes.

Role/Actor Mapping: Initial roles discussed in Workshop #1 (FSP, SO for ID usage). This will be expanded significantly as SPUM, PSQM, GICM are detailed.

Policy–Process–Data Traceability Matrix: This will be a living document, updated as FMAR flows are defined and mapped to regulatory obligations like DR NC, NIS2, GDPR.

**Data Architecture:**

Information Map (ISO 11179 / UML): Workshop #1 initiates the core "Asset" entity. This map will grow significantly with SPUM, PSQM, GICM data objects. The FMAR Common Ontology is the detailed expression of this.

Data Exchange Contracts (JSON Schema / OpenAPI): Directly derived from the API Catalogue (Application Architecture) and refined based on data needs identified in workshops.

Data Lineage Diagrams: Developed as data flows between FMAR modules and external systems are defined.

Data Sharing Matrix: Critical for defining access controls (linked to SPUM user roles and Consumer Consent). Aligned to NIS2.

Metadata Specification (ISO 8601, IEC 61850): Defined iteratively as data attributes for ARM, SPUM, PSQM, GICM are finalized.

**Application Architecture:**

Service Blueprint (C4/ArchiMate): Evolves from high-level FMAR Hub in Workshop #1 to detailed module interactions.

API Catalogue (OpenAPI 3.0): Core APIs for ARM discussed in Workshop #1. Expands with SPUM, PSQM, GICM APIs.

MVP Design Patterns (DDD): Architectural decisions made by the FMAR Architecture Team, informed by workshop outputs.

**Technology Architecture & Supporting Artefacts:** 

These are generally produced by the FMAR Architecture Team, with input/review from the Industry Experts Committee and potentially the Insights Design Group. The "Assurance Traceability Matrix" is key for linking requirements to all these design components.

**Running the Workshops with this Artefact-Driven Approach:**

Before Each Workshop Series/Theme: The FMAR Architecture Team drafts/updates relevant v0.x artefacts (e.g., Information Map snippet, draft Data Exchange Contract for a specific interaction, BPMN for a process being discussed). These are published to the Repository.

During Workshops: Use these draft artefacts as the basis for discussion. Participants review, critique, and propose changes. The "Key Design Questions" guide this.

After Workshops: The FMAR Architecture Team refines the artefacts based on industry feedback and decisions, publishing new versions to the Repository.
