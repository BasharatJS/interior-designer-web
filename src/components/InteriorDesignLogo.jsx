// Interior Design Logo Component - Replace MS with this beautiful logo

const InteriorDesignLogo = () => {
  return (
    <div className="logo-icon interior-logo">
      {/* Beautiful Interior Design SVG Logo */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        {/* Background Circle with Gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#F4D03F" />
          </linearGradient>
          <linearGradient
            id="houseGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8F9FA" />
          </linearGradient>
        </defs>

        {/* Main Circle Background */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="url(#logoGradient)"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="2"
        />

        {/* House Structure */}
        {/* Roof */}
        <path
          d="M25 45 L50 25 L75 45 L70 45 L50 30 L30 45 Z"
          fill="url(#houseGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
        />

        {/* Main House Body */}
        <rect
          x="30"
          y="45"
          width="40"
          height="30"
          fill="url(#houseGradient)"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          rx="2"
        />

        {/* Door */}
        <rect
          x="45"
          y="55"
          width="10"
          height="20"
          fill="rgba(139, 92, 246, 0.7)"
          rx="1"
        />

        {/* Door Handle */}
        <circle cx="52" cy="65" r="1" fill="rgba(244, 208, 63, 0.9)" />

        {/* Windows */}
        <rect
          x="35"
          y="50"
          width="6"
          height="6"
          fill="rgba(139, 92, 246, 0.6)"
          rx="1"
        />
        <rect
          x="59"
          y="50"
          width="6"
          height="6"
          fill="rgba(139, 92, 246, 0.6)"
          rx="1"
        />

        {/* Window Cross Lines */}
        <line
          x1="38"
          y1="50"
          x2="38"
          y2="56"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="0.5"
        />
        <line
          x1="35"
          y1="53"
          x2="41"
          y2="53"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="0.5"
        />
        <line
          x1="62"
          y1="50"
          x2="62"
          y2="56"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="0.5"
        />
        <line
          x1="59"
          y1="53"
          x2="65"
          y2="53"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="0.5"
        />

        {/* Chimney */}
        <rect
          x="60"
          y="30"
          width="4"
          height="10"
          fill="rgba(244, 208, 63, 0.8)"
          rx="0.5"
        />

        {/* Decorative Stars/Sparkles */}
        <g fill="rgba(255,255,255,0.8)">
          <path d="M20 25 L21 27 L23 26 L21 28 L22 30 L20 29 L18 30 L19 28 L17 26 L19 27 Z" />
          <path d="M80 65 L81 67 L83 66 L81 68 L82 70 L80 69 L78 70 L79 68 L77 66 L79 67 Z" />
        </g>

        {/* Moon/Sun in corner */}
        <circle
          cx="25"
          cy="35"
          r="3"
          fill="rgba(244, 208, 63, 0.7)"
          className="celestial-body"
        />
      </svg>
    </div>
  )
}

// CSS for the logo (add this to your Header.css)
/*
  .logo-icon.interior-logo {
    background: transparent !important;
    border-radius: 50%;
    overflow: visible;
    box-shadow: 0 4px 20px rgba(139, 92, 246, 0.3);
    transition: var(--transition);
  }
  
  .logo:hover .logo-icon.interior-logo {
    transform: rotate(5deg) scale(1.05);
    box-shadow: 0 8px 30px rgba(139, 92, 246, 0.5);
  }
  
  .logo-svg {
    transition: var(--transition);
  }
  
  .logo:hover .logo-svg {
    filter: drop-shadow(0 4px 8px rgba(244, 208, 63, 0.4));
  }
  
  .celestial-body {
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  @keyframes glow {
    from {
      opacity: 0.7;
    }
    to {
      opacity: 1;
    }
  }
  */

export default InteriorDesignLogo
