import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface KycSubmission {
  id?: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  phone_iso2: string;
  country: string;
  account_type: 'personal' | 'business';
  business_name?: string;
  business_address?: {
    country: string;
    state?: string;
    city: string;
    street: string;
    postal_code: string;
  };
  services: string[];
  subscription_tier?: 'small_business' | 'medium_business' | 'enterprise';
  estimated_monthly_volume?: string;
  current_provider?: string;
  status?: 'pending' | 'approved' | 'rejected';
  moneygraph_customer_id?: string;
  created_at?: string;
  updated_at?: string;
}

export interface SalesInquiry {
  id?: string;
  company_name: string;
  contact_name: string;
  email: string;
  phone: string;
  country: string;
  company_size: string;
  monthly_volume: string;
  services_interest: string[];
  use_case?: string;
  current_provider?: string;
  timeline: string;
  status?: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost';
  assigned_to?: string;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}

export interface ApiKey {
  id?: string;
  account_name: string;
  live_key: string;
  test_key: string;
  webhook_secret: string;
  is_active?: boolean;
  notes?: string;
  created_at?: string;
  updated_at?: string;
}
