# MoneyGraph Blog Posts: Additional AI Platform Support

> Content package for BOLT to build out blog posts for Claude.ai, Base44, Bolt.new, and Replit integrations.

---

## POST 1: Claude.ai Integration

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
- Understanding complex business logic (KYC flows, compliance rules)
- Generating complete, working code (not just snippets)
- Following detailed instructions precisely
- Explaining its reasoning (helpful for audits)

MoneyGraph provides:
- 40+ API endpoints for global payments
- Built-in compliance (KYC before payouts)
- Multi-rail support (local, SWIFT, mobile money, crypto)

Together, they create a powerful fintech development environment.

## Setup: Add Project Instructions

In Claude.ai:

1. Create a new Project
2. Go to **Project Knowledge**
3. Paste the contents of `CLAUDE_AI_INSTRUCTIONS.md`

That's it. Claude now understands MoneyGraph.

## What Claude Learns

Our project instructions teach Claude:

### The Golden Rule: KYC Before Payouts

```typescript
// Claude always generates this check
const status = await mg.customers.kyc.canPayout(customerId);
if (!status.allowed) {
  throw new Error(`KYC not approved: ${status.status}`);
}
```

### Quote → Confirm → Payout

```typescript
// Claude knows the FX flow
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
await mg.fx.confirm(quote.id);  // Lock rate for 2 minutes
const payout = await mg.payouts.create({ quote_id: quote.id, ... });
```

### All SDK Namespaces

Claude knows to use:
- `mg.customers.kyc` for verification
- `mg.payouts.mobileMoney` for M-Pesa
- `mg.cards` for virtual cards
- And all other v2.1+ namespaces

## Example Prompts

Try these prompts with Claude:

### Build a Remittance API

**Prompt**: "Build a REST API for a remittance service using MoneyGraph. Users should be able to register, complete KYC, and send money to Nigeria."

Claude generates:
- Express.js routes
- Customer registration with validation
- KYC submission flow
- Quote and payout endpoints
- Error handling with MoneyGraph error types

### Create a Wallet System

**Prompt**: "Create a multi-currency wallet system where users can hold USD, EUR, and NGN. Include FX conversion between currencies."

Claude generates:
- Wallet creation for each currency
- Balance checking
- FX quote display with countdown
- Wallet-to-wallet transfers

### Issue Virtual Cards

**Prompt**: "Build a virtual card issuance feature. Users with approved KYC can create USD cards and fund them from their wallet."

Claude generates:
- KYC verification before issuance
- Card creation with spending limits
- Funding from wallet balance
- Card freeze/unfreeze controls

## Claude's Compliance Awareness

Unlike generic code generators, Claude with MoneyGraph instructions:

1. **Never skips KYC** - Always checks before payouts
2. **Handles errors properly** - Uses MoneyGraphError types
3. **Uses environment variables** - Never hardcodes secrets
4. **Follows date formats** - DD-MM-YYYY for birthdays

## Best Practices

### 1. Be Specific About Business Logic

```
Build a payout service that:
- Only allows payouts to verified customers
- Limits transactions to $10,000 per day
- Sends email notifications on completion
```

### 2. Ask for Explanations

```
Build a KYC flow and explain why each step is necessary
for regulatory compliance.
```

### 3. Request Error Handling

```
Include comprehensive error handling for all MoneyGraph
error codes: KYC_PENDING, QUOTE_EXPIRED, etc.
```

## Artifacts: Visual Components

Claude can create React components in Artifacts:

**Prompt**: "Create a React component for sending money with MoneyGraph. Show the FX quote with a countdown timer."

Claude generates an interactive component with:
- Amount input
- Currency selector
- Live quote display
- 2-minute countdown
- Send button with loading state

## Getting Started

1. Install the SDK: `npm install @moneygraph/sdk`
2. Copy `CLAUDE_AI_INSTRUCTIONS.md` to your Claude Project
3. Start building!

Claude is now your fintech-aware coding partner.

---

## POST 2: Base44 Integration

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
- React frontend with components
- API routes and backend logic
- Database schemas
- Authentication flows

With MoneyGraph integration, it also generates:
- KYC verification flows
- FX quote displays
- Payout processing
- Transaction history

## Quick Setup

### Step 1: Add MoneyGraph to Your Base44 Project

```bash
npm install @moneygraph/sdk
```

### Step 2: Configure Environment

```env
MONEYGRAPH_API_KEY=sk_test_your_key
```

### Step 3: Import the Guide

Add `recipes/BASE44_GUIDE.md` to your Base44 project context.

## Prompt Templates

### Remittance App

