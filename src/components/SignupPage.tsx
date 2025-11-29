import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, Shield, CreditCard, Wallet, Send, DollarSign } from 'lucide-react';
import { supabase, type KycSubmission } from '../lib/supabase';
import { SERVICES, SERVICE_LIST, getTierInfo, COUNTRIES } from '../lib/constants';

const SERVICE_ICONS = {
  Shield, CreditCard, Wallet, Send, DollarSign
};

export default function SignupPage() {
  const [formData, setFormData] = useState<Partial<KycSubmission>>({
    email: '',
    first_name: '',
    last_name: '',
    phone: '',
    phone_iso2: 'US',
    country: 'US',
    account_type: 'personal',
    business_name: '',
    services: [],
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [tierInfo, setTierInfo] = useState(getTierInfo(0));

  useEffect(() => {
    const serviceCount = formData.services?.length || 0;
    setTierInfo(getTierInfo(serviceCount));
  }, [formData.services]);

  const toggleService = (serviceId: string) => {
    const services = formData.services || [];
    const service = SERVICE_LIST.find(s => s.id === serviceId);

    if (services.includes(serviceId)) {
      const updatedServices = services.filter(s => s !== serviceId);
      const dependents = SERVICE_LIST.filter(s => s.requires?.includes(serviceId)).map(s => s.id);
      const finalServices = updatedServices.filter(s => !dependents.includes(s));
      setFormData({ ...formData, services: finalServices });
    } else {
      let updatedServices = [...services, serviceId];
      if (service?.requires) {
        service.requires.forEach(req => {
          if (!updatedServices.includes(req)) {
            updatedServices.push(req);
          }
        });
      }
      setFormData({ ...formData, services: updatedServices });
    }
  };

  const isServiceRequired = (serviceId: string) => {
    const services = formData.services || [];
    return SERVICE_LIST.some(s =>
      services.includes(s.id) && s.requires?.includes(serviceId)
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.services || formData.services.length === 0) {
      setError('Please select at least one service');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const submissionData: KycSubmission = {
        email: formData.email!,
        first_name: formData.first_name!,
        last_name: formData.last_name!,
        phone: formData.phone!,
        phone_iso2: formData.phone_iso2!,
        country: formData.country!,
        account_type: formData.account_type!,
        services: formData.services,
      };

      if (formData.account_type === 'business' && formData.business_name) {
        submissionData.business_name = formData.business_name;
      }

      const { error: submitError } = await supabase
        .from('kyc_submissions')
        .insert([submissionData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        phone_iso2: 'US',
        country: 'US',
        account_type: 'personal',
        business_name: '',
        services: [],
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit application');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="glass-strong rounded-2xl p-8">
          <h1 className="text-4xl font-bold mb-2">
            <span className="gradient-text">Sign Up for API Access</span>
          </h1>
          <p className="text-gray-400 mb-8">
            Complete your application and we'll send your API keys within 24 hours
          </p>

          {success && (
            <div className="glass rounded-lg p-4 mb-6 border border-emerald-500/50 flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-emerald-400">Application Submitted Successfully!</p>
                <p className="text-sm text-gray-400 mt-1">
                  We'll review your application and send your API keys to {formData.email} within 24 hours.
                  Your plan: <span className="font-semibold text-white">{tierInfo.name}</span> (${tierInfo.price}/month)
                </p>
              </div>
            </div>
          )}

          {error && (
            <div className="glass rounded-lg p-4 mb-6 border border-red-500/50 flex items-start">
              <AlertCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-red-400">Error</p>
                <p className="text-sm text-gray-400 mt-1">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Select Services</h3>
              <p className="text-gray-400 text-sm mb-4">
                Choose the services you need. Pricing is based on the number of services selected.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {SERVICE_LIST.map((service) => {
                  const Icon = SERVICE_ICONS[service.icon as keyof typeof SERVICE_ICONS];
                  const isSelected = formData.services?.includes(service.id) || false;
                  const isRequired = isServiceRequired(service.id);

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => !isRequired && toggleService(service.id)}
                      disabled={isRequired}
                      className={`p-4 rounded-lg transition text-left ${
                        isSelected
                          ? 'glass-strong border-2 border-cyan-400'
                          : 'glass border border-gray-600 hover:glass-strong'
                      } ${isRequired ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-start">
                        <div className="mr-3">
                          <Icon className={`w-6 h-6 ${isSelected ? 'text-cyan-400' : 'text-gray-400'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold flex items-center justify-between">
                            {service.name}
                            {isSelected && <CheckCircle className="w-5 h-5 text-cyan-400" />}
                          </div>
                          <div className="text-sm text-gray-400 mt-1">{service.description}</div>
                          {isRequired && (
                            <div className="text-xs text-yellow-400 mt-1">Required by other services</div>
                          )}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {(formData.services?.length || 0) > 0 && (
                <div className="glass rounded-xl p-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Your Plan</div>
                    <div className={`inline-block px-6 py-2 rounded-full font-bold text-lg ${tierInfo.badgeColor}`}>
                      {tierInfo.name}
                    </div>
                    <div className="text-3xl font-bold gradient-text mt-2">
                      ${tierInfo.price}/month
                    </div>
                    <div className="text-sm text-gray-400 mt-1">
                      {formData.services.length} service{formData.services.length !== 1 ? 's' : ''} selected
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Account Type</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, account_type: 'personal' })}
                  className={`p-4 rounded-lg transition ${
                    formData.account_type === 'personal'
                      ? 'glass-strong border-2 border-cyan-400'
                      : 'glass border border-gray-600'
                  }`}
                >
                  <div className="font-semibold">Personal</div>
                  <div className="text-sm text-gray-400">Individual account</div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, account_type: 'business' })}
                  className={`p-4 rounded-lg transition ${
                    formData.account_type === 'business'
                      ? 'glass-strong border-2 border-cyan-400'
                      : 'glass border border-gray-600'
                  }`}
                >
                  <div className="font-semibold">Business</div>
                  <div className="text-sm text-gray-400">Company account</div>
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  required
                  value={formData.first_name}
                  onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
                  className="input-glass"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  required
                  value={formData.last_name}
                  onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
                  className="input-glass"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-glass"
                placeholder="john@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="input-glass"
                  placeholder="2025551234"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium mb-2">
                  Country
                </label>
                <select
                  id="country"
                  required
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value, phone_iso2: e.target.value })
                  }
                  className="input-glass"
                >
                  {COUNTRIES.map(c => (
                    <option key={c.value} value={c.value}>{c.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {formData.account_type === 'business' && (
              <div>
                <label htmlFor="business_name" className="block text-sm font-medium mb-2">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business_name"
                  required={formData.account_type === 'business'}
                  value={formData.business_name}
                  onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                  className="input-glass"
                  placeholder="Acme Corporation"
                />
              </div>
            )}

            <div className="glass rounded-lg p-4">
              <p className="text-sm text-gray-400">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
                We'll use the MoneyGraph SDK to verify your identity and create your account.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || (formData.services?.length || 0) === 0}
              className="btn-primary w-full"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
