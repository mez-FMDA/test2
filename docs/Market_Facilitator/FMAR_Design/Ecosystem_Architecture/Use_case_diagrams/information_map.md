Use this file to recreate the information map for FMAR 
This should ideally go into another folder where only data models are held but definitely a good starting point 

## Core Business Entities
 
The business domain centers around several key entity types that represent market participants and physical/logical assets:
 
```mermaid
erDiagram
    entity ||--o{ party : represents
 
    party {
        bigint id PK
        text business_id
        text business_id_type
        bigint entity_id FK
        text name
        text role
        text type
        text status
    }
 
    entity {
        bigint id PK
        text business_id
        text business_id_type
        text name
        text type
    }
 
    party ||--o{ service_provider_product_ap : applies_as_SP
    party ||--o{ system_operator_product_ty : offers_as_SO
    party ||--o{ controllable_unit : manages_via_service_provider
 
    service_provider_product_ap {
        bigint id PK
    }
 
    system_operator_product_ty {
        bigint id PK
    }
 
    controllable_unit {
        bigint id PK
        text business_id
        text name
        text status
        text regulation_direction
        decimal maximum_available_capacity
        bigint accounting_point_id FK
        text grid_validation_status
    }
 
    controllable_unit ||--o{ technical_resource : contains
    controllable_unit ||--|| accounting_point : connected_to
 
    technical_resource {
        bigint id PK
    }
 
    accounting_point {
        bigint id PK
        text business_id
        bigint system_operator_id PK
    }
 
    party ||--o{ service_providing_group : owns
    service_providing_group ||--o{ service_provider_product_ap : service_provider
 
    service_providing_group {
        bigint id PK
        text name
        bigint service_provider_id FK
        text status
    }
 
    service_providing_group ||--o{ service_providing_group_prc : applies_for_products
 
    service_providing_group_prc {
        bigint id PK
    }
