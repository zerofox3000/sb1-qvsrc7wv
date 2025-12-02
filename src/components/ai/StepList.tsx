import { CheckCircle } from 'lucide-react';

interface Step {
  title: string;
  description: string;
  code?: React.ReactNode;
}

interface StepListProps {
  steps: Step[];
}

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="flex">
          <div className="flex-shrink-0 mr-4">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center font-bold text-cyan-400">
              {index + 1}
            </div>
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-400 mb-4">{step.description}</p>
            {step.code && <div className="mt-4">{step.code}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
