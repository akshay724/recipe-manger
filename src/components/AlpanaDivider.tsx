import React from 'react';

interface AlpanaDividerProps {
  className?: string;
  variant?: 'simple' | 'elaborate' | 'kantha';
}

export const AlpanaDivider: React.FC<AlpanaDividerProps> = ({ className = '', variant = 'simple' }) => {
  if (variant === 'kantha') {
    return (
      <div className={`flex items-center justify-center my-6 text-terracotta-400 select-none overflow-hidden ${className}`}>
        <div className="h-[2px] w-16 bg-gradient-to-r from-transparent to-terracotta-300"></div>
        <div className="mx-3 flex items-center space-x-1.5 text-xs tracking-widest uppercase font-serif text-terracotta-700">
          <span>◆</span>
          <span className="text-[10px]">❖</span>
          <span>◆</span>
        </div>
        <div className="h-[2px] w-16 bg-gradient-to-l from-transparent to-terracotta-300"></div>
      </div>
    );
  }

  if (variant === 'elaborate') {
    return (
      <div className={`flex items-center justify-center my-8 text-sindoor-700 select-none ${className}`}>
        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-terracotta-300 to-sindoor-600"></div>
        <svg className="w-8 h-8 mx-3 text-sindoor-700 opacity-90" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="10" />
          <circle cx="50" cy="20" r="7" />
          <circle cx="50" cy="80" r="7" />
          <circle cx="20" cy="50" r="7" />
          <circle cx="80" cy="50" r="7" />
          <path d="M50 30 C40 40 40 60 50 70 C60 60 60 40 50 30 Z" fill="none" stroke="currentColor" strokeWidth="3" />
          <path d="M30 50 C40 40 60 40 70 50 C60 60 40 60 30 50 Z" fill="none" stroke="currentColor" strokeWidth="3" />
        </svg>
        <div className="h-[1px] w-24 bg-gradient-to-l from-transparent via-terracotta-300 to-sindoor-600"></div>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center my-6 select-none ${className}`}>
      <div className="h-[1px] flex-1 max-w-[80px] bg-terracotta-200"></div>
      <div className="mx-3 flex items-center space-x-1 text-mustard-600">
        <span className="w-1.5 h-1.5 rounded-full bg-sindoor-600"></span>
        <span className="w-2.5 h-2.5 rotate-45 border border-terracotta-500 bg-cream-100"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-sindoor-600"></span>
      </div>
      <div className="h-[1px] flex-1 max-w-[80px] bg-terracotta-200"></div>
    </div>
  );
};
