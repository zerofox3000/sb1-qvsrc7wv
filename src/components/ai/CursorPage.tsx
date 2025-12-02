import { Link } from 'react-router-dom';
import { ArrowLeft, Code } from 'lucide-react';
import CodeExample from './CodeExample';

export default function CursorPage() {
  const promptExample = `// In Cursor, write a comment like this:
// Initialize MoneyGraph client and create a function to send a payout

// Cursor will use the SDK types and documentation to generate code
// However, YOU MUST verify the generated code matches the actual SDK API`;

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
            <span className="gradient-text">MoneyGraph + Cursor</span>
          </h1>
        </div>

        <p className="text-xl text-gray-400 mb-12">
          Use MoneyGraph SDK with Cursor AI for intelligent code completion and generation
        </p>

        <div className="glass-strong rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-400">
            Cursor can help you write MoneyGraph integrations by understanding the SDK's TypeScript definitions
            and providing intelligent code completion. Install the SDK, and Cursor will suggest correct usage patterns.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">1. Install MoneyGraph SDK</h3>
            <CodeExample language="bash" code="npm install @moneygraph/sdk" />
            <p className="text-gray-400 mt-3 text-sm">
              Once installed, Cursor will have access to the SDK's TypeScript definitions for code completion.
            </p>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">2. Set Up Environment Variables</h3>
            <CodeExample
              language="bash"
              code={`# .env file
MONEYGRAPH_API_KEY=your_api_key_here
MONEYGRAPH_ENVIRONMENT=sandbox`}
            />
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3">3. Use Cursor AI to Generate Code</h3>
            <p className="text-gray-400 mb-4">
              Write descriptive comments in your code, and Cursor will generate implementations based on
              the MoneyGraph SDK's type definitions.
            </p>
            <CodeExample language="typescript" code={promptExample} />
            <div className="glass rounded-lg p-4 border-2 border-yellow-500/50 mt-4">
              <p className="text-sm text-yellow-400">
                ⚠️ Always verify that Cursor's generated code matches the actual SDK API. Review imports,
                method names, and parameters against the SDK documentation.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-strong rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Best Practices with Cursor</h2>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-start">
              <span className="text-emerald-400 mr-3">✓</span>
              <span>Install SDK before asking Cursor to generate MoneyGraph code</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-3">✓</span>
              <span>Write clear, specific comments about what you want to accomplish</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-3">✓</span>
              <span>Always verify generated code against SDK documentation</span>
            </li>
            <li className="flex items-start">
              <span className="text-emerald-400 mr-3">✓</span>
              <span>Use TypeScript for better type inference and error detection</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
