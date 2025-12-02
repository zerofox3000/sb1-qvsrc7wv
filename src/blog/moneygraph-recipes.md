# MoneyGraph Recipe Blog Posts

> Content package for building applications with MoneyGraph SDK. Each recipe includes the complete user journey, KYC compliance requirements, SDK implementation, and AI prompts.

---

## RECIPE 1: Accept Payments Platform

### Metadata
```yaml
title: "Build a Payment Acceptance Platform with MoneyGraph"
slug: "accept-payments-platform-moneygraph"
description: "Complete guide to accepting card payments with MoneyGraph. Includes widget embed, popup checkout, server-side charging, 3DS handling, and subscription payments."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Recipes"
tags: ["payments", "checkout", "cards", "3ds", "subscriptions", "merchants", "sdk", "tutorial"]
reading_time: "12 min"
featured_image: "/blog/accept-payments-recipe.png"
og_title: "Accept Payments with MoneyGraph: Complete Integration Guide"
og_description: "Build a payment acceptance platform with widget embed, popup checkout, and server-side charging. Includes 3DS, subscriptions, and error handling."
canonical_url: "https://moneygraph.ai/blog/accept-payments-platform-moneygraph"
schema_type: "HowTo"
keywords:
  - accept payments moneygraph
  - payment widget integration
  - checkout popup sdk
  - 3ds authentication
  - subscription payments api
  - card payment sdk
  - merchant payment platform
  - payment gateway integration
  - pci compliant payments
  - embedded checkout
```

### Body Copy

# Build a Payment Acceptance Platform with MoneyGraph

This recipe shows you how to build a complete payment acceptance platform using MoneyGraph SDK. You'll learn to accept card payments via embedded widgets, popup checkout, or server-side API calls.

## User Journey Overview

```
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
```

## Prerequisites

- MoneyGraph account with payment acceptance enabled
- Public key (`pk_test_*` or `pk_live_*`) for client-side
- Secret key (`sk_test_*` or `sk_live_*`) for server-side

## Integration Options

### Option 1: Widget Embed (Recommended)

Best for seamless checkout embedded directly on your page.

```html
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
      
      // Optional: Business logo
      image: "https://yoursite.com/logo.png",
      
      // Optional: Redirect after success
      callback_url: "https://yoursite.com/thank-you",
      
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
      
      // Optional: Extra data for your records
      metadata: {
        order_id: "12345",
        customer_id: "cust_abc"
      },
      
      // Callbacks
      onsuccess: function(data) {
        console.log("Payment successful!", data);
        // Verify on server before fulfilling
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
```

### Option 2: Popup Checkout

Best for "Pay Now" buttons that open a modal overlay.

```tsx
// React Component
import { useCallback, useState } from 'react';

declare global {
  interface Window {
    checkout: {
      init: (config: any) => void;
    };
  }
}

interface PayButtonProps {
  amount: number;
  orderId: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onSuccess: (reference: string) => void;
  onError: (error: string) => void;
}

export function PayButton({ amount, orderId, customer, onSuccess, onError }: PayButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = useCallback(() => {
    setLoading(true);

    // Load script if not already loaded
    if (typeof window.checkout === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://stratospay.com/popup.js';
      script.onload = initPayment;
      document.body.appendChild(script);
    } else {
      initPayment();
    }

    function initPayment() {
      window.checkout.init({
        public_key: process.env.NEXT_PUBLIC_STRATOSPAY_KEY!,
        external_reference: `order_${orderId}_${Date.now()}`,
        title: 'Order Payment',
        description: `Payment for Order #${orderId}`,
        amount: amount * 100, // Convert to cents
        currency: 'USD',
        
        customer: {
          first_name: customer.firstName,
          last_name: customer.lastName,
          email: customer.email,
          ip_address: '127.0.0.1', // Get from server
        },
        
        billing_address: {
          country: 'US',
          city: 'New York',
          address: '123 Main St',
          postal_code: '10001',
        },
        
        onsuccess: (data: any) => {
          setLoading(false);
          onSuccess(data.external_reference);
        },
        onerror: (err: any) => {
          setLoading(false);
          onError(err.message);
        },
        onclose: () => {
          setLoading(false);
        },
      });
    }
  }, [amount, orderId, customer, onSuccess, onError]);

  return (
    <button 
      onClick={handlePayment} 
      disabled={loading}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50"
    >
      {loading ? 'Processing...' : `Pay $${amount.toFixed(2)}`}
    </button>
  );
}
```

### Option 3: Server-Side Charge (PCI Required)

For full control over the checkout experience. **Requires PCI DSS compliance!**

```typescript
// ⚠️ SERVER-SIDE ONLY - Never expose card details to client!
import { MoneyGraph } from '@moneygraph/sdk';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

