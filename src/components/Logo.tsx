import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`flex items-center gap-2.5 select-none ${className}`}>
            {/* Icon Mark */}
            <div className="relative group">
                <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-white font-black text-xl italic tracking-tighter pr-0.5">M</span>
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-[var(--bg-primary)] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-pink-500 rounded-full border border-white/20 flex items-center justify-center">
                        <span className="text-[0.4rem] font-bold text-white">R</span>
                    </div>
                </div>
            </div>

            {/* Text Branding */}
            <div className="flex flex-col leading-none justify-center">
                <div className="flex items-center gap-0.5">
                    <span className="font-black text-xl tracking-tight text-[var(--text-main)]">MOIZ</span>
                    <span className="font-bold text-xl text-primary">RTO</span>
                </div>
                <span className="text-[0.65rem] font-bold text-[var(--text-muted)] tracking-[0.15em] uppercase">Services</span>
            </div>
        </div>
    );
};

export default Logo;
