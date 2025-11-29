import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, AlertCircle, Globe, Shield, Headphones, Code, TrendingDown, Palette } from 'lucide-react';
import { supabase, type SalesInquiry } from '../lib/supabase';
import { SERVICE_LIST, COMPANY_SIZES, MONTHLY_VOLUMES, TIMELINES, COUNTRIES } from '../lib/constants';

export default function SalesContactPage() {
  const [formData, setFormData] = useState<Partial<SalesInquiry>>({
    company_name: '',
    contact_name: '',
    email: '',
    phone: '',
    country: 'US',
    company_size: '',
    monthly_volume: '',
    services_interest: [],
    use_case: '',
    current_provider: '',
    timeline: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleService = (serviceId: string) => {
    const services = formData.services_interest || [];
    if (services.includes(serviceId)) {
      setFormData({ ...formData, services_interest: services.filter(s => s !== serviceId) });
    } else {
      setFormData({ ...formData, services_interest: [...services, serviceId] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const submissionData: SalesInquiry = {
        company_name: formData.company_name!,
        contact_name: formData.contact_name!,
        email: formData.email!,
        phone: formData.phone!,
        country: formData.country!,
        company_size: formData.company_size!,
        monthly_volume: formData.monthly_volume!,
        services_interest: formData.services_interest || [],
        use_case: formData.use_case,
        current_provider: formData.current_provider,
        timeline: formData.timeline!,
      };

      const { error: submitError } = await supabase
        .from('sales_inquiries')
        .insert([submissionData]);

      if (submitError) throw submitError;

      setSuccess(true);
      setFormData({
        company_name: '',
        contact_name: '',
        email: '',
        phone: '',
        country: 'US',
        company_size: '',
        monthly_volume: '',
        services_interest: [],
        use_case: '',
        current_provider: '',
        timeline: '',
      });
    } catch (err: any) {
      setError(err.message || 'Failed to submit inquiry');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <script type="application/ld+json" className="schema-markup">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Enterprise Contact - MoneyGraph.AI",
          "description": "Contact our enterprise sales team for custom payment solutions",
          "provider": {
            "@type": "Organization",
            "name": "MoneyGraph.AI",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "sales",
              "email": "sales@moneygraph.ai",
              "availableLanguage": "English"
            }
          }
        })}
      </script>

      <div className="min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="hero-gradient rounded-3xl p-12 mb-12 text-center">
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">Enterprise Solutions Built for Scale</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Join Fortune 500 companies using MoneyGraph for mission-critical financial infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Schedule a Demo
              </button>
              <a href="mailto:sales@moneygraph.ai" className="btn-secondary">
                Email Sales Team
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="glass-strong rounded-xl p-6">
              <Globe className="w-10 h-10 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Global Infrastructure</h3>
              <p className="text-gray-400 text-sm mb-2">107+ countries, 73 currencies, local banking rails</p>
              <p className="text-gray-400 text-sm">99.99% uptime SLA with multi-region redundancy</p>
            </div>

            <div className="glass-strong rounded-xl p-6">
              <Palette className="w-10 h-10 text-emerald-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">White-Label Solutions</h3>
              <p className="text-gray-400 text-sm mb-2">Your brand, your domain, your experience</p>
              <p className="text-gray-400 text-sm">Custom UI components and branded checkout</p>
            </div>

            <div className="glass-strong rounded-xl p-6">
              <Headphones className="w-10 h-10 text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Dedicated Support</h3>
              <p className="text-gray-400 text-sm mb-2">24/7 phone support with &lt;15min response</p>
              <p className="text-gray-400 text-sm">Dedicated technical account manager</p>
            </div>

            <div className="glass-strong rounded-xl p-6">
              <Shield className="w-10 h-10 text-cyan-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-400 text-sm mb-2">SOC 2 Type II, PCI DSS Level 1 certified</p>
              <p className="text-gray-400 text-sm">Regular security audits and pen testing</p>
            </div>

            <div className="glass-strong rounded-xl p-6">
              <Code className="w-10 h-10 text-emerald-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Custom Integration</h3>
              <p className="text-gray-400 text-sm mb-2">Tailored APIs, webhooks, and data pipelines</p>
              <p className="text-gray-400 text-sm">Priority feature development and roadmap input</p>
            </div>

            <div className="glass-strong rounded-xl p-6">
              <TrendingDown className="w-10 h-10 text-yellow-400 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Volume Pricing</h3>
              <p className="text-gray-400 text-sm mb-2">Negotiated rates for high-volume operations</p>
              <p className="text-gray-400 text-sm">Custom pricing models (flat fee, rev share, hybrid)</p>
            </div>
          </div>

          <div id="contact-form" className="glass-strong rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Request Enterprise Demo</span>
            </h2>

            {success && (
              <div className="glass rounded-lg p-4 mb-6 border border-emerald-500/50 flex items-start">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-emerald-400">Inquiry Submitted Successfully!</p>
                  <p className="text-sm text-gray-400 mt-1">
                    Our enterprise sales team will contact you within 24 hours to discuss your requirements.
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    required
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="input-glass"
                    placeholder="Acme Corporation"
                  />
                </div>
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    required
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="input-glass"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-glass"
                    placeholder="john@acme.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-glass"
                    placeholder="+1 202 555 0123"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="input-glass"
                  >
                    {COUNTRIES.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="company_size" className="block text-sm font-medium mb-2">
                    Company Size *
                  </label>
                  <select
                    id="company_size"
                    required
                    value={formData.company_size}
                    onChange={(e) => setFormData({ ...formData, company_size: e.target.value })}
                    className="input-glass"
                  >
                    <option value="">Select size</option>
                    {COMPANY_SIZES.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="monthly_volume" className="block text-sm font-medium mb-2">
                    Estimated Monthly Volume *
                  </label>
                  <select
                    id="monthly_volume"
                    required
                    value={formData.monthly_volume}
                    onChange={(e) => setFormData({ ...formData, monthly_volume: e.target.value })}
                    className="input-glass"
                  >
                    <option value="">Select volume</option>
                    {MONTHLY_VOLUMES.map(v => (
                      <option key={v.value} value={v.value}>{v.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                    Implementation Timeline *
                  </label>
                  <select
                    id="timeline"
                    required
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="input-glass"
                  >
                    <option value="">Select timeline</option>
                    {TIMELINES.map(t => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Services of Interest
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SERVICE_LIST.map(service => (
                    <label key={service.id} className="flex items-center glass rounded p-3 cursor-pointer hover:glass-strong transition">
                      <input
                        type="checkbox"
                        checked={formData.services_interest?.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                        className="mr-2"
                      />
                      <span className="text-sm">{service.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="use_case" className="block text-sm font-medium mb-2">
                  Use Case Description
                </label>
                <textarea
                  id="use_case"
                  value={formData.use_case}
                  onChange={(e) => setFormData({ ...formData, use_case: e.target.value })}
                  className="input-glass"
                  rows={4}
                  placeholder="Tell us about your use case and requirements..."
                />
              </div>

              <div>
                <label htmlFor="current_provider" className="block text-sm font-medium mb-2">
                  Current Payment Provider (Optional)
                </label>
                <input
                  type="text"
                  id="current_provider"
                  value={formData.current_provider}
                  onChange={(e) => setFormData({ ...formData, current_provider: e.target.value })}
                  className="input-glass"
                  placeholder="e.g., Stripe, Adyen, etc."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? 'Submitting...' : 'Request Enterprise Demo'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
