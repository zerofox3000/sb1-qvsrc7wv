interface PillTagProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'info';
}

export default function PillTag({ children, variant = 'default' }: PillTagProps) {
  const variants = {
    default: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    success: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    info: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${variants[variant]}`}>
      {children}
    </span>
  );
}
