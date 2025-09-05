## Grid & Metering Concepts

| **ACER Term** | **Definition (simplified)** | **BSC Equivalent** | **SSES Equivalent** |
|---------------|------------------------------|---------------------|----------------------|
| Connection Agreement Point | Point nearest SO’s grid where meters exist per the connection agreement. | Connection Agreement Point | Connection Agreement Point |
| Metering Point | Physical location where import/export is measured. | Defined Metering Point (CoP App A) | – |
| Accounting Point | Metering or virtual point under balance responsibility (supplier switching/settlement happens here). | Boundary Point Metering System | – |

---

## Assets & Resources

| **ACER Term** | **Definition (simplified)** | **NESO Equivalent** | **NGED Equivalent** | **BSC Equivalent** | **SSES Equivalent** | **CM Equivalent** |
|---------------|------------------------------|---------------------|---------------------|--------------------|---------------------|-------------------|
| Technical Resource | Individual generator, storage, or demand module. | Asset / Sub-unit | Sub-asset | MSID pairs / MPANs | AMSID pairs | Component |

---

## Roles & Providers

| **ACER Term** | **Definition (simplified)** | **NESO Equivalent** | **NGED Equivalent** | **BSC Equivalent** | **SSES Equivalent** |
|---------------|------------------------------|---------------------|---------------------|--------------------|---------------------|
| Service Provider | Market participant (e.g. aggregator) with obligation to provide services. | Trading Agent / Related Entity | Aggregator | AMVLP / other | DSRSPs |

---

##  Units & Aggregations

| **ACER Term** | **Definition (simplified)** | **NESO Equivalent** | **NGED Equivalent** | **ON Equivalent** | **BSC Equivalent** | **SSES Equivalent** | **CM Equivalent** |
|---------------|------------------------------|---------------------|---------------------|-------------------|---------------------|---------------------|-------------------|
| Controllable Unit (CU) | Single controllable generation or demand unit. | Asset, Control Point | No distinction with sub-asset | – | Primary BMU (unclear for demand except large Tx) | Secondary BMU (collection of AMSIDs / MPANs) | – |
| Service Providing Unit (SPU) | One CU or ensemble at a single connection agreement point. | Unit in SMP | Asset | Flexibility Unit? | Primary BMU (Lead Party) | Secondary BMU (AMSID/MPANs/both) | CMU |
| Service Providing Group (SPG) | Aggregation of SPUs/CUs at different points in a scheduling area. | Unit in SMP | Meterable Unit | Flexible Units in a Flexibility Zone? | Multiple v_ / 2_ BMUs (assumed GSP) | – | – |
