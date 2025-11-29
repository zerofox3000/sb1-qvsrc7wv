import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="glass-strong mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">MoneyGraph.AI</h3>
            <p className="text-gray-400 text-sm">
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
                <Link to="/recipes" className="text-gray-400 hover:text-white transition">
                  Recipes
                </Link>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@moneygraph/sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  SDK Documentation
                </a>
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
                href="https://github.com/moneygraph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/moneygraph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/moneygraph"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin className="w-5 h-5" />
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
