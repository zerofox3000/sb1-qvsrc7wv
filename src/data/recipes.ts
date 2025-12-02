export interface Recipe {
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

export const recipes: Recipe[] = [
  {
    id: 'accept-payments-platform-moneygraph',
    title: 'Build a Payment Acceptance Platform with MoneyGraph',
    slug: 'accept-payments-platform-moneygraph',
    description: 'Complete guide to accepting card payments with MoneyGraph. Includes widget embed, popup checkout, server-side charging, 3DS handling, and subscription payments.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Recipes',
    tags: ['payments', 'checkout', 'cards', '3ds', 'subscriptions', 'merchants', 'sdk', 'tutorial'],
    readingTime: '12 min',
    featuredImage: '/blog/accept-payments-recipe.png',
    ogTitle: 'Accept Payments with MoneyGraph: Complete Integration Guide',
    ogDescription: 'Build a payment acceptance platform with widget embed, popup checkout, and server-side charging. Includes 3DS, subscriptions, and error handling.',
    canonicalUrl: 'https://moneygraph.ai/recipes/accept-payments-platform-moneygraph',
    schemaType: 'HowTo',
    keywords: [
      'accept payments moneygraph',
      'payment widget integration',
      'checkout popup sdk',
      '3ds authentication',
      'subscription payments api',
      'card payment sdk',
      'merchant payment platform',
      'payment gateway integration',
      'pci compliant payments',
      'embedded checkout'
    ],
    content: `# Build a Payment Acceptance Platform with MoneyGraph

This recipe shows you how to build a complete payment acceptance platform using MoneyGraph SDK. You'll learn to accept card payments via embedded widgets, popup checkout, or server-side API calls.

## User Journey Overview

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                        PAYMENT ACCEPTANCE FLOW                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. CHECKOUT INITIATION                                                     │
│     ├── Customer adds items to cart                                         │
│     ├── Customer clicks "Pay Now"                                           │
│     └── Your app generates external_reference                               │
│                                                                             │
│  2. PAYMENT COLLECTION                                                      │
│     ├── Option A: Widget Embed (embedded on page)                           │
│     ├── Option B: Popup Checkout (modal overlay)                            │
│     └── Option C: Server-Side Charge (requires PCI compliance)              │
│                                                                             │
│  3. CARD PROCESSING                                                         │
│     ├── Card details collected securely                                     │
│     ├── 3DS authentication (if required)                                    │
│     └── Payment authorization                                               │
│                                                                             │
│  4. RESULT HANDLING                                                         │
│     ├── success → Fulfill order, redirect to thank-you                      │
│     ├── pending → Show processing, wait for webhook                         │
│     ├── requires_action → Redirect to 3DS authentication                    │
│     └── declined/blocked → Show error, offer retry                          │
│                                                                             │
│  5. SERVER VERIFICATION                                                     │
│     ├── Verify payment via API (mg.payments.verifyPayment)                  │
│     └── Fulfill order only after verification                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

## Prerequisites

- MoneyGraph account with payment acceptance enabled
- Public key (\`pk_test_*\` or \`pk_live_*\`) for client-side
- Secret key (\`sk_test_*\` or \`sk_live_*\`) for server-side

## AI Agent Quick Start

Use this prompt with your AI coding assistant:

\`\`\`
Build a payment acceptance platform using MoneyGraph SDK with these features:

1. CHECKOUT PAGE
   - Product display with price
   - Embedded payment widget (stratos-embed div)
   - Load https://stratospay.com/embed.js
   - Configure with public_key, external_reference, amount, customer, billing_address
   - Handle onsuccess, onerror callbacks

2. SERVER VERIFICATION
   - POST /api/verify-payment endpoint
   - Use mg.payments.verifyPayment(externalReference)
   - Only fulfill order after verification returns success

3. WEBHOOK HANDLER
   - POST /webhooks/payments endpoint
   - Handle payment.success, payment.failed, payment.refunded events
   - Update order status in database

4. ERROR HANDLING
   - Show user-friendly messages for card_declined, insufficient_funds, expired_card
   - Offer retry option on failure

5. TEST MODE
   - Use pk_test_* and sk_test_* keys
   - Test with card 4917484589897107 for success

SDK METHODS:
- mg.payments.chargeCard() - Server-side direct charge (PCI required)
- mg.payments.verifyPayment() - Verify payment status

IMPORTANT: Always verify payments server-side before fulfilling orders!
\`\`\`

## Integration Options

### Option 1: Widget Embed (Recommended)

Best for seamless checkout embedded directly on your page.

\`\`\`html
<!DOCTYPE html>
<html>
<head>
  <title>Checkout</title>
</head>
<body>
  <h1>Complete Your Purchase</h1>

  <!-- Widget renders here -->
  <div class="stratos-embed"></div>

  <script src="https://stratospay.com/embed.js"></script>
  <script>
    const PAYMENT_CONFIG = {
      // Required: Your public key
      public_key: "pk_test_ESaKJlvX4uhaZurmd4AuZDhvK1ppi4",

      // Required: Unique reference for this transaction
      external_reference: "order_" + Date.now(),

      // Required: Payment details
      title: "Order Payment",
      description: "Payment for Order #12345",
      amount: 10000,  // Amount in cents ($100.00)
      currency: "USD",

      // Required: Customer info
      customer: {
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        phone: "+12025551234",
        phone_iso2: "US",
        ip_address: "127.0.0.1"
      },

      // Required: Billing address
      billing_address: {
        country: "US",
        state: "CA",
        city: "Los Angeles",
        address: "123 Main Street",
        postal_code: "90001"
      },

      // Callbacks
      onsuccess: function(data) {
        console.log("Payment successful!", data);
        verifyAndFulfill(data.external_reference);
      },
      onerror: function(data) {
        console.error("Payment failed:", data);
        showErrorMessage(data.message);
      }
    };

    checkout.init(PAYMENT_CONFIG);
  </script>
</body>
</html>
\`\`\`

### Option 2: Server-Side Verification

**Always verify payments server-side before fulfilling orders!**

\`\`\`typescript
// POST /api/verify-payment
import { MoneyGraph } from '@moneygraph/sdk';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

export async function POST(req: Request) {
  const { externalReference } = await req.json();

  const payment = await mg.payments.verifyPayment(externalReference);

  if (payment.status === 'success') {
    // Payment verified - safe to fulfill order
    await fulfillOrder(externalReference);
    return Response.json({ success: true });
  } else {
    return Response.json({
      success: false,
      status: payment.status,
      message: 'Payment not verified'
    });
  }
}
\`\`\`

## Test Cards

Use these card numbers in sandbox mode (\`pk_test_*\`):

| Card Number | Result | Use Case |
|-------------|--------|----------|
| \`4917484589897107\` | ✅ Success | Happy path |
| \`5555555555554444\` | ✅ Success | Mastercard |
| \`6011111111111117\` | 💳 Insufficient | Test decline |
| \`4263982640269299\` | 🔐 Requires 3DS | Test 3DS flow |
| \`374245455400126\` | ⏳ Pending | Test async |

## Error Handling

\`\`\`typescript
function handlePaymentError(error: { code: string; message: string }) {
  switch (error.code) {
    case 'card_declined':
      return 'Your card was declined. Please try another card.';
    case 'insufficient_funds':
      return 'Insufficient funds. Please try another payment method.';
    case 'expired_card':
      return 'Your card has expired. Please update your card details.';
    case 'invalid_cvv':
      return 'Invalid security code. Please check and try again.';
    case 'card_blocked':
      return 'This card has been blocked. Please contact your bank.';
    default:
      return 'Payment failed. Please try again.';
  }
}
\`\`\`

## Next Steps

**Resources:**

- **[MoneyGraph SDK Documentation](https://docs.moneygraph.ai)** - Complete API reference
- **[Payment Widget Guide](https://moneygraph.ai/docs/payment-widget)** - Widget configuration
- **[PCI Compliance Guide](https://moneygraph.ai/docs/pci-compliance)** - Security requirements`
  },
  {
    id: 'virtual-card-platform-moneygraph',
    title: 'Build a Virtual Card Issuance Platform with MoneyGraph',
    slug: 'virtual-card-platform-moneygraph',
    description: 'Complete guide to issuing virtual and physical cards with MoneyGraph. Includes customer onboarding, KYC verification, card creation, funding, and transaction monitoring.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Recipes',
    tags: ['cards', 'virtual-cards', 'card-issuance', 'kyc', 'fintech', 'sdk', 'tutorial'],
    readingTime: '15 min',
    featuredImage: '/blog/card-issuance-recipe.png',
    ogTitle: 'Issue Virtual Cards with MoneyGraph: Complete Platform Guide',
    ogDescription: 'Build a card issuance platform with KYC verification, virtual/physical cards, funding, spending limits, and transaction monitoring.',
    canonicalUrl: 'https://moneygraph.ai/recipes/virtual-card-platform-moneygraph',
    schemaType: 'HowTo',
    keywords: [
      'virtual card issuance',
      'card issuing platform',
      'moneygraph cards api',
      'fintech card platform',
      'kyc verification cards',
      'virtual debit cards',
      'card funding api',
      'spending limits cards',
      'card transaction monitoring',
      'issue cards sdk'
    ],
    content: `# Build a Virtual Card Issuance Platform with MoneyGraph

This recipe shows you how to build a complete card issuance platform using MoneyGraph SDK. Issue virtual and physical cards to your verified customers with full control over funding, spending limits, and transaction monitoring.

## User Journey Overview

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                        CARD ISSUANCE USER JOURNEY                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. USER REGISTRATION                                                       │
│     ├── User signs up on your platform                                      │
│     ├── Create customer: mg.customers.create()                              │
│     └── Collect basic info (name, email, phone, country)                    │
│                                                                             │
│  2. KYC VERIFICATION (REQUIRED FOR CARDS)                                   │
│     ├── Update customer with KYC details                                    │
│     │   └── Birthday (DD-MM-YYYY), ID type, ID number                       │
│     ├── Upload ID document: mg.customers.kyc.uploadDocument()               │
│     │   └── id_front, id_back, selfie                                       │
│     ├── Submit KYC: mg.customers.kyc.submit()                               │
│     └── Wait for approval (webhook or polling)                              │
│                                                                             │
│  3. CARD ISSUANCE                                                           │
│     ├── Verify KYC: mg.customers.kyc.canPayout()                            │
│     ├── Create card: mg.cards.create()                                      │
│     │   ├── type: 'virtual' (instant) or 'physical' (ships)                 │
│     │   ├── currency: 'USD', 'EUR', etc.                                    │
│     │   └── spending_limit: Daily/monthly limit                             │
│     └── Return card details to user                                         │
│                                                                             │
│  4. CARD MANAGEMENT                                                         │
│     ├── Fund card: mg.cards.fund()                                          │
│     ├── Freeze/Unfreeze: mg.cards.freeze(), mg.cards.unfreeze()             │
│     ├── Update limit: mg.cards.updateLimit()                                │
│     └── Monitor transactions: mg.cards.transactions()                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

## AI Agent Quick Start

Use this prompt with your AI coding assistant:

\`\`\`
Build a virtual card issuance platform using MoneyGraph SDK with these features:

1. USER REGISTRATION & KYC
   - Registration form: name, email, phone, country
   - Create customer: mg.customers.create()
   - KYC form: birthday (DD-MM-YYYY), ID type, ID number
   - Document upload: mg.customers.kyc.uploadDocument()
     - id_front, id_back, selfie
   - Submit KYC: mg.customers.kyc.submit()
   - Status check: mg.customers.kyc.getStatus()

2. CARD ISSUANCE (Requires approved KYC!)
   - Verify eligibility: mg.customers.kyc.canPayout()
   - Issue card: mg.cards.create({ type: 'virtual', currency: 'USD' })
   - Display card details: mg.cards.getDetails()
   - Show last 4 digits, expiry, full number (once)

3. CARD FUNDING
   - Fund from wallet: mg.cards.fund({ amount })
   - Show balance updates
   - Withdraw to wallet: mg.cards.withdraw({ amount })

4. CARD MANAGEMENT
   - Freeze/Unfreeze: mg.cards.freeze(), mg.cards.unfreeze()
   - Update limit: mg.cards.updateLimit()
   - Cancel: mg.cards.cancel()

5. TRANSACTION HISTORY
   - List transactions: mg.cards.transactions()
   - Show date, merchant, amount, status

KYC STATUS FLOW:
- PENDING → "Your verification is under review"
- APPROVED → Enable card issuance
- REJECTED → Show reason, allow resubmission

CRITICAL RULES:
- NEVER issue cards without approved KYC
- Birthday format MUST be DD-MM-YYYY
- Handle card details securely (show once, don't log)
- Always check mg.customers.kyc.canPayout() before mg.cards.create()

SANDBOX TESTING:
- Use mg.customers.createMockPersona('individual_verified') for instant verified customer
- Cards work immediately in sandbox mode
\`\`\`

## KYC Compliance Requirements

**Cards require approved KYC verification.** Here's the complete KYC flow:

### Step 1: Create Customer

\`\`\`typescript
import { MoneyGraph } from '@moneygraph/sdk';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

// Create customer account
const customer = await mg.customers.create({
  account_type: 'personal', // or 'business'
  first_name: 'John',
  last_name: 'Doe',
  email: 'john@example.com',
  phone: '12025551234',
  phone_iso2: 'US',
  country: 'US',
});

console.log('Customer ID:', customer.id);
\`\`\`

### Step 2: Submit KYC

\`\`\`typescript
// Upload documents
await mg.customers.kyc.uploadDocument(customer.id, 'id_front', idFrontFile, 'passport-front.jpg');
await mg.customers.kyc.uploadDocument(customer.id, 'selfie', selfieFile, 'selfie.jpg');

// Submit with ID details
await mg.customers.kyc.submit(customer.id, {
  id_type: 'PASSPORT',
  id_number: 'A12345678',
});
\`\`\`

### Step 3: Check Status

\`\`\`typescript
const status = await mg.customers.kyc.getStatus(customer.id);

switch (status.status) {
  case 'APPROVED':
    console.log('KYC approved! Can issue cards.');
    break;
  case 'PENDING':
    console.log('KYC under review. Check back later.');
    break;
  case 'REJECTED':
    console.log('KYC rejected:', status.rejection_reason);
    break;
}
\`\`\`

## Card Issuance

### Issue Virtual Card

\`\`\`typescript
// Verify KYC first
const eligibility = await mg.customers.kyc.canPayout(customer.id);
if (!eligibility.can_payout) {
  throw new Error('Cannot issue card: KYC not approved');
}

// Create virtual card
const card = await mg.cards.create(customer.id, {
  type: 'virtual',
  currency: 'USD',
  spending_limit: 1000,
});

console.log('Card created:', card.id);
console.log('Last 4 digits:', card.last_four);
\`\`\`

### Get Full Card Details

\`\`\`typescript
// Get sensitive card details (secure handling required!)
const details = await mg.cards.getDetails(card.id);

console.log('Card Number:', details.card_number);
console.log('CVV:', details.cvv);
console.log('Expiry:', details.expiry);
\`\`\`

## Card Management

\`\`\`typescript
// Fund card
await mg.cards.fund(card.id, { amount: 100 });

// Freeze card (temporary disable)
await mg.cards.freeze(card.id);

// Unfreeze card
await mg.cards.unfreeze(card.id);

// Update spending limit
await mg.cards.updateLimit(card.id, 2000);

// List transactions
const transactions = await mg.cards.transactions(card.id).all();
\`\`\`

## Next Steps

**Resources:**

- **[MoneyGraph SDK Documentation](https://docs.moneygraph.ai)** - Complete API reference
- **[Card Issuance Guide](https://moneygraph.ai/docs/card-issuance)** - Detailed implementation
- **[KYC Compliance](https://moneygraph.ai/docs/kyc-requirements)** - Verification requirements`
  },
  {
    id: 'remittance-app-moneygraph',
    title: 'Build a Remittance App with MoneyGraph',
    slug: 'remittance-app-moneygraph',
    description: 'Complete guide to building an international money transfer app. Includes sender onboarding, KYC, recipient management, FX quotes, and multi-rail payouts.',
    author: 'MoneyGraph Team',
    date: '2025-01-15',
    category: 'Recipes',
    tags: ['remittance', 'money-transfer', 'fx', 'kyc', 'mobile-money', 'swift', 'payouts', 'sdk', 'tutorial'],
    readingTime: '18 min',
    featuredImage: '/blog/remittance-app-recipe.png',
    ogTitle: 'Build a Remittance App with MoneyGraph: Complete Guide',
    ogDescription: 'Build an international money transfer app with KYC, FX quotes, and multi-rail payouts. Support bank transfers, M-Pesa, SWIFT across 107+ countries.',
    canonicalUrl: 'https://moneygraph.ai/recipes/remittance-app-moneygraph',
    schemaType: 'HowTo',
    keywords: [
      'remittance app development',
      'money transfer api',
      'international payments sdk',
      'fx quotes api',
      'mobile money integration',
      'mpesa api integration',
      'swift transfer api',
      'cross-border payments',
      'kyc remittance',
      'moneygraph payout rails'
    ],
    content: `# Build a Remittance App with MoneyGraph

This recipe shows you how to build a complete international remittance application using MoneyGraph SDK. Send money across 107+ countries via multiple payment rails: local bank transfers, SWIFT, mobile money (M-Pesa, MTN), and cryptocurrency.

## User Journey Overview

\`\`\`
┌─────────────────────────────────────────────────────────────────────────────┐
│                        REMITTANCE APP USER JOURNEY                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. SENDER REGISTRATION                                                     │
│     ├── User signs up with basic info                                       │
│     └── Create customer: mg.customers.create()                              │
│                                                                             │
│  2. SENDER KYC (REQUIRED BEFORE ANY PAYOUT)                                 │
│     ├── Update customer with KYC details                                    │
│     ├── Upload documents: mg.customers.kyc.uploadDocument()                 │
│     ├── Submit KYC: mg.customers.kyc.submit()                               │
│     └── Wait for approval                                                   │
│                                                                             │
│  3. SELECT DESTINATION                                                      │
│     ├── Choose country: mg.reference.countries()                            │
│     └── Get banks: mg.reference.banks.list()                                │
│                                                                             │
│  4. GET FX QUOTE                                                            │
│     ├── Request quote: mg.fx.quote({ from, to, amount })                    │
│     ├── Display: rate, fees, recipient amount                               │
│     └── Quote valid for 2 MINUTES                                           │
│                                                                             │
│  5. EXECUTE PAYOUT                                                          │
│     ├── Verify KYC: mg.customers.kyc.canPayout()                            │
│     ├── Confirm rate: mg.fx.confirm(quote.id)                               │
│     └── Send money: mg.executeSmartPayout()                                 │
│                                                                             │
│  6. TRACK STATUS                                                            │
│     ├── Get status: mg.payouts.retrieve()                                   │
│     └── Webhooks for real-time updates                                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
\`\`\`

## AI Agent Quick Start

Use this prompt with your AI coding assistant:

\`\`\`
Build a remittance/money transfer app using MoneyGraph SDK with these features:

1. USER REGISTRATION
   - Signup form: name, email, phone, country
   - Create sender: mg.customers.create({ account_type: 'personal', ... })

2. KYC VERIFICATION (REQUIRED BEFORE ANY TRANSFERS)
   - KYC form: birthday (DD-MM-YYYY!), ID type, ID number, address
   - Update customer: mg.customers.update()
   - Upload documents: mg.customers.kyc.uploadDocument()
     - id_front, id_back (optional), selfie
   - Submit: mg.customers.kyc.submit({ id_type, id_number })
   - Check status: mg.customers.kyc.getStatus()
   - BLOCK transfers until status === 'APPROVED'

3. SEND MONEY FLOW
   a. Select destination country and currency
      - Get countries: mg.reference.countries()
      - Get banks: mg.reference.banks.list(countryIso2)

   b. Add recipient (based on delivery method):
      - Bank: name, bank_code, account_number
      - Mobile Money: name, mobile_network (MPESA/MTN), mobile_number
      - SWIFT: name, swift_code, iban, bank_name
      - Crypto: name, wallet_address, network (ETH/TRON)

   c. Get quote (show countdown - 2 minute expiry!)
      - mg.fx.quote({ from, to, amount })
      - Display: rate, fee, recipient amount

   d. Confirm and send
      - Check KYC: mg.customers.kyc.canPayout()
      - RECOMMENDED: mg.executeSmartPayout() for automatic routing
      - Or use specific rail: mg.payouts.create(), mg.payouts.mobileMoney.create()

4. TRANSACTION TRACKING
   - List history: mg.payouts.list({ customer_id })
   - Get status: mg.payouts.retrieve(payoutId)
   - Status flow: pending → processing → completed/failed

SUPPORTED PAYMENT RAILS:
- mg.payouts.create() - Local bank transfers (107 countries)
- mg.payouts.mobileMoney.create() - M-Pesa, MTN, Airtel (30+ networks)
- mg.payouts.swift.create() - International wire (190 corridors)
- mg.payouts.crypto.create() - USDC, USDT, ETH, BTC

CRITICAL RULES:
- NEVER allow payouts without approved KYC
- ALWAYS call mg.fx.confirm() before mg.payouts.create()
- Quote expires in 2 MINUTES - show countdown
- Birthday format MUST be DD-MM-YYYY
- Use mg.executeSmartPayout() for simplest integration

SANDBOX TESTING:
- Use mg.customers.createMockPersona('individual_verified') for instant verified sender
\`\`\`

## Complete Implementation

### Step 1: Sender Registration

\`\`\`typescript
import { MoneyGraph } from '@moneygraph/sdk';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

export async function registerSender(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
}) {
  const customer = await mg.customers.create({
    account_type: 'personal',
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone.replace(/\\D/g, ''),
    phone_iso2: data.country,
    country: data.country,
  });

  return { customerId: customer.id };
}
\`\`\`

### Step 2: Complete KYC

\`\`\`typescript
export async function submitKYC(customerId: string, data: {
  birthday: string; // DD-MM-YYYY
  idType: 'PASSPORT' | 'DRIVERS' | 'NATIONAL_ID';
  idNumber: string;
}) {
  // Update customer with details
  await mg.customers.update(customerId, {
    birthday: data.birthday,
  });

  // Submit KYC
  await mg.customers.kyc.submit(customerId, {
    id_type: data.idType,
    id_number: data.idNumber,
  });

  return { status: 'pending' };
}
\`\`\`

### Step 3: Get FX Quote

\`\`\`typescript
export async function getQuote(params: {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
}) {
  const quote = await mg.fx.quote({
    from: params.fromCurrency as any,
    to: params.toCurrency as any,
    amount: params.amount,
  });

  return {
    quoteId: quote.id,
    rate: quote.rate,
    fromAmount: quote.from_amount,
    toAmount: quote.to_amount,
    fee: quote.fee,
    expiresAt: quote.expires_at,
  };
}
\`\`\`

### Step 4: Send Money (Smart Payout)

\`\`\`typescript
export async function sendMoney(params: {
  customerId: string;
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  recipient: {
    name: string;
    bankCode?: string;
    accountNumber?: string;
    mobileNetwork?: string;
    mobileNumber?: string;
  };
}) {
  // Verify KYC first!
  const eligibility = await mg.customers.kyc.canPayout(params.customerId);
  if (!eligibility.can_payout) {
    return {
      success: false,
      error: 'Complete KYC verification first'
    };
  }

  // Execute smart payout (handles all rails automatically)
  const result = await mg.executeSmartPayout({
    customer_id: params.customerId,
    from_currency: params.fromCurrency as any,
    to_currency: params.toCurrency as any,
    amount: params.amount,
    recipient: params.recipient,
    priority: 'cost',
  });

  return result;
}
\`\`\`

### Step 5: Track Status

\`\`\`typescript
export async function getPayoutStatus(payoutId: string) {
  const payout = await mg.payouts.retrieve(payoutId);

  return {
    id: payout.id,
    status: payout.status,
    amount: payout.amount,
    currency: payout.currency,
    recipient: payout.recipient,
  };
}
\`\`\`

## Payment Rails Support

| Rail | Method | Use Case |
|------|--------|----------|
| Local Bank | \`mg.payouts.create()\` | Nigeria, Kenya, Ghana, etc. |
| Mobile Money | \`mg.payouts.mobileMoney.create()\` | M-Pesa, MTN, Airtel |
| SWIFT | \`mg.payouts.swift.create()\` | International wire |
| Crypto | \`mg.payouts.crypto.create()\` | USDC, USDT, ETH |
| **Smart** | \`mg.executeSmartPayout()\` | **Auto-selects best rail** |

## Next Steps

**Resources:**

- **[MoneyGraph SDK Documentation](https://docs.moneygraph.ai)** - Complete API reference
- **[FX Quotes Guide](https://moneygraph.ai/docs/fx-quotes)** - Rate locking explained
- **[Multi-Rail Payouts](https://moneygraph.ai/docs/payment-rails)** - All delivery methods`
  }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(recipe => recipe.slug === slug);
}
