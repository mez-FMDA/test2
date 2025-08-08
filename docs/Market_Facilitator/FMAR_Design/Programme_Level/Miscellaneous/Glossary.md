# FMAR Programme Glossary

| Version | Date       | Changes                                                                 | Author |
|---------|------------|-------------------------------------------------------------------------|--------|
| v0.9    | 2025-07-29 | Added Standard Agreement Terms, ACER Demand Response NC terms. Yet to fully include all E2E terms | MB     |
| v1.0    | 2025-07-29 |Live at FlexNews announcement pre-workshop #1                                  | MB     |
| v1.1    | 2025-07-30 |Improved organisation and accessibility for workshop #1                                 | MB     |


This document provides definitions for key terms used within the Flexibility Market Asset Register (FMAR) programme and its associated design artefacts.

<strong>Asset and it's associated logical structures - Workshop #1 </strong>
---
<dl>
  <dt>(Flexible) Asset</dt>
  <dd>The primary record in FMAR's ARM. It represents a single, uniquely identifiable device, which corresponds to an <strong>Installation</strong> at a single <strong>Accounting Point</strong>.</dd>

  <dt>Accounting Point</dt>
  <dd>The unique, formal point on the electricity network (e.g., an MPAN) where an <strong>Installation</strong> is connected and measured. It serves as the official point of verification for flexibility services.</dd>

  <dt>Device</dt>
  <dd>The most granular physical piece of equipment or technology that can contribute to flexibility (e.g., a single battery inverter, an EV charger, a heat pump). It is identified by attributes like a serial number.</dd>

  <dt>Installation</dt>
  <dd>The physical setup of one or more <strong>Devices</strong> and associated <strong>Meters</strong> at a specific location, as viewed for system operations.</dd>

  <dt>Market Unit</dt>
  <dd>The logical, commercial entity created by a Flexibility Service Provider that participates in the market (e.g., by submitting bids). A Market Unit is composed of one or more <strong>Flexible Assets</strong>.</dd>

  <dt>Meter</dt>
  <dd>A device used for the measurement of energy flow. It provides the data that quantifies the behaviour of an Installation at its Accounting Point.</dd>

  <dt>Service Providing Group (SPG)</dt>
  <dd>A type of <strong>Market Unit</strong> that consists of many <strong>Flexible Assets</strong> (or SPUs) from <strong>multiple Accounting Points</strong>.</dd>

  <dt>Service Providing Unit (SPU)</dt>
  <dd>A type of <strong>Market Unit</strong> that consists of one or more <strong>Flexible Assets</strong> located at a <strong>single Accounting Point</strong>.</dd>
</dl>




<strong>FMAR modules - Workshop #1 </strong>
---
<dl>
  <dt><strong>FMAR Hub</strong></dt>
  <dd>The overall digital system for Great Britain, operated by Elexon, that provides the central point of control, governance, and access for all FMAR data modules and use cases.</dd>

  <dt><strong>Asset Registration Module (ARM)</strong></dt>
  <dd>The FMAR Hub module serving as the definitive, central registry for all <strong>Flexible Assets</strong>. It is the Single Source of Truth for asset-specific technical, locational, and ownership data.</dd>

  <dt><strong>Service Provider & User Module (SPUM)</strong></dt>
  <dd>The FMAR Hub module that serves as the central registry for all entities (FSPs, SOs, etc.) and individual <strong>Users</strong> that interact with the FMAR Hub. It manages identity, roles, and access control.</dd>

  <dt><strong>Product & Service Qualification Module (PSQM)</strong></dt>
  <dd>The FMAR Hub module used to manage the qualification status of <strong>Market Units (SPUs/SPGs)</strong> against defined GB flexibility Products. It contains the Product Catalogue and Table of Equivalences.</dd>

  <dt><strong>Grid Interaction & Constraints Module (GICM)</strong></dt>
  <dd>A potential future FMAR Hub module for managing and disseminating information on the grid prequalification status and temporary operational limits imposed by System Operators on specific <strong>Flexible Assets</strong>.</dd>
</dl>


