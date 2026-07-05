# Step 0: Repo Reconnaissance & Narrative Extraction

Generated: February 2026

---

## Part 1: Stack & File Map

### Technology Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 14 (App Router) | Static export configuration |
| Styling | Tailwind CSS | Custom design tokens in tailwind.config.ts |
| Language | TypeScript | Throughout |
| UI Components | Custom + Lucide icons | No component library |
| Forms | Google Sheets webhook | Apps Script backend |
| Videos | MP4 with reduced-motion fallback | hero-bg, platform-bg, case-studies-bg |

### File Map (Key Files)

```
app/
├── page.tsx              # Landing page (hero, how-it-works, outcomes)
├── platform/page.tsx     # Platform deep-dive, verdict system
├── solutions/page.tsx    # Persona-based solutions (needs hero removal)
├── pricing/page.tsx      # Pricing tiers
├── case-studies/page.tsx # Pilot studies
├── company/page.tsx      # About/founder story
├── resources/page.tsx    # Blog/resources with newsletter
├── contact/page.tsx      # Unified contact form
└── legal/                # Privacy, terms, cookies

components/
├── layout/
│   ├── Container.tsx
│   ├── Navigation.tsx
│   └── Footer.tsx
├── sections/
│   ├── HeroPrimary.tsx       # Video background hero
│   ├── HeroSecondary.tsx     # Page-level hero
│   ├── HowItWorks.tsx        # 3-step process
│   ├── MethodologySection.tsx # Venn diagram (dual-lens)
│   ├── OutcomesMetrics.tsx   # Metrics section
│   ├── ComparisonTable.tsx   # Competitor comparison
│   ├── FAQ.tsx               # Accordion FAQ
│   ├── FinalCTA.tsx          # Footer CTA
│   ├── TechnicalDetails.tsx  # Integration features
│   ├── WhoItsFor.tsx         # Persona cards
│   └── PersonaCards.tsx      # Persona showcase
└── ui/
    ├── Button.tsx
    ├── HoverTiltCard.tsx     # Parallax tilt effect
    ├── VerdictBadge.tsx      # Pass/Fail/Coincidence/Uncertain
    └── SectionLabel.tsx
```

---

## Part 2: Submission Flow Analysis

### Current Contact Form Flow

```
User → Contact Page → Client-side form
                    ↓
              Google Apps Script (NEXT_PUBLIC_GOOGLE_SCRIPT_URL)
                    ↓
              Google Sheets
```

### Current Fields Captured

| Field | Status |
|-------|--------|
| firstName | ✓ |
| surname | ✓ |
| email | ✓ |
| companySector | ✓ |
| concern (dropdown) | ✓ |
| interest (dropdown) | ✓ |
| notes | ✓ |
| timestamp | ✓ |
| source | ✓ (from URL param) |
| utmSource | ✓ |
| utmMedium | ✓ |
| utmCampaign | ✓ |
| status | ✓ (hardcoded "pending") |

### Missing Fields (Per Brief Step 2)

| Field | Status | Action Required |
|-------|--------|-----------------|
| refId | ❌ Missing | Add UUID generation |
| userAgent | ❌ Missing | Capture navigator.userAgent |
| ipHash | ❌ Missing | Requires server-side (edge function or Apps Script) |

### Risks Identified

1. **No honeypot field** - Bot/spam vulnerability (HIGH)
2. **No rate limiting** - Could receive spam submissions (HIGH)
3. **Client-side only validation** - Easily bypassed (MEDIUM)
4. **No CAPTCHA** - Consider Cloudflare Turnstile (MEDIUM)
5. **ipHash requires server** - Static export limitation (LOW)

---

## Part 3: Public-Safe Narrative

### Internal → Public Terminology

| Internal (IP Protected) | Public-Safe Term |
|------------------------|------------------|
| RIM (Retrospective Intelligence Model) | Signals Lens / Strategy Memory |
| IEM (Intent-Execution Model) | Strategy Lens / Intent Lens |
| "Falsification layer" | "Verification system" |
| "RIM eligible" | "Reinforces strategy" |
| "Blocked from RIM" | "Blocked from reinforcing strategy" |

### The Genesis Loop (Public Language)

```
INTENT → EVIDENCE → VERDICT → STRATEGY MEMORY
   ↑                              |
   └──────────────────────────────┘
         (Only validated learnings)
```

**Narrative:**

