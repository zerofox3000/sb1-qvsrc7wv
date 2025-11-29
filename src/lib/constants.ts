export const SERVICES = {
  KYC_ENABLEMENT: {
    id: 'kyc_enablement',
    name: 'KYC Enablement',
    description: 'Identity verification and compliance',
    icon: 'Shield',
    required: false,
    requiredFor: ['payment_acceptance', 'card_issuance', 'payouts'],
  },
  PAYMENT_ACCEPTANCE: {
    id: 'payment_acceptance',
    name: 'Payment Acceptance',
    description: 'Accept credit cards and digital payments',
    icon: 'CreditCard',
    required: false,
    requires: ['kyc_enablement'],
  },
  CARD_ISSUANCE: {
    id: 'card_issuance',
    name: 'Card Issuance',
    description: 'Issue virtual and physical payment cards',
    icon: 'Wallet',
    required: false,
    requires: ['kyc_enablement'],
  },
  PAYOUTS: {
    id: 'payouts',
    name: 'Global Payouts',
    description: 'Send payments to 107+ countries',
    icon: 'Send',
    required: false,
    requires: ['kyc_enablement'],
  },
  PAYIN_ACCOUNTS: {
    id: 'payin_accounts',
    name: 'Pay-In Accounts',
    description: 'Receive funds and manage wallets',
    icon: 'DollarSign',
    required: false,
    requires: [],
  },
} as const;

export const SERVICE_LIST = Object.values(SERVICES);

export const TIERS = {
  SMALL_BUSINESS: {
    id: 'small_business',
    name: 'Small Business',
    price: 99,
    serviceCount: 1,
    color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    badgeColor: 'bg-cyan-500/20 text-cyan-400 border-2 border-cyan-500/50',
  },
  MEDIUM_BUSINESS: {
    id: 'medium_business',
    name: 'Medium Business',
    price: 500,
    serviceCount: 2,
    color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500/50',
  },
  ENTERPRISE: {
    id: 'enterprise',
    name: 'Enterprise',
    price: 2000,
    serviceCount: 3,
    color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border-2 border-yellow-500/50',
  },
} as const;

export const calculateTier = (serviceCount: number): keyof typeof TIERS => {
  if (serviceCount === 1) return 'SMALL_BUSINESS';
  if (serviceCount === 2) return 'MEDIUM_BUSINESS';
  return 'ENTERPRISE';
};

export const getTierInfo = (serviceCount: number) => {
  const tierKey = calculateTier(serviceCount);
  return TIERS[tierKey];
};

export const COMPANY_SIZES = [
  { value: '1-50', label: '1-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-1000', label: '201-1,000 employees' },
  { value: '1001-5000', label: '1,001-5,000 employees' },
  { value: '5000+', label: '5,000+ employees' },
];

export const MONTHLY_VOLUMES = [
  { value: '<100k', label: 'Less than $100K' },
  { value: '100k-500k', label: '$100K - $500K' },
  { value: '500k-2m', label: '$500K - $2M' },
  { value: '2m-10m', label: '$2M - $10M' },
  { value: '10m+', label: '$10M+' },
];

export const TIMELINES = [
  { value: 'immediate', label: 'Immediate (< 1 month)' },
  { value: '1-3months', label: '1-3 months' },
  { value: '3-6months', label: '3-6 months' },
  { value: '6+months', label: '6+ months' },
  { value: 'exploring', label: 'Exploring options' },
];

export const COUNTRIES = [
  { value: 'US', label: 'United States' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'AU', label: 'Australia' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'KE', label: 'Kenya' },
  { value: 'ZA', label: 'South Africa' },
  { value: 'IN', label: 'India' },
  { value: 'SG', label: 'Singapore' },
  { value: 'AE', label: 'United Arab Emirates' },
];