async function chargeCard(req: Request) {
  const { orderId, amount, card, customer, billingAddress } = req.body;

  const result = await mg.payments.chargeCard({
    title: 'Order Payment',
    description: `Order #${orderId}`,
    external_reference: `order_${orderId}_${Date.now()}`,
    amount: amount * 100, // cents
    currency: 'USD',
    
    customer: {
      first_name: customer.firstName,
      last_name: customer.lastName,
      email: customer.email,
      phone: customer.phone,
      phone_iso2: 'US',
      ip_address: req.ip,
    },
    
    billing_address: {
      country: billingAddress.country,
      state: billingAddress.state,
      city: billingAddress.city,
      address: billingAddress.address,
      postal_code: billingAddress.postalCode,
    },
    
    card: {
      card_number: card.number,
      cvv: card.cvv,
      expire: card.expiry, // MM/YY format
    },
  });

  // Handle response
  switch (result.status) {
    case 'success':
      await markOrderPaid(orderId, result.id);
      return { success: true, transactionId: result.id };
      
    case 'pending':
      await markOrderPending(orderId, result.id);
      return { success: true, pending: true };
      
    case 'requires_action':
      // 3DS authentication required
      return { success: false, requires3DS: true, actionUrl: result.action_url };
      
    case 'declined':
    case 'blocked':
      return { success: false, error: result.message };
  }
}
```

## Server-Side Payment Verification

**Always verify payments server-side before fulfilling orders!**

```typescript
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
```

## Subscription Payments

For recurring billing, include `plan_id`:

```javascript
checkout.init({
  public_key: "pk_test_xxx",
  external_reference: "sub_" + Date.now(),
  title: "Pro Plan Subscription",
  description: "Monthly subscription - $29.99/month",
  amount: 2999,
  currency: "USD",
  plan_id: "plan_monthly_pro", // Your subscription plan ID
  // ... rest of config
});
```

## Webhook Handler

Set up webhooks for reliable payment notifications:

```typescript
// POST /webhooks/payments
export async function POST(req: Request) {
  const { event, data } = await req.json();

  switch (event) {
    case 'payment.success':
      await fulfillOrder(data.external_reference);
      await sendConfirmationEmail(data.customer_email);
      break;
      
    case 'payment.failed':
      await notifyCustomer(data.external_reference, data.message);
      break;
      
    case 'payment.refunded':
      await processRefund(data.external_reference, data.refund_amount);
      break;
      
    case 'subscription.renewed':
      await extendSubscription(data.customer_id, data.plan_id);
      break;
  }

  return new Response('OK', { status: 200 });
}
```

## Test Cards

Use these card numbers in sandbox mode (`pk_test_*`):

| Card Number | Result | Use Case |
|-------------|--------|----------|
| `4917484589897107` | ✅ Success | Happy path |
| `5555555555554444` | ✅ Success | Mastercard |
| `6011111111111117` | 💳 Insufficient | Test decline |
| `4263982640269299` | 🔐 Requires 3DS | Test 3DS flow |
| `374245455400126` | ⏳ Pending | Test async |

## Error Handling

```typescript
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
```

## AI Agent Prompt

Use this prompt to build a payment acceptance platform:

```
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
```

---

## RECIPE 2: Virtual Card Issuance Platform

### Metadata
```yaml
title: "Build a Virtual Card Issuance Platform with MoneyGraph"
slug: "virtual-card-platform-moneygraph"
description: "Complete guide to issuing virtual and physical cards with MoneyGraph. Includes customer onboarding, KYC verification, card creation, funding, and transaction monitoring."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Recipes"
tags: ["cards", "virtual-cards", "card-issuance", "kyc", "fintech", "sdk", "tutorial"]
reading_time: "15 min"
featured_image: "/blog/card-issuance-recipe.png"
og_title: "Issue Virtual Cards with MoneyGraph: Complete Platform Guide"
og_description: "Build a card issuance platform with KYC verification, virtual/physical cards, funding, spending limits, and transaction monitoring."
canonical_url: "https://moneygraph.ai/blog/virtual-card-platform-moneygraph"
schema_type: "HowTo"
keywords:
  - virtual card issuance
  - card issuing platform
  - moneygraph cards api
  - fintech card platform
  - kyc verification cards
  - virtual debit cards
  - card funding api
  - spending limits cards
  - card transaction monitoring
  - issue cards sdk
