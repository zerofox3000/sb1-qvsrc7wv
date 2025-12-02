import { Link } from 'react-router-dom';
import { ArrowLeft, Bot, Zap, Shield } from 'lucide-react';
import CodeExample from './CodeExample';
import StepList from './StepList';
import PillTag from './PillTag';

export default function ChatGPTPage() {
  const toolDefinitionPlaceholder = `// TODO: Verify tool schema against MoneyGraph SDK before use
// This is a conceptual example - actual tool definitions must match
// the MoneyGraph API specification exactly

{
  "name": "moneygraph_send_payout",
  "description": "Send money to a recipient via MoneyGraph",
  "parameters": {
    "type": "object",
    "properties": {
      "amount": {
        "type": "number",
        "description": "Amount to send"
      },
      "currency": {
        "type": "string",
        "description": "Currency code (e.g., USD, EUR, NGN)"
      },
      "recipient": {
        "type": "object",
        "description": "Recipient details",
        "properties": {
          "name": { "type": "string" },
          "email": { "type": "string" },
          "bank_account": { "type": "string" }
        }
      }
    },
    "required": ["amount", "currency", "recipient"]
  }
}

// IMPORTANT: Verify against actual SDK documentation`;

  const handlerPlaceholder = `// TODO: Verify this handler against @moneygraph/sdk v2.0.2
// DO NOT USE until verified against actual SDK

import { MoneyGraphClient } from '@moneygraph/sdk'; // VERIFY IMPORT PATH

export async function handleMoneyGraphTool(toolCall: any) {
  // VERIFY: Client initialization pattern
  const client = new MoneyGraphClient({
    apiKey: process.env.MONEYGRAPH_API_KEY,
    environment: 'production'
  });

  const { amount, currency, recipient } = toolCall.arguments;

  try {
    // VERIFY: Method name and signature
    const result = await client.payouts.create({
      amount,
      currency,
      recipient: {
        name: recipient.name,
        email: recipient.email,
        destination: {
          type: 'bank_account',
          account_number: recipient.bank_account
        }
      }
    });

    return {
      success: true,
      transaction_id: result.id,
      status: result.status
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// VERIFICATION REQUIRED: Check SDK documentation for correct:
// - Import paths
// - Client initialization
// - Method names (payouts.create, etc.)
// - Parameter structure
// - Response format`;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/ai" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to AI Overview
        </Link>

        <div className="flex items-center mb-6">
          <Bot className="w-12 h-12 text-cyan-400 mr-4" />
          <div>
            <h1 className="text-5xl font-bold">
              <span className="gradient-text">MoneyGraph + ChatGPT</span>
            </h1>
          </div>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Build GPT assistants with MoneyGraph tools for payments, payouts, and financial operations
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="glass rounded-xl p-6">
            <Bot className="w-8 h-8 text-cyan-400 mb-3" />
            <h3 className="font-semibold mb-2">Custom GPT Tools</h3>
            <p className="text-sm text-gray-400">Define MoneyGraph as a function tool</p>
          </div>
          <div className="glass rounded-xl p-6">
            <Zap className="w-8 h-8 text-emerald-400 mb-3" />
            <h3 className="font-semibold mb-2">Real-time Processing</h3>
            <p className="text-sm text-gray-400">Execute payments in conversation</p>
          </div>
          <div className="glass rounded-xl p-6">
            <Shield className="w-8 h-8 text-yellow-400 mb-3" />
            <h3 className="font-semibold mb-2">Secure Handling</h3>
            <p className="text-sm text-gray-400">API keys never exposed to users</p>
          </div>
        </div>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 mb-6">
            ChatGPT can call MoneyGraph through custom function tools. Your backend server receives the tool call,
            executes the MoneyGraph SDK operation, and returns structured results to the GPT.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">User Request</h3>
              <p className="text-sm text-gray-400">User asks GPT to send payment</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Tool Call</h3>
              <p className="text-sm text-gray-400">GPT triggers MoneyGraph tool</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400 mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">SDK Execution</h3>
              <p className="text-sm text-gray-400">Your server calls MoneyGraph SDK</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Implementation Guide</h2>

          <StepList
            steps={[
              {
                title: 'Install MoneyGraph SDK',
                description: 'Add the SDK to your Node.js backend that will handle GPT tool calls.',
                code: <CodeExample language="bash" code="npm install @moneygraph/sdk" />,
              },
              {
                title: 'Define MoneyGraph Tools',
                description: 'Create function definitions that describe MoneyGraph operations to ChatGPT. These tools tell the GPT what financial operations are available.',
                code: (
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4 border-2 border-yellow-500/50">
                      <div className="flex items-start">
                        <div className="text-yellow-400 font-bold mr-3">⚠️</div>
                        <div>
                          <div className="font-semibold text-yellow-400 mb-1">Verification Required</div>
                          <p className="text-sm text-gray-400">
                            Tool schemas must exactly match the MoneyGraph API specification.
                            Consult the SDK documentation for accurate parameter names and types.
                          </p>
                        </div>
                      </div>
                    </div>
                    <CodeExample
                      language="json"
                      code={toolDefinitionPlaceholder}
                      title="Conceptual Tool Definition"
                    />
                  </div>
                ),
              },
              {
                title: 'Implement Tool Handler',
                description: 'Create a backend function that receives tool calls from ChatGPT and executes MoneyGraph SDK operations.',
                code: (
                  <div className="space-y-4">
                    <div className="glass rounded-lg p-4 border-2 border-yellow-500/50">
                      <div className="flex items-start">
                        <div className="text-yellow-400 font-bold mr-3">⚠️</div>
                        <div>
                          <div className="font-semibold text-yellow-400 mb-1">SDK Verification Required</div>
                          <p className="text-sm text-gray-400">
                            This code is conceptual. Before use, verify against <code className="text-cyan-400">@moneygraph/sdk</code> v2.0.2:
                            import paths, client initialization, method names, parameter structure, and response format.
                          </p>
                        </div>
                      </div>
                    </div>
                    <CodeExample
                      language="typescript"
                      code={handlerPlaceholder}
                      filename="handler.ts (Conceptual - Requires Verification)"
                    />
                  </div>
                ),
              },
              {
                title: 'Configure GPT with Tools',
                description: 'In the ChatGPT custom GPT builder or API, register your MoneyGraph tools with the function definitions and your backend endpoint.',
              },
              {
                title: 'Test and Deploy',
                description: 'Test your integration in sandbox mode before deploying to production. Verify all tool calls work correctly and error handling is robust.',
              },
            ]}
          />
        </div>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <PillTag variant="success"><span className="mr-2">✓</span></PillTag>
              <span className="ml-3">Always validate tool call parameters before passing to MoneyGraph SDK</span>
            </li>
            <li className="flex items-start">
              <PillTag variant="success"><span className="mr-2">✓</span></PillTag>
              <span className="ml-3">Store API keys securely in environment variables, never in GPT configuration</span>
            </li>
            <li className="flex items-start">
              <PillTag variant="success"><span className="mr-2">✓</span></PillTag>
              <span className="ml-3">Implement proper error handling and return clear error messages to the GPT</span>
            </li>
            <li className="flex items-start">
              <PillTag variant="success"><span className="mr-2">✓</span></PillTag>
              <span className="ml-3">Use structured responses that the GPT can easily parse and present to users</span>
            </li>
            <li className="flex items-start">
              <PillTag variant="success"><span className="mr-2">✓</span></PillTag>
              <span className="ml-3">Test in sandbox environment before enabling production payments</span>
            </li>
            <li className="flex items-start">
              <PillTag variant="success"><span className="mr-2">✓</span></PillTag>
              <span className="ml-3">Implement rate limiting and usage monitoring for financial operations</span>
            </li>
          </ul>
        </div>

        <div className="glass rounded-lg p-6 bg-cyan-500/10 border border-cyan-500/30">
          <h3 className="font-semibold mb-2 text-cyan-400">📘 SDK Documentation</h3>
          <p className="text-sm text-gray-400 mb-3">
            For accurate implementation details, always refer to the official SDK documentation:
          </p>
          <a
            href="https://www.npmjs.com/package/@moneygraph/sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 font-semibold"
          >
            View @moneygraph/sdk on npm →
          </a>
        </div>
      </div>
    </div>
  );
}
