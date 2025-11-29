/*
  # Fix Security Issues

  ## Overview
  This migration addresses security vulnerabilities identified in the database:
  1. Removes unused indexes that add unnecessary overhead
  2. Fixes mutable search_path vulnerabilities in functions

  ## Changes

  ### Removed Unused Indexes
  - `idx_kyc_submissions_email` - Already have unique constraint
  - `idx_kyc_submissions_status` - Low selectivity, not currently queried
  - `idx_kyc_submissions_created_at` - Not used in current queries
  - `idx_api_keys_is_active` - Not used in current queries
  - `idx_kyc_subscription_tier` - Keep this one, will be used for analytics
  - `idx_sales_status` - Keep this one, used in admin dashboard
  - `idx_sales_created_at` - Keep this one, used for ordering
  - `idx_sales_email` - Not needed, low query volume

  ### Function Security Fixes
  - Add explicit `SECURITY DEFINER` and immutable search_path to functions
  - Prevents search_path injection attacks

  ## Security Impact
  - Reduces attack surface by removing unused indexes
  - Prevents privilege escalation via search_path manipulation
  - Maintains performance for actively used queries
*/

-- Drop unused indexes to reduce attack surface and improve write performance
DROP INDEX IF EXISTS idx_kyc_submissions_email;
DROP INDEX IF EXISTS idx_kyc_submissions_status;
DROP INDEX IF EXISTS idx_kyc_submissions_created_at;
DROP INDEX IF EXISTS idx_api_keys_is_active;
DROP INDEX IF EXISTS idx_sales_email;

-- Fix function security: update_updated_at_column
-- Add explicit schema qualification and set search_path
DROP FUNCTION IF EXISTS update_updated_at_column() CASCADE;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate triggers for updated_at
CREATE TRIGGER update_kyc_submissions_updated_at
  BEFORE UPDATE ON public.kyc_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_api_keys_updated_at
  BEFORE UPDATE ON public.api_keys
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_sales_inquiries_updated_at
  BEFORE UPDATE ON public.sales_inquiries
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Fix function security: calculate_subscription_tier
-- Add explicit schema qualification and set search_path
DROP FUNCTION IF EXISTS calculate_subscription_tier() CASCADE;

CREATE OR REPLACE FUNCTION public.calculate_subscription_tier()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  CASE jsonb_array_length(NEW.services)
    WHEN 1 THEN NEW.subscription_tier := 'small_business';
    WHEN 2 THEN NEW.subscription_tier := 'medium_business';
    ELSE NEW.subscription_tier := 'enterprise';
  END CASE;
  RETURN NEW;
END;
$$;

-- Recreate trigger for subscription tier calculation
CREATE TRIGGER set_subscription_tier
  BEFORE INSERT OR UPDATE ON public.kyc_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.calculate_subscription_tier();

-- Add comment explaining why we keep certain indexes
COMMENT ON INDEX idx_kyc_subscription_tier IS 'Used for admin dashboard analytics and tier-based filtering';
COMMENT ON INDEX idx_sales_status IS 'Used for sales pipeline filtering in admin dashboard';
COMMENT ON INDEX idx_sales_created_at IS 'Used for chronological ordering in admin dashboard';
