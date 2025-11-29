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
    { path: '/contact-sales', label: 'Enterprise' },
    { path: '/recipes', label: 'Recipes' },
    { path: '/signup', label: 'Sign Up', primary: true },
  ];

  return (
    <nav className="glass-strong sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold gradient-text">
            MoneyGraph.AI
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.primary ? (
                <Link
                  key={link.path}
                  to={link.path}
                  className="btn-primary"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`transition ${
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
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 transition ${
                  link.primary
                    ? 'btn-primary text-center'
                    : isActive(link.path)
                    ? 'text-cyan-400'
                    : 'text-gray-300'
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