<details>
<summary><strong>Additional Programme Terms under exploration</strong></summary>
<dl>
  <dt>Accounting Point</dt>
  <dd>A unique reference for a point on the electricity network, such as a Meter Point Administration Number (MPAN), where energy flow is measured for market purposes.</dd>

  <dt>(Flexible) Asset</dt>
  <dd>The unique physical device at a specific Accounting Point (like an MPAN) that can provide flexibility. In FMAR, an Asset is a core record in the Asset Registration Module (ARM) and has an Accounting Point as one of its key attributes.</dd>

  <dt>Asset Registration Module (ARM)</dt>
  <dd>The FMAR Hub module that serves as the definitive, central registry for all flexible assets participating in GB flexibility markets. It is the Single Source of Truth for asset-specific technical and locational data.</dd>
  
  <dt>Counterparty</dt>
  <dd>A legal entity that enters into a commercial agreement to either buy or sell a Flexibility Service. In the FMAR context, this typically refers to the Flexibility Service Provider (as the seller) and the System Operator (as the buyer).</dd>

  <dt>FMAR Hub </dt>
  <dd>The overall digital system, operated by Elexon, that provides the central point of control, governance, and access for all FMAR data modules and use cases.</dd>

  <dt>Flexibility Service Provider (FSP)</dt>
  <dd>A specialist entity that manages one or more Market Units, aggregates multiple assets, and offers their combined flexibility to the market. FSP entities are registered and managed in the SPUM.</dd>

  <dt>Flexibility</dt>
  <dd><em>No definition provided.</em></dd>

  <dt>Grid Interaction & Constraints Module (GICM)</dt>
  <dd>A future FMAR Hub module for managing and disseminating information on grid prequalification status and any temporary operational limits imposed by System Operators on specific Market Units (SPUs/SPGs).</dd>
  
  <dt>(Market) Unit</dt>
  <dd>The logical entity controlled by an FSP that provides flexibility and participates in markets. In FMAR, a Market Unit is defined in the PSQM as either a Service Providing Unit (SPU) or a Service Providing Group (SPG).</dd>

  <dt>Product</dt>
  <dd>A specific, defined type of flexibility service (e.g., Dynamic Containment, Peak Reduction) with standard technical and commercial requirements that can be procured by a System Operator. Products are defined in the FMAR Product Catalogue within the PSQM.</dd>

  <dt>Product & Service Qualification Module (PSQM)</dt>
  <dd>The FMAR Hub module used to manage the qualification and verification status of Market Units (SPUs/SPGs) against defined GB flexibility Products. It contains the Product Catalogue and Table of Equivalences.</dd>

  <dt>Qualification</dt>
  <dd>The end-to-end process of ensuring a counterparty is ready to provide a specific flexibility service. It has three key aspects:<br>
    a) Entity Qualification (SPUM): Is the FSP a valid commercial entity(Counterparty) who can be trusted to input correct data about the Assets and Units?<br>
    b) Grid Prequalification (GICM): Is the Market Unit's operation safe for the grid at its location? Are the Asset(s) connected to the grid at an appropriate point location such that Service Delivery can be technically supported by the connecting grid and any intermediate grid?<br>
    c) Product Qualification (PSQM): Is the Market Unit technically capable of delivering within the requirements of the specific Product?</dd>

  <dt>Service Provider & User Module (SPUM)</dt>
  <dd>The FMAR Hub module that serves as the central registry for all entities (FSPs, SOs, etc.) that interact with the FMAR Hub. It manages their identity, roles, and user accounts.</dd>

  <dt>Service Providing Group (SPG)</dt>
  <dd>A type of Market Unit defined in PSQM as an aggregation of flexible assets or SPUs located at **more than one** Accounting Point, controlled by a single FSP.</dd>

  <dt>Service Providing Unit (SPU)</dt>
  <dd>A type of Market Unit defined in PSQM as a single flexible asset or an ensemble of flexible assets located at a **single** Accounting Point, controlled by a single FSP.</dd>
  
  <dt>Sub-market</dt>
  <dd>A specific segment of the overall flexibility market, often distinguished by the procuring System Operator (e.g., DSO Local Constraint Market, NESO Ancillary Service Market) or by geography.</dd>

  <dt>System Operator (SO)</dt>
  <dd>An entity responsible for operating and maintaining a part of the electricity network. In the GB context, this includes Distribution System Operators (DSOs) and the National Energy System Operator (NESO).</dd>

  <dt>User</dt>
  <dd>An individual person with credentials to access the FMAR Hub, who acts on behalf of a registered entity (such as an FSP or SO). User accounts are managed within the SPUM.</dd>
</dl>

---

<details>
<summary><strong>Standard Agreement Glossary - for reference</strong></summary>

