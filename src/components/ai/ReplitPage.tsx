import { Link } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';
import CodeExample from './CodeExample';

export default function ReplitPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/ai" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to AI Overview
        </Link>

        <div className="flex items-center mb-6">
          <Code className="w-12 h-12 text-cyan-400 mr-4" />
          <h1 className="text-5xl font-bold">
            <span className="gradient-text">MoneyGraph + Replit</span>
          </h1>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Prototype and deploy MoneyGraph integrations on Replit
        </p>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Create Node.js Repl</h3>
              <p className="text-gray-400">
                Start with a Node.js or TypeScript repl on Replit. This will be your development environment.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Install SDK</h3>
              <p className="text-gray-400 mb-3">
                Use Replit's package manager or shell to install MoneyGraph SDK:
              </p>
              <CodeExample language="bash" code="npm install @moneygraph/sdk" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Configure Secrets</h3>
              <p className="text-gray-400 mb-3">
                Add your MoneyGraph API key using Replit's Secrets feature (click the lock icon in sidebar):
              </p>
              <div className="glass rounded-lg p-4">
                <p className="text-sm">
                  <strong>Key:</strong> <code className="text-cyan-400">MONEYGRAPH_API_KEY</code>
                  <br />
                  <strong>Value:</strong> Your API key from MoneyGraph dashboard
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4. Write Your Script</h3>
              <p className="text-gray-400 mb-3">
                Create a script that imports and uses the MoneyGraph SDK. Access your API key via:
              </p>
              <CodeExample
                language="javascript"
                code="const apiKey = process.env.MONEYGRAPH_API_KEY;"
              />
              <div className="glass rounded-lg p-4 border-2 border-yellow-500/50 mt-4">
                <p className="text-sm text-yellow-400">
                  ⚠️ Before implementing SDK calls, verify the exact API against{' '}
                  <code className="text-cyan-400">@moneygraph/sdk</code> v2.0.2 documentation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Example Use Cases</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Build a simple payout automation script</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Create a webhook handler for payment notifications</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Prototype a financial dashboard with real-time data</span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-400 mr-3">•</span>
              <span>Test MoneyGraph APIs before production deployment</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
