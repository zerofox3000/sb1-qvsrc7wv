import { Link } from 'react-router-dom';
import { Check, ArrowLeft } from 'lucide-react';

const plans = [
  {
    name: 'Small Business',
    price: 99,
    tokens: '50,000',
    services: 1,
    description: 'Perfect for startups and small teams',
    features: [
      '1 selected service',
      '50,000 API tokens per month',
      'Global payment acceptance',
      'Basic KYC verification',
      'Email support',
      'Standard documentation',
      'Community access',
    ],
  },
  {
    name: 'Medium Business',
    price: 500,
    tokens: '500,000',
    services: 2,
    description: 'Ideal for growing businesses',
    features: [
      '2 selected services',
      '500,000 API tokens per month',
      'All Small Business features',
      'Advanced KYC & compliance',
      'Priority email support',
      'Dedicated account manager',
      'Custom webhooks',
      'Advanced analytics',
      'SLA guarantee',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 2000,
    tokens: 'Unlimited',
    services: '3+',
    description: 'For large-scale operations',
    features: [
      '3 or more services',
      'Unlimited API tokens',
      'All Medium Business features',
      'White-label solutions',
      '24/7 phone support',
      'Custom integrations',
      'Dedicated infrastructure',
      'Security audit reports',
      'Custom contract terms',
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" className="schema-markup">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "MoneyGraph.AI API Plans",
          "offers": plans.map(plan => ({
            "@type": "Offer",
            "name": plan.name,
            "price": plan.price,
            "priceCurrency": "USD",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": plan.price,
              "priceCurrency": "USD",
              "billingDuration": "P1M"
            }
          }))
        })}
      </script>

      <div className="min-h-screen py-8 tablet:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 tablet:mb-8 text-sm tablet:text-base">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="text-center mb-10 tablet:mb-16">
            <h1 className="text-3xl tablet:text-4xl desktop:text-5xl font-bold mb-3 tablet:mb-4">
              <span className="gradient-text">Simple, Transparent Pricing</span>
            </h1>
            <p className="text-lg tablet:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Choose the services you need. Pricing is based on the number of services selected.
            </p>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-6 tablet:gap-8 mb-12 tablet:mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-strong rounded-2xl p-6 tablet:p-8 relative ${
                  plan.popular ? 'border-2 border-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-5xl font-bold gradient-text">${plan.price}</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-cyan-400 font-semibold">{plan.services} service{plan.services === 1 ? '' : 's'}</p>
                  <p className="text-sm text-gray-400 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/signup"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition ${
                    plan.popular ? 'btn-primary' : 'btn-secondary'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="glass-strong rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">Token-Based Pricing</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">1 Token</div>
                <p className="text-gray-400">Per API request</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">No Hidden Fees</div>
                <p className="text-gray-400">Transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">Rollover</div>
                <p className="text-gray-400">Unused tokens carry forward</p>
              </div>
            </div>
          </div>

          <div className="glass-strong rounded-2xl p-8 text-center border-2 border-yellow-500/30">
            <h3 className="text-2xl font-bold mb-4">Need Enterprise-Grade Solutions?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              We offer tailored solutions for enterprise clients with unique requirements. Get custom pricing,
              white-label options, dedicated support, and specialized features built for scale.
            </p>
            <Link
              to="/contact-sales"
              className="btn-primary inline-block"
            >
              Contact Enterprise Sales
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
