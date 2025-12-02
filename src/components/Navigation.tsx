import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/pricing', label: 'Pricing' },
    { path: '/ai', label: 'AI' },
    { path: '/blog', label: 'Articles' },
    { path: '/contact-sales', label: 'Enterprise' },
    { path: '/recipes', label: 'Recipes' },
    { path: '/signup', label: 'Sign Up', primary: true },
  ];

  return (
    <nav className="glass-strong sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 tablet:h-16">
          <Link to="/" className="text-lg tablet:text-2xl font-bold gradient-text">
            MoneyGraph.AI
          </Link>

          <div className="hidden tablet:flex items-center space-x-4 desktop:space-x-6">
            {navLinks.map((link) =>
              link.primary ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="btn-primary text-sm desktop:text-base"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition text-sm desktop:text-base ${
                    isActive(link.path)
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            className="tablet:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="tablet:hidden py-4 space-y-2 border-t border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 px-2 rounded transition ${
                  link.primary
                    ? 'btn-primary text-center'
                    : isActive(link.path)
                    ? 'text-cyan-400 bg-cyan-950/20'
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