```

### Body Copy

# Build a Virtual Card Issuance Platform with MoneyGraph

This recipe shows you how to build a complete card issuance platform using MoneyGraph SDK. Issue virtual and physical cards to your verified customers with full control over funding, spending limits, and transaction monitoring.

## User Journey Overview

```
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
│  3. KYC STATUS CHECK                                                        │
│     ├── Check status: mg.customers.kyc.getStatus()                          │
│     ├── APPROVED → Proceed to card issuance                                 │
│     ├── PENDING → Show waiting message                                      │
│     └── REJECTED → Show reason, allow resubmission                          │
│                                                                             │
│  4. CARD ISSUANCE                                                           │
│     ├── Verify KYC: mg.customers.kyc.canPayout()                            │
│     ├── Create card: mg.cards.create()                                      │
│     │   ├── type: 'virtual' (instant) or 'physical' (ships)                 │
│     │   ├── currency: 'USD', 'EUR', etc.                                    │
│     │   └── spending_limit: Daily/monthly limit                             │
│     └── Return card details to user                                         │
│                                                                             │
│  5. CARD FUNDING                                                            │
│     ├── Check wallet balance (if funding from wallet)                       │
│     ├── Fund card: mg.cards.fund({ amount, source_wallet_id })              │
│     └── Confirm new balance                                                 │
│                                                                             │
│  6. CARD USAGE                                                              │
│     ├── Get full card details: mg.cards.getDetails()                        │
│     │   └── card_number, cvv, expiry, billing_address                       │
│     ├── User makes purchases online/offline                                 │
│     └── Monitor transactions: mg.cards.transactions()                       │
│                                                                             │
│  7. CARD MANAGEMENT                                                         │
│     ├── Freeze card: mg.cards.freeze() (temporary disable)                  │
│     ├── Unfreeze: mg.cards.unfreeze() (re-enable)                           │
│     ├── Update limit: mg.cards.updateLimit()                                │
│     ├── Withdraw: mg.cards.withdraw() (return funds to wallet)              │
│     └── Cancel: mg.cards.cancel() (permanent)                               │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## KYC Compliance Requirements

**Cards require approved KYC verification.** Here's the complete KYC flow:

### Step 1: Create Customer

```typescript
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
// Store customer.id in your database linked to user
```

### Step 2: Update Customer with KYC Details

```typescript
// Update with required KYC information
await mg.customers.update(customer.id, {
  birthday: '15-06-1990', // DD-MM-YYYY format (CRITICAL!)
  gender: 'male',
  
  // Address details
  state: 'CA',
  city: 'Los Angeles',
  street: '123 Main Street',
  postal_code: '90001',
});
```

### Step 3: Upload Identity Documents

```typescript
// Upload front of ID
await mg.customers.kyc.uploadDocument(
  customer.id,
  'id_front',
  idFrontFile, // File or Blob
  'passport-front.jpg'
);

// Upload back of ID (if applicable)
await mg.customers.kyc.uploadDocument(
  customer.id,
  'id_back',
  idBackFile,
  'passport-back.jpg'
);

// Upload selfie for liveness check
await mg.customers.kyc.uploadDocument(
  customer.id,
  'selfie',
  selfieFile,
  'selfie.jpg'
);
```

### Step 4: Submit KYC for Review

```typescript
// Submit with ID type and number
await mg.customers.kyc.submit(customer.id, {
  id_type: 'PASSPORT', // PASSPORT, DRIVERS, NATIONAL_ID, SSN (US only)
  id_number: 'A12345678',
});

console.log('KYC submitted for review');
```

### Step 5: Check KYC Status

```typescript
// Poll for status or use webhooks
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
```

### Step 6: Verify Card Eligibility

```typescript
// Before issuing card, always verify
const eligibility = await mg.customers.kyc.canPayout(customer.id);

if (!eligibility.can_payout) {
  throw new Error(`Cannot issue card: ${eligibility.reason}`);
}
```

## Card Issuance

### Issue Virtual Card (Instant)

```typescript
// Create virtual card
const card = await mg.cards.create(customer.id, {
  type: 'virtual',
  currency: 'USD',
  spending_limit: 1000, // Daily limit
});

console.log('Card created:', card.id);
console.log('Last 4 digits:', card.last_four);
console.log('Expiry:', `${card.expiry_month}/${card.expiry_year}`);
console.log('Status:', card.status); // 'active'
```

