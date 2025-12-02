import { Link } from 'react-router-dom';
import { Github, Linkedin, Package } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-strong mt-12 tablet:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 tablet:py-12">
        <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-6 tablet:gap-8 mb-6 tablet:mb-8">
          <div className="tablet:col-span-2 desktop:col-span-1">
            <h3 className="text-lg tablet:text-xl font-bold gradient-text mb-3 tablet:mb-4">MoneyGraph.AI</h3>
            <p className="text-gray-400 text-sm tablet:text-base">
              Next generation AI-native financial tools for global payments and commerce.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/ai" className="text-gray-400 hover:text-white transition">
                  AI Integrations
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-gray-400 hover:text-white transition">
                  Recipes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/signup" className="text-gray-400 hover:text-white transition">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link to="/contact-sales" className="text-gray-400 hover:text-white transition">
                  Enterprise
                </Link>
              </li>
              <li>
                <a href="mailto:support@moneygraph.ai" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/moneygraphai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/moneygraphai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.npmjs.com/package/@moneygraph/sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="npm Package"
              >
                <Package className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 MoneyGraph.AI. All rights reserved.</p>
          <p className="mt-2">
            Powered by regulated fintech with full banking sponsorship globally.
          </p>
        </div>
      </div>
    </footer>
  );
}
