// components/VitalLines.tsx
"use client";

export default function VitalLines() {
  return (
    <div className="absolute top-1/2 left-0 w-full h-20 overflow-hidden z-0 pointer-events-none">
      <div className="vital-line-wrapper w-full h-full animate-vital-line flex relative">
        {/* Línea duplicada */}
        {[...Array(2)].map((_, index) => (
          <svg
            key={index}
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <path
              d="M 0 50 L 50 50 L 70 20 L 90 80 L 110 50 L 200 50 L 220 20 L 240 80 L 260 50 
                 L 300 50 L 320 20 L 340 80 L 360 50 L 400 50 L 420 20 L 440 80 L 460 50 
                 L 500 50 L 520 20 L 540 80 L 560 50 L 600 50 L 620 20 L 640 80 L 660 50 
                 L 700 50 L 720 20 L 740 80 L 760 50 L 800 50 L 820 20 L 840 80 L 860 50 
                 L 900 50 L 920 20 L 940 80 L 960 50 L 1000 50"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>
        ))}

        {/* Glow animado */}
        <div className="absolute top-0 left-0 w-[200%] h-full animate-glow-move pointer-events-none">
          <div className="absolute top-1/2 translate-y-[-50%] left-0 w-4 h-4 bg-white rounded-full blur-[8px] opacity-90 shadow-lg animate-pulse-glow"></div>
        </div>
      </div>
    </div>
  );
}