### Issue Physical Card (Ships to Address)

```typescript
const physicalCard = await mg.cards.create(customer.id, {
  type: 'physical',
  brand: 'visa', // 'visa' or 'mastercard'
  currency: 'USD',
  spending_limit: 5000,
  shipping_address: {
    country: 'US',
    state: 'CA',
    city: 'Los Angeles',
    street: '123 Main Street',
    postal_code: '90001',
  },
});

console.log('Physical card ordered. Shipping in 5-7 business days.');
```

## Card Funding

```typescript
// Fund card from customer wallet
const fundedCard = await mg.cards.fund(card.id, {
  amount: 100, // $100
  source_wallet_id: 'wal_xxx', // Optional: specific wallet
});

console.log('New balance:', fundedCard.balance);
```

## Get Full Card Details

```typescript
// Get sensitive card details (secure handling required!)
const details = await mg.cards.getDetails(card.id);

// Display to user (consider security - show once, copy to clipboard)
console.log('Card Number:', details.card_number);
console.log('CVV:', details.cvv);
console.log('Expiry:', details.expiry);
console.log('Billing Address:', details.billing_address);
```

## Card Management

```typescript
// Freeze card (temporary disable)
await mg.cards.freeze(card.id);

// Unfreeze card (re-enable)
await mg.cards.unfreeze(card.id);

// Update spending limit
await mg.cards.updateLimit(card.id, 2000);

// Withdraw funds back to wallet
await mg.cards.withdraw(card.id, {
  amount: 50,
  destination_wallet_id: 'wal_xxx',
});

// Cancel card permanently
await mg.cards.cancel(card.id);
```

## Transaction Monitoring

```typescript
// List card transactions
for await (const txn of mg.cards.transactions(card.id)) {
  console.log(`${txn.created_at}: ${txn.type} - $${txn.amount} (${txn.status})`);
}

// Or get all at once
const allTransactions = await mg.cards.transactions(card.id).all();
```

## Complete Service Implementation

```typescript
// services/cards.ts
import { MoneyGraph, MoneyGraphError } from '@moneygraph/sdk';

const mg = new MoneyGraph({ apiKey: process.env.MONEYGRAPH_API_KEY! });

export async function issueVirtualCard(customerId: string, currency: string = 'USD') {
  // Step 1: Verify KYC
  const eligibility = await mg.customers.kyc.canPayout(customerId);
  if (!eligibility.can_payout) {
    return { 
      success: false, 
      error: 'KYC verification required',
      missing: eligibility.missing_requirements 
    };
  }

  // Step 2: Create card
  const card = await mg.cards.create(customerId, {
    type: 'virtual',
    currency: currency as any,
    spending_limit: 1000,
  });

  // Step 3: Get full details
  const details = await mg.cards.getDetails(card.id);

  return {
    success: true,
    card: {
      id: card.id,
      last_four: card.last_four,
      expiry: details.expiry,
      card_number: details.card_number, // Handle securely!
      cvv: details.cvv, // Handle securely!
      balance: card.balance,
      status: card.status,
    },
  };
}

export async function fundCard(cardId: string, amount: number) {
  try {
    const card = await mg.cards.fund(cardId, { amount });
    return { success: true, newBalance: card.balance };
  } catch (error) {
    if (error instanceof MoneyGraphError) {
      if (error.code === 'INSUFFICIENT_BALANCE') {
        return { success: false, error: 'Not enough funds in wallet' };
      }
    }
    throw error;
  }
}

export async function getCardTransactions(cardId: string) {
  const transactions = await mg.cards.transactions(cardId).all();
  return transactions.map(txn => ({
    id: txn.id,
    date: txn.created_at,
    type: txn.type,
    amount: txn.amount,
    currency: txn.currency,
    status: txn.status,
    merchant: txn.merchant_name,
  }));
}
```

## AI Agent Prompt

Use this prompt to build a card issuance platform:

```
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
```

---

## RECIPE 3: Remittance Application

