interface NMIALogoProps {
  className?: string;
  showText?: boolean;
}

const NMIALogo = ({ className = "w-12 h-12", showText = false }: NMIALogoProps) => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className={`relative ${className}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Outer circle with gradient */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#003366" />
              <stop offset="50%" stopColor="#004d99" />
              <stop offset="100%" stopColor="#0077B6" />
            </linearGradient>
            <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0077B6" />
              <stop offset="100%" stopColor="#00a8e8" />
            </linearGradient>
            
            {/* Glow filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Background circle */}
          <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" opacity="0.95"/>
          
          {/* Inner ring */}
          <circle cx="50" cy="50" r="42" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
          
          {/* Stylized airplane - modern minimalist design */}
          <g transform="translate(50, 50)" filter="url(#glow)">
            {/* Airplane body */}
            <path
              d="M -8 0 L 15 0 L 18 -2 L 18 2 L 15 0 Z"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
            
            {/* Top wing */}
            <path
              d="M -5 -2 L 8 -12 L 10 -11 L -3 -2 Z"
              fill="url(#planeGradient)"
              opacity="0.9"
            />
            
            {/* Bottom wing */}
            <path
              d="M -5 2 L 8 12 L 10 11 L -3 2 Z"
              fill="url(#planeGradient)"
              opacity="0.9"
            />
            
            {/* Tail */}
            <path
              d="M -8 0 L -12 -6 L -10 -6 L -7 -1 Z"
              fill="white"
              opacity="0.8"
            />
            
            {/* Motion lines for speed effect */}
            <line x1="-18" y1="-8" x2="-12" y2="-8" stroke="white" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
            <line x1="-18" y1="-4" x2="-12" y2="-4" stroke="white" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
            <line x1="-18" y1="4" x2="-12" y2="4" stroke="white" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
            <line x1="-18" y1="8" x2="-12" y2="8" stroke="white" strokeWidth="1" opacity="0.4" strokeLinecap="round"/>
          </g>
          
          {/* "NMIA" text integrated into circle */}
          <text
            x="50"
            y="78"
            fontFamily="Arial, sans-serif"
            fontSize="10"
            fontWeight="bold"
            fill="white"
            textAnchor="middle"
            letterSpacing="1.5"
          >
            NMIA
          </text>
          
          {/* Decorative arc at bottom */}
          <path
            d="M 20 85 Q 50 88 80 85"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Optional text */}
      {showText && (
        <div className="leading-tight">
          <h1 className="text-[20px] font-bold text-[#003366] tracking-tight">
            NMIA Airport
          </h1>
          <p className="text-[11px] text-slate-600 font-medium tracking-wide">
            Navi Mumbai International Airport
          </p>
        </div>
      )}
    </div>
  );
};

export default NMIALogo;
