import React from 'react';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
          </linearGradient>
          <pattern id="wave-pattern" patternUnits="userSpaceOnUse" width="100" height="100">
            <path
              d="M0,50 Q25,45 50,50 T100,50"
              fill="none"
              stroke="url(#wave-gradient)"
              strokeWidth="2"
            />
          </pattern>
        </defs>
        <path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="url(#wave-gradient)"
        />
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern)" opacity="0.5" />
      </svg>
    </div>
  );
};

export default WaveBackground;