### Metadata
```yaml
title: "Build a Remittance App with MoneyGraph"
slug: "remittance-app-moneygraph"
description: "Complete guide to building an international money transfer app. Includes sender onboarding, KYC, recipient management, FX quotes, and multi-rail payouts (bank, mobile money, crypto)."
author: "MoneyGraph Team"
date: "2025-01-15"
category: "Recipes"
tags: ["remittance", "money-transfer", "fx", "kyc", "mobile-money", "swift", "crypto", "payouts", "sdk", "tutorial"]
reading_time: "18 min"
featured_image: "/blog/remittance-app-recipe.png"
og_title: "Build a Remittance App with MoneyGraph: Complete Guide"
og_description: "Build an international money transfer app with KYC, FX quotes, and multi-rail payouts. Support bank transfers, M-Pesa, SWIFT, and crypto across 107+ countries."
canonical_url: "https://moneygraph.ai/blog/remittance-app-moneygraph"
schema_type: "HowTo"
keywords:
  - remittance app development
  - money transfer api
  - international payments sdk
  - fx quotes api
  - mobile money integration
  - mpesa api integration
  - swift transfer api
  - cross-border payments
  - kyc remittance
  - moneygraph payout rails
```

### Body Copy

# Build a Remittance App with MoneyGraph

This recipe shows you how to build a complete international remittance application using MoneyGraph SDK. Send money across 107+ countries via multiple payment rails: local bank transfers, SWIFT, mobile money (M-Pesa, MTN), and cryptocurrency.

## User Journey Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        REMITTANCE APP USER JOURNEY                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  1. SENDER REGISTRATION                                                     │
│     ├── User signs up with basic info                                       │
│     ├── Create customer: mg.customers.create()                              │
│     └── account_type: 'personal' (or 'business' for B2B)                    │
│                                                                             │
│  2. SENDER KYC (REQUIRED BEFORE ANY PAYOUT)                                 │
│     ├── Update customer: mg.customers.update()                              │
│     │   └── birthday, gender, address details                               │
│     ├── Upload documents: mg.customers.kyc.uploadDocument()                 │
│     │   └── id_front, id_back, selfie, proof_of_address                     │
│     ├── Submit KYC: mg.customers.kyc.submit()                               │
│     │   └── id_type: PASSPORT, DRIVERS, NATIONAL_ID, SSN                    │
│     └── Status: PENDING → APPROVED or REJECTED                              │
│                                                                             │
│  3. SELECT DESTINATION                                                      │
│     ├── Choose country: mg.reference.countries()                            │
│     ├── Choose currency: mg.reference.currencies()                          │
│     └── Check available rails (bank, mobile_money, swift, crypto)           │
│                                                                             │
│  4. ADD RECIPIENT                                                           │
│     ├── Collect recipient details based on rail:                            │
│     │   ├── Bank: name, bank_code, account_number                           │
│     │   ├── Mobile Money: name, network (MPESA/MTN), mobile_number          │
│     │   ├── SWIFT: name, swift_code, iban, bank_name                        │
│     │   └── Crypto: name, wallet_address, network (ETH/TRON/BSC)            │
│     ├── Validate recipient: mg.payouts.validateRecipient()                  │
│     └── Store recipient for future use                                      │
│                                                                             │
│  5. GET FX QUOTE                                                            │
│     ├── Request quote: mg.fx.quote({ from, to, amount })                    │
│     ├── Display: rate, fees, recipient amount, delivery time                │
│     ├── Quote valid for 2 MINUTES                                           │
│     └── Show countdown timer to user                                        │
│                                                                             │
│  6. CONFIRM & LOCK RATE                                                     │
│     ├── User confirms transfer                                              │
│     ├── Lock rate: mg.fx.confirm(quote.id)                                  │
│     └── Rate now guaranteed for transaction                                 │
│                                                                             │
│  7. EXECUTE PAYOUT                                                          │
│     ├── Verify KYC: mg.customers.kyc.canPayout()                            │
│     ├── Create payout based on rail:                                        │
│     │   ├── Bank: mg.payouts.create()                                       │
│     │   ├── Mobile Money: mg.payouts.mobileMoney.create()                   │
│     │   ├── SWIFT: mg.payouts.swift.create()                                │
│     │   └── Crypto: mg.payouts.crypto.create()                              │
│     └── Or use: mg.executeSmartPayout() (handles all rails)                 │
│                                                                             │
│  8. TRACK STATUS                                                            │
│     ├── Initial: pending                                                    │
│     ├── Processing: processing                                              │
│     ├── Final: completed, failed, or cancelled                              │
│     ├── Retrieve: mg.payouts.retrieve()                                     │
│     └── Webhooks for real-time updates                                      │
│                                                                             │
│  9. TRANSACTION HISTORY                                                     │
│     ├── List payouts: mg.payouts.list({ customer_id })                      │
│     └── Filter by status, type, date range                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Complete Implementation

### Step 1: Sender Registration

```typescript
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
    phone: data.phone.replace(/\D/g, ''), // Remove non-digits
    phone_iso2: data.country,
    country: data.country,
  });

  return { customerId: customer.id };
}
```