<dl>
  <dt>Accepted [MW/MVAR]</dt>
  <dd>The [MW/MVAR] accepted in accordance with [this Annex];</dd>

  <dt>Accepted Availability Window</dt>
  <dd>Where services have been contracted to include variable availability, the accepted availability window is the period required for service provision to be made available following the agreement between the Company and Provider during the Availability Refinement Period. If a service does not have an Availability Refinement Period, then this Accepted Availability Window is defined within the Contract Award;</dd>

  <dt>Accepted End Time</dt>
  <dd>The date and time (to the nearest minute) as notified in accordance with the Service Terms at which the Accepted [MW/MVAR] is no longer required to be delivered;</dd>

  <dt>Accepted Start Time</dt>
  <dd>The date and time (to the nearest minute) as notified in accordance with the Service Terms at which the Accepted [MW/MVAR] shall be delivered;</dd>

  <dt>Active Power</dt>
  <dd>The product of voltage and the in-phase component of alternating current measured in units of Watts and standard multiples thereof i.e. 1000 Watts = 1kW, 1000 kW = 1MW, 1000 MW = 1GW, 1000 GW = 1TW;</dd>
  
  <dt>Asset Point Metering</dt>
  <dd>The metering measured directly from the DER and is downstream of the Boundary Point Metering;</dd>

  <dt>Boundary Metering Point</dt>
  <dd>The metering measured at the point of supply from the Company network;</dd>
  
  <dt>Distributed Energy Resources (DER)</dt>
  <dd>The electricity generators, electricity storage or electrical loads (both in respect of domestic and non-domestic assets and including, but not limited to, electric vehicle charge points), and other Site equipment, machinery, Apparatus, materials and other items used for the provision of the Flexibility Services as described in the Service Terms;</dd>

  <dt>Flexibility Market Catalogue</dt>
  <dd>The catalogue of all flexibility market parameters, owned by the Market Facilitator.</dd>
  
  <dt>Flexibility Market Rule</dt>
  <dd>The document of that name (inclusive of rules in respect of Flexibility Market Asset Registration) owned and amended by the Market Facilitator from time to time and developed in collaboration with other licensees, the ISOP and other interested stakeholders, through working groups and consultation.</dd>
  
  <dt>Flexibility Services</dt>
  <dd>The services to be provided by the Provider to the Company under and in accordance with this Agreement which give the Company the ability to manage the load at a specific point of the Network at certain points in time;</dd>

  <dt>Market Facilitator</dt>
  <dd>The role created by the Authority with a mandate to standardise local flexibility markets and align with national flexibility markets.</dd>

  <dt>MPAN</dt>
  <dd>Meter point administration number;</dd>
  
  <dt>NESO</dt>
  <dd>National Energy System Operator Limited (company number: 11014226) (and any successor to its role);</dd>
  
  <dt>Primacy Rules</dt>
  <dd>The primacy rules defined by the Market Facilitator (as applicable at the time off the relevant Service Window);</dd>
  
  <dt>Utilisation Instruction</dt>
  <dd>An instruction by the Company to the Provider to deliver Flexibility Services;</dd>

etc.
  
</dl>
</details>



---

<details>
<summary><strong>ACER Demand Response Network Code terms - for reference</strong></summary>

<dl>
  <dt>Activation</dt>
  <dd>The process that triggers the delivery of a contracted Flexibility Service.</dd>

  <dt>Baseline</dt>
  <dd>A counterfactual reference of what the electrical quantities at an Accounting Point would have been in the absence of an Activation for a Flexibility Service.</dd>

  <dt>Baselining</dt>
  <dd>The set of procedures and methodologies used to calculate a Baseline for a Market Unit's expected behaviour prior to service delivery.</dd>
  
  <dt>Measurement</dt>
  <dd>The process of observing and recording the behaviour of a Market Unit and/or the grid during service provision to collect data that legally attests to the Flexibility Service provided.</dd>
  
  <dt>Procurement</dt>
  <dd>The phase containing all procedures (such as bid collection and market clearing) where the buyer (e.g., System Operator) and seller (e.g., FSP) establish a binding agreement for the exchange of a Product.</dd>

  <dt>Settlement</dt>
  <dd>The process that defines and executes the monetary exchange between the buyer (SO) and seller (FSP) based on the Measurement of the Flexibility Service provided, as per the terms of the procured Product.</dd>

</dl>

<img width="551" height="69" alt="image" src="https://github.com/user-attachments/assets/c5c2689f-61f9-44cd-a6b2-d0b827207ee5" />

A useful diagram from IDSA. Image source: https://internationaldataspaces.org/wp-content/uploads/dlm_uploads/IDSA-Position-Paper-Interoperability-Framework-in-Energy-Data-Spaces-v2-3.pdf 


<img width="491" height="297" alt="image" src="https://github.com/user-attachments/assets/6057280d-80d3-41c2-bb52-5dfece926ef4" />

A useful diagram from ebIX. Image source: https://mwgstorage1.blob.core.windows.net/public/Ebix/ebIX%20BRS%20for%20Flexibility%20register%20administration%20-%20Draft%20for%20v1r0B%2020220614.pdf


<img width="969" height="440" alt="image" src="https://github.com/user-attachments/assets/b858a238-da34-4b64-95e5-b3890c1714ed" />

A useful diagram from Magnus Energy. Image source: https://magnusenergy.com/wp-content/uploads/2025/06/NC-DR-Brief-FINAL.pdf
</details>


---
