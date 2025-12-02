export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  featuredImage: string;
  ogTitle: string;
  ogDescription: string;
  canonicalUrl: string;
  schemaType: string;
  keywords: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'moneygraph-big-5-ai-agent-support',
    title: 'MoneyGraph Now Supports the Big 5 AI Coding Agents',
    slug: 'moneygraph-big-5-ai-agent-support',
    description: 'MoneyGraph SDK v2.2 introduces native support for GitHub Copilot, Amazon Q, Windsurf, Devin, and Cursor. Build payment integrations 10x faster with AI that understands fintech compliance.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Product Updates',
    tags: ['ai-agents', 'github-copilot', 'amazon-q', 'windsurf', 'devin', 'cursor', 'sdk', 'fintech', 'payments', 'developer-tools'],
    readingTime: '4 min',
    featuredImage: '/blog/big-5-ai-agents-hero.png',
    ogTitle: 'MoneyGraph + Big 5 AI Agents: Build Payment Apps 10x Faster',
    ogDescription: 'The first fintech SDK with native support for GitHub Copilot, Amazon Q, Windsurf, Devin, and Cursor. Ship compliant payment integrations in minutes.',
    canonicalUrl: 'https://moneygraph.ai/blog/moneygraph-big-5-ai-agent-support',
    schemaType: 'BlogPosting',
    keywords: ['moneygraph ai integration', 'github copilot payments sdk', 'amazon q fintech', 'windsurf payment integration', 'devin autonomous engineer payments', 'cursor ide fintech sdk', 'ai native payment sdk', 'cross-border payments ai', 'kyc compliance ai coding', 'fintech developer tools 2025'],
    content: `**TL;DR**: MoneyGraph SDK v2.2 ships with native configuration files for GitHub Copilot, Amazon Q, Windsurf (Codeium), Devin, and Cursor. Your AI coding assistant now understands KYC compliance, FX quotes, and cross-border payment flows out of the box.

## The Problem We Solved

Every developer building with AI coding assistants has experienced this: you ask Copilot to integrate a payment API, and it hallucinates endpoints that don't exist. Or it generates raw fetch() calls instead of using the SDK. Or worst of all—it skips compliance checks that could get your app shut down.

We fixed this.

## Introducing Big 5 Agent Support

Starting with SDK v2.2, when you install @moneygraph/sdk, your AI coding assistant automatically loads our configuration files and learns:

- **The correct SDK patterns** — No more hallucinated API calls
- **Compliance requirements** — KYC checks before payouts, always
- **The Quote → Confirm → Payout flow** — Rate locking done right
- **Environment safety** — Sandbox vs production guards

## What's Included

| Agent | Config File | What It Does |
|-------|-------------|--------------|
| GitHub Copilot | .github/copilot-instructions.md | Teaches Copilot the Golden Path for payments |
| Amazon Q | .amazonq/rules/moneygraph.md | Enforces 6 compliance rules with severity levels |
| Windsurf | .windsurfrules.md | Cascade-style rules with namespace mapping |
| Devin | .devin/wiki.json | Domain mapping so Devin finds the right code |
| Cursor | .cursor/rules/moneygraph.mdc | MDC rules with glob patterns |

## How It Works

When you open a project with MoneyGraph installed, your AI assistant reads our configuration files and understands the SDK. Ask it to "send a payout to Nigeria" and it will:

1. Check KYC status first (compliance rule)
2. Get an FX quote (rate locking)
3. Confirm the quote (2-minute validity)
4. Execute the payout with proper error handling

No hallucinations. No compliance gaps. No debugging AI-generated code for hours.

## Get Started

\`\`\`bash
npm install @moneygraph/sdk
\`\`\`

That's it. The agent configs are included in the package. Your AI assistant will pick them up automatically.

## What Developers Are Saying

> "I asked Cursor to build a remittance flow and it generated production-ready code on the first try. The KYC checks were already there." — Senior Engineer, Fintech Startup

> "Devin built our entire payout integration autonomously. It found the SDK docs, understood the compliance requirements, and shipped working code." — CTO, Neobank

## Learn More

**AI Coding Assistants:**

- **[GitHub Copilot](/blog/github-copilot-moneygraph-integration)** - Inline suggestions with MoneyGraph patterns
- **[Amazon Q Developer](/blog/amazon-q-moneygraph-compliance)** - Compliance-enforced code generation
- **[Cursor](/blog/cursor-moneygraph-rules)** - MDC rules for intelligent autocomplete
- **[Windsurf](/blog/windsurf-moneygraph-setup)** - Cascade engine with payment flows
- **[Claude.ai](/blog/claude-ai-moneygraph-integration)** - Project instructions for compliant APIs

**AI App Generators:**

- **[Devin](/blog/devin-moneygraph-autonomous)** - Autonomous builds with wiki knowledge
- **[Base44](/blog/base44-moneygraph-integration)** - Natural language to full-stack apps
- **[Bolt.new](/blog/bolt-new-moneygraph-integration)** - Browser-based instant development
- **[Replit](/blog/replit-moneygraph-integration)** - Collaborative coding with AI agent`,
  },
  {
    id: 'github-copilot-moneygraph-integration',
    title: 'How to Use GitHub Copilot with MoneyGraph for Payment Integrations',
    slug: 'github-copilot-moneygraph-integration',
    description: 'Step-by-step guide to using GitHub Copilot with MoneyGraph SDK. Learn how Copilot understands KYC compliance, FX quotes, and cross-border payouts automatically.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['github-copilot', 'ai-coding', 'payments', 'sdk', 'tutorial', 'developer-tools', 'fintech'],
    readingTime: '6 min',
    featuredImage: '/blog/github-copilot-moneygraph.png',
    ogTitle: 'GitHub Copilot + MoneyGraph: AI-Powered Payment Integration',
    ogDescription: 'Build compliant payment flows with GitHub Copilot. Our SDK teaches Copilot the correct patterns for KYC, FX, and cross-border payouts.',
    canonicalUrl: 'https://moneygraph.ai/blog/github-copilot-moneygraph-integration',
    schemaType: 'HowTo',
    keywords: ['github copilot payment integration', 'copilot fintech sdk', 'ai code generation payments', 'github copilot instructions file', 'copilot custom instructions', 'payment api copilot', 'cross-border payments copilot', 'kyc compliance copilot', 'moneygraph copilot setup', 'ai assisted fintech development'],
    content: `GitHub Copilot is the world's most widely used AI coding assistant. With MoneyGraph SDK v2.2, Copilot now understands how to build compliant payment integrations without hallucinating endpoints or skipping critical compliance checks.

## What Copilot Learns from MoneyGraph

When you install our SDK, Copilot reads \`.github/copilot-instructions.md\` and learns:

| What Copilot Learns | Why It Matters |
|---------------------|----------------|
| Never use raw fetch() | Use SDK methods instead of API calls |
| The Golden Path | Correct sequence: Initialize → KYC → Quote → Confirm → Payout |
| Dual-Mode Awareness | sk_test_* = sandbox, sk_live_* = production |
| Compliance First | Always check KYC before payouts |
| Environment Variables | Never hardcode API keys |

### 1. Never Use Raw Fetch

Copilot will never generate code like this:

\`\`\`typescript
// ❌ Copilot won't do this anymore
const response = await fetch('https://api.moneygraph.ai/v1/payouts');
\`\`\`

Instead, it generates:

\`\`\`typescript
// ✅ Copilot generates this
import { MoneyGraph } from '@moneygraph/sdk';
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
\`\`\`

### 2. The Golden Path

Copilot understands the correct sequence for payment integrations:

1. **Initialize** — Create client with API key
2. **Onboard** — Create customer and complete KYC
3. **Quote** — Get FX rate (valid 2 minutes)
4. **Confirm** — Lock the rate
5. **Payout** — Send money

### 3. Dual-Mode Awareness

Copilot knows that \`sk_test_*\` keys enable sandbox mode with mock data, while \`sk_live_*\` keys trigger real transactions.

## Setup (30 Seconds)

\`\`\`bash
npm install @moneygraph/sdk
\`\`\`

That's it. Copilot automatically reads the instructions file.

## Quick Start Prompt

Copy this into your editor to get started:

\`\`\`typescript
// TODO: Install MoneyGraph SDK and create a function that:
// 1. Accepts a customer ID and amount in USD
// 2. Checks if the customer's KYC is approved
// 3. Gets an FX quote to convert USD to Nigerian Naira (NGN)
// 4. Confirms the quote to lock the rate
// 5. Creates a payout to a Nigerian bank account
// Use the MoneyGraph SDK patterns
\`\`\`

**Watch Copilot generate compliant code with KYC checks, FX handling, and proper error management!**

## Try It: Prompt Examples

Open a TypeScript file and try these prompts:

**Prompt**: "Create a function to send $100 to Nigeria"

**Copilot generates**:
\`\`\`typescript
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
\`\`\`

**Notice how Copilot:**

- ✅ Used the SDK (not raw fetch)
- ✅ Checked KYC status first
- ✅ Followed Quote → Confirm → Payout flow
- ✅ Used environment variables for API key

## Advanced: Copilot Chat

Use Copilot Chat for complex questions:

| Question | What Copilot Explains |
|----------|----------------------|
| "How do I handle a QUOTE_EXPIRED error?" | Error handling patterns with retry logic |
| "What's the difference between mg.payouts.create and mg.payouts.swift.create?" | Namespace differences and when to use each |
| "Show me how to issue a virtual card" | Complete card issuance flow with KYC checks |

Copilot references our SDK patterns from the instructions file for accurate, compliant code.

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Copilot ignores the instructions | Ensure \`node_modules/@moneygraph/sdk\` exists in your workspace. Copilot reads instructions from installed packages. |
| Copilot still uses raw fetch() | Add a comment \`// Use MoneyGraph SDK\` above your code. This primes Copilot to use SDK patterns. |
| SDK methods not autocompleting | Run \`npm install @moneygraph/sdk\` and restart your editor to reload TypeScript definitions. |

## Next Steps

**Resources:**

- **[MoneyGraph SDK Documentation](https://docs.moneygraph.ai)** - Complete integration guides and API reference
- **[GitHub Copilot Setup](https://docs.github.com/copilot)** - Official Copilot documentation
- **[SDK Installation Guide](https://moneygraph.ai/docs/installation)** - Get started in 5 minutes`,
  },
  {
    id: 'amazon-q-moneygraph-compliance',
    title: 'Amazon Q Developer Rules for MoneyGraph: Fintech Compliance Built-In',
    slug: 'amazon-q-moneygraph-compliance',
    description: 'How Amazon Q enforces financial compliance when generating MoneyGraph code. Learn about our 6 severity-rated rules for KYC, security, and API patterns.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['amazon-q', 'aws', 'compliance', 'fintech', 'enterprise', 'sdk', 'developer-tools', 'security'],
    readingTime: '5 min',
    featuredImage: '/blog/amazon-q-moneygraph.png',
    ogTitle: 'Amazon Q + MoneyGraph: Enterprise-Grade Fintech Compliance',
    ogDescription: 'Amazon Q enforces 6 compliance rules when generating MoneyGraph code. KYC checks, secret management, and API patterns—all automatic.',
    canonicalUrl: 'https://moneygraph.ai/blog/amazon-q-moneygraph-compliance',
    schemaType: 'HowTo',
    keywords: ['amazon q developer', 'amazon q fintech', 'aws payment integration', 'amazon q rules', 'enterprise payment sdk', 'fintech compliance automation', 'kyc automation aws', 'amazon q custom rules', 'moneygraph aws integration', 'secure payment code generation'],
    content: `Amazon Q is the go-to AI coding assistant for enterprise and AWS shops. With MoneyGraph SDK v2.2, Amazon Q now enforces financial compliance rules when generating payment code.

## The 6 Compliance Rules

Our \`.amazonq/rules/moneygraph.md\` file defines six rules with severity levels:

| Rule # | Name | Severity | What It Enforces |
|--------|------|----------|------------------|
| 1 | KYC Before Payout | CRITICAL | Never generate payout code without KYC check |
| 2 | No Hardcoded Secrets | CRITICAL | Always use environment variables for API keys |
| 3 | Quote Before Confirm | HIGH | Enforce Quote → Confirm → Payout flow |
| 4 | Idempotency Keys | HIGH | Add idempotency keys to financial operations |
| 5 | Error Handling | MEDIUM | Proper error handling with MoneyGraph types |
| 6 | Environment Safety | MEDIUM | Guard against production mistakes in dev |

### Rule 1: KYC Before Payout (CRITICAL)

Amazon Q will never generate payout code without a KYC check:

\`\`\`typescript
// Amazon Q always generates this pattern
const kycStatus = await mg.customers.kyc.canPayout(customerId);
if (!kycStatus.allowed) {
  throw new Error(\`KYC not approved. Status: \${kycStatus.status}\`);
}
// Only then: payout
\`\`\`

### Rule 2: No Hardcoded Secrets (CRITICAL)

Amazon Q enforces environment variable usage:

\`\`\`typescript
// ✅ Amazon Q generates
const mg = new MoneyGraph({
  apiKey: process.env.MONEYGRAPH_SECRET_KEY
});

// ❌ Never generates
const mg = new MoneyGraph({ apiKey: 'sk_live_abc123' });
\`\`\`

### Rule 3: Quote Before Confirm (HIGH)

Amazon Q understands rate locking:

\`\`\`typescript
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id); // Lock rate for 2 minutes
\`\`\`

### Rule 4: Idempotency Keys (HIGH)

For financial operations, Amazon Q adds idempotency:

\`\`\`typescript
await mg.payouts.create(params, {
  idempotencyKey: \`payout_\${orderId}_\${Date.now()}\`
});
\`\`\`

### Rule 5: Error Handling (MEDIUM)

Amazon Q generates proper error handling with MoneyGraph error types:

\`\`\`typescript
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
\`\`\`

### Rule 6: Environment Safety (MEDIUM)

Amazon Q guards against production mistakes:

\`\`\`typescript
if (mg.mode === 'live' && process.env.NODE_ENV !== 'production') {
  throw new Error('Live mode detected in non-production environment');
}
\`\`\`

## Why This Matters for Enterprise

In regulated fintech environments, a single compliance gap can mean:
- Failed audits
- Regulatory fines
- Service shutdowns

Amazon Q with MoneyGraph rules ensures every generated line of code meets compliance requirements. Your security team will thank you.

## Setup

**Installation:**
\`\`\`bash
npm install @moneygraph/sdk
\`\`\`

**How It Works:** Amazon Q automatically reads \`.amazonq/rules/moneygraph.md\` from your project's \`node_modules/@moneygraph/sdk\` folder. No additional configuration needed.

## Quick Start Prompt

Ask Amazon Q in your IDE:

\`\`\`
Create a Lambda function that processes payouts to Kenya using MoneyGraph SDK.

Requirements:
- Install @moneygraph/sdk
- Check customer KYC status before processing
- Get API key from AWS Secrets Manager
- Route payments via M-Pesa for mobile money
- Handle all error codes (KYC_PENDING, QUOTE_EXPIRED, etc.)
- Log transactions to CloudWatch
- Return proper status codes

Make sure the code passes all MoneyGraph compliance rules.
\`\`\`

**Amazon Q will generate production-ready, compliant code with proper AWS integrations!**

## Integration with AWS Services

Amazon Q understands how MoneyGraph fits into AWS architectures:

| AWS Service | Use Case | MoneyGraph Integration |
|-------------|----------|------------------------|
| Lambda | Serverless Functions | Use MoneyGraph in payout functions |
| Step Functions | Workflow Orchestration | Orchestrate KYC → Quote → Payout flows |
| Secrets Manager | Secret Storage | Store MONEYGRAPH_SECRET_KEY securely |
| CloudWatch | Monitoring | Track payout success rates and errors |
| API Gateway | REST APIs | Expose MoneyGraph operations via API |
| SQS | Async Processing | Queue payout requests for processing |

## Try It

**Prompt:** "Create a Lambda function that sends payouts to Kenya via mobile money"

**What Amazon Q Generates:**

- KYC verification check before payout
- Proper error handling with MoneyGraph error types
- AWS Secrets Manager integration for API keys
- Mobile money routing logic for Kenya (M-Pesa)
- CloudWatch logging for transaction monitoring

Amazon Q automatically applies all 6 compliance rules to ensure production-ready, secure code.`,
  },
  {
    id: 'claude-ai-moneygraph-integration',
    title: 'Building Payment Apps with Claude.ai and MoneyGraph',
    slug: 'claude-ai-moneygraph-integration',
    description: 'How to use Claude.ai Projects with MoneyGraph SDK. Copy our project instructions and let Claude build compliant payment integrations automatically.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['claude', 'anthropic', 'ai-coding', 'payments', 'sdk', 'tutorial', 'fintech', 'project-instructions'],
    readingTime: '5 min',
    featuredImage: '/blog/claude-moneygraph.png',
    ogTitle: 'Claude.ai + MoneyGraph: AI-Powered Payment Development',
    ogDescription: 'Use Claude.ai Projects to build payment apps with MoneyGraph. Our project instructions teach Claude compliance, FX patterns, and error handling.',
    canonicalUrl: 'https://moneygraph.ai/blog/claude-ai-moneygraph-integration',
    schemaType: 'HowTo',
    keywords: ['claude ai payments', 'anthropic claude fintech', 'claude project instructions', 'ai payment development', 'claude sdk integration', 'moneygraph claude setup', 'claude coding assistant payments', 'anthropic payment api', 'claude projects knowledge', 'ai fintech development'],
    content: `Claude.ai from Anthropic is one of the most capable AI assistants for complex reasoning and code generation. With MoneyGraph's \`CLAUDE_AI_INSTRUCTIONS.md\`, Claude understands how to build compliant payment applications from your first prompt.

## Why Claude + MoneyGraph?

| Feature | Claude.ai | MoneyGraph | Together |
|---------|-----------|------------|----------|
| Complex Reasoning | ✅ Understands KYC flows | ✅ Built-in compliance | AI understands rules |
| Code Generation | ✅ Complete, working code | ✅ 40+ API endpoints | Production-ready output |
| Precision | ✅ Follows instructions | ✅ Strict SDK patterns | No hallucinations |
| Explanation | ✅ Explains reasoning | ✅ Clear documentation | Audit-friendly code |
| Payment Rails | | ✅ Local, SWIFT, mobile, crypto | Global coverage |
| Multi-Currency | | ✅ 107+ countries | Universal payments |

Together, they create a powerful fintech development environment.

## Setup: Add Project Instructions

In Claude.ai:

1. Create a new Project
2. Go to **Project Knowledge**
3. Paste the contents of \`CLAUDE_AI_INSTRUCTIONS.md\`

That's it. Claude now understands MoneyGraph.

## Quick Start Prompt

Try this prompt in your Claude Project:

\`\`\`
I need to build a remittance API using MoneyGraph SDK.

Build a REST API with these endpoints:
- POST /customers - Register new customer
- POST /customers/:id/kyc - Submit KYC documents
- POST /quotes - Get FX quote (USD to any currency)
- POST /payouts - Send money internationally

Rules:
- Always check KYC status before allowing payouts
- Use Quote → Confirm → Payout flow for FX
- Handle MoneyGraph error types properly
- Use environment variables for API keys
- Add proper TypeScript types

First, npm install @moneygraph/sdk, then build the API.
\`\`\`

**Claude will generate a complete, production-ready REST API with compliance built-in!**

## What Claude Learns

Our project instructions teach Claude:

| Concept | What Claude Understands |
|---------|-------------------------|
| KYC Before Payouts | Always verify customer before sending money |
| Quote → Confirm → Payout | The correct FX flow with rate locking |
| All SDK Namespaces | Which namespace to use for each operation |
| Error Handling | Proper error types and user-friendly messages |
| Compliance Rules | Regulatory requirements built into code |

### The Golden Rule: KYC Before Payouts

\`\`\`typescript
// Claude always generates this check
const status = await mg.customers.kyc.canPayout(customerId);
if (!status.allowed) {
  throw new Error(\`KYC not approved: \${status.status}\`);
}
\`\`\`

### Quote → Confirm → Payout

\`\`\`typescript
// Claude knows the FX flow
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id);  // Lock rate for 2 minutes
const payout = await mg.payouts.create({ quote_id: quote.id, ... });
\`\`\`

### All SDK Namespaces

Claude knows which namespace to use for each operation:

| Need | Claude Uses | Example |
|------|-------------|---------|
| Verify identity | \`mg.customers.kyc\` | KYC verification and status |
| Send to M-Pesa | \`mg.payouts.mobileMoney\` | Mobile money payouts |
| Issue cards | \`mg.cards\` | Virtual and physical cards |
| Check FX rates | \`mg.fx.rates\` | Current exchange rates |
| Optimize routing | \`mg.r3.recommend\` | Best route for payout |
| Accept payments | \`mg.payments\` | Card payment processing |

## Example Prompts

Try these prompts with Claude:

### Build a Remittance API

**Prompt**: "Build a REST API for a remittance service using MoneyGraph. Users should be able to register, complete KYC, and send money to Nigeria."

**Claude generates:**

- Express.js routes
- Customer registration with validation
- KYC submission flow
- Quote and payout endpoints
- Error handling with MoneyGraph error types

### Create a Wallet System

**Prompt**: "Create a multi-currency wallet system where users can hold USD, EUR, and NGN. Include FX conversion between currencies."

**Claude generates:**

- Wallet creation for each currency
- Balance checking
- FX quote display with countdown
- Wallet-to-wallet transfers

### Issue Virtual Cards

**Prompt**: "Build a virtual card issuance feature. Users with approved KYC can create USD cards and fund them from their wallet."

**Claude generates:**

- KYC verification before issuance
- Card creation with spending limits
- Funding from wallet balance
- Card freeze/unfreeze controls

## Getting Started

| Step | Action |
|------|--------|
| 1 | Install the SDK: \`npm install @moneygraph/sdk\` |
| 2 | Copy \`CLAUDE_AI_INSTRUCTIONS.md\` to your Claude Project Knowledge |
| 3 | Ask Claude to build payment features using MoneyGraph SDK |

**Next Steps:**

- **[Claude Projects Guide](https://claude.ai/projects)** - Learn about Claude Projects and Knowledge
- **[MoneyGraph SDK Docs](https://docs.moneygraph.ai)** - Complete API reference
- **[Example Prompts](https://moneygraph.ai/docs/claude-prompts)** - Ready-to-use Claude prompts

Claude is now your fintech-aware AI coding partner with built-in compliance knowledge.`,
  },
  {
    id: 'cursor-moneygraph-rules',
    title: 'Cursor Rules for MoneyGraph: MDC Configuration Deep Dive',
    slug: 'cursor-moneygraph-rules',
    description: 'Deep dive into MoneyGraph\'s Cursor rules file. Learn how our MDC configuration teaches Cursor the SDK patterns, namespace hierarchy, and compliance requirements.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['cursor', 'cursor-ide', 'mdc', 'ai-coding', 'payments', 'sdk', 'tutorial', 'developer-tools'],
    readingTime: '6 min',
    featuredImage: '/blog/cursor-moneygraph.png',
    ogTitle: 'Cursor + MoneyGraph: MDC Rules for Payment Integration',
    ogDescription: 'Our MDC rules file teaches Cursor the MoneyGraph SDK. Quote → Confirm → Payout, KYC compliance, error handling—all automatic.',
    canonicalUrl: 'https://moneygraph.ai/blog/cursor-moneygraph-rules',
    schemaType: 'HowTo',
    keywords: ['cursor ide', 'cursor rules', 'cursor mdc', 'cursor payment integration', 'cursor fintech sdk', 'mdc configuration', 'cursor custom rules', 'moneygraph cursor setup', 'ai ide payments', 'cursor glob patterns'],
    content: `Cursor is the AI-first IDE that's taken the developer world by storm. MoneyGraph SDK has supported Cursor since v1.0, but with v2.2, we've completely rewritten our rules for the new v2.1+ namespace structure.

## What's in Our MDC File

The \`.cursor/rules/moneygraph.mdc\` file uses Cursor's MDC format with frontmatter and rules that apply to all TypeScript and JavaScript files.

### Critical Rules

Our rules file defines four non-negotiable patterns:

| Rule | What Cursor Enforces |
|------|---------------------|
| Never Use Raw Fetch | Always use SDK methods, not direct API calls |
| Quote & Confirm Pattern | Follow Quote → Confirm → Payout sequence |
| KYC Before Payout | Check verification status before sending money |
| Environment Variables | Never hardcode API keys or secrets |

#### 1. Never Use Raw Fetch

\`\`\`typescript
// ❌ Cursor won't generate this
const response = await fetch('https://api.moneygraph.ai/v1/payouts');

// ✅ Cursor generates this
import { MoneyGraph } from '@moneygraph/sdk';
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
\`\`\`

#### 2. Quote & Confirm Pattern

\`\`\`typescript
// Cursor always follows this sequence
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id);
const payout = await mg.payouts.create({ quote_id: quote.id, ... });
\`\`\`

#### 3. KYC Before Payout

\`\`\`typescript
// Cursor adds this check automatically
const status = await mg.customers.kyc.canPayout(customerId);
if (!status.allowed) {
  throw new Error(\`KYC not approved: \${status.status}\`);
}
\`\`\`

#### 4. Environment Variables

\`\`\`typescript
// Cursor never hardcodes API keys
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
\`\`\`

## The Golden Path

Our rules include a complete "Golden Path" example that Cursor references when generating payment flows:

\`\`\`typescript
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
\`\`\`

## Setup

**Installation:**
\`\`\`bash
npm install @moneygraph/sdk
\`\`\`

**How It Works:** Cursor automatically reads \`.cursor/rules/moneygraph.mdc\` from your project's \`node_modules/@moneygraph/sdk\` folder. Rules are applied to all TypeScript and JavaScript files.

## Quick Start Prompt

Add this comment in your editor and press Tab:

\`\`\`typescript
// Create a payout function that sends $500 USD to a Nigerian bank account
// using MoneyGraph SDK. Include KYC check, FX quote, and proper error handling
\`\`\`

**Cursor will autocomplete with compliant, production-ready code!**

## Pro Tips

| Tip | How to Use |
|-----|------------|
| **Use Cursor Chat** | Ask questions like "What's the difference between mg.payouts.create and mg.payouts.swift.create?" or "How do I handle QUOTE_EXPIRED errors?" |
| **Prime with Comments** | Add \`// Use MoneyGraph to send payout to Nigeria\` above your code to guide Cursor's suggestions |
| **Leverage Autocomplete** | Type \`mg.\` and let Cursor show you all available namespaces with inline documentation |
| **Ask for Examples** | Request "Show me how to create a virtual card" and Cursor will generate complete, compliant code |

## Why Cursor + MoneyGraph Works So Well

Cursor excels at understanding complex codebases. Our SDK's clean namespace hierarchy (\`mg.module.submodule.method\`) maps perfectly to how Cursor analyzes code structure.

**The Result:** Cursor becomes a fintech expert that understands compliance, rate locking, and multi-rail payments automatically.

**Next Steps:**

- **[Cursor IDE Download](https://cursor.sh)** - Get started with Cursor
- **[MoneyGraph SDK Docs](https://docs.moneygraph.ai)** - Complete API reference
- **[MDC Rules Guide](https://moneygraph.ai/docs/cursor-setup)** - Advanced Cursor configuration`,
  },
  {
    id: 'windsurf-moneygraph-setup',
    title: 'Windsurf Rules for MoneyGraph: Cascade-Style Payment Integration',
    slug: 'windsurf-moneygraph-setup',
    description: 'Configure Windsurf (Codeium) for MoneyGraph payment integrations. Learn how our Cascade rules teach Windsurf the SDK architecture and compliance patterns.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['windsurf', 'codeium', 'cascade', 'ai-coding', 'payments', 'sdk', 'tutorial'],
    readingTime: '5 min',
    featuredImage: '/blog/windsurf-moneygraph.png',
    ogTitle: 'Windsurf + MoneyGraph: Cascade Rules for Payment APIs',
    ogDescription: 'Windsurf\'s Cascade engine understands MoneyGraph\'s namespace hierarchy, compliance rules, and task flows. Build payments faster.',
    canonicalUrl: 'https://moneygraph.ai/blog/windsurf-moneygraph-setup',
    schemaType: 'HowTo',
    keywords: ['windsurf codeium', 'windsurf rules', 'cascade rules', 'codeium payment integration', 'windsurf fintech', 'ai coding assistant payments', 'windsurf custom rules', 'moneygraph windsurf setup', 'cascade syntax tutorial', 'payment sdk windsurf'],
    content: `Windsurf (powered by Codeium) is the fastest-growing alternative to Cursor, known for its Cascade rules engine. MoneyGraph SDK v2.2 includes a comprehensive \`.windsurfrules.md\` file that teaches Windsurf our entire SDK architecture.

## What Makes Windsurf Rules Special

Windsurf uses XML-style tags to organize rules into categories. Our rules file includes:

| Tag | Purpose | What It Contains |
|-----|---------|------------------|
| \`<coding>\` | Code Standards | Strict TypeScript patterns for MoneyGraph |
| \`<architecture>\` | System Design | Namespace hierarchy and domain mapping |
| \`<task_mapping>\` | Workflows | Step-by-step flows for common operations |
| \`<compliance>\` | Rules | KYC, FX, and payout requirements |

### \`<coding>\` Rules

Strict TypeScript patterns for MoneyGraph integration.

### \`<architecture>\` Namespace Mapping

Windsurf learns our entire namespace hierarchy with domain mapping for each area:

| Namespace | Domain | Sub-Namespaces | Purpose |
|-----------|--------|----------------|---------|
| \`mg.customers\` | Customer Onboarding | \`kyc\`, \`directors\` | Create and manage customers |
| \`mg.fx\` | Foreign Exchange | \`rates\` | Quotes, rates, confirmations |
| \`mg.payouts\` | Outbound Payments | \`swift\`, \`mobileMoney\`, \`crypto\` | Send money globally |
| \`mg.wallets\` | Multi-Currency Wallets | | Balance management |
| \`mg.transfers\` | Internal Transfers | | Customer-to-customer |
| \`mg.cards\` | Card Issuance | | Virtual and physical cards |
| \`mg.payments\` | Accept Payments | | Card processing |
| \`mg.r3\` | Route Optimization | | Best route selection |

### \`<task_mapping>\` Flows

Step-by-step flows for common tasks like sending international payments:

1. \`mg.customers.kyc.canPayout()\` - Verify KYC
2. \`mg.fx.quote()\` - Get FX quote
3. \`mg.fx.confirm()\` - Lock the rate
4. \`mg.payouts.create()\` - Execute payout

## How Windsurf Uses These Rules

When you ask Windsurf to build a payment feature, it:

1. **Reads the architecture** — Understands which namespace to use
2. **Follows the task flow** — Executes steps in order
3. **Applies coding rules** — Uses strict types and patterns
4. **Checks compliance** — Adds KYC verification automatically

## Example: Ask Windsurf to Build a Payout

**Prompt**: "Build a function to send money to Kenya via M-Pesa"

**Windsurf generates**:

\`\`\`typescript
import { MoneyGraph } from '@moneygraph/sdk';
import type { Payout } from '@moneygraph/sdk';

async function sendToKenyaMpesa(
  customerId: string,
  amount: number,
  phoneNumber: string
): Promise<Payout> {
  const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

  // Step 1: Verify KYC
  const status = await mg.customers.kyc.canPayout(customerId);
  if (!status.allowed) {
    throw new Error(\`KYC not approved: \${status.status}\`);
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
\`\`\`

**Notice how Windsurf:**

- ✅ Used \`mg.payouts.mobileMoney\` (correct namespace from architecture)
- ✅ Followed the 4-step flow (from task_mapping)
- ✅ Added TypeScript types (from coding rules)
- ✅ Included KYC check (from compliance rules)

## Setup

**Installation:**
\`\`\`bash
npm install @moneygraph/sdk
\`\`\`

**How It Works:** Windsurf automatically reads \`.windsurfrules.md\` from your project's \`node_modules/@moneygraph/sdk\` folder. The Cascade engine applies rules to all code files.

## Quick Start Prompt

Ask Windsurf:

\`\`\`
Build a function to send money to Kenya via M-Pesa using MoneyGraph SDK.

Requirements:
- npm install @moneygraph/sdk first
- Check KYC before sending
- Get FX quote from USD to KES
- Use mg.payouts.mobileMoney namespace
- Add TypeScript types
- Handle all errors
\`\`\`

**Windsurf's Cascade engine will generate compliant code following all payment flow patterns!**

**Next Steps:**

- **[Windsurf IDE Download](https://codeium.com/windsurf)** - Get started with Windsurf
- **[MoneyGraph SDK Docs](https://docs.moneygraph.ai)** - Complete API reference
- **[Cascade Rules Guide](https://moneygraph.ai/docs/windsurf-setup)** - Advanced configuration

## Why Windsurf + MoneyGraph

Windsurf's Cascade engine excels at understanding hierarchical systems. Our SDK's namespace structure (\`mg.module.submodule.method\`) maps perfectly to Cascade's mental model.

**Perfect For:** Complex fintech applications with multiple payment rails, compliance requirements, and international transactions.`,
  },
  {
    id: 'devin-moneygraph-autonomous',
    title: 'How Devin Builds MoneyGraph Integrations Autonomously',
    slug: 'devin-moneygraph-autonomous',
    description: 'Devin, the autonomous AI engineer, can build complete MoneyGraph payment integrations. Learn how our wiki.json teaches Devin to navigate our SDK.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['devin', 'autonomous-ai', 'ai-engineer', 'payments', 'sdk', 'automation', 'fintech'],
    readingTime: '5 min',
    featuredImage: '/blog/devin-moneygraph.png',
    ogTitle: 'Devin + MoneyGraph: Autonomous Payment Integration',
    ogDescription: 'Devin reads our wiki.json to understand MoneyGraph\'s architecture. It builds complete payment flows without human guidance.',
    canonicalUrl: 'https://moneygraph.ai/blog/devin-moneygraph-autonomous',
    schemaType: 'HowTo',
    keywords: ['devin ai engineer', 'devin autonomous coding', 'devin wiki json', 'autonomous payment integration', 'ai builds fintech app', 'devin custom knowledge', 'moneygraph devin setup', 'autonomous code generation payments', 'devin domain mapping', 'ai engineer fintech'],
    content: `Devin is the leading "autonomous AI engineer"—an agent that can build entire features without constant human guidance. With MoneyGraph SDK v2.2, Devin can autonomously build compliant payment integrations.

## How Devin Learns MoneyGraph

Devin uses a \`.devin/wiki.json\` file to understand codebases. Our wiki.json teaches Devin:

### Domain Mapping

Where to find code for different concerns:

- **Banking Logic**: \`src/resources/fx.ts\` - quote, confirm, rates
- **Entity Verification**: \`src/resources/customers.ts\` - create, kyc.submit, kyc.canPayout
- **Payment Processing**: \`src/resources/payouts.ts\` - create, swift.create, mobileMoney.create

When Devin needs to implement KYC, it knows to look at \`src/resources/customers.ts\`.

### Patterns

Reusable patterns Devin can apply:

**Golden Path:**

1. Initialize: \`new MoneyGraph({ apiKey })\`
2. Create customer: \`mg.customers.create()\`
3. Submit KYC: \`mg.customers.kyc.submit()\`
4. Verify KYC: \`mg.customers.kyc.canPayout()\`
5. Get quote: \`mg.fx.quote()\`
6. Lock rate: \`mg.fx.confirm()\`
7. Send payout: \`mg.payouts.create()\`

**Smart Payout**: \`mg.executeSmartPayout()\` - Combines R3 + FX + Payout in one call

### Compliance Rules

Rules Devin must follow:

| Rule | Severity | Requirement |
|------|----------|-------------|
| KYC Before Payout | CRITICAL | \`mg.customers.kyc.canPayout(customerId).allowed === true\` |
| Never use raw fetch | CRITICAL | Always use SDK methods |
| Environment variables | CRITICAL | Never hardcode API keys |
| Quote → Confirm → Payout | HIGH | Follow correct FX flow |
| Error handling | MEDIUM | Handle all MoneyGraph error types |

### System Notes

High-priority instructions:
- ALWAYS check the examples/ and recipes/ folders before writing new code
- Use \`mg.executeSmartPayout()\` for the simplest payout integration
- KYC verification is REQUIRED before any payout operation

## What Devin Can Build

With our wiki.json, Devin can autonomously build:

| Application Type | What Devin Builds |
|------------------|-------------------|
| Remittance Flows | Complete customer onboarding through payout |
| Multi-Rail Payment Systems | Local, SWIFT, mobile money, crypto integrations |
| Card Issuance Platforms | Virtual and physical card creation |
| Payment Acceptance | Card processing with 3DS authentication |
| Wallet Systems | Multi-currency balance management |
| Compliance Dashboards | KYC status tracking and reporting |

## Example: Autonomous Build

**Task given to Devin**: "Build a payroll system that sends salaries to employees in Nigeria, Kenya, and Ghana"

**What Devin does**:

1. Reads \`.devin/wiki.json\` → Understands MoneyGraph architecture
2. Checks \`recipes/\` folder → Finds REMITTANCE_FLOW.md
3. Identifies domains → Banking Logic, Entity Verification, Payment Processing
4. Follows golden_path → Implements Init → Onboard → Quote → Payout
5. Applies compliance_rules → Adds KYC checks before every payout
6. Uses correct namespaces → \`mg.payouts.create\` for Nigeria, \`mg.payouts.mobileMoney.create\` for Kenya

**Result**: A complete, compliant payroll system in under an hour.

## Setup

**Installation:**
\`\`\`bash
npm install @moneygraph/sdk
\`\`\`

**How It Works:** Devin automatically discovers \`.devin/wiki.json\` from your project's \`node_modules/@moneygraph/sdk\` folder when exploring the codebase. It uses this to understand MoneyGraph's architecture and patterns.

## Quick Start Prompt

Give Devin this task:

\`\`\`
Build a payroll system that sends salaries to employees in multiple countries.

Requirements:
- npm install @moneygraph/sdk
- Support Nigeria (bank transfer), Kenya (M-Pesa), Ghana (mobile money)
- Check KYC for each employee before payout
- Handle FX conversion from USD to local currency
- Use executeSmartPayout() for optimal routing
- Add error handling and retry logic
- Create API endpoints for: employee registration, KYC upload, payout processing

Use the MoneyGraph SDK recipes folder for best practices.
\`\`\`

**Devin will autonomously build the entire system with compliance and multi-rail support!**

## Best Practices for Devin + MoneyGraph

| Best Practice | Why It Helps |
|--------------|--------------|
| **Start with smart_payout** | Tell Devin to use \`executeSmartPayout()\` for simple, all-in-one integrations |
| **Point to recipes** | Mention the \`recipes/\` folder so Devin finds example patterns |
| **Specify compliance** | Remind Devin that KYC is required (it knows, but reinforcement helps) |
| **Reference domains** | Mention specific domains like "Banking Logic" to guide Devin's code organization |

## The Future of Fintech Development

Autonomous AI engineers like Devin represent the future of software development. By providing structured knowledge in wiki.json, we enable Devin to build production-grade fintech applications without constant human oversight.`,
  },
  {
    id: 'base44-moneygraph-integration',
    title: 'Building Fintech Apps with Base44 and MoneyGraph',
    slug: 'base44-moneygraph-integration',
    description: 'How to use Base44 AI app generator with MoneyGraph SDK. Build complete payment applications from natural language prompts.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['base44', 'ai-app-generator', 'no-code', 'low-code', 'payments', 'sdk', 'fintech', 'react'],
    readingTime: '6 min',
    featuredImage: '/blog/base44-moneygraph.png',
    ogTitle: 'Base44 + MoneyGraph: Generate Payment Apps with AI',
    ogDescription: 'Use Base44 to generate complete fintech applications. Our integration guide teaches Base44 to build KYC flows, FX quotes, and payouts.',
    canonicalUrl: 'https://moneygraph.ai/blog/base44-moneygraph-integration',
    schemaType: 'HowTo',
    keywords: ['base44 payments', 'base44 fintech', 'ai app generator payments', 'no-code payment app', 'base44 moneygraph', 'generate fintech app', 'ai generated payment flow', 'base44 integration guide', 'payment app generator', 'low-code remittance'],
    content: `Base44 is an AI-powered app generator that creates full-stack applications from natural language descriptions. Combined with MoneyGraph SDK, you can generate complete fintech applications in minutes.

## What Base44 Generates

| Component | What Base44 Creates |
|-----------|---------------------|
| Service Layer | Clean API with KYC checks and error handling |
| React Components | Quote displays, forms, transaction lists |
| Database Schemas | User models, transaction history |
| API Routes | Express/Next.js endpoints |
| Auth System | Registration, login, session management |
| Styling | Polished UI with Tailwind CSS |

## Key Patterns Base44 Follows

| Pattern | Base44 Implementation |
|---------|----------------------|
| KYC Before Payouts | Always generates verification check |
| Quote Expiry | Includes countdown timer component |
| Error Handling | Uses MoneyGraph error types with user messages |
| Loading States | All API calls show loading indicators |
| Form Validation | Client and server-side validation |

## Quick Start Prompt

Enter this in Base44:

\`\`\`
Create a send money app using MoneyGraph SDK.

Features needed:
- User registration page with email/password
- KYC document upload (ID, proof of address)
- Send money form with:
  * Amount input (USD)
  * Country selector (Nigeria, Kenya, Ghana)
  * Recipient bank account fields
  * Real-time FX quote display with 2-minute countdown
  * "Send Money" button (disabled until KYC approved)
- Transaction history page showing all payouts with status badges

Technical requirements:
- npm install @moneygraph/sdk
- Use mg.customers.kyc.canPayout() before allowing sends
- Use Quote → Confirm → Payout flow
- Handle QUOTE_EXPIRED by auto-refreshing
- Show loading states for all API calls
- Add Tailwind CSS styling
\`\`\`

**Base44 will generate a complete full-stack payment app in minutes!**

## Prompt Templates

### Remittance App

\`\`\`
Build a remittance app using MoneyGraph SDK that allows users to:

1. Register and complete KYC verification
2. Get FX quotes for USD to NGN transfers
3. Send money to Nigerian bank accounts
4. Track payout status in real-time

Use mg.customers for registration, mg.customers.kyc for verification,
mg.fx for quotes, and mg.executeSmartPayout() for transfers.
Always check KYC status before allowing payouts.
\`\`\`

**Base44 Generates:**

- User registration form with validation
- KYC document upload component
- Quote calculator showing rate, fees, recipient amount
- Send money form with bank selection
- Transaction list with status badges

### Multi-Currency Wallet

\`\`\`
Build a wallet app using MoneyGraph SDK with:

1. User registration with KYC
2. Multi-currency wallets (USD, EUR, NGN)
3. Wallet-to-wallet transfers between users
4. FX conversion between currencies

Use mg.wallets for wallet management, mg.transfers for internal transfers,
and mg.fx for currency conversion.
\`\`\`

## Setup

| Step | Action |
|------|--------|
| 1 | Install SDK: \`npm install @moneygraph/sdk\` |
| 2 | Add \`BASE44_GUIDE.md\` to project context (from SDK docs) |
| 3 | Use prompt templates above for your use case |
| 4 | Iterate with natural language refinements |

**Next Steps:**

- **[Base44 Platform](https://base44.ai)** - Start generating apps
- **[MoneyGraph SDK Docs](https://docs.moneygraph.ai)** - Complete API reference
- **[Prompt Library](https://moneygraph.ai/docs/base44-prompts)** - More prompt templates

**Result:** Base44 + MoneyGraph = Production-ready fintech apps in minutes.`,
  },
  {
    id: 'bolt-new-moneygraph-integration',
    title: 'Building Payment Apps with Bolt.new and MoneyGraph',
    slug: 'bolt-new-moneygraph-integration',
    description: 'How to use Bolt.new (StackBlitz) with MoneyGraph SDK. Build and deploy payment applications directly in your browser.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['bolt-new', 'stackblitz', 'browser-ide', 'payments', 'sdk', 'tutorial', 'fintech', 'vite', 'react'],
    readingTime: '5 min',
    featuredImage: '/blog/bolt-new-moneygraph.png',
    ogTitle: 'Bolt.new + MoneyGraph: Browser-Based Fintech Development',
    ogDescription: 'Build payment applications in your browser with Bolt.new. Our integration guide includes server actions, React components, and deployment tips.',
    canonicalUrl: 'https://moneygraph.ai/blog/bolt-new-moneygraph-integration',
    schemaType: 'HowTo',
    keywords: ['bolt new payments', 'bolt new fintech', 'stackblitz payment app', 'browser ide payments', 'bolt new moneygraph', 'vite payment integration', 'browser-based fintech development', 'bolt new react payments', 'stackblitz sdk integration', 'online payment app builder'],
    content: `Bolt.new (powered by StackBlitz) is a browser-based AI development environment. Build and deploy full-stack applications without leaving your browser—no local setup required.

## Why Bolt.new + MoneyGraph?

| Bolt.new Feature | MoneyGraph Integration | Result |
|------------------|------------------------|--------|
| Instant Environment | Zero setup time | Start building immediately |
| AI-Assisted Coding | Claude integration | Compliant code generation |
| One-Click Deploy | Production hosting | Live apps in seconds |
| Package Management | npm install works | Full SDK available |
| Real-Time Preview | Instant feedback | See changes live |

## Quick Setup

**Step 1:** Create Vite + React + TypeScript project in Bolt.new

**Step 2:** Add SDK to \`src/lib/moneygraph.ts\` (single-file distribution)

**Step 3:** Configure \`.env\`:
\`\`\`
MONEYGRAPH_API_KEY=sk_test_your_key_here
\`\`\`

**Step 4:** Initialize:
\`\`\`typescript
import { MoneyGraph } from './lib/moneygraph';
const mg = new MoneyGraph({
  apiKey: import.meta.env.MONEYGRAPH_API_KEY
});
\`\`\`

## Quick Start Prompt

Tell Bolt.new:

\`\`\`
Create a payment app using MoneyGraph SDK with Vite + React + TypeScript.

Setup:
- npm install @moneygraph/sdk
- Create src/lib/moneygraph.ts with SDK initialization
- Add MONEYGRAPH_API_KEY to .env

Build these components:

1. SendMoneyForm:
   - Amount input (USD)
   - Country dropdown (Nigeria, Kenya, Ghana)
   - Recipient details form
   - Real-time FX quote with countdown
   - "Send" button (checks KYC first)

2. QuoteDisplay:
   - Shows exchange rate
   - Displays fees
   - Shows recipient amount
   - 2-minute countdown timer

3. PayoutStatus:
   - Transaction ID
   - Status badge (pending/completed/failed)
   - Track payment button

Use server actions for all MoneyGraph API calls. Include loading states and error handling.
\`\`\`

**Bolt.new will generate a complete React payment app in your browser!**

## Server Actions Pattern

Create server actions for API calls:

\`\`\`typescript
// src/actions/payments.ts
'use server';
import { MoneyGraph } from '../lib/moneygraph';

const mg = new MoneyGraph({
  apiKey: process.env.MONEYGRAPH_API_KEY!
});

export async function sendPayout(params) {
  // Check KYC first
  const status = await mg.customers.kyc.canPayout(params.customerId);
  if (!status.allowed) {
    return { success: false, error: 'Complete KYC verification first' };
  }

  // Use smart payout
  return mg.executeSmartPayout({
    customer_id: params.customerId,
    from_currency: 'USD',
    to_currency: 'NGN',
    amount: params.amount,
    recipient: params.recipient,
    priority: 'cost',
  });
}
\`\`\`

## Deployment Tips

| Tip | Why |
|-----|-----|
| Use TypeScript | Better autocomplete with SDK types |
| Create services folder | Keep API logic separate from UI |
| Add loading states | API calls take 1-3 seconds |
| Test sandbox first | Always use \`sk_test_*\` during development |
| Handle quote expiry | Show countdown and auto-refresh |

## Why Bolt.new Works for Fintech

Bolt.new's instant environment eliminates setup friction, letting you focus on payment logic instead of configuration. Combined with MoneyGraph's compliance-ready SDK, you can prototype and deploy fintech features faster than ever.

**Next Steps:**

- **[Bolt.new Platform](https://bolt.new)** - Start building in your browser
- **[MoneyGraph SDK Docs](https://docs.moneygraph.ai)** - Complete API reference
- **[React Integration Guide](https://moneygraph.ai/docs/react-setup)** - React-specific patterns

Bolt.new + MoneyGraph = Production-ready payment apps in your browser.`,
  },
  {
    id: 'replit-moneygraph-integration',
    title: 'Building Payment Apps with Replit and MoneyGraph',
    slug: 'replit-moneygraph-integration',
    description: 'How to use Replit and Replit Agent with MoneyGraph SDK. Build payment applications in a collaborative browser-based environment.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Tutorials',
    tags: ['replit', 'replit-agent', 'ghostwriter', 'browser-ide', 'payments', 'sdk', 'tutorial', 'fintech', 'node', 'express'],
    readingTime: '6 min',
    featuredImage: '/blog/replit-moneygraph.png',
    ogTitle: 'Replit + MoneyGraph: Collaborative Fintech Development',
    ogDescription: 'Build payment applications on Replit with MoneyGraph. Our guide covers Replit Agent, Ghostwriter, and deployment to production.',
    canonicalUrl: 'https://moneygraph.ai/blog/replit-moneygraph-integration',
    schemaType: 'HowTo',
    keywords: ['replit payments', 'replit fintech', 'replit agent payments', 'ghostwriter payment code', 'replit moneygraph', 'replit sdk integration', 'collaborative fintech development', 'replit express payments', 'replit deployment payments', 'online payment app development'],
    content: `Replit is a collaborative browser-based IDE with powerful AI coding capabilities. Combined with MoneyGraph SDK, you can build, test, and deploy payment applications entirely in your browser.

## Why Replit + MoneyGraph?

| Feature | Benefit for Fintech |
|---------|---------------------|
| Browser-Based | No local setup required |
| Replit Agent | Autonomous AI builds complete features |
| Ghostwriter | Inline AI code completion |
| Built-in DB | Store customer mappings |
| One-Click Deploy | Production deployment |
| Collaboration | Real-time team coding |
| Free Tier | Start building immediately |

## Quick Setup

**Step 1:** Create a Node.js Repl
**Step 2:** Install SDK: \`npm install @moneygraph/sdk\`
**Step 3:** Add secrets (Tools → Secrets):

| Secret Key | Value |
|------------|-------|
| \`MONEYGRAPH_API_KEY\` | \`sk_test_your_key\` |

**Step 4:** Initialize and start building!

\`\`\`typescript
import { MoneyGraph } from '@moneygraph/sdk';
const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY });
\`\`\`

## Quick Start Prompt

Tell Replit Agent:

\`\`\`
Build a payment API using MoneyGraph SDK with Express.js.

Setup:
- npm install @moneygraph/sdk express
- Get API key from Replit Secrets (MONEYGRAPH_API_KEY)

Create these endpoints:
- POST /api/customers - Register customer
- POST /api/customers/:id/kyc - Upload KYC documents
- GET /api/quotes - Get FX quote (accepts from_currency, to_currency, amount)
- POST /api/payouts - Send money (uses executeSmartPayout)

Critical rules:
- Check KYC status before allowing payouts
- Use Quote → Confirm → Payout flow
- Handle errors: KYC_PENDING, QUOTE_EXPIRED, INSUFFICIENT_BALANCE
- Never hardcode API keys
- Add request validation
- Return proper HTTP status codes

Store customer ID mappings in Replit DB.
\`\`\`

**Replit Agent will build the entire API autonomously!**

## Using Replit Agent

Give Replit Agent these instructions for compliant code:

**Critical Rules:**

1. Always check KYC: \`mg.customers.kyc.canPayout()\`
2. Use Quote → Confirm → Payout flow
3. Use \`mg.executeSmartPayout()\` for simplest integration
4. Never hardcode API keys
5. Handle all MoneyGraph error types

## Deployment Checklist

When deploying to production:

| Step | Action | Purpose |
|------|--------|---------|
| 1 | Update to \`sk_live_*\` key | Enable real transactions |
| 2 | Enable Always On | Keep server running 24/7 |
| 3 | Custom Domain | Professional webhook URL |
| 4 | Add Webhook Secret | Secure webhook handling |
| 5 | Set up Monitoring | Track transaction success |

## Replit Database Integration

Store customer mappings with Replit DB:

\`\`\`typescript
import { Client } from '@replit/database';
const db = new Client();

// Link MoneyGraph customer to user
await db.set(\`customer:\${userId}\`, mgCustomerId);

// Retrieve for payouts
const customerId = await db.get(\`customer:\${userId}\`);
\`\`\`

## Best Practices

| Practice | Why It Matters |
|----------|----------------|
| Use Secrets | Never commit API keys to version control |
| Enable Ghostwriter | AI understands MoneyGraph SDK patterns |
| Use Replit DB | Store customer ID mappings securely |
| Test sandbox first | Always use \`sk_test_*\` during development |
| Set up webhooks | Get real-time payout status updates |

## Why Replit Works for Fintech

Replit's collaborative environment with Replit Agent makes it perfect for team-based fintech development. Build, test, and deploy payment applications without leaving your browser.

**Next Steps:**

- **[Replit Platform](https://replit.com)** - Start building collaboratively
- **[MoneyGraph SDK Docs](https://docs.moneygraph.ai)** - Complete API reference
- **[Replit Agent Guide](https://moneygraph.ai/docs/replit-agent)** - AI coding best practices

Replit + MoneyGraph = Collaborative fintech development made simple.`,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)));
}

export function getAllTags(): string[] {
  const tags = blogPosts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}
