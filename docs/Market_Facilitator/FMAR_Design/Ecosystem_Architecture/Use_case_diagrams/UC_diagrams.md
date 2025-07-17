# Flexibility Market Asset Registration

This document outlines the primary use cases for the Flexibility Market Asset Registration system.

## Use Case Diagram

Here is the visual representation of the actors and their interactions with the system.



```mermaid
%% Flexibility Market Asset Registration - Flowchart Style
flowchart LR

    %% --- Define Actors (using your requested style) ---
    AO[Asset Owner 👤]
    I[Installer 🛠️]
    FSP[Flexibility Service Provider 🏢]
    SO[System Operator ⚙️]
    M[Manufacturer - OEM Cloud 🏭]
    TP[Third Party 🤝]
    Agg[Aggregator 📈]
    MF[Market Facilitator 🏛️]
    Public[Public 🌍]
    Ofgem[Ofgem ⚖️]
    IMP[Independent Market Platforms 💻]
    DSO[DSO 🔌]
    NESO[NESO ⚡]
    SS[Settlement System 🧾]
    
    %% --- Define System Boundary and Use Cases within it ---
    subgraph "Gird Integration & Constraint Management"
        UC_RegUpdateConnectionLimit((Register or Update Connection Limit))
    end

    subgraph "Product & Service Qualification Management"
        UC_QualifyMU((Qualify Market Unit))
        UC_ProvidePMUQ((Provide Potential Market Unit Qualifications))
        UC_CreateProdReg((Create Product Register))
        UC_MaintainProdReg((Maintain Product Register)) 
        UC_CreateGrouping((Create Asset Grouping / Market Units))
        UC_UpdateGrouping((Update Asset Grouping))
    end

    subgraph "ARM & SPUM"
        UC_DeregAsset((De-register Asset))
        UC_SwitchSP((Switch Service Provider))
    end

    subgraph "Asset Registration & Maintenance"
        UC_RegAsset((Register Asset))
        UC_MaintainCategories((Maintain Asset Categories))
        UC_ShareData((Share Asset Register Data))
        UC_ExportData((Export Asset Data))
        UC_Analytics((Provide Analytics))
        UC_VerifyAuth((Verify Asset Authenticity))
        UC_ValidateAsset((Validate Asset))
        UC_UpdateAssetDetails((Update Asset Details))
    end

    subgraph "Service Provider & User Management"
        UC_RegUser((Register User))
        UC_RegSPDetails((Register Service Provider details))
        UC_UpdateSPDetails((Update Service Provider Details))
        UC_ValidateSPDetails((Validate Service Provider Details))
    end

  
    
    %% --- Actor to Use Case Associations ---
    AO --- UC_DeregAsset
    AO --- UC_SwitchSP
    AO --- UC_RegAsset
    
    I --- UC_RegAsset
    
    FSP --- UC_RegAsset
    FSP --- UC_RegSPDetails
    FSP --- UC_QualifyMU
    UC_ProvidePMUQ --- FSP
    FSP --- UC_CreateGrouping
    UC_ShareData --- FSP
    UC_UpdateGrouping --- FSP

    SO --- UC_CreateProdReg
    SO --- UC_MaintainProdReg
    UC_ProvidePMUQ --- SO
    UC_ShareData --- SO
    SO --- UC_QualifyMU
    
    M --- UC_VerifyAuth
   
    IMP --- UC_RegAsset
    DSO --- UC_RegAsset
    NESO --- UC_RegAsset

    UC_ShareData --- TP
    UC_ShareData --- Agg
    UC_ShareData --- SS
    UC_ShareData --- NESO
    UC_ShareData --- DSO
    UC_ShareData --- IMP
    UC_ShareData --- Ofgem

    Public --- UC_Analytics
    Ofgem --- UC_Analytics
    MF --- UC_Analytics

    MF --- UC_MaintainCategories

    %% --- Include & Extend Relationships ---
    UC_RegAsset   -. "include" .-> UC_ValidateAsset
    UC_ValidateAsset   -. "include" .-> UC_VerifyAuth
    UC_UpdateAssetDetails -. "extend" .-> UC_RegAsset
    UC_RegSPDetails       -. "extend" .-> UC_UpdateSPDetails
    UC_UpdateGrouping     -. "extend" .-> UC_CreateGrouping
    UC_MaintainProdReg    -. "extend" .-> UC_CreateProdReg
    UC_RegSPDetails -. "include" .-> UC_ValidateSPDetails
    UC_MaintainCategories -. "extend" .-> UC_RegAsset
    
