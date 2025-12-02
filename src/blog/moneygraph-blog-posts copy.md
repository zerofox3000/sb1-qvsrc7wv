# MoneyGraph Blog Posts: Big 5 AI Agent Support

> Content package for BOLT to build out the MoneyGraph blog announcing support for the Big 5 AI coding agents.

---

## POST 1: Overview Announcement

### Metadata
```yaml
title: "MoneyGraph Now Supports the Big 5 AI Coding Agents"
slug: "moneygraph-big-5-ai-agent-support"
description: "MoneyGraph SDK v2.2 introduces native support for GitHub Copilot, Amazon Q, Windsurf, Devin, and Cursor. Build payment integrations 10x faster with AI that understands fintech compliance."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Product Updates"
tags: ["ai-agents", "github-copilot", "amazon-q", "windsurf", "devin", "cursor", "sdk", "fintech", "payments", "developer-tools"]
reading_time: "4 min"
featured_image: "/blog/big-5-ai-agents-hero.png"
og_title: "MoneyGraph + Big 5 AI Agents: Build Payment Apps 10x Faster"
og_description: "The first fintech SDK with native support for GitHub Copilot, Amazon Q, Windsurf, Devin, and Cursor. Ship compliant payment integrations in minutes."
canonical_url: "https://moneygraph.ai/blog/moneygraph-big-5-ai-agent-support"
schema_type: "BlogPosting"
keywords:
  - moneygraph ai integration
  - github copilot payments sdk
  - amazon q fintech
  - windsurf payment integration
  - devin autonomous engineer payments
  - cursor ide fintech sdk
  - ai native payment sdk
  - cross-border payments ai
  - kyc compliance ai coding
  - fintech developer tools 2025
```

### Body Copy

# MoneyGraph Now Supports the Big 5 AI Coding Agents

**TL;DR**: MoneyGraph SDK v2.2 ships with native configuration files for GitHub Copilot, Amazon Q, Windsurf (Codeium), Devin, and Cursor. Your AI coding assistant now understands KYC compliance, FX quotes, and cross-border payment flows out of the box.

## The Problem We Solved

Every developer building with AI coding assistants has experienced this: you ask Copilot to integrate a payment API, and it hallucinates endpoints that don't exist. Or it generates raw `fetch()` calls instead of using the SDK. Or worst of all—it skips compliance checks that could get your app shut down.

We fixed this.

## Introducing Big 5 Agent Support

Starting with SDK v2.2, when you install `@moneygraph/sdk`, your AI coding assistant automatically loads our configuration files and learns:

- **The correct SDK patterns** — No more hallucinated API calls
- **Compliance requirements** — KYC checks before payouts, always
- **The Quote → Confirm → Payout flow** — Rate locking done right
- **Environment safety** — Sandbox vs production guards

## What's Included

| Agent | Config File | What It Does |
|-------|-------------|--------------|
| GitHub Copilot | `.github/copilot-instructions.md` | Teaches Copilot the Golden Path for payments |
| Amazon Q | `.amazonq/rules/moneygraph.md` | Enforces 6 compliance rules with severity levels |
| Windsurf | `.windsurfrules.md` | Cascade-style rules with namespace mapping |
| Devin | `.devin/wiki.json` | Domain mapping so Devin finds the right code |
| Cursor | `.cursor/rules/moneygraph.mdc` | MDC rules with glob patterns |

## How It Works

When you open a project with MoneyGraph installed, your AI assistant reads our configuration files and understands the SDK. Ask it to "send a payout to Nigeria" and it will:

1. Check KYC status first (compliance rule)
2. Get an FX quote (rate locking)
3. Confirm the quote (2-minute validity)
4. Execute the payout with proper error handling

No hallucinations. No compliance gaps. No debugging AI-generated code for hours.

## Get Started

```bash
npm install @moneygraph/sdk
```

That's it. The agent configs are included in the package. Your AI assistant will pick them up automatically.

## What Developers Are Saying

> "I asked Cursor to build a remittance flow and it generated production-ready code on the first try. The KYC checks were already there." — Senior Engineer, Fintech Startup

> "Devin built our entire payout integration autonomously. It found the SDK docs, understood the compliance requirements, and shipped working code." — CTO, Neobank

## Learn More

- [GitHub Copilot Integration Guide](/blog/github-copilot-moneygraph-integration)
- [Amazon Q Developer Rules](/blog/amazon-q-moneygraph-compliance)
- [Windsurf Setup Guide](/blog/windsurf-moneygraph-setup)
- [Devin Autonomous Integration](/blog/devin-moneygraph-autonomous)
- [Cursor Rules Deep Dive](/blog/cursor-moneygraph-rules)

---

## POST 2: GitHub Copilot Integration

### Metadata
```yaml
title: "How to Use GitHub Copilot with MoneyGraph for Payment Integrations"
slug: "github-copilot-moneygraph-integration"
description: "Step-by-step guide to using GitHub Copilot with MoneyGraph SDK. Learn how Copilot understands KYC compliance, FX quotes, and cross-border payouts automatically."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["github-copilot", "ai-coding", "payments", "sdk", "tutorial", "developer-tools", "fintech"]
reading_time: "6 min"
featured_image: "/blog/github-copilot-moneygraph.png"
og_title: "GitHub Copilot + MoneyGraph: AI-Powered Payment Integration"
og_description: "Build compliant payment flows with GitHub Copilot. Our SDK teaches Copilot the correct patterns for KYC, FX, and cross-border payouts."
canonical_url: "https://moneygraph.ai/blog/github-copilot-moneygraph-integration"
schema_type: "HowTo"
keywords:
  - github copilot payment integration
  - copilot fintech sdk
  - ai code generation payments
  - github copilot instructions file
  - copilot custom instructions
  - payment api copilot
  - cross-border payments copilot
  - kyc compliance copilot
  - moneygraph copilot setup
  - ai assisted fintech development
```

### Body Copy

# How to Use GitHub Copilot with MoneyGraph for Payment Integrations

GitHub Copilot is the world's most widely used AI coding assistant. With MoneyGraph SDK v2.2, Copilot now understands how to build compliant payment integrations without hallucinating endpoints or skipping critical compliance checks.

## What Copilot Learns from MoneyGraph

When you install our SDK, Copilot reads `.github/copilot-instructions.md` and learns:

### 1. Never Use Raw Fetch

Copilot will never generate code like this:

```typescript
// ❌ Copilot won't do this anymore
const response = await fetch('https://api.stratospay.com/v1/payouts');
```

Instead, it generates:

```typescript
// ✅ Copilot generates this
import { MoneyGraph } from '@moneygraph/sdk';
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
```

### 2. The Golden Path

Copilot understands the correct sequence for payment integrations:

1. **Initialize** — Create client with API key
2. **Onboard** — Create customer and complete KYC
3. **Quote** — Get FX rate (valid 2 minutes)
4. **Confirm** — Lock the rate
5. **Payout** — Send money

### 3. Dual-Mode Awareness

Copilot knows that `sk_test_*` keys enable sandbox mode with mock data, while `sk_live_*` keys trigger real transactions.

## Setup (30 Seconds)

```bash
npm install @moneygraph/sdk
```

That's it. Copilot automatically reads the instructions file.

## Try It: Prompt Examples

Open a TypeScript file and try these prompts:

**Prompt**: "Create a function to send $100 to Nigeria"

**Copilot generates**:
```typescript
import { MoneyGraph } from '@moneygraph/sdk';

async function sendToNigeria(customerId: string) {
  const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
  
  // Check KYC status first
  const status = await mg.customers.kyc.canPayout(customerId);
  if (!status.allowed) {
    throw new Error('KYC not approved');
  }
  
  // Get quote and confirm
  const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
  await mg.fx.confirm(quote.id);
  
  // Send payout
  return mg.payouts.create({
    quote_id: quote.id,
    customer_id: customerId,
    recipient: {
      name: 'Recipient Name',
      bank_code: '058',
      account_number: '0123456789',
    },
  });
}
```

