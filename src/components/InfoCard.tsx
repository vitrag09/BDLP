import { LucideIcon } from 'lucide-react';

interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function InfoCard({ title, icon: Icon, children, className = '' }: InfoCardProps) {
  return (
    <div className={`bg-white rounded-lg p-6 shadow-lg border border-orange-100 relative ${className}`}>
      {/* Decorative Corner Patterns */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-300"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-300"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-300"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-300"></div>
      
      <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
        <Icon className="text-orange-600" />
        <span className="font-serif">।। {title} ।।</span>
      </h3>
      {children}
    </div>
  );
}