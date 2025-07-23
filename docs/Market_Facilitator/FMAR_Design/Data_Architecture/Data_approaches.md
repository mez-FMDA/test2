# Approaches to Data Management and Access

## Why choose a data approach first?
Choosing a data management and access approach upfront is crucial because it lays the foundation for efficient, reliable, and secure data handling throughout an organization. This proactive approach ensures that data is used effectively for decision-making, streamlines operations, and mitigates potential risks associated with poor data management. 

Choosing an approach upfront also helps us define clearer requirements to enable a better delivery partner selection.

This page shall be used to align all stakeholders on FMAR's strategic vision and core use cases, and make a **key architectural decision.**

Should FMAR be built as a **Consolidated Register (single source of truth)** or a **Federated Register (connected ecosystem of registers)**?

## What are the different data approaches?

<img width="1702" height="761" alt="image" src="https://github.com/user-attachments/assets/50460156-9c2b-491a-a2e3-5562447d56c8" />


The decentralised approach does not fit with the vision of the industry and hence has been discarded from consideration. It is also the current state of affairs with the flex market assets we are looking to move away from.

### Centralised Data Architecture

A centralized data architecture is a system where all data is stored and managed in a single, central location, such as a data warehouse or data lake. This approach aims to simplify data management, improve data consistency, and enhance data governance by eliminating data silos. It allows for a unified view of data across an organization, facilitating better decision-making and strategic planning. 

#### Data Storage for Centralised Architecture
The state diagram below represents how we see asset registration operating with a centralised approach

```mermaid
sequenceDiagram
    participant FSP
    participant Registration Platform
    participant FMAR
    participant Potential Data Consumer
    FSP->>Registration Platform: Register Asset
    Registration Platform->>FMAR: Send Asset Data
    FMAR->>FMAR: Dedupe check
    FMAR->> Registration Platform: Unique ID
    Registration Platform->>FSP: Confirm Registration
    FMAR->> Potential Data Consumer: Unique ID and Primary identifier
```

#### Data Retrieval for Centralised Architecture
The state diagram below represents how we see asset data retrieval operating with a centralised approach
```mermaid
sequenceDiagram
    participant Registration Platform
    participant FMAR
    participant Data Consumer
    Data Consumer->>FMAR: Request Asset Data
    FMAR-->>Data Consumer: Send Asset Data

```

### Federated Data Architecture 
A federated data architecture is a system design where multiple independent data sources or systems are integrated to function as a single, unified entity without centralizing the data or control. It allows for accessing and analyzing data from various sources in real-time without physically moving or replicating the data. This approach maintains the autonomy of individual data sources while enabling data sharing and collaboration. 

####  _Approach 1_ 
Using FMAR as a hub to fetch the data which essentially controls the structure of the data received

##### Data Storage for Federated Architecture
```mermaid
sequenceDiagram
    participant FSP
    participant Registration Platform
    participant FMAR
    participant Potential Data Consumer
    FSP->>Registration Platform: Register Asset
    Registration Platform->>FMAR: Send Asset Data
    FMAR->>FMAR: Dedupe check
    FMAR->> Registration Platform: Unique ID
    Registration Platform->>FSP: Confirm Registration
    FMAR->> Potential Data Consumer: Unique ID and Primary identifier
```


##### Data Retrieval for Federated Architecture
```mermaid
sequenceDiagram
    participant Registration Platform
    participant FMAR
    participant Data Consumer
    Data Consumer->>FMAR: Request Asset Data
    FMAR->>FMAR: Check data source
    FMAR->> Registration Platform: Request Asset Data
    Registration Platform->> FMAR: Share Asset Data
    FMAR->> Data Consumer: Share Asset Data
```

#### _Approach 2_ 
Applying direct interfaces between the data provider and data consumer

##### Data Storage for Federated Architecture
```mermaid
sequenceDiagram
    participant FSP
    participant Registration Platform
    participant FMAR
    participant Potential Data Consumer
    FSP->>Registration Platform: Register Asset
    Registration Platform->>FMAR: Send Asset Data
    FMAR->>FMAR: Dedupe check
    FMAR->> Registration Platform: Unique ID
    Registration Platform->>FSP: Confirm Registration
    FMAR->> Potential Data Consumer: Unique ID and Primary identifier
```

##### Data Retrieval for Federated Architecture
```mermaid
sequenceDiagram
    participant Registration Platform
    participant FMAR
    participant Data Consumer
    Data Consumer->>FMAR: Request Asset Data
    FMAR->>FMAR: Check data source
    FMAR->> Data Consumer: Share Asset Source
    Data Consumer->> Registration Platform: Request Asset Data
    Registration Platform->> Data Consumer: Share Asset Data
```

Note: An alternative method of polling can be applied to reduce the dependency on the FMAR hub sharing the data source

## Weightage of Data Approaches

| **Criteria**            | **Centralised Approach**                          | **Federated Approach - 1**                             |**Federated Approach - 2**                             |
|-------------------------|----------------------------------------------------|----------------------------------------------------|----------------------------------------------------|
| **Data ownership**      | Centralised by FMAR                                | Retained by platforms                              |Retained by platforms  |
| **Real-time access**    | Easier to optimise                                 | Latency issues if not standardised                 |Platform dependent|
| **Privacy compliance**  | Central consent framework                          |     Central consent framework         |Complex cross-platform consent sharing |
| **Flexibility and Change** |         Responding to changing business needs can be slower  |          Responding to changing business needs is slower with the need for change within the hub and every integrated platform |   Teams have more control over their data, allowing them to optimize for their specific workflows and requirements|
| **Governance**          | Simplified data management, easy enforcement of policies, consistent data quality, ensure compliance with regulation                          |       Simplified data management, easy enforcement of policies, consistent data quality, ensure compliance with regulation  |Enforcing consistent data governance policies across multiple, independent systems can be difficult. Without strong coordination, different teams may use different data standards and formats, leading to inconsistencies.  |
| **Infrastructure**          | Simplified and has a single set of tools              |  Minor complexity as the number of platforms increase       | Major complexity as the number of nodes increase|
| **Point of Failure**          | FMAR hub could potentially be a single point of failure            |   FMAR hub could potentially be a single point of failure along with the chance of a data-point failure      | Risks reduced by using polling if FMAR hub is inactive|
| **Integration effort**  | High initial, low ongoing                          | High initial, potentially high ongoing sync overhead          |Low initial, high ongoing sync overhead  |


 Keeping the cost (including future integration costs), timelines and scope in mind, the architecture team proposes a **centralised implementation**

