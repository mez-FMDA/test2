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
    subgraph "Flexibility Market Asset Registration System"
        UC_RegUser((Register User)) // SPUM
        UC_DeregAsset((De-register Asset)) // ARM and SPUM
        UC_SwitchSP((Switch Service Provider)) // ARM and SPUM
        UC_RegAsset((Register Asset)) // ARM 
        UC_RegSPDetails((Register Service Provider details)) // SPUM
        UC_QualifyMU((Qualify Market Unit)) // PQSM
        UC_ProvidePMUQ((Provide Potential Market Unit Qualifications)) // PQSM 
        UC_CreateProdReg((Create Product Register)) // PQSM
        UC_MaintainProdReg((Maintain Product Register)) // PQSM 
        UC_ExportData((Export Asset Data)) // ARM 
        UC_VerifyAuth((Verify Asset Authenticity)) // ARM 
        UC_ValidateAsset((Validate Asset)) // ARM 
        UC_UpdateAssetDetails((Update Asset Details)) // ARM 
        UC_UpdateSPDetails((Update Service Provider Details)) // SPUM
        UC_CreateGrouping((Create Asset Grouping / Market Units)) // PQSM 
        UC_UpdateGrouping((Update Asset Grouping)) // PQSM
        UC_ValidateSPDetails((Validate Service Provider Details)) // SPUM
        UC_MaintainCategories((Maintain Asset Categories)) // ARM 
        UC_ShareData((Share Asset Register Data)) // ARM 
        UC_Analytics((Provide Analytics)) // ARM
        UC_RegUpdateConnectionLimit((Register or Update Connection Limit)) // GICM
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
    
