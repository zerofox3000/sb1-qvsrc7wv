import { Link } from 'react-router-dom';
import { ArrowLeft, Bot } from 'lucide-react';
import CodeExample from './CodeExample';

export default function ClaudePage() {
  const placeholderCode = `// TODO: Verify against @moneygraph/sdk v2.0.2
// Claude tool implementation requires verification of:
// - SDK import paths
// - Client initialization
// - Method signatures
// - Response formats

// Conceptual pattern (DO NOT USE without verification):
// import { MoneyGraphClient } from '@moneygraph/sdk';
// const client = new MoneyGraphClient({ apiKey, environment });
// const result = await client.payouts.create({...});`;

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
            <span className="gradient-text">MoneyGraph + Claude</span>
          </h1>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Integrate MoneyGraph into Claude tools for AI-powered financial operations
        </p>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-400">
            Claude can use MoneyGraph through custom tools similar to ChatGPT. Define tools that describe financial operations,
            implement handlers that call the MoneyGraph SDK, and Claude will intelligently use these tools in conversation.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Quick Start</h2>

          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">1. Install SDK</h3>
              <CodeExample language="bash" code="npm install @moneygraph/sdk" />
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">2. Define Claude Tools</h3>
              <p className="text-gray-400 mb-4">
                Create tool definitions following Claude's tool specification format. These describe the MoneyGraph
                operations available to Claude.
              </p>
              <div className="glass rounded-lg p-4 border-2 border-yellow-500/50">
                <p className="text-sm text-yellow-400">
                  ⚠️ Tool schemas must match MoneyGraph API exactly. Verify against SDK documentation before use.
                </p>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">3. Implement Tool Handlers</h3>
              <p className="text-gray-400 mb-4">
                Create backend handlers that receive tool calls from Claude and execute MoneyGraph SDK operations.
              </p>
              <CodeExample
                language="typescript"
                code={placeholderCode}
                filename="Requires SDK Verification"
              />
            </div>
          </div>
        </div>

        <div className="glass rounded-lg p-6 bg-cyan-500/10 border border-cyan-500/30">
          <h3 className="font-semibold mb-2 text-cyan-400">📘 Implementation Details</h3>
          <p className="text-sm text-gray-400 mb-3">
            For Claude-specific tool formats and implementation patterns, refer to:
          </p>
          <ul className="text-sm space-y-2">
            <li>
              <a href="https://www.npmjs.com/package/@moneygraph/sdk" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                MoneyGraph SDK Documentation →
              </a>
            </li>
            <li>
              <a href="https://docs.anthropic.com/claude/docs" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">
                Claude Tool Use Documentation →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
