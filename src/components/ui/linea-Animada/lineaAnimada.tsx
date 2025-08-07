// src/components/ui/LineaSignosVitales.tsx
"use client";

export default function LineaSignosVitales() {
  return (
    <div
      className="relative w-full h-20 overflow-hidden bg-transparent"
      data-scroll
      data-scroll-speed="2"
    >
      {/* Línea animada de signos vitales */}
      <div className="absolute top-1/2 left-0 w-[200%] h-[2px] bg-transparent animate-vitals-line">
        <div className="h-full w-full bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 20"
            fill="none"
            stroke="limegreen"
            strokeWidth="2"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <polyline points="0,10 20,10 25,0 30,20 35,10 70,10 75,5 80,15 85,10 200,10" />
          </svg>
        </div>
      </div>
    </div>
  );
}