### Step 2: Complete KYC Verification

```typescript
export async function submitKYC(customerId: string, data: {
  birthday: string; // DD-MM-YYYY
  gender: 'male' | 'female';
  idType: 'PASSPORT' | 'DRIVERS' | 'NATIONAL_ID';
  idNumber: string;
  address: {
    state: string;
    city: string;
    street: string;
    postalCode: string;
  };
}) {
  // Update customer with address and personal details
  await mg.customers.update(customerId, {
    birthday: data.birthday, // MUST be DD-MM-YYYY format!
    gender: data.gender,
    state: data.address.state,
    city: data.address.city,
    street: data.address.street,
    postal_code: data.address.postalCode,
  });

  // Submit KYC
  await mg.customers.kyc.submit(customerId, {
    id_type: data.idType,
    id_number: data.idNumber,
  });

  return { status: 'pending', message: 'KYC submitted for review' };
}

export async function uploadKYCDocuments(
  customerId: string,
  documents: {
    idFront: File;
    idBack?: File;
    selfie: File;
  }
) {
  await mg.customers.kyc.uploadDocument(customerId, 'id_front', documents.idFront, documents.idFront.name);
  
  if (documents.idBack) {
    await mg.customers.kyc.uploadDocument(customerId, 'id_back', documents.idBack, documents.idBack.name);
  }
  
  await mg.customers.kyc.uploadDocument(customerId, 'selfie', documents.selfie, documents.selfie.name);
}

export async function checkKYCStatus(customerId: string) {
  const status = await mg.customers.kyc.getStatus(customerId);
  return {
    status: status.status,
    canSendMoney: status.status === 'APPROVED',
    rejectionReason: status.rejection_reason,
  };
}
```

### Step 3: Get Reference Data

```typescript
export async function getDestinationOptions() {
  // Get supported countries
  const countries = await mg.reference.countries();
  
  return countries.map(country => ({
    code: country.iso2,
    name: country.name,
    flag: country.flag,
    currencies: country.currencies,
  }));
}

export async function getBanksForCountry(countryIso2: string) {
  const banks = await mg.reference.banks.list(countryIso2);
  
  return banks.map(bank => ({
    code: bank.code,
    name: bank.name,
  }));
}

export async function getMobileNetworks(countryIso2: string) {
  // Common networks by country
  const networks: Record<string, string[]> = {
    'KE': ['MPESA', 'AIRTEL'],
    'GH': ['MTN', 'VODAFONE', 'AIRTELTIGO'],
    'NG': ['MTN', 'AIRTEL', 'GLO', '9MOBILE'],
    'TZ': ['MPESA', 'TIGOPESA', 'AIRTELMONEY'],
    'UG': ['MTN', 'AIRTEL'],
  };
  
  return networks[countryIso2] || [];
}
```

### Step 4: Get FX Quote

```typescript
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
    // Calculate seconds until expiry
    expiresIn: Math.max(0, Math.floor((new Date(quote.expires_at).getTime() - Date.now()) / 1000)),
  };
}
```

### Step 5: Send Money (Multiple Rails)

#### Option A: Smart Payout (Recommended)

Handles all rails automatically with best routing:

```typescript
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
    walletAddress?: string;
    cryptoNetwork?: string;
  };
  priority: 'speed' | 'cost' | 'balanced';
}) {
  // Verify KYC first!
  const eligibility = await mg.customers.kyc.canPayout(params.customerId);
  if (!eligibility.can_payout) {
    return { 
      success: false, 
      error: 'Complete KYC verification first',
      missing: eligibility.missing_requirements 
    };
  }

  // Build recipient object based on what's provided
  let recipientDetails: any = { name: params.recipient.name };
  
  if (params.recipient.bankCode) {
    recipientDetails.bank_code = params.recipient.bankCode;
    recipientDetails.account_number = params.recipient.accountNumber;
  } else if (params.recipient.mobileNetwork) {
    recipientDetails.mobile_network = params.recipient.mobileNetwork;
    recipientDetails.mobile_number = params.recipient.mobileNumber;
  } else if (params.recipient.walletAddress) {
    recipientDetails.wallet_address = params.recipient.walletAddress;
    recipientDetails.network = params.recipient.cryptoNetwork;
  }

  // Execute smart payout
  const result = await mg.executeSmartPayout({
    customer_id: params.customerId,
    from_currency: params.fromCurrency as any,
    to_currency: params.toCurrency as any,
    amount: params.amount,
    recipient: recipientDetails,
    priority: params.priority,
  });

  return result;
}
```

