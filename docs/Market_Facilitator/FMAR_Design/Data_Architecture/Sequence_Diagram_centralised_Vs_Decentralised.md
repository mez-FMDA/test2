# Centralised Vs Decentralised Architecture

To align all stakeholders on FMAR's strategic vision and core use cases, and make a **key architectural decision.**

Should FMAR be built as a **Consolidated Register (single source of truth)** or a **Federated Register (connected ecosystem of registers)**?

| **Criteria**            | **Centralised Approach**                          | **Federated Approach**                             |
|-------------------------|----------------------------------------------------|----------------------------------------------------|
| **Data ownership**      | Centralised by FMAR                                | Retained by platforms                              |
| **Real-time access**    | Easier to optimise                                 | Latency issues if not standardised                 |
| **Privacy compliance**  | Central consent framework                          | Complex cross-platform consent sharing             |
| **Integration effort**  | High initial, low ongoing                          | Lower initial, high ongoing sync overhead          |
| **Governance**          | Simplified data management, easy enforcement of policies, consistent data quality, ensure compliance with regulation                          |         |
| **Infrastructure**          | Simplified and has a single set of tools              |         |
| **Point of Failure**          | FMAR hub could potentially be a single point of failure            |         |

Keeping the cost, timelines and scope in mind, Market facilitator proposes a **centralised implementation**

## Centralised Data Architecture

A centralized data architecture is a system where all data is stored and managed in a single, central location, such as a data warehouse or data lake. This approach aims to simplify data management, improve data consistency, and enhance data governance by eliminating data silos. It allows for a unified view of data across an organization, facilitating better decision-making and strategic planning. 


### Data Storage for Centralised Architecture
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

### Data Retrieval for Centralised Architecture
```mermaid
sequenceDiagram
    participant Registration Platform
    participant FMAR
    participant Data Consumer
    Data Consumer->>FMAR: Request Asset Data
    FMAR-->>Data Consumer: Send Asset Data

```

## Federated Data Architecture 
A federated data architecture is a system design where multiple independent data sources or systems are integrated to function as a single, unified entity without centralizing the data or control. It allows for accessing and analyzing data from various sources in real-time without physically moving or replicating the data. This approach maintains the autonomy of individual data sources while enabling data sharing and collaboration. 

## Approach 1 
Using FMAR as a hub to fetch the data which essentially controls the structure of the data received

### Data Storage for Federated Architecture
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


### Data Retrieval for Federated Architecture
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

## Approach 2 
Applying direct interfaces between the data provider and data consumer

### Data Storage for Federated Architecture
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

### Data Retrieval for Federated Architecture
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