Notice how Copilot:
- Used the SDK (not fetch)
- Checked KYC first
- Followed Quote → Confirm → Payout
- Used environment variables

## Advanced: Copilot Chat

In Copilot Chat, you can ask questions like:

- "How do I handle a QUOTE_EXPIRED error in MoneyGraph?"
- "What's the difference between mg.payouts.create and mg.payouts.swift.create?"
- "Show me how to issue a virtual card"

Copilot will reference the SDK patterns from our instructions file.

## Troubleshooting

**Copilot ignores the instructions**: Make sure you're in a workspace where `node_modules/@moneygraph/sdk` exists. Copilot reads instructions from installed packages.

**Copilot still uses fetch**: Try adding a comment `// Use MoneyGraph SDK` above your cursor. This primes Copilot to use the correct patterns.

## Next Steps

- [MoneyGraph SDK Documentation](https://docs.moneygraph.ai)
- [Full API Reference](https://moneygraph.ai/docs/api)
- [GitHub Copilot Docs](https://docs.github.com/copilot)

---

## POST 3: Amazon Q Developer Integration

### Metadata
```yaml
title: "Amazon Q Developer Rules for MoneyGraph: Fintech Compliance Built-In"
slug: "amazon-q-moneygraph-compliance"
description: "How Amazon Q enforces financial compliance when generating MoneyGraph code. Learn about our 6 severity-rated rules for KYC, security, and API patterns."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["amazon-q", "aws", "compliance", "fintech", "enterprise", "sdk", "developer-tools", "security"]
reading_time: "5 min"
featured_image: "/blog/amazon-q-moneygraph.png"
og_title: "Amazon Q + MoneyGraph: Enterprise-Grade Fintech Compliance"
og_description: "Amazon Q enforces 6 compliance rules when generating MoneyGraph code. KYC checks, secret management, and API patterns—all automatic."
canonical_url: "https://moneygraph.ai/blog/amazon-q-moneygraph-compliance"
schema_type: "HowTo"
keywords:
  - amazon q developer
  - amazon q fintech
  - aws payment integration
  - amazon q rules
  - enterprise payment sdk
  - fintech compliance automation
  - kyc automation aws
  - amazon q custom rules
  - moneygraph aws integration
  - secure payment code generation
```

### Body Copy

# Amazon Q Developer Rules for MoneyGraph: Fintech Compliance Built-In

Amazon Q is the go-to AI coding assistant for enterprise and AWS shops. With MoneyGraph SDK v2.2, Amazon Q now enforces financial compliance rules when generating payment code.

## The 6 Compliance Rules

Our `.amazonq/rules/moneygraph.md` file defines six rules with severity levels:

### Rule 1: KYC Before Payout (CRITICAL)

Amazon Q will never generate payout code without a KYC check:

```typescript
// Amazon Q always generates this pattern
const kycStatus = await mg.customers.kyc.canPayout(customerId);
if (!kycStatus.allowed) {
  throw new Error(`KYC not approved. Status: ${kycStatus.status}`);
}
// Only then: payout
```

### Rule 2: No Hardcoded Secrets (CRITICAL)

Amazon Q enforces environment variable usage:

```typescript
// ✅ Amazon Q generates
const mg = new MoneyGraph({ 
  apiKey: process.env.MONEYGRAPH_SECRET_KEY 
});

// ❌ Never generates
const mg = new MoneyGraph({ apiKey: 'sk_live_abc123' });
```

### Rule 3: Quote Before Confirm (HIGH)

Amazon Q understands rate locking:

```typescript
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id); // Lock rate for 2 minutes
```

### Rule 4: Idempotency Keys (HIGH)

For financial operations, Amazon Q adds idempotency:

```typescript
await mg.payouts.create(params, {
  idempotencyKey: `payout_${orderId}_${Date.now()}`
});
```

### Rule 5: Error Handling (MEDIUM)

Amazon Q generates proper error handling with MoneyGraph error types:

```typescript
import { MoneyGraphValidationError, isRetryableError } from '@moneygraph/sdk';

try {
  await mg.payouts.create(params);
} catch (error) {
  if (error instanceof MoneyGraphValidationError) {
    console.error('Validation failed:', error.fieldErrors);
  }
  if (isRetryableError(error)) {
    // Retry with backoff
  }
}
```

### Rule 6: Environment Safety (MEDIUM)

Amazon Q guards against production mistakes:

```typescript
if (mg.mode === 'live' && process.env.NODE_ENV !== 'production') {
  throw new Error('Live mode detected in non-production environment');
}
```

## Why This Matters for Enterprise

In regulated fintech environments, a single compliance gap can mean:
- Failed audits
- Regulatory fines
- Service shutdowns

Amazon Q with MoneyGraph rules ensures every generated line of code meets compliance requirements. Your security team will thank you.

## Setup

```bash
npm install @moneygraph/sdk
```

Amazon Q reads `.amazonq/rules/moneygraph.md` automatically when it's in your project.

## Integration with AWS Services

Amazon Q understands how MoneyGraph fits into AWS architectures:

- **Lambda**: Use MoneyGraph in serverless payout functions
- **Step Functions**: Orchestrate KYC → Quote → Payout workflows
- **Secrets Manager**: Store MONEYGRAPH_SECRET_KEY securely
- **CloudWatch**: Monitor payout success rates

## Try It

Ask Amazon Q: "Create a Lambda function that sends payouts to Kenya via mobile money"

Amazon Q will generate compliant code with KYC checks, proper error handling, and Secrets Manager integration.

---

## POST 4: Windsurf (Codeium) Integration

### Metadata
```yaml
title: "Windsurf Rules for MoneyGraph: Cascade-Style Payment Integration"
slug: "windsurf-moneygraph-setup"
description: "Configure Windsurf (Codeium) for MoneyGraph payment integrations. Learn how our Cascade rules teach Windsurf the SDK architecture and compliance patterns."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["windsurf", "codeium", "cascade", "ai-coding", "payments", "sdk", "tutorial"]
reading_time: "5 min"
featured_image: "/blog/windsurf-moneygraph.png"
og_title: "Windsurf + MoneyGraph: Cascade Rules for Payment APIs"
og_description: "Windsurf's Cascade engine understands MoneyGraph's namespace hierarchy, compliance rules, and task flows. Build payments faster."
canonical_url: "https://moneygraph.ai/blog/windsurf-moneygraph-setup"
schema_type: "HowTo"
keywords:
  - windsurf codeium
  - windsurf rules
  - cascade rules
  - codeium payment integration
  - windsurf fintech
  - ai coding assistant payments
  - windsurf custom rules
  - moneygraph windsurf setup
  - cascade syntax tutorial
  - payment sdk windsurf
```

### Body Copy

# Windsurf Rules for MoneyGraph: Cascade-Style Payment Integration

Windsurf (powered by Codeium) is the fastest-growing alternative to Cursor, known for its Cascade rules engine. MoneyGraph SDK v2.2 includes a comprehensive `.windsurfrules.md` file that teaches Windsurf our entire SDK architecture.

## What Makes Windsurf Rules Special

Windsurf uses XML-style tags to organize rules into categories. Our rules file includes:

### `<coding>` Rules

Strict TypeScript patterns:

```xml
<coding>
  <rule id="init-pattern" severity="critical">
    Always initialize MoneyGraph with the constructor pattern.
  </rule>
  
  <rule id="typescript-strict" severity="high">
    Use strict TypeScript typing with MoneyGraph types.
  </rule>
</coding>
```

### `<architecture>` Namespace Mapping

Windsurf learns our entire namespace hierarchy:

```xml
<architecture>
  <namespace name="customers" domain="Customer Onboarding">
    <sub_namespace name="kyc" domain="KYC Verification">
      <operations>submit, getStatus, uploadDocument, canPayout</operations>
    </sub_namespace>
  </namespace>
  
  <namespace name="payouts" domain="Outbound Payments">
    <sub_namespace name="swift" domain="SWIFT Transfers" />
    <sub_namespace name="mobileMoney" domain="Mobile Money" />
    <sub_namespace name="crypto" domain="Crypto Payouts" />
  </namespace>
</architecture>
```

### `<task_mapping>` Flows

Step-by-step flows for common tasks:

```xml
<task name="Send International Payment">
  <flow>
    1. mg.customers.kyc.canPayout() - Verify KYC
    2. mg.fx.quote() - Get FX quote
    3. mg.fx.confirm() - Lock the rate
    4. mg.payouts.create() - Execute payout
  </flow>
</task>
```

## How Windsurf Uses These Rules

When you ask Windsurf to build a payment feature, it:

1. **Reads the architecture** — Understands which namespace to use
2. **Follows the task flow** — Executes steps in order
3. **Applies coding rules** — Uses strict types and patterns
4. **Checks compliance** — Adds KYC verification automatically

## Setup

```bash
npm install @moneygraph/sdk
```

Windsurf reads `.windsurfrules.md` from your project root or node_modules.

## Example: Ask Windsurf to Build a Payout

**Prompt**: "Build a function to send money to Kenya via M-Pesa"

**Windsurf generates**:

```typescript
import { MoneyGraph } from '@moneygraph/sdk';
import type { Payout } from '@moneygraph/sdk';

async function sendToKenyaMpesa(
  customerId: string,
  amount: number,
  phoneNumber: string
): Promise<Payout> {
  const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });
  
  // Task: Send International Payment (from task_mapping)
  // Step 1: Verify KYC
  const status = await mg.customers.kyc.canPayout(customerId);
  if (!status.allowed) {
    throw new Error(`KYC not approved: ${status.status}`);
  }
  
  // Step 2: Get FX quote
  const quote = await mg.fx.quote({
    from: 'USD',
    to: 'KES',
    amount,
  });
  
  // Step 3: Lock the rate
  await mg.fx.confirm(quote.id);
  
  // Step 4: Execute payout via mobile money
  return mg.payouts.mobileMoney.create({
    quote_id: quote.id,
    customer_id: customerId,
    recipient: {
      name: 'Recipient',
      mobile_network: 'MPESA',
      mobile_number: phoneNumber,
    },
  });
}
```

Notice how Windsurf:
- Used `mg.payouts.mobileMoney` (correct namespace from architecture)
- Followed the 4-step flow (from task_mapping)
- Added TypeScript types (from coding rules)
- Included KYC check (from compliance rules)

## Why Windsurf + MoneyGraph

Windsurf's Cascade engine excels at understanding hierarchical systems. Our SDK's namespace structure (`mg.customers.kyc`, `mg.payouts.swift`, etc.) maps perfectly to Cascade's mental model.

If you're building complex fintech applications with multiple payment rails, Windsurf + MoneyGraph is a powerful combination.

---

## POST 5: Devin Autonomous Integration

### Metadata
```yaml
title: "How Devin Builds MoneyGraph Integrations Autonomously"
slug: "devin-moneygraph-autonomous"
description: "Devin, the autonomous AI engineer, can build complete MoneyGraph payment integrations. Learn how our wiki.json teaches Devin to navigate our SDK."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["devin", "autonomous-ai", "ai-engineer", "payments", "sdk", "automation", "fintech"]
reading_time: "5 min"
featured_image: "/blog/devin-moneygraph.png"
og_title: "Devin + MoneyGraph: Autonomous Payment Integration"
og_description: "Devin reads our wiki.json to understand MoneyGraph's architecture. It builds complete payment flows without human guidance."
canonical_url: "https://moneygraph.ai/blog/devin-moneygraph-autonomous"
schema_type: "HowTo"
keywords:
  - devin ai engineer
  - devin autonomous coding
  - devin wiki json
  - autonomous payment integration
  - ai builds fintech app
  - devin custom knowledge
  - moneygraph devin setup
  - autonomous code generation payments
  - devin domain mapping
  - ai engineer fintech
```

### Body Copy

# How Devin Builds MoneyGraph Integrations Autonomously

Devin is the leading "autonomous AI engineer" — an agent that can build entire features without constant human guidance. With MoneyGraph SDK v2.2, Devin can autonomously build compliant payment integrations.

## How Devin Learns MoneyGraph

Devin uses a `.devin/wiki.json` file to understand codebases. Our wiki.json teaches Devin:

### Domain Mapping

Where to find code for different concerns:

```json
{
  "domain_mapping": {
    "Banking Logic": {
      "path": "src/resources/fx.ts",
      "key_methods": ["quote", "confirm", "rates"]
    },
    "Entity Verification": {
      "path": "src/resources/customers.ts",
      "key_methods": ["create", "kyc.submit", "kyc.canPayout"]
    },
    "Payment Processing": {
      "path": "src/resources/payouts.ts",
      "key_methods": ["create", "swift.create", "mobileMoney.create"]
    }
  }
}
```

When Devin needs to implement KYC, it knows to look at `src/resources/customers.ts`.

### Patterns

Reusable patterns Devin can apply:

```json
{
  "patterns": {
    "golden_path": {
      "steps": [
        "Initialize: new MoneyGraph({ apiKey })",
        "Create customer: mg.customers.create()",
        "Submit KYC: mg.customers.kyc.submit()",
        "Verify KYC: mg.customers.kyc.canPayout()",
        "Get quote: mg.fx.quote()",
        "Lock rate: mg.fx.confirm()",
        "Send payout: mg.payouts.create()"
      ]
    },
    "smart_payout": {
      "method": "mg.executeSmartPayout()",
      "description": "Combines R3 + FX + Payout in one call"
    }
  }
}
```

### Compliance Rules

Rules Devin must follow:

```json
{
  "compliance_rules": [
    {
      "id": "kyc-before-payout",
      "severity": "critical",
      "check": "mg.customers.kyc.canPayout(customerId).allowed === true"
    }
  ]
}
```

### System Notes

High-priority instructions:

```json
{
  "system_notes": [
    "ALWAYS check the examples/ and recipes/ folders before writing new code",
    "Use mg.executeSmartPayout() for the simplest payout integration",
    "KYC verification is REQUIRED before any payout operation"
  ]
}
```

## What Devin Can Build

With our wiki.json, Devin can autonomously build:

- **Complete remittance flows** — Customer onboarding through payout
- **Multi-rail payment systems** — Local, SWIFT, mobile money, crypto
- **Card issuance platforms** — Virtual and physical cards
- **Payment acceptance** — Card processing with 3DS

## Example: Autonomous Build

**Task given to Devin**: "Build a payroll system that sends salaries to employees in Nigeria, Kenya, and Ghana"

**What Devin does**:

1. Reads `.devin/wiki.json` → Understands MoneyGraph architecture
2. Checks `recipes/` folder → Finds REMITTANCE_FLOW.md
3. Identifies domains → Banking Logic, Entity Verification, Payment Processing
4. Follows golden_path → Implements Init → Onboard → Quote → Payout
5. Applies compliance_rules → Adds KYC checks before every payout
6. Uses correct namespaces → `mg.payouts.create` for Nigeria, `mg.payouts.mobileMoney.create` for Kenya

**Result**: A complete, compliant payroll system in under an hour.

## Setup

```bash
npm install @moneygraph/sdk
```

Devin automatically discovers `.devin/wiki.json` when exploring your project.

## Best Practices for Devin + MoneyGraph

1. **Start with smart_payout** — Tell Devin to use `executeSmartPayout()` for simple integrations
2. **Point to recipes** — Mention the `recipes/` folder in your task description
3. **Specify compliance** — Remind Devin that KYC is required (it should know, but reinforcement helps)

## The Future of Fintech Development

Autonomous AI engineers like Devin represent the future of software development. By providing structured knowledge in wiki.json, we enable Devin to build production-grade fintech applications without constant human oversight.

---

## POST 6: Cursor Rules Deep Dive

### Metadata
```yaml
title: "Cursor Rules for MoneyGraph: MDC Configuration Deep Dive"
slug: "cursor-moneygraph-rules"
description: "Deep dive into MoneyGraph's Cursor rules file. Learn how our MDC configuration teaches Cursor the SDK patterns, namespace hierarchy, and compliance requirements."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["cursor", "cursor-ide", "mdc", "ai-coding", "payments", "sdk", "tutorial", "developer-tools"]
reading_time: "6 min"
featured_image: "/blog/cursor-moneygraph.png"
og_title: "Cursor + MoneyGraph: MDC Rules for Payment Integration"
og_description: "Our MDC rules file teaches Cursor the MoneyGraph SDK. Quote → Confirm → Payout, KYC compliance, error handling—all automatic."
canonical_url: "https://moneygraph.ai/blog/cursor-moneygraph-rules"
schema_type: "HowTo"
keywords:
  - cursor ide
  - cursor rules
  - cursor mdc
  - cursor payment integration
  - cursor fintech sdk
  - mdc configuration
  - cursor custom rules
  - moneygraph cursor setup
  - ai ide payments
  - cursor glob patterns
```

### Body Copy

# Cursor Rules for MoneyGraph: MDC Configuration Deep Dive

Cursor is the AI-first IDE that's taken the developer world by storm. MoneyGraph SDK has supported Cursor since v1.0, but with v2.2, we've completely rewritten our rules for the new v2.1+ namespace structure.

## What's in Our MDC File

The `.cursor/rules/moneygraph.mdc` file uses Cursor's MDC format:

### Frontmatter

```yaml
---
description: MoneyGraph Fintech SDK Standards
globs: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"]
alwaysApply: true
---
```

- **globs** — Rules apply to all TypeScript and JavaScript files
- **alwaysApply** — Rules are active even without explicit mention

### Critical Rules

Our rules file defines four non-negotiable patterns:

#### 1. Never Use Raw Fetch

```typescript
// ❌ Cursor won't generate this
const response = await fetch('https://api.stratospay.com/v1/payouts');

// ✅ Cursor generates this
import { MoneyGraph } from '@moneygraph/sdk';
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
```

#### 2. Quote & Confirm Pattern

```typescript
// Cursor always follows this sequence
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id);
const payout = await mg.payouts.create({ quote_id: quote.id, ... });
```

#### 3. KYC Before Payout

```typescript
// Cursor adds this check automatically
const status = await mg.customers.kyc.canPayout(customerId);
if (!status.allowed) {
  throw new Error(`KYC not approved: ${status.status}`);
}
```

#### 4. Environment Variables

```typescript
// Cursor never hardcodes API keys
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
```

### Namespace Reference Table

Our rules include a complete namespace table:

| Namespace | Purpose |
|-----------|---------|
| `mg.customers` | Customer CRUD |
| `mg.customers.kyc` | KYC verification |
| `mg.customers.directors` | Business directors |
| `mg.fx` | FX quotes and rates |
| `mg.wallets` | Multi-currency wallets |
| `mg.transfers` | Customer-to-customer |
| `mg.payouts` | Local bank payouts |
| `mg.payouts.swift` | SWIFT transfers |
| `mg.payouts.mobileMoney` | Mobile money |
| `mg.payouts.crypto` | Crypto payouts |
| `mg.cards` | Card issuance |
| `mg.payments` | Accept payments |
| `mg.r3` | Route optimization |
| `mg.reference` | Reference data |

Cursor uses this table to select the correct namespace for each task.

## The Golden Path

Our rules include a complete "Golden Path" example:

```typescript
// 1. Create customer
const customer = await mg.customers.create({ ... });

// 2. Submit KYC
await mg.customers.kyc.submit(customer.id, { ... });

// 3. Verify KYC approved
const status = await mg.customers.kyc.canPayout(customer.id);

// 4. Quote → Confirm → Payout
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id);
const payout = await mg.payouts.create({ ... });
```

Cursor references this pattern when generating payment flows.

## Smart Payout Recommendation

Our rules highlight `executeSmartPayout()` as the recommended approach:

```typescript
const result = await mg.executeSmartPayout({
  customer_id: 'cust_xxx',
  from_currency: 'USD',
  to_currency: 'NGN',
  amount: 100,
  recipient: { ... },
  priority: 'cost',
});
```

When you ask Cursor for a "simple payout," it uses this method.

## Setup

```bash
npm install @moneygraph/sdk
```

Cursor reads `.cursor/rules/moneygraph.mdc` from your project or node_modules.

## Pro Tips

### 1. Use Cursor Chat

Ask Cursor questions like:
- "What's the difference between mg.payouts.create and mg.payouts.swift.create?"
- "How do I handle QUOTE_EXPIRED errors?"
- "Show me how to create a virtual card"

### 2. Inline Comments

Add comments to prime Cursor:

```typescript
// Use MoneyGraph to send payout to Nigeria
// Include KYC check and error handling
```

### 3. Reference the Namespace

If Cursor picks the wrong namespace, mention it explicitly:

```typescript
// Use mg.payouts.mobileMoney for M-Pesa
```

## Why Cursor Loves MoneyGraph

Cursor's strength is understanding complex codebases. Our SDK's clean namespace hierarchy (`mg.module.submodule.method`) maps perfectly to how Cursor thinks about code structure.

Combined with our MDC rules, Cursor becomes a fintech expert that understands compliance, rate locking, and multi-rail payments.

---

## BONUS POST: SEO/AEO Landing Page Content

### Metadata
```yaml
title: "MoneyGraph AI Agent Integration | GitHub Copilot, Amazon Q, Cursor, Windsurf, Devin"
slug: "ai-agent-integration"
description: "MoneyGraph SDK supports all major AI coding agents. Native configuration files for GitHub Copilot, Amazon Q, Windsurf, Devin, and Cursor. Build payment integrations 10x faster."
page_type: "landing"
canonical_url: "https://moneygraph.ai/ai-agent-integration"
schema_type: "SoftwareApplication"
keywords:
  - moneygraph ai integration
  - payment sdk ai agents
  - github copilot payment api
  - amazon q fintech sdk
  - windsurf payment integration
  - devin payment api
  - cursor fintech sdk
  - ai native payment sdk
  - ai coding assistant payments
  - llm payment integration
  - ai generated payment code
  - fintech sdk ai support
  - cross-border payments ai
  - kyc compliance ai
  - fx api ai coding
```

### Landing Page Copy

# AI Agent Integration

## Build Payment Integrations 10x Faster with AI

MoneyGraph is the first fintech SDK with native support for all major AI coding agents. Install our SDK, and your AI assistant instantly understands KYC compliance, FX quotes, and cross-border payment flows.

### Supported AI Agents

| Agent | Status | Config File |
|-------|--------|-------------|
| GitHub Copilot | ✅ Supported | `.github/copilot-instructions.md` |
| Amazon Q | ✅ Supported | `.amazonq/rules/moneygraph.md` |
| Windsurf (Codeium) | ✅ Supported | `.windsurfrules.md` |
| Devin | ✅ Supported | `.devin/wiki.json` |
| Cursor | ✅ Supported | `.cursor/rules/moneygraph.mdc` |
| Claude.ai | ✅ Supported | `CLAUDE_AI_INSTRUCTIONS.md` |
| Lovable | ✅ Supported | `LOVABLE_PROMPT.md` |
| GPT/OpenAI | ✅ Supported | `src/agents/schemas/gpt.json` |

### What Your AI Learns

When you install `@moneygraph/sdk`, your AI coding assistant automatically learns:

- ✅ **SDK Patterns** — Use the SDK, never raw fetch()
- ✅ **Compliance Rules** — KYC checks before payouts
- ✅ **API Flows** — Quote → Confirm → Payout
- ✅ **Namespace Hierarchy** — mg.customers.kyc, mg.payouts.swift, etc.
- ✅ **Error Handling** — MoneyGraphError types and retry logic
- ✅ **Environment Safety** — Sandbox vs production detection

### Get Started in 30 Seconds

```bash
npm install @moneygraph/sdk
```

That's it. Your AI agent reads our config files automatically.

### See It in Action

Ask your AI: "Create a function to send $100 to Nigeria via MoneyGraph"

Your AI generates compliant code with KYC checks, rate locking, and proper error handling—on the first try.

### Why Developers Choose MoneyGraph

> "I asked Cursor to build a remittance flow and it generated production-ready code immediately. The KYC checks were already there."

> "Devin built our entire payout integration autonomously. It found the SDK, understood compliance, and shipped working code."

> "Amazon Q now enforces our fintech compliance rules automatically. Our security team is thrilled."

### Documentation

- [GitHub Copilot Guide](/blog/github-copilot-moneygraph-integration)
- [Amazon Q Rules](/blog/amazon-q-moneygraph-compliance)
- [Windsurf Setup](/blog/windsurf-moneygraph-setup)
- [Devin Integration](/blog/devin-moneygraph-autonomous)
- [Cursor Deep Dive](/blog/cursor-moneygraph-rules)

### Start Building

```bash
npm install @moneygraph/sdk
```

[View Documentation](https://docs.moneygraph.ai) | [GitHub](https://github.com/moneygraph/sdk) | [API Reference](https://moneygraph.ai/docs/api)

---

## POST 8: Claude.ai Integration

### Metadata
```yaml
title: "Building Payment Apps with Claude.ai and MoneyGraph"
slug: "claude-ai-moneygraph-integration"
description: "How to use Claude.ai Projects with MoneyGraph SDK. Copy our project instructions and let Claude build compliant payment integrations automatically."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["claude", "anthropic", "ai-coding", "payments", "sdk", "tutorial", "fintech", "project-instructions"]
reading_time: "5 min"
featured_image: "/blog/claude-moneygraph.png"
og_title: "Claude.ai + MoneyGraph: AI-Powered Payment Development"
og_description: "Use Claude.ai Projects to build payment apps with MoneyGraph. Our project instructions teach Claude compliance, FX patterns, and error handling."
canonical_url: "https://moneygraph.ai/blog/claude-ai-moneygraph-integration"
schema_type: "HowTo"
keywords:
  - claude ai payments
  - anthropic claude fintech
  - claude project instructions
  - ai payment development
  - claude sdk integration
  - moneygraph claude setup
  - claude coding assistant payments
  - anthropic payment api
  - claude projects knowledge
  - ai fintech development
```

### Body Copy

# Building Payment Apps with Claude.ai and MoneyGraph

Claude.ai from Anthropic is one of the most capable AI assistants for complex reasoning and code generation. With MoneyGraph's `CLAUDE_AI_INSTRUCTIONS.md`, Claude understands how to build compliant payment applications from your first prompt.

## Why Claude + MoneyGraph?

Claude excels at:
- **Complex reasoning** - Understands KYC flows, compliance rules, and multi-step financial workflows
- **Complete code generation** - Produces working code, not just snippets
- **Precise instruction following** - Does exactly what the project instructions specify
- **Explanation capability** - Can explain its code decisions (useful for audits)

MoneyGraph provides:
- 40+ API endpoints for global payments
- Built-in compliance (KYC before payouts)
- Multi-rail support (local, SWIFT, mobile money, crypto)
- 107+ country coverage

## Setup: Add Project Instructions

Setting up MoneyGraph with Claude.ai takes 30 seconds:

1. Create a new Project in Claude.ai
2. Go to **Project Knowledge**
3. Paste the contents of `CLAUDE_AI_INSTRUCTIONS.md`

That's it. Claude now understands MoneyGraph.

## What Claude Learns

Our project instructions teach Claude three critical patterns:

### 1. The Golden Rule: KYC Before Payouts

Claude always generates KYC verification before any payout:

```typescript
// Claude generates this check automatically
const status = await mg.customers.kyc.canPayout(customerId);
if (!status.allowed) {
  throw new Error(`KYC not approved: ${status.status}`);
}
// Only then proceed with payout
```

### 2. Quote → Confirm → Payout

Claude understands the FX flow:

```typescript
// Step 1: Get quote (valid 2 minutes)
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });

// Step 2: Lock the rate
await mg.fx.confirm(quote.id);

// Step 3: Execute payout
const payout = await mg.payouts.create({
  quote_id: quote.id,
  customer_id: customerId,
  recipient: { name: 'Jane Doe', bank_code: '058', account_number: '0123456789' }
});
```

### 3. All SDK Namespaces

Claude knows to use the correct namespace for each operation:

| Need | Claude Uses |
|------|-------------|
| Verify identity | `mg.customers.kyc` |
| Send to M-Pesa | `mg.payouts.mobileMoney` |
| Issue cards | `mg.cards` |
| Check FX rates | `mg.fx.rates` |
| Optimize routing | `mg.r3.recommend` |

## Example Prompts

Try these prompts with Claude:

### Build a Remittance API

**Prompt**: "Build a REST API for a remittance service using MoneyGraph. Users should be able to register, complete KYC, and send money to Nigeria."

Claude generates:
- Express.js routes with proper middleware
- Customer registration with input validation
- KYC submission and status checking
- Quote display with countdown timer
- Payout execution with error handling
- Transaction history endpoint

### Create a Wallet System

**Prompt**: "Create a multi-currency wallet system where users can hold USD, EUR, and NGN. Include FX conversion between currencies."

Claude generates:
- Wallet creation for each currency
- Balance checking with `mg.wallets.getBalances`
- FX quote display with rate and fees
- Currency conversion with `mg.fx.confirm`
- Transfer history tracking

### Issue Virtual Cards

**Prompt**: "Build a virtual card issuance feature. Users with approved KYC can create USD cards and fund them from their wallet."

Claude generates:
- KYC verification before card creation
- Card issuance with `mg.cards.create`
- Funding from wallet with `mg.cards.fund`
- Card controls (freeze/unfreeze)
- Transaction monitoring

## Claude's Compliance Awareness

Unlike generic code generators, Claude with MoneyGraph instructions:

| Generic AI | Claude + MoneyGraph |
|------------|---------------------|
| Skips KYC checks | Always verifies KYC status |
| Hardcodes API keys | Uses environment variables |
| Ignores quote expiry | Handles 2-minute timeout |
| Wrong date formats | Uses DD-MM-YYYY correctly |

## Best Practices

### 1. Be Specific About Business Logic

```
Build a payout service that:
- Only allows payouts to verified customers
- Limits transactions to $10,000 per day
- Sends email notifications on completion
- Logs all attempts for compliance
```

### 2. Ask for Explanations

```
Build a KYC flow and explain why each step is necessary
for regulatory compliance in cross-border payments.
```

### 3. Request Error Handling

```
Include comprehensive error handling for all MoneyGraph
error codes: KYC_PENDING, QUOTE_EXPIRED, INSUFFICIENT_BALANCE, etc.
Show user-friendly messages for each.
```

## Artifacts: Interactive Components

Claude can create React components in Artifacts. Try:

**Prompt**: "Create a React component for sending money with MoneyGraph. Show the FX quote with a countdown timer and confirm button."

Claude generates an interactive component with:
- Amount and currency inputs
- Real-time quote fetching
- 2-minute countdown display
- Rate lock on confirm
- Loading and error states
- Success confirmation

## Getting Started

1. Install the SDK:
```bash
npm install @moneygraph/sdk
```

2. Copy `CLAUDE_AI_INSTRUCTIONS.md` to your Claude Project Knowledge

3. Start prompting!

Claude is now your fintech-aware coding partner.

---

## POST 9: Base44 Integration

### Metadata
```yaml
title: "Building Fintech Apps with Base44 and MoneyGraph"
slug: "base44-moneygraph-integration"
description: "How to use Base44 AI app generator with MoneyGraph SDK. Build complete payment applications from natural language prompts."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["base44", "ai-app-generator", "no-code", "low-code", "payments", "sdk", "fintech", "react"]
reading_time: "6 min"
featured_image: "/blog/base44-moneygraph.png"
og_title: "Base44 + MoneyGraph: Generate Payment Apps with AI"
og_description: "Use Base44 to generate complete fintech applications. Our integration guide teaches Base44 to build KYC flows, FX quotes, and payouts."
canonical_url: "https://moneygraph.ai/blog/base44-moneygraph-integration"
schema_type: "HowTo"
keywords:
  - base44 payments
  - base44 fintech
  - ai app generator payments
  - no-code payment app
  - base44 moneygraph
  - generate fintech app
  - ai generated payment flow
  - base44 integration guide
  - payment app generator
  - low-code remittance
```

### Body Copy

# Building Fintech Apps with Base44 and MoneyGraph

Base44 is an AI-powered app generator that creates full-stack applications from natural language descriptions. Combined with MoneyGraph SDK, you can generate complete fintech applications in minutes.

## What is Base44?

Base44 takes prompts like "Build a remittance app" and generates:
- React frontend with polished components
- API routes and backend logic
- Database schemas and migrations
- Authentication and authorization

With MoneyGraph integration, Base44 also generates:
- KYC verification flows with document upload
- FX quote displays with countdown timers
- Payout processing with status tracking
- Transaction history with filtering

## Quick Setup

### Step 1: Install the SDK

```bash
npm install @moneygraph/sdk
```

### Step 2: Configure Environment

Add to your `.env`:
```
MONEYGRAPH_API_KEY=sk_test_your_key
```

### Step 3: Import the Guide

Add `recipes/BASE44_GUIDE.md` to your Base44 project context. This teaches Base44 the MoneyGraph patterns.

## Prompt Templates

Use these proven prompts when building with Base44:

### Remittance App

```
Build a remittance app using MoneyGraph SDK that allows users to:
1. Register and complete KYC verification
2. Get FX quotes for USD to NGN transfers
3. Send money to Nigerian bank accounts
4. Track payout status in real-time

Use mg.customers for registration, mg.customers.kyc for verification,
mg.fx for quotes, and mg.executeSmartPayout() for transfers.
Always check KYC status before allowing payouts.
```

Base44 generates:
- User registration form with validation
- KYC document upload component
- Quote calculator showing rate, fees, recipient amount
- Send money form with bank selection
- Transaction list with status badges

### Multi-Currency Wallet

```
Build a wallet app using MoneyGraph SDK with:
1. User registration with KYC
2. Multi-currency wallets (USD, EUR, NGN)
3. Wallet-to-wallet transfers between users
4. FX conversion between currencies

Use mg.wallets for wallet management, mg.transfers for internal transfers,
and mg.fx for currency conversion.
```

### Virtual Card Platform

```
Build a virtual card platform using MoneyGraph SDK:
1. User registration and KYC verification
2. Issue virtual USD cards on demand
3. Fund cards from wallet balance
4. View card transactions and statements

Use mg.cards.create() for issuance, mg.cards.fund() for funding,
and mg.cards.transactions() for history.
```

## What Base44 Generates

### Service Layer

Base44 creates a clean service layer:

```typescript
// services/payouts.ts (generated by Base44)
import { MoneyGraph, MoneyGraphError } from '@moneygraph/sdk';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

export async function sendMoney(params: {
  customerId: string;
  amount: number;
  toCurrency: string;
  recipient: { name: string; bankCode: string; accountNumber: string };
}) {
  // KYC check (Base44 always includes this)
  const status = await mg.customers.kyc.canPayout(params.customerId);
  if (!status.allowed) {
    return { success: false, error: 'Complete KYC verification first' };
  }

  // Smart payout (Base44 uses the recommended method)
  return mg.executeSmartPayout({
    customer_id: params.customerId,
    from_currency: 'USD',
    to_currency: params.toCurrency,
    amount: params.amount,
    recipient: {
      name: params.recipient.name,
      bank_code: params.recipient.bankCode,
      account_number: params.recipient.accountNumber,
    },
    priority: 'cost',
  });
}
```

### React Components

Base44 generates polished React components:

```tsx
// components/QuoteDisplay.tsx (generated by Base44)
export function QuoteDisplay({ quote }: { quote: Quote }) {
  const [secondsLeft, setSecondsLeft] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = Math.max(0, 120 - getElapsedSeconds(quote.created_at));
      setSecondsLeft(remaining);
      if (remaining === 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, [quote]);

  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <div className="flex justify-between">
        <span>Rate</span>
        <span className="font-mono">1 {quote.from_currency} = {quote.rate} {quote.to_currency}</span>
      </div>
      <div className="flex justify-between">
        <span>You send</span>
        <span className="font-bold">${quote.from_amount}</span>
      </div>
      <div className="flex justify-between">
        <span>They receive</span>
        <span className="font-bold">{quote.to_currency} {quote.to_amount}</span>
      </div>
      <div className={`text-center mt-2 ${secondsLeft < 30 ? 'text-red-500' : 'text-gray-500'}`}>
        Expires in {secondsLeft}s
      </div>
    </div>
  );
}
```

## Key Patterns Base44 Follows

| Pattern | Base44 Behavior |
|---------|-----------------|
| KYC Before Payouts | Always generates verification check |
| Quote Expiry | Includes countdown timer component |
| Error Handling | Uses MoneyGraph error types with user messages |
| Loading States | All API calls show loading indicators |
| Form Validation | Client and server-side validation |

## Tips for Better Results

### Be Specific About UI

```
Build a send money form with:
- Amount input with currency selector dropdown
- Recipient bank dropdown (populated from mg.reference.banks.list)
- Real-time FX quote display with countdown
- Confirm button that locks the rate
- Success screen with transaction ID
```

### Specify Error Handling

```
Handle these errors with user-friendly messages:
- KYC_PENDING → "Please complete verification to send money"
- QUOTE_EXPIRED → "Rate expired, fetching new quote..."
- INSUFFICIENT_BALANCE → "Add funds to your wallet to continue"
- VALIDATION_ERROR → Show field-specific errors
```

### Request Testing Support

```
Include sandbox testing capabilities:
- Use mg.customers.createMockPersona('business_verified') for instant verified customers
- Add a "Use Test Data" button in development mode
- Show sandbox mode indicator in the UI
```

## Getting Started

1. Install SDK: `npm install @moneygraph/sdk`
2. Add `BASE44_GUIDE.md` to project context
3. Use prompt templates above
4. Iterate with natural language refinements

Base44 + MoneyGraph = Fintech apps in minutes.

---

## POST 10: Bolt.new Integration

### Metadata
```yaml
title: "Building Payment Apps with Bolt.new and MoneyGraph"
slug: "bolt-new-moneygraph-integration"
description: "How to use Bolt.new (StackBlitz) with MoneyGraph SDK. Build and deploy payment applications directly in your browser."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["bolt-new", "stackblitz", "browser-ide", "payments", "sdk", "tutorial", "fintech", "vite", "react"]
reading_time: "5 min"
featured_image: "/blog/bolt-new-moneygraph.png"
og_title: "Bolt.new + MoneyGraph: Browser-Based Fintech Development"
og_description: "Build payment applications in your browser with Bolt.new. Our integration guide includes server actions, React components, and deployment tips."
canonical_url: "https://moneygraph.ai/blog/bolt-new-moneygraph-integration"
schema_type: "HowTo"
keywords:
  - bolt new payments
  - bolt new fintech
  - stackblitz payment app
  - browser ide payments
  - bolt new moneygraph
  - vite payment integration
  - browser-based fintech development
  - bolt new react payments
  - stackblitz sdk integration
  - online payment app builder
```

### Body Copy

# Building Payment Apps with Bolt.new and MoneyGraph

Bolt.new (powered by StackBlitz) is a browser-based AI development environment. Build and deploy full-stack applications without leaving your browser—no local setup required.

## Why Bolt.new + MoneyGraph?

**Bolt.new offers:**
- Instant development environment (zero setup)
- AI-assisted coding with Claude
- One-click deployment to production
- Built-in package management
- Real-time collaboration

**MoneyGraph adds:**
- Global payment capabilities (107+ countries)
- Compliance automation (KYC, AML)
- Multi-currency wallets and FX
- Card issuance (virtual and physical)

## Quick Setup in Bolt.new

### Step 1: Create Your Project

Start a new Vite + React + TypeScript project in Bolt.new.

### Step 2: Add the SDK

Create `src/lib/moneygraph.ts` and paste our single-file SDK distribution. This bypasses npm for instant setup.

### Step 3: Configure Environment

In your `.env`:
```
MONEYGRAPH_API_KEY=sk_test_your_key_here
```

### Step 4: Initialize

```typescript
import { MoneyGraph } from './lib/moneygraph';

const mg = new MoneyGraph({ 
  apiKey: import.meta.env.MONEYGRAPH_API_KEY 
});

console.log(`Mode: ${mg.mode}`); // 'sandbox' or 'live'
```

## Server Actions Pattern

Bolt.new uses Vite/React, so create server actions for API calls:

```typescript
// src/actions/payments.ts
'use server';

import { MoneyGraph } from '../lib/moneygraph';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

export async function createCustomer(formData: FormData) {
  const customer = await mg.customers.create({
    account_type: 'personal',
    first_name: formData.get('firstName') as string,
    last_name: formData.get('lastName') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    phone_iso2: formData.get('country') as string,
    country: formData.get('country') as string,
  });
  
  return { success: true, customerId: customer.id };
}

export async function sendPayout(params: {
  customerId: string;
  amount: number;
  recipient: { name: string; bankCode: string; accountNumber: string };
}) {
  // Always check KYC first
  const status = await mg.customers.kyc.canPayout(params.customerId);
  if (!status.allowed) {
    return { success: false, error: 'Complete KYC verification first' };
  }
  
  // Use smart payout for simplicity
  return mg.executeSmartPayout({
    customer_id: params.customerId,
    from_currency: 'USD',
    to_currency: 'NGN',
    amount: params.amount,
    recipient: {
      name: params.recipient.name,
      bank_code: params.recipient.bankCode,
      account_number: params.recipient.accountNumber,
    },
    priority: 'cost',
  });
}
```

## React Components

### Send Money Form

```tsx
// src/components/SendMoneyForm.tsx
import { useState } from 'react';
import { sendPayout } from '../actions/payments';

export function SendMoneyForm({ customerId }: { customerId: string }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const result = await sendPayout({
      customerId,
      amount: Number(formData.get('amount')),
      recipient: {
        name: formData.get('recipientName') as string,
        bankCode: formData.get('bankCode') as string,
        accountNumber: formData.get('accountNumber') as string,
      },
    });
    
    setResult(result);
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input 
        name="amount" 
        type="number" 
        placeholder="Amount (USD)" 
        className="w-full p-2 border rounded"
        required 
      />
      <input 
        name="recipientName" 
        placeholder="Recipient Name" 
        className="w-full p-2 border rounded"
        required 
      />
      <input 
        name="bankCode" 
        placeholder="Bank Code (e.g., 058)" 
        className="w-full p-2 border rounded"
        required 
      />
      <input 
        name="accountNumber" 
        placeholder="Account Number" 
        className="w-full p-2 border rounded"
        required 
      />
      
      <button 
        type="submit" 
        disabled={loading}
        className="w-full p-2 bg-blue-600 text-white rounded disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Money'}
      </button>
      
      {result && (
        <div className={`p-4 rounded ${result.success ? 'bg-green-100' : 'bg-red-100'}`}>
          {result.success 
            ? `✓ Sent! Payout ID: ${result.payout_id}` 
            : `✗ ${result.error}`}
        </div>
      )}
    </form>
  );
}
```

### Quote Countdown

FX quotes expire in 2 minutes. Show users the countdown:

```tsx
// src/components/QuoteCountdown.tsx
import { useState, useEffect } from 'react';

export function QuoteCountdown({ quote, onExpire }: { 
  quote: { created_at: string; rate: number; from_currency: string; to_currency: string };
  onExpire: () => void;
}) {
  const [secondsLeft, setSecondsLeft] = useState(120);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - new Date(quote.created_at).getTime()) / 1000);
      const remaining = Math.max(0, 120 - elapsed);
      setSecondsLeft(remaining);
      
      if (remaining === 0) {
        clearInterval(timer);
        onExpire();
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [quote, onExpire]);
  
  return (
    <div className="text-center p-4 bg-gray-100 rounded">
      <p className="text-lg font-mono">
        1 {quote.from_currency} = {quote.rate} {quote.to_currency}
      </p>
      <p className={`mt-2 ${secondsLeft < 30 ? 'text-red-500 font-bold' : 'text-gray-600'}`}>
        {secondsLeft > 0 ? `Expires in ${secondsLeft}s` : 'Expired - Refresh quote'}
      </p>
    </div>
  );
}
```

## Deployment

Bolt.new offers one-click deployment. For production:

1. **Update API key** - Change to `sk_live_*` in environment
2. **Set up webhooks** - Configure payout status callbacks
3. **Enable custom domain** - Professional URL for your app
4. **Add monitoring** - Track transaction success rates

## Tips for Bolt.new Development

| Tip | Why |
|-----|-----|
| Use TypeScript | Better autocomplete with SDK types |
| Create services folder | Keep API logic separate from UI |
| Add loading states | API calls take 1-3 seconds |
| Test sandbox first | Always use `sk_test_*` during development |
| Handle quote expiry | Show countdown and auto-refresh |

## Getting Started

1. Open Bolt.new
2. Create Vite + React + TypeScript project
3. Add `moneygraph.ts` to `src/lib/`
4. Add API key to `.env`
5. Start building!

---

## POST 11: Replit Integration

### Metadata
```yaml
title: "Building Payment Apps with Replit and MoneyGraph"
slug: "replit-moneygraph-integration"
description: "How to use Replit and Replit Agent with MoneyGraph SDK. Build payment applications in a collaborative browser-based environment."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Tutorials"
tags: ["replit", "replit-agent", "ghostwriter", "browser-ide", "payments", "sdk", "tutorial", "fintech", "node", "express"]
reading_time: "6 min"
featured_image: "/blog/replit-moneygraph.png"
og_title: "Replit + MoneyGraph: Collaborative Fintech Development"
og_description: "Build payment applications on Replit with MoneyGraph. Our guide covers Replit Agent, Ghostwriter, and deployment to production."
canonical_url: "https://moneygraph.ai/blog/replit-moneygraph-integration"
schema_type: "HowTo"
keywords:
  - replit payments
  - replit fintech
  - replit agent payments
  - ghostwriter payment code
  - replit moneygraph
  - replit sdk integration
  - collaborative fintech development
  - replit express payments
  - replit deployment payments
  - online payment app development
```

### Body Copy

# Building Payment Apps with Replit and MoneyGraph

Replit is a collaborative browser-based IDE with powerful AI coding capabilities. Combined with MoneyGraph SDK, you can build, test, and deploy payment applications entirely online.

## Why Replit + MoneyGraph?

**Replit provides:**
- Instant development environment
- **Replit Agent** - Autonomous AI coding assistant
- **Ghostwriter** - Inline AI code completion
- Built-in database (Replit DB)
- One-click deployment
- Real-time collaboration
- Free tier available

**MoneyGraph adds:**
- Global payment API (107+ countries)
- KYC and compliance automation
- Multi-currency wallets
- Card issuance
- Mobile money (M-Pesa, MTN)

## Quick Setup

### Step 1: Create a Node.js Repl

Choose the Node.js or TypeScript template.

### Step 2: Install the SDK

In the Shell tab:
```bash
npm install @moneygraph/sdk
```

### Step 3: Add Secrets

Go to **Tools → Secrets** and add:

| Key | Value |
|-----|-------|
| `MONEYGRAPH_API_KEY` | `sk_test_your_key` |

### Step 4: Initialize

```typescript
import { MoneyGraph } from '@moneygraph/sdk';

const mg = new MoneyGraph({ 
  apiKey: process.env.MONEYGRAPH_API_KEY! 
});

console.log(`Running in ${mg.mode} mode`);
```

## Express.js API Template

Here's a complete payment API for Replit:

```typescript
// index.ts
import express from 'express';
import { MoneyGraph, MoneyGraphError, MoneyGraphValidationError } from '@moneygraph/sdk';

const app = express();
app.use(express.json());

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', mode: mg.mode });
});

// Create customer
app.post('/api/customers', async (req, res) => {
  try {
    const customer = await mg.customers.create({
      account_type: req.body.accountType || 'personal',
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      phone_iso2: req.body.country,
      country: req.body.country,
    });
    res.json({ success: true, customer });
  } catch (error) {
    handleError(res, error);
  }
});

// Get FX quote
app.post('/api/quotes', async (req, res) => {
  try {
    const quote = await mg.fx.quote({
      from: req.body.from,
      to: req.body.to,
      amount: req.body.amount,
    });
    res.json({ success: true, quote });
  } catch (error) {
    handleError(res, error);
  }
});

// Smart payout (recommended)
app.post('/api/payouts', async (req, res) => {
  try {
    const result = await mg.executeSmartPayout({
      customer_id: req.body.customerId,
      from_currency: req.body.fromCurrency || 'USD',
      to_currency: req.body.toCurrency,
      amount: req.body.amount,
      recipient: req.body.recipient,
      priority: req.body.priority || 'cost',
    });
    res.json(result);
  } catch (error) {
    handleError(res, error);
  }
});

// Error handler
function handleError(res: express.Response, error: unknown) {
  if (error instanceof MoneyGraphValidationError) {
    res.status(400).json({ 
      success: false, 
      code: 'VALIDATION_ERROR',
      message: error.message,
      fields: error.fieldErrors 
    });
  } else if (error instanceof MoneyGraphError) {
    res.status(400).json({ 
      success: false, 
      code: error.code, 
      message: error.message 
    });
  } else {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`MoneyGraph API running on port ${PORT}`);
});
```

## Using Replit Agent

Replit Agent can build complete payment features autonomously. Give it these instructions:

```
Build a payment API using MoneyGraph SDK.

CRITICAL RULES:
1. Always check KYC before payouts: mg.customers.kyc.canPayout()
2. Use Quote → Confirm → Payout flow for FX transactions
3. Use mg.executeSmartPayout() for the simplest integration
4. Never hardcode API keys - use Replit Secrets
5. Handle all MoneyGraph error types properly

SDK NAMESPACES:
- mg.customers (+ mg.customers.kyc for verification)
- mg.fx (quote, confirm, rates)
- mg.payouts (+ mg.payouts.swift, mg.payouts.mobileMoney)
- mg.wallets, mg.transfers, mg.cards, mg.payments

Create endpoints for:
1. POST /api/customers - Create new customer
2. POST /api/kyc/:id - Submit KYC documents
3. POST /api/quotes - Get FX quote
4. POST /api/payouts - Send money (with KYC check)
```

Replit Agent will generate compliant code with proper error handling.

## Replit Database Integration

Store customer mappings in Replit DB:

```typescript
import { Client } from '@replit/database';

const db = new Client();

// Save MoneyGraph customer ID for a user
async function linkCustomer(userId: string, mgCustomerId: string) {
  await db.set(`customer:${userId}`, mgCustomerId);
}

// Get MoneyGraph customer ID
async function getCustomerId(userId: string): Promise<string | null> {
  return await db.get(`customer:${userId}`);
}

// Store transaction for history
async function logTransaction(customerId: string, payoutId: string, amount: number) {
  const key = `transactions:${customerId}`;
  const history = await db.get(key) || [];
  history.push({ payoutId, amount, timestamp: Date.now() });
  await db.set(key, history);
}
```

## Webhook Handler

Handle payout status updates:

```typescript
import { webhooks } from '@moneygraph/sdk';

app.post('/webhooks/moneygraph', express.raw({ type: 'application/json' }), async (req, res) => {
  try {
    const event = webhooks.constructEvent(
      req.body,
      req.headers['x-signature'] as string,
      process.env.MONEYGRAPH_WEBHOOK_SECRET!
    );
    
    switch (event.type) {
      case 'payout.completed':
        console.log('Payout completed:', event.data.id);
        // Update your database, notify user, etc.
        break;
      case 'payout.failed':
        console.log('Payout failed:', event.data.id, event.data.failure_reason);
        // Handle failure, notify user
        break;
      case 'kyc.approved':
        console.log('KYC approved:', event.data.customer_id);
        // Enable payouts for this customer
        break;
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: 'Invalid webhook signature' });
  }
});
```

## Deploying to Production

When deploying your Replit app:

| Step | Action |
|------|--------|
| 1. Update secrets | Change to `sk_live_*` API key |
| 2. Enable Always On | Keep your server running 24/7 |
| 3. Custom domain | Use professional URL for webhooks |
| 4. Add webhook secret | `MONEYGRAPH_WEBHOOK_SECRET` in Secrets |
| 5. Set up monitoring | Track API health and transaction success |

## Sandbox Testing

Test safely with sandbox mode:

```typescript
// Verify you're in sandbox
if (!mg.isSandbox) {
  throw new Error('Run tests in sandbox mode only!');
}

// Create instant test customers
const verified = await mg.customers.createMockPersona('business_verified');
const pending = await mg.customers.createMockPersona('pending_kyc');
const rejected = await mg.customers.createMockPersona('rejected_kyc');

// Test a payout
const result = await mg.executeSmartPayout({
  customer_id: verified.id,
  from_currency: 'USD',
  to_currency: 'NGN',
  amount: 100,
  recipient: {
    name: 'Test Recipient',
    bank_code: '058',
    account_number: '0123456789',
  },
  priority: 'cost',
});

console.log('Test payout:', result);
```

## Tips for Replit Development

1. **Use Secrets** - Never commit API keys to code
2. **Enable Ghostwriter** - AI autocomplete understands MoneyGraph patterns
3. **Use Replit DB** - Store customer mappings and transaction history
4. **Test in sandbox** - Always use `sk_test_*` during development
5. **Set up webhooks** - Essential for production status updates
6. **Fork and share** - Collaborate with your team in real-time

## Getting Started

1. Create a Node.js Repl at replit.com
2. Run `npm install @moneygraph/sdk`
3. Add `MONEYGRAPH_API_KEY` to Secrets
4. Copy the Express template above
5. Start building!

Replit + MoneyGraph = Production-ready payment APIs in your browser.