```
Build a remittance app using MoneyGraph SDK that allows users to:
1. Register and complete KYC verification
2. Get FX quotes for USD to NGN transfers
3. Send money to Nigerian bank accounts
4. Track payout status

Use mg.customers for registration, mg.customers.kyc for verification,
mg.fx for quotes, and mg.executeSmartPayout() for transfers.
Always check KYC status before allowing payouts.
```

Base44 generates a complete app with:
- Registration form
- KYC document upload
- Quote calculator with rate display
- Send money form
- Transaction history page

### Multi-Currency Wallet

```
Build a wallet app using MoneyGraph SDK with:
1. User registration with KYC
2. Multi-currency wallets (USD, EUR, NGN)
3. Wallet-to-wallet transfers
4. FX conversion between currencies

Use mg.wallets for wallet management, mg.transfers for internal transfers,
and mg.fx for currency conversion.
```

### Virtual Card Platform

```
Build a virtual card platform using MoneyGraph SDK:
1. User registration and KYC
2. Issue virtual USD cards
3. Fund cards from wallet
4. View card transactions

Use mg.cards.create() for issuance, mg.cards.fund() for funding,
and mg.cards.transactions() for history.
```

## What Base44 Generates

### Service Layer

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
  // KYC check (Base44 knows to include this)
  const status = await mg.customers.kyc.canPayout(params.customerId);
  if (!status.allowed) {
    return { success: false, error: 'Complete KYC first' };
  }

  // Smart payout (Base44 uses the recommended method)
  return mg.executeSmartPayout({
    customer_id: params.customerId,
    from_currency: 'USD',
    to_currency: params.toCurrency as any,
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

```tsx
// components/SendMoneyForm.tsx (generated by Base44)
export function SendMoneyForm({ customerId }: { customerId: string }) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);

  // Base44 includes quote countdown
  useEffect(() => {
    if (quote) {
      const timer = setInterval(() => {
        const remaining = getSecondsRemaining(quote.expires_at);
        if (remaining <= 0) setQuote(null);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [quote]);

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      {quote && <QuoteDisplay quote={quote} />}
      <button disabled={loading || !quote}>
        {loading ? 'Sending...' : 'Send Money'}
      </button>
    </form>
  );
}
```

## Key Patterns Base44 Follows

### 1. KYC Before Payouts

Base44 always generates KYC checks before payout operations.

### 2. Quote Expiry Handling

Base44 includes countdown timers for the 2-minute quote validity.

### 3. Error Handling

Base44 generates proper error handling with MoneyGraph error types.

### 4. Loading States

All API calls include loading indicators.

## Tips for Better Results

### Be Specific About UI

```
Build a send money form with:
- Amount input with currency selector
- Recipient bank dropdown (fetch from mg.reference.banks.list)
- Real-time FX quote display
- 2-minute countdown timer
- Confirm button that locks the rate
```

### Specify Error Messages

```
Handle these errors with user-friendly messages:
- KYC_PENDING: "Please complete verification"
- QUOTE_EXPIRED: "Rate expired, fetching new quote..."
- INSUFFICIENT_BALANCE: "Add funds to continue"
```

### Request Sandbox Testing

```
Include sandbox testing with mock personas:
- mg.customers.createMockPersona('business_verified')
- mg.customers.createMockPersona('pending_kyc')
```

## Getting Started

1. Install SDK: `npm install @moneygraph/sdk`
2. Add `BASE44_GUIDE.md` to project context
3. Use prompt templates above
4. Iterate with natural language

Base44 + MoneyGraph = Fintech apps in minutes.

---

## POST 3: Bolt.new Integration

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

Bolt.new (powered by StackBlitz) is a browser-based AI development environment. Build and deploy full-stack applications without leaving your browser. With MoneyGraph SDK, you can create fintech applications in minutes.

## Why Bolt.new + MoneyGraph?

Bolt.new offers:
- Instant development environment (no setup)
- AI-assisted coding
- One-click deployment
- Built-in package management

MoneyGraph adds:
- Global payment capabilities
- Compliance automation
- Multi-currency support
- 107+ country coverage

## Quick Setup

### Step 1: Create Project in Bolt.new

Start a new Vite + React + TypeScript project.

### Step 2: Add the SDK

Create `src/lib/moneygraph.ts` and paste our single-file SDK.

### Step 3: Add Environment Variable

In your `.env`:
```
MONEYGRAPH_API_KEY=sk_test_your_key
```

### Step 4: Initialize

```typescript
import { MoneyGraph } from './lib/moneygraph';

const mg = new MoneyGraph({ 
  apiKey: import.meta.env.MONEYGRAPH_API_KEY 
});
```

## Server Actions Pattern

Since Bolt.new uses Vite/React, create server actions for API calls:

```typescript
// src/actions/payments.ts
'use server';

import { MoneyGraph } from '../lib/moneygraph';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

export async function sendPayout(params: {
  customerId: string;
  amount: number;
  recipient: { name: string; bankCode: string; accountNumber: string };
}) {
  // Check KYC
  const status = await mg.customers.kyc.canPayout(params.customerId);
  if (!status.allowed) {
    return { success: false, error: 'KYC not approved' };
  }
  
  // Smart payout
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

## React Component Example

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="amount" type="number" placeholder="Amount (USD)" />
      <input name="recipientName" placeholder="Recipient Name" />
      <input name="bankCode" placeholder="Bank Code" />
      <input name="accountNumber" placeholder="Account Number" />
      
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Money'}
      </button>
      
      {result && (
        <div className={result.success ? 'text-green-600' : 'text-red-600'}>
          {result.success ? `Payout ID: ${result.payout_id}` : result.error}
        </div>
      )}
    </form>
  );
}
```

## Quote Countdown Component

FX quotes expire in 2 minutes. Show users the countdown:

```tsx
function QuoteDisplay({ quote }: { quote: Quote }) {
  const [secondsLeft, setSecondsLeft] = useState(120);
  
  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = Math.max(0, 
        120 - Math.floor((Date.now() - new Date(quote.created_at).getTime()) / 1000)
      );
      setSecondsLeft(remaining);
      if (remaining === 0) clearInterval(timer);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [quote]);
  
  return (
    <div className="p-4 bg-gray-100 rounded">
      <p>Rate: 1 {quote.from_currency} = {quote.rate} {quote.to_currency}</p>
      <p>You send: ${quote.from_amount}</p>
      <p>They receive: {quote.to_currency} {quote.to_amount}</p>
      <p className={secondsLeft < 30 ? 'text-red-500' : ''}>
        Expires in: {secondsLeft}s
      </p>
    </div>
  );
}
```

## Deployment

Bolt.new offers one-click deployment. For production:

1. Change API key to `sk_live_*`
2. Set up webhooks for payout status
3. Enable custom domain

## Tips for Bolt.new Development

1. **Use TypeScript** - Better autocomplete with SDK types
2. **Create a services folder** - Keep API logic separate
3. **Add loading states** - API calls take 1-3 seconds
4. **Test in sandbox first** - Use `sk_test_*` keys

---

## POST 4: Replit Integration

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

Replit is a collaborative browser-based IDE with AI coding capabilities (Replit Agent, Ghostwriter). Combined with MoneyGraph SDK, you can build, test, and deploy payment applications entirely in your browser.

## Why Replit + MoneyGraph?

Replit provides:
- Instant development environment
- Replit Agent for autonomous coding
- Ghostwriter for AI assistance
- Built-in database
- One-click deployment
- Collaborative editing

MoneyGraph adds:
- Global payment API
- KYC and compliance
- Multi-currency wallets
- Card issuance

## Quick Setup

### Step 1: Create a Node.js Repl

Choose Node.js or TypeScript template.

### Step 2: Install SDK

In the Shell:
```bash
npm install @moneygraph/sdk
```

### Step 3: Add Secrets

Go to **Tools → Secrets** and add:
- `MONEYGRAPH_API_KEY`: `sk_test_your_key`

### Step 4: Initialize

```typescript
import { MoneyGraph } from '@moneygraph/sdk';

const mg = new MoneyGraph({ 
  apiKey: process.env.MONEYGRAPH_API_KEY! 
});
```

## Express.js Template

```typescript
// index.ts
import express from 'express';
import { MoneyGraph, MoneyGraphError } from '@moneygraph/sdk';

const app = express();
app.use(express.json());

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

// Create customer
app.post('/api/customers', async (req, res) => {
  try {
    const customer = await mg.customers.create({
      account_type: req.body.accountType,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      phone_iso2: req.body.country,
      country: req.body.country,
    });
    res.json({ success: true, customer });
  } catch (error) {
    if (error instanceof MoneyGraphError) {
      res.status(400).json({ success: false, code: error.code, message: error.message });
    } else {
      res.status(500).json({ success: false, message: 'Internal error' });
    }
  }
});

// Smart payout
app.post('/api/payouts', async (req, res) => {
  try {
    const result = await mg.executeSmartPayout({
      customer_id: req.body.customerId,
      from_currency: 'USD',
      to_currency: req.body.toCurrency,
      amount: req.body.amount,
      recipient: req.body.recipient,
      priority: 'cost',
    });
    res.json(result);
  } catch (error) {
    if (error instanceof MoneyGraphError) {
      res.status(400).json({ success: false, code: error.code, message: error.message });
    } else {
      res.status(500).json({ success: false, message: 'Internal error' });
    }
  }
});

app.listen(3000, () => console.log('MoneyGraph API on port 3000'));
```

## Replit Agent Instructions

When using Replit Agent, include:

```
Build a payment API using MoneyGraph SDK.

CRITICAL RULES:
1. Check KYC before payouts: mg.customers.kyc.canPayout()
2. Use Quote → Confirm → Payout for FX
3. Use mg.executeSmartPayout() for simple integration
4. Never hardcode API keys - use Replit Secrets

SDK NAMESPACES:
- mg.customers (+ mg.customers.kyc)
- mg.fx (quote, confirm, rates)
- mg.payouts (+ mg.payouts.swift, mg.payouts.mobileMoney)
- mg.wallets, mg.cards, mg.payments
```

Replit Agent will generate compliant code with proper error handling.

## Replit Database Integration

Store customer mappings:

```typescript
import { Client } from '@replit/database';

const db = new Client();

async function saveCustomer(userId: string, customerId: string) {
  await db.set(`customer:${userId}`, customerId);
}

async function getCustomer(userId: string): Promise<string | null> {
  return await db.get(`customer:${userId}`);
}
```

## Webhook Endpoint

Handle payout status updates:

```typescript
import { webhooks } from '@moneygraph/sdk';

app.post('/webhooks/moneygraph', async (req, res) => {
  try {
    const event = webhooks.constructEvent(
      req.body,
      req.headers['x-signature'] as string,
      process.env.MONEYGRAPH_WEBHOOK_SECRET!
    );
    
    if (event.type === 'payout.completed') {
      console.log('Payout completed:', event.data.id);
      // Update your database
    }
    
    res.json({ received: true });
  } catch (error) {
    res.status(400).json({ error: 'Invalid webhook' });
  }
});
```

## Deployment

For production on Replit:

1. **Add production secrets**: Change to `sk_live_*`
2. **Enable Always On**: Keep server running
3. **Use custom domain**: For webhook URLs
4. **Add webhook secret**: `MONEYGRAPH_WEBHOOK_SECRET`

## Sandbox Testing

```typescript
// Use sk_test_* keys
const mg = new MoneyGraph({ apiKey: 'sk_test_demo' });

// Create test customers
const verified = await mg.customers.createMockPersona('business_verified');
const pending = await mg.customers.createMockPersona('pending_kyc');

// Test with mock data
const quote = await mg.fx.quote({ from: 'USD', to: 'NGN', amount: 100 });
```

## Tips for Replit

1. **Use Secrets** - Never commit API keys
2. **Enable Ghostwriter** - AI understands MoneyGraph patterns
3. **Use Replit DB** - Store customer mappings
4. **Test sandbox first** - Always use `sk_test_*` during development
5. **Set up webhooks** - For production status updates

---

## INDEX: Additional AI Platforms

```json
{
  "blog_series": {
    "name": "MoneyGraph Additional AI Platform Support",
    "total_posts": 4,
    "publication_date": "2025-01-15",
    "author": "MoneyGraph Team"
  },
  "posts": [
    {
      "id": 1,
      "title": "Building Payment Apps with Claude.ai and MoneyGraph",
      "slug": "claude-ai-moneygraph-integration",
      "agent": "claude",
      "config_file": "CLAUDE_AI_INSTRUCTIONS.md"
    },
    {
      "id": 2,
      "title": "Building Fintech Apps with Base44 and MoneyGraph",
      "slug": "base44-moneygraph-integration",
      "agent": "base44",
      "config_file": "recipes/BASE44_GUIDE.md"
    },
    {
      "id": 3,
      "title": "Building Payment Apps with Bolt.new and MoneyGraph",
      "slug": "bolt-new-moneygraph-integration",
      "agent": "bolt-new",
      "config_file": "BOLT_INTEGRATION.md"
    },
    {
      "id": 4,
      "title": "Building Payment Apps with Replit and MoneyGraph",
      "slug": "replit-moneygraph-integration",
      "agent": "replit",
      "config_file": "REPLIT_INTEGRATION.md"
    }
  ],
  "internal_links": {
    "all_to_landing": "/ai-agent-integration",
    "related_big_5": [
      "/blog/github-copilot-moneygraph-integration",
      "/blog/amazon-q-moneygraph-compliance",
      "/blog/cursor-moneygraph-rules"
    ]
  }
}
```
