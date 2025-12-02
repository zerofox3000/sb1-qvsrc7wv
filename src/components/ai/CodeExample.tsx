import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeExampleProps {
  title?: string;
  language: string;
  code: string;
  filename?: string;
}

export default function CodeExample({ title, language, code, filename }: CodeExampleProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-strong rounded-xl overflow-hidden">
      {(title || filename) && (
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-700">
          <div>
            {title && <div className="font-semibold">{title}</div>}
            {filename && <div className="text-sm text-gray-400">{filename}</div>}
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-3 py-1 rounded-lg glass hover:glass-strong transition text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        {!title && !filename && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-lg glass hover:glass-strong transition"
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        )}
        <pre className="p-4 overflow-x-auto">
          <code className={`language-${language} text-sm`}>{code}</code>
        </pre>
      </div>
    </div>
  );
}
