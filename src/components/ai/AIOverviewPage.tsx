import { Link } from 'react-router-dom';
import { Bot, Code, Zap, Globe, Shield, ArrowRight } from 'lucide-react';
import PlatformCard from './PlatformCard';

export default function AIOverviewPage() {
  const platforms = [
    {
      name: 'ChatGPT',
      description: 'Build GPT assistants with MoneyGraph tools for payments and payouts',
      icon: Bot,
      href: '/ai/chatgpt',
      badge: 'Popular',
    },
    {
      name: 'Claude',
      description: 'Integrate MoneyGraph into Claude tools for financial operations',
      icon: Bot,
      href: '/ai/claude',
    },
    {
      name: 'Cursor',
      description: 'Use MoneyGraph SDK with Cursor AI code completion and generation',
      icon: Code,
      href: '/ai/cursor',
    },
    {
      name: 'Bolt.new',
      description: 'Deploy MoneyGraph-powered applications with Bolt.new',
      icon: Zap,
      href: '/ai/bolt',
    },
    {
      name: 'Base44',
      description: 'Build financial agents with MoneyGraph and Base44',
      icon: Bot,
      href: '/ai/base44',
    },
    {
      name: 'Replit',
      description: 'Prototype and deploy MoneyGraph integrations on Replit',
      icon: Code,
      href: '/ai/replit',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">AI-Native Money Movement</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto">
            MoneyGraph is the universal money layer for AI systems
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Enable your AI agents and assistants to handle payments, payouts, and financial operations
            across 107+ countries with a single, AI-optimized API.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-strong rounded-xl p-8 text-center">
            <Bot className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
            <h3 className="text-xl font-semibold mb-2">MoneyGraph Agent</h3>
            <p className="text-gray-400">
              Pre-built AI agent that understands financial operations and natural language requests
            </p>
          </div>

          <div className="glass-strong rounded-xl p-8 text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
            <h3 className="text-xl font-semibold mb-2">Universal Money API</h3>
            <p className="text-gray-400">
              Single API for payments, payouts, FX, and wallets across 107+ countries and 73 currencies
            </p>
          </div>

          <div className="glass-strong rounded-xl p-8 text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-xl font-semibold mb-2">Built for AI</h3>
            <p className="text-gray-400">
              Structured responses, predictable schemas, and comprehensive error handling designed for AI agents
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Supported Platforms</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <PlatformCard key={platform.href} {...platform} />
            ))}
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mr-3">
                  1
                </span>
                One SDK, All Platforms
              </h3>
              <p className="text-gray-400 ml-11">
                Install <code className="text-cyan-400">@moneygraph/sdk</code> and use the same API
                across ChatGPT, Claude, Cursor, Bolt, Base44, and Replit. No platform-specific code required.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mr-3">
                  2
                </span>
                AI-Optimized Responses
              </h3>
              <p className="text-gray-400 ml-11">
                Structured JSON responses with clear error messages, validation feedback, and actionable data
                that AI agents can easily parse and act upon.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mr-3">
                  3
                </span>
                Global Reach, Local Rails
              </h3>
              <p className="text-gray-400 ml-11">
                Send payments via local banking rails in 107+ countries. Automatic FX conversion,
                compliance checks, and real-time status updates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mr-3">
                  4
                </span>
                Built-in Compliance
              </h3>
              <p className="text-gray-400 ml-11">
                KYC verification, fraud detection, and regulatory compliance handled automatically.
                Focus on building features, not financial infrastructure.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
            Choose your AI platform and start building financial features in minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/ai/getting-started" className="btn-primary inline-flex items-center justify-center">
              Getting Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/signup" className="btn-secondary inline-flex items-center justify-center">
              Get API Keys
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
