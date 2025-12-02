import { Link } from 'react-router-dom';
import { ArrowLeft, Bot } from 'lucide-react';
import CodeExample from './CodeExample';

export default function Base44Page() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/ai" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to AI Overview
        </Link>

        <div className="flex items-center mb-6">
          <Bot className="w-12 h-12 text-cyan-400 mr-4" />
          <h1 className="text-5xl font-bold">
            <span className="gradient-text">MoneyGraph + Base44</span>
          </h1>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Build financial AI agents with MoneyGraph and Base44
        </p>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Setup Steps</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Install MoneyGraph SDK</h3>
              <CodeExample language="bash" code="npm install @moneygraph/sdk" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Configure API Keys</h3>
              <p className="text-gray-400 mb-3">
                Set your MoneyGraph API key in your Base44 project's environment variables:
              </p>
              <CodeExample
                language="bash"
                code="MONEYGRAPH_API_KEY=your_api_key_here"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Create Agent Functions</h3>
              <p className="text-gray-400">
                Define agent functions that import and use the MoneyGraph SDK. These functions will handle
                financial operations requested by your AI agent.
              </p>
              <div className="glass rounded-lg p-4 border-2 border-yellow-500/50 mt-4">
                <p className="text-sm text-yellow-400">
                  ⚠️ Verify all SDK usage against <code className="text-cyan-400">@moneygraph/sdk</code> v2.0.2
                  documentation. Do not use unverified code examples.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-lg p-6 bg-cyan-500/10 border border-cyan-500/30">
          <h3 className="font-semibold mb-2 text-cyan-400">📘 Documentation</h3>
          <p className="text-sm text-gray-400 mb-3">
            For implementation details, refer to:
          </p>
          <a
            href="https://www.npmjs.com/package/@moneygraph/sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300"
          >
            MoneyGraph SDK Documentation →
          </a>
        </div>
      </div>
    </div>
  );
}