#### Option B: Rail-Specific Payouts

For explicit control over which payment rail to use:

```typescript
// Local Bank Transfer (Nigeria, Kenya, Ghana, etc.)
export async function sendToBank(params: {
  customerId: string;
  quoteId: string;
  recipient: {
    name: string;
    bankCode: string;
    accountNumber: string;
  };
}) {
  // Confirm quote first
  await mg.fx.confirm(params.quoteId);

  const payout = await mg.payouts.create({
    quote_id: params.quoteId,
    customer_id: params.customerId,
    recipient: {
      name: params.recipient.name,
      bank_code: params.recipient.bankCode,
      account_number: params.recipient.accountNumber,
    },
  });

  return { payoutId: payout.id, status: payout.status };
}

// Mobile Money (M-Pesa, MTN, etc.)
export async function sendToMobileMoney(params: {
  customerId: string;
  quoteId: string;
  recipient: {
    name: string;
    network: string; // 'MPESA', 'MTN', 'AIRTEL'
    mobileNumber: string;
  };
}) {
  await mg.fx.confirm(params.quoteId);

  const payout = await mg.payouts.mobileMoney.create({
    quote_id: params.quoteId,
    customer_id: params.customerId,
    recipient: {
      name: params.recipient.name,
      mobile_network: params.recipient.network,
      mobile_number: params.recipient.mobileNumber,
    },
  });

  return { payoutId: payout.id, status: payout.status };
}

// SWIFT International Wire
export async function sendViaSWIFT(params: {
  customerId: string;
  quoteId: string;
  recipient: {
    name: string;
    swiftCode: string;
    iban: string;
    bankName: string;
    bankAddress?: string;
  };
  transferPurposeId: string;
}) {
  await mg.fx.confirm(params.quoteId);

  const payout = await mg.payouts.swift.create({
    quote_id: params.quoteId,
    customer_id: params.customerId,
    recipient: {
      name: params.recipient.name,
      swift_code: params.recipient.swiftCode,
      iban: params.recipient.iban,
      bank_name: params.recipient.bankName,
      bank_address: params.recipient.bankAddress,
    },
    transfer_purpose_id: params.transferPurposeId,
  });

  return { payoutId: payout.id, status: payout.status };
}

// Crypto Payout
export async function sendToCrypto(params: {
  customerId: string;
  quoteId: string;
  recipient: {
    name: string;
    walletAddress: string;
    network: string; // 'ETH', 'TRON', 'BSC', 'POLYGON'
  };
}) {
  await mg.fx.confirm(params.quoteId);

  const payout = await mg.payouts.crypto.create({
    quote_id: params.quoteId,
    customer_id: params.customerId,
    recipient: {
      name: params.recipient.name,
      wallet_address: params.recipient.walletAddress,
      network: params.recipient.network,
    },
  });

  return { payoutId: payout.id, status: payout.status };
}
```

### Step 6: Track Payout Status

```typescript
export async function getPayoutStatus(payoutId: string) {
  const payout = await mg.payouts.retrieve(payoutId);
  
  return {
    id: payout.id,
    status: payout.status,
    amount: payout.amount,
    currency: payout.currency,
    recipient: payout.recipient,
    fee: payout.fee,
    createdAt: payout.created_at,
    updatedAt: payout.updated_at,
  };
}

export async function getTransactionHistory(customerId: string) {
  const payouts = await mg.payouts.list({ customer_id: customerId }).all();
  
  return payouts.map(payout => ({
    id: payout.id,
    amount: payout.amount,
    currency: payout.currency,
    recipientName: payout.recipient.name,
    status: payout.status,
    type: payout.type,
    date: payout.created_at,
  }));
}
```

### Step 7: Webhook Handler

```typescript
// POST /webhooks/moneygraph
export async function handleWebhook(req: Request) {
  const { event, data } = await req.json();

  switch (event) {
    case 'payout.completed':
      await notifyUser(data.customer_id, {
        type: 'success',
        message: `Transfer of ${data.amount} ${data.currency} completed!`,
        payoutId: data.id,
      });
      break;

    case 'payout.failed':
      await notifyUser(data.customer_id, {
        type: 'failed',
        message: `Transfer failed: ${data.failure_reason}`,
        payoutId: data.id,
      });
      // Optionally offer retry
      break;

    case 'kyc.approved':
      await notifyUser(data.customer_id, {
        type: 'kyc_approved',
        message: 'Your identity verification is complete! You can now send money.',
      });
      break;

    case 'kyc.rejected':
      await notifyUser(data.customer_id, {
        type: 'kyc_rejected',
        message: `Verification rejected: ${data.rejection_reason}`,
      });
      break;
  }

  return new Response('OK', { status: 200 });
}
```

