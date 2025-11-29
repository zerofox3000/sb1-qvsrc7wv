/*
  # Add Service Subscriptions and Sales Inquiries

  ## Overview
  Enhances the KYC submissions table with service subscription tracking and creates
  a new sales inquiries table for enterprise customers.

  ## Tables Modified

  ### kyc_submissions (Enhanced)
  Added columns:
  - `services` (jsonb) - Array of selected services
  - `subscription_tier` (text) - Calculated tier: small_business, medium_business, enterprise
  - `estimated_monthly_volume` (text) - Optional volume estimate
  - `current_provider` (text) - Optional current payment provider

  ## Tables Created

  ### sales_inquiries
  Stores enterprise sales contact form submissions
  - `id` (uuid, primary key)
  - `company_name` (text, required) - Company name
  - `contact_name` (text, required) - Contact person name
  - `email` (text, required) - Contact email
  - `phone` (text, required) - Contact phone
  - `country` (text, required) - Company country
  - `company_size` (text, required) - Employee count range
  - `monthly_volume` (text, required) - Estimated transaction volume
  - `services_interest` (jsonb) - Array of interested services
  - `use_case` (text, nullable) - Detailed use case description
  - `current_provider` (text, nullable) - Current payment provider
  - `timeline` (text, required) - Implementation timeline
  - `status` (text, default 'new') - Sales pipeline status
  - `assigned_to` (text, nullable) - Assigned sales representative
  - `notes` (text, nullable) - Internal notes
  - `created_at` (timestamptz) - Inquiry timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Functions
  - `calculate_subscription_tier()` - Auto-calculates tier based on service count

  ## Security
  - RLS enabled on sales_inquiries
  - Public can insert inquiries (for contact form)
  - Authenticated users can manage inquiries (for admin dashboard)
*/

-- Add columns to kyc_submissions
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'kyc_submissions' AND column_name = 'services'
  ) THEN
    ALTER TABLE kyc_submissions
    ADD COLUMN services jsonb DEFAULT '[]'::jsonb,
    ADD COLUMN subscription_tier text,
    ADD COLUMN estimated_monthly_volume text,
    ADD COLUMN current_provider text;
  END IF;
END $$;

-- Add index for tier-based queries
CREATE INDEX IF NOT EXISTS idx_kyc_subscription_tier ON kyc_submissions(subscription_tier);

-- Create function to auto-calculate tier based on service count
CREATE OR REPLACE FUNCTION calculate_subscription_tier()
RETURNS TRIGGER AS $$
BEGIN
  CASE jsonb_array_length(NEW.services)
    WHEN 1 THEN NEW.subscription_tier := 'small_business';
    WHEN 2 THEN NEW.subscription_tier := 'medium_business';
    ELSE NEW.subscription_tier := 'enterprise';
  END CASE;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to calculate tier on insert/update
DROP TRIGGER IF EXISTS set_subscription_tier ON kyc_submissions;
CREATE TRIGGER set_subscription_tier
  BEFORE INSERT OR UPDATE ON kyc_submissions
  FOR EACH ROW
  EXECUTE FUNCTION calculate_subscription_tier();

-- Create sales_inquiries table
CREATE TABLE IF NOT EXISTS sales_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  country text NOT NULL,
  company_size text NOT NULL,
  monthly_volume text NOT NULL,
  services_interest jsonb DEFAULT '[]'::jsonb,
  use_case text,
  current_provider text,
  timeline text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'closed_won', 'closed_lost')),
  assigned_to text,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS on sales_inquiries
ALTER TABLE sales_inquiries ENABLE ROW LEVEL SECURITY;

-- RLS Policies for sales_inquiries
CREATE POLICY "Anyone can submit sales inquiry"
  ON sales_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view sales inquiries"
  ON sales_inquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update sales inquiries"
  ON sales_inquiries
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete sales inquiries"
  ON sales_inquiries
  FOR DELETE
  TO authenticated
  USING (true);

-- Indexes for sales_inquiries
CREATE INDEX IF NOT EXISTS idx_sales_status ON sales_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_sales_created_at ON sales_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_sales_email ON sales_inquiries(email);

-- Add updated_at trigger to sales_inquiries
DROP TRIGGER IF EXISTS update_sales_inquiries_updated_at ON sales_inquiries;
CREATE TRIGGER update_sales_inquiries_updated_at
  BEFORE UPDATE ON sales_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
