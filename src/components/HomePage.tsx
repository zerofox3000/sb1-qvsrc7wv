import { Link } from 'react-router-dom';
import { CreditCard, Globe, Zap, Shield, TrendingUp, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" className="schema-markup">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "MoneyGraph.AI",
          "applicationCategory": "FinanceApplication",
          "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "99",
            "highPrice": "2000",
            "priceCurrency": "USD"
          },
          "description": "Next generation AI-native financial tools for global payments, payouts, and commerce. Powered by regulated fintech with full banking sponsorship.",
          "operatingSystem": "Web",
          "softwareVersion": "2.0.1",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "1247"
          }
        })}
      </script>

      <div className="min-h-screen">
        <section className="hero-gradient py-12 tablet:py-16 desktop:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl tablet:text-6xl desktop:text-7xl font-bold mb-4 tablet:mb-6 text-balance leading-tight">
                <span className="gradient-text">MoneyGraph.AI</span>
              </h1>
              <p className="text-lg tablet:text-xl desktop:text-2xl text-gray-300 mb-3 tablet:mb-4 max-w-3xl mx-auto text-balance px-4">
                Next Generation AI-Native Financial Tools
              </p>
              <p className="text-base tablet:text-lg text-gray-400 mb-6 tablet:mb-8 max-w-2xl mx-auto px-4">
                Global payments, payouts, and commerce powered by regulated fintech with full banking sponsorship
              </p>
              <div className="flex flex-col tablet:flex-row gap-3 tablet:gap-4 justify-center px-4">
                <Link to="/signup" className="btn-primary text-center">
                  Get Started Free
                </Link>
                <Link to="/pricing" className="btn-secondary text-center">
                  View Pricing
                </Link>
              </div>
            </div>

            <div className="mt-10 tablet:mt-16 grid grid-cols-1 tablet:grid-cols-3 gap-4 tablet:gap-6 animate-fade-in">
              <div className="card-glass text-center p-6">
                <Globe className="w-10 h-10 tablet:w-12 tablet:h-12 mx-auto mb-3 tablet:mb-4 text-cyan-400" />
                <h3 className="text-lg tablet:text-xl font-semibold mb-2">107+ Countries</h3>
                <p className="text-sm tablet:text-base text-gray-400">Send payments globally via local rails with automatic FX</p>
              </div>
              <div className="card-glass text-center p-6">
                <Shield className="w-10 h-10 tablet:w-12 tablet:h-12 mx-auto mb-3 tablet:mb-4 text-emerald-400" />
                <h3 className="text-lg tablet:text-xl font-semibold mb-2">Fully Regulated</h3>
                <p className="text-sm tablet:text-base text-gray-400">Banking-grade security with KYC enforcement</p>
              </div>
              <Link to="/ai" className="card-glass text-center group p-6">
                <Zap className="w-10 h-10 tablet:w-12 tablet:h-12 mx-auto mb-3 tablet:mb-4 text-yellow-400 group-hover:scale-110 transition" />
                <h3 className="text-lg tablet:text-xl font-semibold mb-2">AI-Native Platform</h3>
                <p className="text-sm tablet:text-base text-gray-400">Built for ChatGPT, Claude, Cursor, and more</p>
                <div className="mt-3 text-sm tablet:text-base text-cyan-400 font-semibold group-hover:text-cyan-300 transition">
                  Explore AI Integrations →
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 tablet:py-16 desktop:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl tablet:text-4xl font-bold text-center mb-3 tablet:mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Everything you need to build modern payment solutions
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glass-strong rounded-xl p-8">
                <Users className="w-10 h-10 mb-4 text-cyan-400" />
                <h3 className="text-2xl font-semibold mb-3">KYC Management</h3>
                <p className="text-gray-400 mb-4">
                  Automated customer verification with document upload and compliance checks
                </p>
                <Link to="/signup" className="text-cyan-400 hover:text-cyan-300 transition">
                  Get started →
                </Link>
              </div>

              <div className="glass-strong rounded-xl p-8">
                <CreditCard className="w-10 h-10 mb-4 text-emerald-400" />
                <h3 className="text-2xl font-semibold mb-3">Accept Payments</h3>
                <p className="text-gray-400 mb-4">
                  Card payments with embedded widgets, popup checkout, and direct API integration
                </p>
                <Link to="/recipes/accept-payments" className="text-cyan-400 hover:text-cyan-300 transition">
                  Learn more →
                </Link>
              </div>

              <div className="glass-strong rounded-xl p-8">
                <TrendingUp className="w-10 h-10 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-semibold mb-3">Global Payouts</h3>
                <p className="text-gray-400 mb-4">
                  Send money to 107+ countries with automatic FX and local rail delivery
                </p>
                <Link to="/recipes" className="text-cyan-400 hover:text-cyan-300 transition">
                  Explore recipes →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 hero-gradient">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Payments?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using MoneyGraph.AI for global financial operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn-primary text-lg px-8 py-4 inline-block">
                Start Building Today
              </Link>
              <Link to="/contact-sales" className="btn-secondary text-lg px-8 py-4 inline-block">
                Enterprise Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
