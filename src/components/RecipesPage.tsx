import { Link } from 'react-router-dom';
import { ArrowLeft, CreditCard, Users, Wallet } from 'lucide-react';

const recipes = [
  {
    slug: 'accept-payments',
    title: 'Accept Payments',
    icon: CreditCard,
    description: 'Complete guide to accepting card payments with embedded widgets and API integration',
    category: 'Payment Processing',
  },
  {
    slug: 'payroll-application',
    title: 'Build a Payroll App',
    icon: Users,
    description: 'Step-by-step guide to building a global payroll system with automated payments',
    category: 'Business Applications',
  },
  {
    slug: 'issue-credit-cards',
    title: 'Issue Virtual Cards',
    icon: Wallet,
    description: 'Learn how to issue virtual credit cards and manage spending controls',
    category: 'Card Issuance',
  },
];

export default function RecipesPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Implementation Recipes</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technical guides and code examples for building payment features with MoneyGraph SDK
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div
              key={recipe.slug}
              className="glass-strong rounded-xl p-8 hover:scale-105 transition-transform"
            >
              <recipe.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <div className="text-sm text-emerald-400 font-semibold mb-2">{recipe.category}</div>
              <h2 className="text-2xl font-bold mb-3">{recipe.title}</h2>
              <p className="text-gray-400 mb-4">{recipe.description}</p>
              <a
                href="https://www.npmjs.com/package/@moneygraph/sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
              >
                View in SDK Documentation →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-strong rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Implementation Help?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our SDK includes detailed recipes and examples in the npm package. For enterprise support
            and custom integrations, contact our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.npmjs.com/package/@moneygraph/sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View SDK on npm
            </a>
            <Link to="/contact-sales" className="btn-secondary">
              Contact Enterprise Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