> Genesis operates as a closed-loop decision system. First, you declare what you're trying to achieve (Intent). Then Genesis analyses what actually happened (Evidence). The comparison produces a Verdict. Only validated learnings—passes and clean failures—reinforce your Strategy Memory. Coincidental wins are explicitly blocked.

### The Blocking Mechanism (Critical Differentiator)

**Internal language (masterdoc):**
> "Coincidental wins are explicitly blocked from reinforcing strategy"

**Public-safe version:**
> Genesis prevents lucky outcomes from corrupting your strategy. When content succeeds for the wrong reasons, that "win" is blocked from influencing future decisions. This is the difference between decision intelligence and simple analytics.

### Four Verdicts (Public Descriptions)

| Verdict | Public Description |
|---------|-------------------|
| **PASS** | Success by design. Results align with declared intent. Reinforces strategy. |
| **FAIL** | Clear miss with learning value. Informs strategy through negative signal. |
| **COINCIDENCE** | Likely circumstantial. Success appears unrelated to strategy. Blocked until recalibrated. |
| **UNCERTAIN** | Insufficient evidence. More data needed before verdict can be assigned. |

---

## Part 4: Voice & Tone Guidelines

### Decision Intelligence Voice (Modelled on DI Leaders)

**DO:**
- Speak in outcomes, not features
- Use episodic language ("each cycle", "over time", "as patterns emerge")
- Be direct about limitations ("Genesis doesn't predict; it verifies")
- Use measured confidence ("our analysis indicates", "evidence suggests")

**DON'T:**
- Promise certainty ("guaranteed results", "always works")
- Use hype language ("revolutionary", "game-changing", "10x")
- Over-explain methodology publicly (IP protection)
- Reference RIM/IEM by name anywhere public

### Channel-Agnostic Language

**REMOVE:**
- "LinkedIn strategy" → "content strategy"
- "LinkedIn content" → "content" or "your content"
- "LinkedIn data" → "content performance data"
- "LinkedIn analytics" → "content analytics"

**EXCEPTION:** Technical details section can mention "LinkedIn export" as a current data source with "additional sources coming soon."

---

## Part 5: Required Changes (Steps 1-11 Preview)

### Immediate Fixes

1. **Step 1:** Remove Solutions page hero banner
2. **Step 2:** Add refId (UUID), userAgent, ipHash to contact form
3. **Step 3:** Platform page hero needs DI mechanism focus, not just "decision intelligence for content marketing"
4. **Step 7:** Copy pass to remove LinkedIn-specific references throughout

### Current LinkedIn References to Fix

| File | Line | Current Text | Should Be |
|------|------|--------------|-----------|
| solutions/page.tsx | 201 | "transform your LinkedIn strategy" | "transform your content strategy" |
| platform/page.tsx | 19-21 | "analyses your LinkedIn content" | "analyses your content" |
| platform/page.tsx | 248-249 | "LinkedIn activity" | "content activity" |
| platform/page.tsx | 258-259 | "multiple LinkedIn profiles" | "multiple content profiles" |
| platform/page.tsx | 373-374 | "transform your LinkedIn strategy" | "transform your content strategy" |
| case-studies/page.tsx | various | "LinkedIn" specific | Generalise where possible |

---

## Part 6: Site-Wide Copy Principles

### Headlines Should Emphasise

1. **The blocking mechanism** - "Luck doesn't reinforce strategy"
2. **Decision support** - "Evidence that informs, not automates"
3. **Verification over prediction** - "Test whether it worked, not whether it will"
4. **Learning loops** - "Every verdict feeds future decisions"

### Key Phrases to Use

- "Decision intelligence" (not "analytics")
- "Strategy memory" (not "learning database")
- "Verified learnings" (not "insights")
- "Evidence-based verdicts" (not "scores")
- "Intent-first analysis" (not "performance tracking")

### Key Phrases to Avoid

- "AI-powered" (overused, generic)
- "Revolutionary" / "Game-changing"
- "10x" / "2x" performance claims
- "LinkedIn" as sole channel
- "Guaranteed" / "Always" / "Never"

---

## Summary

The codebase is structurally sound. Main work required:

1. Contact form enhancement (fields + security)
2. Copy pass for channel-agnostic positioning
3. Platform page hero reimagining (DI mechanism focus)
4. Solutions page hero removal
5. Consistent application of blocking mechanism language

All changes should use public-safe terminology and avoid exposing RIM/IEM intellectual property.
