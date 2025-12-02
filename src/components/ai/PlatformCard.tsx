import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface PlatformCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  badge?: string;
}

export default function PlatformCard({ name, description, icon: Icon, href, badge }: PlatformCardProps) {
  return (
    <Link to={href} className="glass-strong rounded-xl p-6 hover:scale-105 transition-all group">
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-10 h-10 text-cyan-400 group-hover:text-cyan-300 transition" />
        {badge && (
          <span className="px-2 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-400 rounded-full">
            {badge}
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="mt-4 text-cyan-400 font-semibold group-hover:text-cyan-300 transition">
        Learn more →
      </div>
    </Link>
  );
}
