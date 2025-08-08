# FMAR Design change – Self-scoring matrix guide


| Version | Date       | Changes                      | Author   |
|---------|------------|------------------------------|----------|
| v1.x  | 2025-07-23 | New draft pre-release | MB   |

To support prioritisation of proposals, each submitter is asked to score their proposed design change or requirement using the matrix below. This helps the FMAR Architecture Team triage submissions based on impact, complexity, urgency, and strategic fit.

Please provide a **score from 1 (Low) to 3 (High)** for each category, along with a brief justification. Use the guides below to calibrate your responses.

---

### 1. Strategic Alignment
**How well does this support FMAR's core objectives?**

| Score | Description |
|-------|-------------|
| **1 (Low)** | A 'nice-to-have' feature, peripheral to core FMAR goals. |
| **2 (Medium)** | Supports a core objective in a significant way. |
| **3 (High)** | Directly enables or is essential for achieving a primary FMAR objective (e.g., simplifying registration, maximising participation, improving network visibility). |

---

### 2. Industry Value & Impact
**What is the scale of the benefit, and who is positively impacted?**

| Score | Description |
|-------|-------------|
| **1 (Low)** | Benefits a niche use case or very small number of participants. |
| **2 (Medium)** | Provides significant value to a specific actor group (e.g., all FSPs, all DSOs). |
| **3 (High)** | Provides significant, cross-cutting value to the entire flexibility ecosystem (FSPs, SOs, Consumers, etc.). |

---

### 3. Urgency & Dependencies
**How time-critical is this change?**

| Score | Description |
|-------|-------------|
| **1 (Low)** | Can be implemented in a future phase with minimal impact or rework. |
| **2 (Medium)** | Needed to support an upcoming market change or prevent significant technical debt if not addressed soon. |
| **3 (High)** | Is a direct blocker for the FMAR go-live, a critical external dependency (e.g., Dispatch API v1), or addresses an immediate operational risk. |

---

### 4. Implementation Clarity & Simplicity
**How well-defined and straightforward is the proposed change?**

| Score | Description |
|-------|-------------|
| **1 (Low)** | Highly complex or conceptual; major discovery and cross-module impact. |
| **2 (Medium)** | Moderate complexity; affects a single module or known interface. |
| **3 (High)** | Simple, well-understood change with a clear implementation path and low risk. |

---

### 5. Standardisation & Interoperability
**Does this promote alignment with wider data/tech standards?**

| Score | Description |
|-------|-------------|
| **1 (Low)** | Introduces bespoke logic where standards exist. |
| **2 (Medium)** | FMAR-specific but doesn’t harm interoperability. |
| **3 (High)** | Actively aligns with recognised standards (e.g., IES, CIM, OpenADR), or greatly simplifies cross-party data exchange. |

---

### Total Score
Total score = sum of all categories (max score: **15**)

Use this score as a relative indicator — it does **not** determine automatic acceptance, but helps the Architecture Team assess complexity, dependencies, and stakeholder alignment.
