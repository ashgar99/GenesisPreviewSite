# Genesis  
**Master Strategy Document**  
**Decision intelligence for teams who care whether their work actually worked.**  
*January 2026*

---

## Contents

1. [What Genesis Is](#1-what-genesis-is)  
2. [Mission and Vision](#2-mission-and-vision)  
3. [How Genesis Works](#3-how-genesis-works)  
4. [The Two Internal Models (RIM & IEM)](#4-the-two-internal-models-rim--iem)  
5. [Technical Architecture](#5-technical-architecture)  
6. [MVP Scope (Phase 2 Start)](#6-mvp-scope-phase-2-start)  
7. [Genesis Profile Structure](#7-genesis-profile-structure)  
8. [Database Schema](#8-database-schema)  
9. [Intent Verification & Recalibration](#9-intent-verification--recalibration)  
10. [First Buyers](#10-first-buyers)  
11. [Team Scaling Plan](#11-team-scaling-plan)  
12. [Go-to-Market Campaign](#12-go-to-market-campaign)  
13. [Brand Identity](#13-brand-identity)  
14. [Business Model & Benchmarks](#14-business-model--benchmarks)  
15. [Timeline: London to Tokyo](#15-timeline-london-to-tokyo)  
16. [Finances: From Zero](#16-finances-from-zero)

---

## 1. What Genesis Is

Genesis is a decision-intelligence company. It helps modern teams make better, calmer, more defensible decisions by testing whether actions behave the way they were intended to.

Genesis exists because:

- Teams already have data  
- Teams already have AI  
- Teams still lack a shared standard for judgement  

Genesis does not generate work. It does not optimise for vanity outcomes. It interrogates outcomes and feeds learning back into future decisions.

**Positioning:** Genesis sits between data, AI tools, and human judgement. This positioning is critical—Genesis is complementary, not competitive with existing tools.

---

## 2. Mission and Vision

### Mission
To give teams a trustworthy, shared way to judge outcomes, so decisions are informed by evidence rather than momentum, hierarchy, or noise.

### Vision
A world where organisations:

- Stop confusing activity with learning  
- Stop mistaking volatility for insight  
- Make fewer irreversible mistakes because judgement is systematised  

Long-term, Genesis becomes decision infrastructure—as expected in a serious organisation as analytics or documentation.

---

## 3. How Genesis Works

Genesis operates as a closed-loop system:

- Collects structured historical signals  
- Interprets them through a consistent judgement framework  
- Tests individual executions against intent  
- Emits decision-ready insights into existing workflows  
- Feeds validated learnings back into the system  

This loop is powered by two internal models, which remain conceptually separate but operationally linked.

---

## 4. The Two Internal Models (RIM & IEM)

### Model 1: RIM (Retrospective Intelligence Model)

RIM answers: **"What patterns exist in what we've already done, and which of those patterns are trustworthy?"**

It is the strategic memory of Genesis.

**What RIM Does**
- Aggregates historical actions and outcomes  
- Identifies repeatable patterns vs one-off successes  
- Flags false positives (noise mistaken as signal)  
- Surfaces structural gaps and overuse  
- Establishes baselines for future judgement  

RIM is slow, deliberate, and contextual.

---

### Model 2: IEM (Intent-Execution Model)

IEM answers: **"Did this specific action behave the way it was designed to behave?"**

It is the integrity and falsification layer.

**What IEM Does**
- Tests individual executions against stated intent  
- Evaluates structure, alignment, and outcome quality  
- Distinguishes: success by design, success by coincidence, failure with learning value  
- Produces pass / fail / uncertain judgements with reasoning  

IEM is fast, granular, and critical.

---

### IEM Verdicts

| Verdict | Meaning | RIM Eligible |
|---|---|---|
| PASS | Success by design | Yes |
| FAIL | Clean miss, good execution | Yes |
| COINCIDENCE | Success, wrong reasons | Blocked until recalibration |
| UNCERTAIN | Insufficient signal | Blocked until recalibration |

### Model Sync Logic

The blocking mechanism is the defensibility core:

- IEM evaluates executions in the present  
- RIM updates only when IEM marks learning as valid  
- Failed but clean executions still inform RIM  
- Coincidental wins are explicitly blocked from reinforcing strategy  

---

## 5. Technical Architecture

### Stack Overview

| Component | Technology | Notes |
|---|---|---|
| Database | PostgreSQL (Supabase) | Relational structure suits intent→action→verdict chain |
| Auth | Supabase Auth or Clerk | Simple, built-in |
| Processing | Python + Claude API | IEM evaluation, reasoning traces |
| Profile Generation | Markdown → PDF (Pandoc) | Templated, automatable |
| Delivery | Slack webhooks + Email | No partnership needed |
| Intake Forms | Tally | CSV upload + intent declaration |
| Hosting | Railway or Supabase | Simple, affordable |

### Architecture Layers

- **Ingestion Layer:** Tally form → CSV → Parser script → Postgres  
- **Processing Layer:** IEM engine (per-action) + RIM engine (pattern synthesis) + LLM integration  
- **Output Layer:** Genesis Profile generator → Slack/email delivery  

---

## 6. MVP Scope (Phase 2 Start)

The MVP includes semi-automation from day one, rather than starting fully manual.

### MVP Capabilities

- LinkedIn only (single surface)  
- Structured intake via Tally form (CSV + intent declaration)  
- Automated IEM evaluation pipeline  
- Basic RIM pattern detection  
- Templated Genesis Profile generation  
- Automated Slack delivery  
- Web form for recalibration responses  

### Development Timeline

| Week | Milestone |
|---|---|
| 1-2 | Postgres schema, auth, environment setup |
| 3-4 | Intake form, CSV parser, data normalisation |
| 5-7 | IEM engine, Claude API integration, verdict classification |
| 8-9 | RIM foundation, pattern detection, confidence scoring |
| 10-11 | Profile generation, Slack webhook delivery |
| 12-14 | Recalibration interface, RIM update logic |
| 14+ | First paying customers on automated system |

**Total time to functional MVP:** ~14 weeks

---

## 7. Genesis Profile Structure

The Genesis Profile works for different readers—some want the verdict, others want to see the evidence. The principle: **lead with judgement, reveal evidence on request.**

### Three-Layer Architecture

| Layer | Audience | Content |
|---|---|---|
| 1. Executive Summary | Founders, busy execs | Verdicts, confidence, key finding, top action |
| 2. Evidence View | Marketing leads, team leads | Per-action scores, reasoning traces, patterns |
| 3. Analytics View | Data-driven ICs, analysts | Distributions, trends, correlations, raw data |

---

### Layer 1: Executive Summary

One page / single screen. For people who want the answer.

**Contents**
- Verdict breakdown (e.g., ✓ 4 pass · ✗ 3 fail · ◐ 3 coincidence · ? 2 uncertain)  
- Confidence score with trend (e.g., 67% pattern confidence, +9% vs last cycle)  
- Key finding (1-2 sentences)  
- Top recommendation / action required  

---

### Layer 2: Evidence View

For people who want to understand why.

#### Per-Action Verdict Cards

| Action | Intent | Verdict | Alignment | Integrity | Confidence |
|---|---|---:|---:|---:|---:|
| Hiring post (Jan 3) | Talent attraction | PASS | 82 | 78 | 85 |
| Product thread (Jan 7) | Product awareness | FAIL | 34 | 71 | 79 |
| Industry take (Jan 12) | Thought leadership | COINCIDENCE | 28 | 65 | 72 |

#### Expandable Detail per Action
- Declared intent and expected markers  
- Observed outcomes (what actually happened)  
- Score breakdown with visual bars  
- Reasoning trace (natural language explanation)  
- Learning value classification  
- RIM eligibility status  

#### Pattern Analysis (RIM Summary)

| Pattern | Confidence | Based On | Status |
|---|---:|---:|---|
| Hiring posts outperform on Tuesdays | 72% | 6 actions | Validated |
| Product threads underperform against awareness | 68% | 4 actions | Validated |
| Thought leadership = peer engagement, not buyers | 61% | 5 actions | Observing |
| Morning posts show higher alignment | 54% | 8 actions | Insufficient |

#### Recalibration Queue

Actions requiring user input before RIM can update:

| Action | Current Verdict | Issue | Required |
|---|---|---|---|
| Industry take (Jan 12) | COINCIDENCE | Success, wrong reasons | Recalibrate intent |
| Commentary (Jan 18) | COINCIDENCE | High engagement, low alignment | Recalibrate intent |
| Q&A thread (Jan 22) | UNCERTAIN | Insufficient signal | Provide context |

---

### Layer 3: Analytics View

For data-driven team members who want to see the numbers.

#### Score Distributions
- Histogram of Intent Alignment scores across all actions  
- Mean, median, standard deviation  
- Distribution by verdict type  

#### Trend Over Time
- Pattern confidence by cycle (month-over-month)  
- Verdict distribution trends  
- Pass rate trajectory  
- Projected next-cycle confidence  

#### Intent Performance Matrix

| Intent | Actions | Pass Rate | Avg Alignment | Avg Confidence |
|---|---:|---:|---:|---:|
| Talent attraction | 4 | 75% | 71.2 | 82.5 |
| Product awareness | 3 | 0% | 32.1 | 76.3 |
| Thought leadership | 3 | 0% | 38.4 | 65.2 |
| Community building | 2 | 50% | 56.8 | 71.0 |

#### Engagement vs Alignment Analysis
Scatter plot showing engagement rate against intent alignment score. Reveals actions with high engagement but low alignment (coincidences) vs high alignment regardless of engagement (designed success).

#### Raw Data Export
Full data available in CSV and JSON formats:
- Action ID, timestamp, platform  
- Content snapshot (truncated)  
- Declared intent and expected markers  
- All scores and verdict  
- Reasoning trace and RIM eligibility  

---

### Implementation by Phase

| Phase | Delivery | Layers |
|---|---|---|
| MVP (PDF) | Multi-page PDF with table of contents | All 3, paginated |
| Phase 2 | PDF + optional CSV export | All 3 + raw data |
| Phase 3 (Dashboard) | Interactive tabs: Summary \| Evidence \| Analytics | All 3, switchable |

### Reader-Layer Mapping

| Reader Type | What They Want | Primary Layer |
|---|---|---|
| Founder/Exec | Just tell me what to do | Summary |
| Marketing Lead | Why did this fail? | Evidence |
| Data-minded IC | Show me the numbers | Analytics |
| Skeptic | How do I know this is real? | Evidence + Analytics |
| Investor/Auditor | What's the methodology? | All three + raw |

The Genesis principle applies to itself: **Don't hide the reasoning. Let people verify the judgement if they want to. Trust is built through transparency, not authority.**

---

## 8. Database Schema

Core tables for multi-tenant operation:

### Teams
- `id`, `name`, `created_at`, `settings (jsonb)`

### Intents
- `id`, `team_id`, `name`, `description`, `expected_markers (jsonb)`, `status`, `created_at`

### Actions
- `id`, `team_id`, `intent_id`, `platform`, `external_id`, `content_snapshot (jsonb)`, `context_snapshot (jsonb)`, `metrics_raw (jsonb)`, `created_at`, `cycle_id`

### Verdicts
- `id`, `action_id`, `verdict (enum: pass/fail/coincidence/uncertain)`, `scores (jsonb)`, `reasoning_trace`, `confidence`, `rim_eligible`, `recalibration_required`, `recalibration_status`, `created_at`, `model_version`

### Patterns
- `id`, `team_id`, `intent_id`, `pattern_type`, `description`, `confidence`, `supporting_verdicts`, `false_positive_likelihood`, `valid_from`, `invalidated_at`, `created_at`

### Recalibrations
- `id`, `verdict_id`, `original_intent_id`, `proposed_intent_id`, `user_response (jsonb)`, `resolution (enum)`, `resolved_at`, `resolved_by`, `created_at`

---

## 9. Intent Verification & Recalibration

### Intent Declaration (Pre-Execution)

When logging an action, teams must declare:
- **Primary intent** (required, single choice from intent library)  
- **Expected markers** (1-3 specific outcomes: “If this works, I expect to see…”)  
- **Success threshold** (optional: “I’d consider this successful if…”)  

### IEM Scoring Dimensions

| Dimension | Question |
|---|---|
| Intent Alignment (0-100) | Did observed outcomes match expected markers? |
| Structural Integrity (0-100) | Was the execution well-formed for the intent? |
| Engagement Quality (0-100) | Did the right people engage in the right way? |
| Context Sensitivity (0-100) | How much did external factors influence outcome? |

### Recalibration Workflow

When IEM flags COINCIDENCE or UNCERTAIN, the user must resolve before RIM can update:

- **Option 1: Update Intent** — Reassign to different intent, IEM re-evaluates  
- **Option 2: Confirm Original Intent** — Verdict becomes FAIL, RIM receives negative signal  
- **Option 3: Exclude** — Action removed from RIM consideration entirely  

---

## 10. First Buyers

### Target Profile

Specific people inside companies who have:
- Budget authority (can spend £200-500/month without committee)  
- Felt pain (burned by vanity metrics or reactive decisions)  
- Sophistication (understand why “more engagement” isn’t a strategy)  
- Autonomy (can adopt tools without procurement friction)  

### Three Buyer Archetypes

1. **Frustrated Head of Marketing**  
   Series A-C startup, 30-200 employees, team of 2-8. Tired of defending decisions with metrics that don’t reflect reality.

2. **Founder Who Does Their Own Content**  
   Pre-seed to Series A or bootstrapped. Posting on LinkedIn because they “should” but unsure if it’s driving pipeline.

3. **Agency Owner Seeking Differentiation**  
   Content/social agency, 5-30 people. Wants proprietary framework to justify premium pricing.

### First 10 Customers Path

| # | Type | Source | Timeline |
|---:|---|---|---|
| 1-2 | Founders you know | Personal network | Month 1-2 |
| 3-4 | Founders who find you | Your content | Month 2-4 |
| 5-6 | Heads of Marketing | Direct outreach | Month 3-5 |
| 7-8 | Agency owners | Referrals | Month 4-6 |
| 9-10 | Inbound | Content/podcasts | Month 5-8 |

---

## 11. Team Scaling Plan

### Hiring Timeline

| Phase | Timeline | Team Size | Key Hire |
|---|---|---:|---|
| Solo | Months 1-6 | 1 | None (contractors only) |
| First hire | Months 6-9 | 2 | Founding Engineer (UK) |
| Pre-Tokyo | Months 9-12 | 3 | Growth/Ops (UK) |
| Tokyo launch | Months 12-18 | 3 | You transition to Tokyo |
| Tokyo growth | Months 18-24 | 4 | Japan Market Lead |
| Scaling | Months 24-36 | 6-8 | Engineers in both locations |

### Founding Engineer Profile
- Full-stack, backend-leaning  
- Comfortable with ambiguity  
- Can own IEM/RIM implementation  
- Willing to do unglamorous work  

**Comp:** £60-80k base + 2-4% equity

### Hiring Process
- Job posting that filters (describe the problem, not the stack)  
- Async reasoning challenge (take-home, not leetcode)  
- Conversation, not interview (60-90 min discussion)  
- Paid trial (1-2 week real project, £1,500-3,000)  

---

## 12. Go-to-Market Campaign

### Platform Strategy

| Platform | Role | Investment | Priority |
|---|---|---:|---|
| LinkedIn (Genesis account) | Primary—buyer discovery | 2-3 hrs/week | High |
| Twitter (personal account) | Ideas + build log | 2-3 hrs/week | Medium |
| TikTok | Experimental—documentary | 2-3 hrs/week | Optional |
| YouTube | Ambient—lifestyle integration | 1-2 hrs/month | Low |

### Content Pillars
- Genesis philosophy: The ideas behind the product  
- Build log: Honest updates on what you’re making  
- Industry observation: Commentary on marketing/decision-making  
- Contrarian takes: Challenges to conventional wisdom  

### Campaign Phases
- **Days 1-30:** Establish voice, start conversations, learn what resonates  
- **Days 30-60:** Build in public (honestly), share real decisions and challenges  
- **Days 60-90:** Case studies and proof—show Genesis working  

### TikTok Direction (If Pursuing)
Format: “Thinking Out Loud” — 60-90 seconds, one idea, speaking directly to camera while walking or in natural settings. No trending sounds, no performance. Substance that attracts the right people.

---

## 13. Brand Identity

### Brand Voice
Genesis speaks like a senior advisor who has seen enough to be calm, honest enough to be uncomfortable, and disciplined enough to withhold judgement until warranted.

### Tone Attributes

| Attribute | What it means | What it avoids |
|---|---|---|
| Measured | Conclusions are earned, not asserted | Hype, urgency, breathlessness |
| Direct | Says what it means without hedging | Corporate softening |
| Episodic | Speaks in cycles, not streams | Always-on anxiety |
| Honest | Delivers bad news clearly | False reassurance |
| Grounded | Abstractions are anchored | Consultant-speak |

### Visual Identity
- Primary colour: Charcoal deep (`#1a1d21`)  
- Secondary: Cream (`#f8f7f4`)  
- Accent: Muted teal (`#4a7c7c`)  
- Typography: Fraunces (display), DM Sans (body)

### System Colours
- Pass: `#4a7c5c`  
- Fail: `#8c5a5a`  
- Uncertain: `#7c6f4a`

### Design Principles
- Restraint as signal — Every element earns its place  
- Honesty over comfort — The interface never softens bad news  
- Structure reveals thinking — Layout exposes how Genesis thinks  

---

## 14. Business Model & Benchmarks

### Pricing

| Tier | Price | Includes |
|---|---:|---|
| Founding cohort | £300/month | Full Genesis Profile + direct access (locked 12 months) |
| Standard | £400/month | Genesis Profile monthly |
| Premium | £500/month | Genesis Profile + 30-min monthly call |

### Key Metrics
- **MRR:** Monthly Recurring Revenue (customers × average price)  
- **ARR:** Annual Recurring Revenue (MRR × 12)  
- **Churn:** Percentage of customers who cancel per month  

### Growth Benchmarks

| Phase | MRR Target | Customers | Signal |
|---|---:|---:|---|
| Phase 1 (Months 1-6) | £3,000-5,000 | 10-15 | Product-market fit |
| Phase 2 (Months 6-12) | £8,000-15,000 | 25-40 | Repeatable sales |
| Phase 3 (Months 12-18) | £20,000-35,000 | 50-80 | Scale preparation |
| Phase 4 (Months 18-24) | £40,000+ | 100+ | Market expansion |

---

## 15. Timeline: London to Tokyo

### 12-Month UK Phase

| Month | Focus | Milestone |
|---:|---|---|
| 1-3 | Build MVP | Functional automated system |
| 3-5 | First customers | 5-10 paying teams |
| 5-7 | Iterate | Product improvements based on feedback |
| 7-9 | First hire | Founding Engineer joins |
| 9-11 | Scale prep | 20+ customers, second hire |
| 11-12 | Transition planning | London team can operate independently |

### Tokyo Expansion Phase

| Month | Focus | Milestone |
|---:|---|---|
| 12-14 | Market research | Understanding Japanese B2B SaaS landscape |
| 14-16 | First pilots | 2-3 Japanese companies testing Genesis |
| 16-18 | Localisation | Japanese-language profiles, cultural adaptation |
| 18-20 | First Tokyo hire | Japan Market Lead joins |
| 20-24 | Parallel operation | London + Tokyo serving both markets |

### The Long View
Genesis scales best in decision-dense economies with knowledge work, flat hierarchies, AI adoption, and Slack/Notion norms.

Early hubs: London, New York, Berlin, Zurich, Tokyo

Genesis scales horizontally across markets because judgement principles are universal—only context calibration changes.

---

## 16. Finances: From Zero

Cost-effective approach for bootstrapping as a student founder.

### One-Time Costs (Day 1)

| Item | Cost | Notes |
|---|---:|---|
| Domain | £10-15/year | Porkbun (cheapest registrar) |
| Company formation | £0-12 | Free via Tide, or £12 direct to Companies House |
| Trademark (UK) | £170 | Can defer 6-12 months until validated |
| Logo | £0 | Wordmark in Figma (free) |

**Minimum to start legally:** ~£10-25 (domain + company)

---

### Monthly Operating Costs by Phase

#### Phase 1: Just You (Months 1-6)

| Item | Cost-Effective Route | Monthly |
|---|---|---:|
| Database | Supabase free tier | £0 |
| Auth | Supabase Auth (included) | £0 |
| LLM (Claude API) | Anthropic API | £20-50 |
| Hosting | Railway free / Supabase Edge | £0 |
| Email | Personal Gmail | £0 |
| Slack notifications | Incoming webhooks | £0 |
| Forms (intake) | Tally free tier | £0 |
| PDF generation | Pandoc (local) | £0 |
| Design | Figma free tier | £0 |

**TOTAL:** £20-55

#### Phase 2: First Customers (Months 6-12)

| Item | What Changes | Monthly |
|---|---|---:|
| Database | Supabase Pro | £20 |
| LLM | Higher usage | £50-100 |
| Email | Google Workspace | £5 |
| Forms | Tally Pro (if needed) | £24 |
| Accounting | FreeAgent or Xero | £12-25 |
| Bank | Tide or Starling | £0 |

**TOTAL:** £110-175

#### Phase 3: Scaling (Months 12+)

| Item | What Changes | Monthly |
|---|---|---:|
| Database | Supabase Pro (higher tier) | £75+ |
| LLM | 50+ customers | £200-500 |
| Hosting | Railway paid | £20+ |
| Team tools | Slack paid, Linear | £20-50 |

**TOTAL:** £350-700

---

### Annual Costs

| Item | Cost | Notes |
|---|---:|---|
| Domain renewal | £10-15 | Annual |
| Company confirmation | £13 | Companies House requirement |
| Accountant (optional) | £300-600 | Can self-file via FreeAgent |
| Insurance (optional) | £100-200 | Professional indemnity, can defer |

---

### What You Can Defer

| Item | Defer Until | Risk |
|---|---|---|
| Trademark | First £10k revenue | Low |
| Professional indemnity | First enterprise client | Medium |
| Accountant | Year 1 tax return | Low |
| Google Workspace | First paying customer | Low |
| Paid Supabase | ~20 customers | Low |
| Company formation | First invoice | Medium |

---

### Tool Recommendations

#### Database & Backend  
Recommendation: Supabase free → Supabase Pro when needed. Best for your use case with generous free tier.

#### LLM Strategy
- IEM evaluations: Claude Sonnet (~£0.50-1.00 per Genesis Profile)  
- Simple tasks: Consider Claude Haiku or GPT-4o mini for formatting  
At £300/month per customer, LLM cost is <1% of revenue.

#### Banking
Recommendation: Tide (free company formation + account) or NatWest (free FreeAgent included)

#### Accounting
Recommendation: Spreadsheet initially → FreeAgent (free via NatWest) when invoicing regularly

---

### Revenue-to-Cost Scenarios

| Customers | MRR | Monthly Costs | Net Profit |
|---:|---:|---:|---:|
| 0 | £0 | £25 | -£25 |
| 3 | £1,000 | £50 | £950 |
| 10 | £3,500 | £100 | £3,400 |
| 25 | £9,000 | £175 | £8,825 |
| 50 | £18,000 | £400 | £17,600 |

SaaS margins are typically 80%+. Genesis should be no different.

---

### First Year Projection (Conservative)

| Month | Customers | MRR | Costs | Cumulative |
|---:|---:|---:|---:|---:|
| 1-3 | 0 | £0 | £35/mo | -£105 |
| 4 | 2 | £700 | £50 | £545 |
| 5 | 4 | £1,400 | £60 | £1,885 |
| 6 | 6 | £2,100 | £75 | £3,910 |
| 7 | 8 | £2,800 | £100 | £6,610 |
| 8 | 10 | £3,500 | £120 | £9,990 |
| 9 | 13 | £4,500 | £140 | £14,350 |
| 10 | 16 | £5,600 | £160 | £19,790 |
| 11 | 19 | £6,650 | £175 | £26,265 |
| 12 | 22 | £7,700 | £200 | £33,765 |

**Year 1 total:** ~£34k profit (conservative estimate)

---

### Minimum Viable Budget

#### To Legally Start and Build MVP

| Item | Cost | Timing |
|---|---:|---|
| Domain | £10 | Day 1 |
| Company (via Tide) | £0 | Day 1 |
| Claude API | £25/month | Month 1+ |
| Everything else | £0 | Free tiers |

**TOTAL TO LAUNCH:** £35

#### First 6 Months Operating

| Period | Monthly Cost | Total |
|---|---:|---:|
| Months 1-3 (building) | £30 | £90 |
| Months 4-6 (first customers) | £60 | £180 |

**TOTAL:** £270

Bottom line: You can build and launch Genesis for under £300 total, assuming you do the work yourself.

---

### Student-Specific Advantages
- GitHub Student Pack — free credits for various tools  
- AWS/GCP/Azure credits — available but likely unnecessary  
- No salary expectation — longer survival without revenue  
- University resources — library, workspace, wifi  
- Student discounts — Notion, Figma, various tools  

---

## —
