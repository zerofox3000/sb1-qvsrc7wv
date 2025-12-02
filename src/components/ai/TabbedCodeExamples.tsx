import { useState } from 'react';
import CodeExample from './CodeExample';

interface CodeTab {
  label: string;
  language: string;
  code: string;
  filename?: string;
}

interface TabbedCodeExamplesProps {
  title?: string;
  tabs: CodeTab[];
}

export default function TabbedCodeExamples({ title, tabs }: TabbedCodeExamplesProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-4">
      {title && <h3 className="text-xl font-semibold">{title}</h3>}
      <div className="flex space-x-2 border-b border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-semibold transition ${
              activeTab === index
                ? 'border-b-2 border-cyan-400 text-cyan-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CodeExample
        language={tabs[activeTab].language}
        code={tabs[activeTab].code}
        filename={tabs[activeTab].filename}
      />
    </div>
  );
}
