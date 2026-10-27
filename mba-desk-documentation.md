# MBA Desk — Application Overview & Prompt History

**Document Version:** 1.0  
**Project:** MBA Desk  
**Repository:** [MBA-Desk-Desktop](https://github.com/KDarak53/MBA-Desk-Desktop)  
**Last Updated:** October 2026  
**Status:** Draft. Production prompts, benchmark logs, and final nine-page PDF export are TBD.

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [What the Application Does](#2-what-the-application-does)
3. [System Architecture & Data Flow](#3-system-architecture--data-flow)
4. [Prompt Engineering & History](#4-prompt-engineering--history)
5. [Product Evolution & User Journey Log](#5-product-evolution--user-journey-log)
6. [Performance & Cost Optimization](#6-performance--cost-optimization)

## 1. Executive Summary

MBA Desk is an **offline-first Windows desktop application** that turns business newspaper PDFs into structured briefings for MBA students, strategists, and consultants. It addresses the work of selecting relevant stories and interpreting their business implications, rather than merely shortening the news.

The supplied architecture uses Electron, Vite, React, local PDF parsing, Gemini analysis, Zod validation, and SQLite storage. Outputs include functional tags, relevance scores, SWOT, and strategic interpretation. Local parsing and storage work on the user’s device; **AI analysis requires connectivity** and sends extracted text to Google.

The companion website offers a **synthetic behaviour simulation**, not a live AI model. Reported efficiency improvements remain unverified against benchmark logs. Production prompts, factual-grounding evaluation, and desktop compliance evidence are TBD.

## 2. What the Application Does

### Core Problem & Solution

Readers face **20–40 pages** of daily business news. Their task is to decide what matters and why. MBA Desk combines relevance-based triage with structured business interpretation. ET, Mint, FT, and WSJ are intended input examples; compatibility and permitted use for each publication are not verified here.

### 8 Key Features

1. **Local text extraction:** pdf-parse reads text-based PDFs before model analysis.
2. **Functional tagging:** Finance, Operations, Marketing, HR, Product Management, Analytics, and Consulting.
3. **Relevance scoring:** a 1–5 rating for each analysed article.
4. **SWOT:** four quadrants required for articles with relevance ≥2.
5. **Strategic read:** a causal statement linking a company’s constraint, an action, and a competitive consequence.
6. **Analytical voice:** prompt guidance discourages generic narration; strict enforcement in the current desktop build is TBD.
7. **Top-N scope control:** a user-selected limit on the number of stories returned, as described in the supplied draft.
8. **Local report storage:** SQLite via better-sqlite3; database and settings isolation are described in the supplied history but require verification.

### Business & Academic Value

**Intended value:** support class preparation, business discussion, and strategy-oriented reading. **Not yet demonstrated:** user time saved, adoption, retention, decision quality, or agreement with expert analysis. These require user research and labelled evaluations.

## 3. System Architecture & Data Flow

### Components

| Component | Responsibility | Boundary or limitation |
|---|---|---|
| Electron | Windows desktop shell | Packaging and installation checks TBD |
| Vite + React | Interface | Production screen evidence TBD |
| pdf-parse | Extract PDF text locally | Scans and complex layouts may fail |
| Google Gemini | Interpret extracted business text | Requires network; unsupported inferences remain possible |
| Zod | Validate output structure and constraints | Does not verify factual truth |
| better-sqlite3 / SQLite | Store reports locally | Production isolation checks TBD |

### End-to-End Workflow

1. User selects a newspaper PDF and a Top-N limit.
2. Local parsing extracts text; an empty text layer should stop analysis.
3. Extracted text is submitted to Gemini using the user-configured key.
4. Gemini returns structured article analysis.
5. Zod validates the output. The intended contract retries invalid output once, then reports failure; current implementation evidence is TBD.
6. Validated reports are stored locally and displayed for review.

**Credential distinction:** the key is configured on the user’s machine and used to authenticate the Google request. It is not evidence that all processing stays on-device.

### Zod Anti-Hallucination Guardrails

Schema constraints can reject missing fields, invalid types, disallowed tags, or out-of-range scores. They reduce malformed output, **not semantic hallucination**. Source-grounding checks and expert evaluation are still needed. The browser simulation uses a small JavaScript checker rather than the production Zod schema and must not be treated as equivalent.

## 4. Prompt Engineering & History

### Phase 1 — Next.js Web Prototype

- **Objective:** turn newspaper content into summaries.
- **Limitations:** the supplied account reports non-business stories and generic narration.
- **Outcome:** an initial workflow that exposed the need for tighter scope; source history TBD.

### Phase 2 — Voice Constraints

- **Objective:** make output analytical and direct.
- **Limitations:** strict phrase rejection reportedly produced false positives.
- **Outcome:** the supplied draft describes a later shift toward few-shot guidance. The exact current enforcement policy is TBD.

### Phase 3 — MBA Specialization & SWOT

- **Objective:** add functional tags, relevance, SWOT, and strategic interpretation.
- **Limitations:** a structured answer can still contain unsupported claims.
- **Outcome:** a more explicit analysis contract; expert agreement and grounding accuracy remain TBD.

### Phase 4 — Local Parsing & Token Optimization

- **Objective:** reduce uploaded data and model input overhead.
- **Limitations:** scanned pages and extraction quality remain open concerns.
- **Outcome:** the supplied figures report smaller payloads and lower token use. Comparable benchmark logs are TBD.

### Current System Prompt — Verbatim

```text
TBD — exact production system prompt has not been supplied.
```

### Current User Prompt — Verbatim

```text
TBD — exact production user prompt has not been supplied.
```

### Voice Rules

Use company-led, causal language. Separate reported facts from inferences. Do not use generic narrator phrasing. The exact banned-string list belongs in the production prompt once provided.

**WRONG — synthetic example:** “A useful summary of a company facing a challenge.”

**RIGHT — synthetic example:** “Because Northstar faces a capacity constraint, they must evaluate expansion, otherwise Cedar may capture unmet demand.”

The right-hand example illustrates style only. Its implication is a synthetic inference, not a real company claim. The prescribed strategic-read template is: `Because [Company] faces [Weakness/Threat], they must [Action], otherwise [Competitor] captures [Market]`.

## 5. Product Evolution & User Journey Log

The entries below are reported in the supplied context and assignment draft. Dates, commits, and primary chat evidence are TBD. They are not independently verified release notes.

| Milestone | Problem or User Request | Solution Implemented |
|---|---|---|
| Web prototype | Daily newspaper reading creates substantial triage work | Next.js prototype described in the supplied history |
| Voice rules | Generic narrative summaries lacked useful analysis | Added phrase restrictions, later moved toward few-shot guidance |
| MBA analysis | Summaries lacked functional relevance and strategic structure | Added tags, relevance scores, SWOT, and strategic reads |
| Output scope | A 32-page paper returned too many minor stories | Replaced a fixed dropdown with a numeric Top-N limit |
| Desktop workflow | User needed a locally managed workflow | Electron + Vite + React application with SQLite storage |
| Local parsing | PDF uploads added payload and token overhead | Extract text locally before Gemini analysis |
| User isolation | Credentials and history reportedly appeared on another machine | Moved settings and database to the user’s APPDATA directory |
| Structured validation | Output needed a predictable contract | Introduced Zod enforcement; factual grounding remains unproven |

## 6. Performance & Cost Optimization

**Evidence status:** supplied figures, not independently reproduced measurements. No latency, currency savings, accuracy, or usage figures are inferred.

| Measure | Before | After / reported change | Evidence limit |
|---|---|---|---|
| Upload payload | Approximately 10 MB | Approximately 50 KB of extracted text | Raw logs and same-document comparison TBD |
| Image-token overhead for a 20-page paper | 258 image tokens/page × 20 = approximately 5,160 tokens | Reported saving of approximately 5,160 input tokens through text extraction | Model configuration and billing logs TBD |
| Billable tokens | Baseline count TBD | Reported reduction of 20–40% | Denominator, sample set, and run conditions TBD |
| Processing latency | TBD | TBD | No timings supplied |
| Monetary cost | TBD | TBD | Pricing and billed usage not supplied |

The optimization changes the representation sent to the model. It does not establish better analysis quality. A controlled comparison should record the same input, model, prompt version, output limit, token counts, and extraction quality before drawing broader conclusions.
