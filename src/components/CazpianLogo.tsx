export function CazpianLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hexagon background */}
      <path 
        d="M100 10 L170 50 L170 130 L100 170 L30 130 L30 50 Z" 
        fill="currentColor" 
        className="text-primary"
      />
      
      {/* Inner white background */}
      <path 
        d="M100 25 L155 55 L155 125 L100 155 L45 125 L45 55 Z" 
        fill="white"
      />
      
      {/* Letter C */}
      <path 
        d="M85 60 Q65 60 65 80 L65 120 Q65 140 85 140 L110 140 L110 125 L85 125 Q80 125 80 120 L80 80 Q80 75 85 75 L110 75 L110 60 Z" 
        fill="currentColor"
        className="text-primary"
      />
      
      {/* Network nodes */}
      <circle cx="120" cy="75" r="4" fill="currentColor" className="text-primary" />
      <circle cx="135" cy="85" r="4" fill="currentColor" className="text-primary" />
      <circle cx="130" cy="105" r="4" fill="currentColor" className="text-primary" />
      <circle cx="115" cy="95" r="4" fill="currentColor" className="text-primary" />
      
      {/* Connection lines */}
      <line x1="120" y1="75" x2="135" y2="85" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <line x1="135" y1="85" x2="130" y2="105" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <line x1="130" y1="105" x2="115" y2="95" stroke="currentColor" strokeWidth="2" className="text-primary" />
      <line x1="115" y1="95" x2="120" y2="75" stroke="currentColor" strokeWidth="2" className="text-primary" />
      
      {/* Wave patterns */}
      <path 
        d="M45 120 Q55 115 65 120 Q75 125 85 120 Q95 115 105 120 Q115 125 125 120 Q135 115 145 120 Q155 125 165 120" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        className="text-primary"
      />
      <path 
        d="M45 130 Q55 125 65 130 Q75 135 85 130 Q95 125 105 130 Q115 135 125 130 Q135 125 145 130 Q155 135 165 130" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        className="text-primary"
      />
      <path 
        d="M45 140 Q55 135 65 140 Q75 145 85 140 Q95 135 105 140 Q115 145 125 140 Q135 135 145 140 Q155 145 165 140" 
        stroke="currentColor" 
        strokeWidth="3" 
        fill="none"
        className="text-primary"
      />
    </svg>
  );
}