## Error Handling

```typescript
import { MoneyGraphError, MoneyGraphValidationError, isRetryableError } from '@moneygraph/sdk';

export async function safeSendMoney(params: SendMoneyParams) {
  try {
    return await sendMoney(params);
  } catch (error) {
    if (error instanceof MoneyGraphValidationError) {
      return {
        success: false,
        error: 'Invalid input',
        fieldErrors: error.fieldErrors,
      };
    }

    if (error instanceof MoneyGraphError) {
      switch (error.code) {
        case 'KYC_PENDING':
          return { success: false, error: 'Complete identity verification first' };
        case 'KYC_REJECTED':
          return { success: false, error: 'Identity verification was rejected. Contact support.' };
        case 'QUOTE_EXPIRED':
          return { success: false, error: 'Rate expired. Please get a new quote.' };
        case 'INSUFFICIENT_BALANCE':
          return { success: false, error: 'Insufficient funds. Please add money to your account.' };
        case 'RECIPIENT_INVALID':
          return { success: false, error: 'Invalid recipient details. Please check and try again.' };
        default:
          return { success: false, error: error.message };
      }
    }

    if (isRetryableError(error)) {
      // Network error - safe to retry
      return { success: false, error: 'Network error. Please try again.', retryable: true };
    }

    throw error;
  }
}
```

## AI Agent Prompt

Use this prompt to build a remittance application:

```
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
   
   b. Add recipient based on delivery method:
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
      - Or use specific rail: mg.payouts.create(), mg.payouts.mobileMoney.create(), etc.

4. TRANSACTION TRACKING
   - List history: mg.payouts.list({ customer_id })
   - Get status: mg.payouts.retrieve(payoutId)
   - Status flow: pending → processing → completed/failed

5. WEBHOOKS
   - Handle: payout.completed, payout.failed, kyc.approved, kyc.rejected
   - Send push notifications to users

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
- Payouts simulate: pending (2s) → processing (3s) → completed
```

---

## Summary: SDK Methods by Recipe

### Accept Payments
| Method | Purpose |
|--------|---------|
| `mg.payments.chargeCard()` | Server-side card charge (PCI required) |
| `mg.payments.verifyPayment()` | Verify payment by external_reference |
| Widget: `checkout.init()` | Client-side embedded checkout |
| Popup: `checkout.init()` | Client-side popup checkout |

### Issue Cards
| Method | Purpose |
|--------|---------|
| `mg.customers.create()` | Create customer account |
| `mg.customers.update()` | Update with KYC details |
| `mg.customers.kyc.uploadDocument()` | Upload ID, selfie |
| `mg.customers.kyc.submit()` | Submit KYC for review |
| `mg.customers.kyc.getStatus()` | Check KYC status |
| `mg.customers.kyc.canPayout()` | Verify card eligibility |
| `mg.cards.create()` | Issue virtual/physical card |
| `mg.cards.getDetails()` | Get full card number, CVV |
| `mg.cards.fund()` | Add funds to card |
| `mg.cards.withdraw()` | Remove funds from card |
| `mg.cards.freeze()` | Temporarily disable |
| `mg.cards.unfreeze()` | Re-enable |
| `mg.cards.updateLimit()` | Change spending limit |
| `mg.cards.cancel()` | Permanently cancel |
| `mg.cards.transactions()` | Get transaction history |

### Remittance App
| Method | Purpose |
|--------|---------|
| `mg.customers.create()` | Register sender |
| `mg.customers.kyc.*` | Complete KYC verification |
| `mg.reference.countries()` | Get supported countries |
| `mg.reference.banks.list()` | Get banks for country |
| `mg.fx.quote()` | Get FX quote (2 min expiry) |
| `mg.fx.confirm()` | Lock the rate |
| `mg.executeSmartPayout()` | Send via best rail (recommended) |
| `mg.payouts.create()` | Local bank transfer |
| `mg.payouts.mobileMoney.create()` | M-Pesa, MTN, etc. |
| `mg.payouts.swift.create()` | International wire |
| `mg.payouts.crypto.create()` | Crypto payout |
| `mg.payouts.retrieve()` | Get payout status |
| `mg.payouts.list()` | Transaction history |
