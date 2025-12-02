import { Link } from 'react-router-dom';
import { ArrowLeft, Package, Key, Code, CheckCircle } from 'lucide-react';
import CodeExample from './CodeExample';
import StepList from './StepList';
import PillTag from './PillTag';

export default function GettingStartedPage() {
  const installCode = `npm install @moneygraph/sdk`;

  const placeholderCode = `// TODO: Verify this code against @moneygraph/sdk v2.0.2 before use
// The exact import path and client initialization pattern must be confirmed
// from the actual SDK package before including here.

// Expected pattern (TO BE VERIFIED):
// import { MoneyGraphClient } from '@moneygraph/sdk';
// const client = new MoneyGraphClient({
//   apiKey: process.env.MONEYGRAPH_API_KEY,
//   environment: 'production' // or 'sandbox'
// });

// DO NOT USE THIS CODE UNTIL VERIFIED AGAINST ACTUAL SDK`;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/ai" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to AI Overview
        </Link>

        <h1 className="text-5xl font-bold mb-6">
          <span className="gradient-text">Getting Started with MoneyGraph AI</span>
        </h1>

        <p className="text-xl text-gray-400 mb-12">
          Learn the fundamentals of integrating MoneyGraph into your AI applications
        </p>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">What is MoneyGraph?</h2>
          <p className="text-gray-400 mb-4">
            MoneyGraph is the universal money movement layer for AI systems. It provides:
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
              <span><strong className="text-white">MoneyGraph Agent:</strong> Pre-built AI agent for financial operations</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
              <span><strong className="text-white">Universal Money API:</strong> One API for payments, payouts, FX, KYC across 107+ countries</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
              <span><strong className="text-white">AI-Optimized SDK:</strong> Structured responses designed for AI agent consumption</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-0.5" />
              <span><strong className="text-white">OpenAPI Spec:</strong> Complete OpenAPI 3.0 specification for easy integration</span>
            </li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Prerequisites</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="glass rounded-xl p-6">
              <Package className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="font-semibold mb-2">Node.js 18+</h3>
              <p className="text-sm text-gray-400">Required for SDK installation</p>
            </div>
            <div className="glass rounded-xl p-6">
              <Key className="w-8 h-8 text-emerald-400 mb-3" />
              <h3 className="font-semibold mb-2">API Keys</h3>
              <p className="text-sm text-gray-400">Get keys from MoneyGraph dashboard</p>
            </div>
            <div className="glass rounded-xl p-6">
              <Code className="w-8 h-8 text-yellow-400 mb-3" />
              <h3 className="font-semibold mb-2">TypeScript</h3>
              <p className="text-sm text-gray-400">Recommended for type safety</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Quick Start</h2>

          <StepList
            steps={[
              {
                title: 'Install the SDK',
                description: 'Add MoneyGraph SDK to your project using npm or your preferred package manager.',
                code: <CodeExample language="bash" code={installCode} />,
              },
              {
                title: 'Get Your API Keys',
                description: 'Sign up for a MoneyGraph account and generate your API keys from the dashboard.',
                code: (
                  <div className="glass rounded-lg p-4">
                    <Link to="/signup" className="btn-primary inline-block">
                      Get API Keys →
                    </Link>
                  </div>
                ),
              },
              {
                title: 'Initialize the Client',
                description: 'Set up the MoneyGraph client in your application. Store your API key securely in environment variables.',
                code: (
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4 border-2 border-yellow-500/50">
                      <div className="flex items-start">
                        <div className="text-yellow-400 font-bold mr-3">⚠️</div>
                        <div>
                          <div className="font-semibold text-yellow-400 mb-1">Code Verification Required</div>
                          <p className="text-sm text-gray-400">
                            The exact client initialization code must be verified against the published{' '}
                            <code className="text-cyan-400">@moneygraph/sdk</code> v2.0.2 package.
                            The import path, class names, and initialization patterns shown below are placeholders
                            and should not be used until confirmed against the actual SDK.
                          </p>
                        </div>
                      </div>
                    </div>
                    <CodeExample
                      language="typescript"
                      code={placeholderCode}
                      filename="Placeholder - Verify Against SDK"
                    />
                    <div className="glass rounded-lg p-4">
                      <p className="text-sm text-gray-400">
                        <strong className="text-white">For accurate initialization code:</strong>
                        <br />
                        1. Install <code className="text-cyan-400">@moneygraph/sdk</code>
                        <br />
                        2. Check the package's TypeScript definitions or README
                        <br />
                        3. Refer to the official documentation at{' '}
                        <a
                          href="https://www.npmjs.com/package/@moneygraph/sdk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300"
                        >
                          npmjs.com/package/@moneygraph/sdk
                        </a>
                      </p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Core Concepts</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <PillTag variant="info">Concept</PillTag>
                <span className="ml-3">Wallets</span>
              </h3>
              <p className="text-gray-400">
                Store and manage funds in multiple currencies. Create wallets for different purposes,
                users, or business units. Support for 73+ currencies.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <PillTag variant="info">Concept</PillTag>
                <span className="ml-3">Payouts</span>
              </h3>
              <p className="text-gray-400">
                Send money to bank accounts, mobile wallets, and other destinations in 107+ countries.
                Automatic FX conversion and local rail delivery.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <PillTag variant="info">Concept</PillTag>
                <span className="ml-3">Payment Acceptance</span>
              </h3>
              <p className="text-gray-400">
                Accept credit card payments with embedded widgets or direct API integration.
                Support for all major card networks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 flex items-center">
                <PillTag variant="info">Concept</PillTag>
                <span className="ml-3">KYC & Compliance</span>
              </h3>
              <p className="text-gray-400">
                Built-in identity verification, document upload, and compliance checks.
                Automated KYC workflows for customers and recipients.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Environment & API Keys</h2>
          <p className="text-gray-400 mb-4">
            MoneyGraph provides two environments for development and production:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <PillTag variant="warning">Sandbox</PillTag>
                <span className="ml-3">Development Environment</span>
              </h3>
              <p className="text-sm text-gray-400">
                Test your integration with simulated transactions. No real money moves.
                Perfect for development and testing.
              </p>
            </div>

            <div className="glass rounded-lg p-4">
              <h3 className="font-semibold mb-2 flex items-center">
                <PillTag variant="success">Production</PillTag>
                <span className="ml-3">Live Environment</span>
              </h3>
              <p className="text-sm text-gray-400">
                Process real transactions with actual money movement.
                Requires full KYC verification and compliance approval.
              </p>
            </div>
          </div>

          <div className="glass rounded-lg p-4 bg-red-500/10 border border-red-500/30">
            <p className="text-sm text-red-400">
              <strong>Security Warning:</strong> Never expose your API keys in client-side code or commit them to version control.
              Always use environment variables and keep keys secure.
            </p>
          </div>
        </div>

        <div className="glass-strong rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Choose Your Platform</h2>
          <p className="text-gray-400 mb-6">
            Select your AI platform to see specific integration guides
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['ChatGPT', 'Claude', 'Cursor', 'Bolt.new', 'Base44', 'Replit'].map((platform) => (
              <Link
                key={platform}
                to={`/ai/${platform.toLowerCase().replace('.', '')}`}
                className="glass rounded-lg p-4 hover:glass-strong transition"
              >
                <div className="font-semibold">{platform}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
