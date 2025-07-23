"use client";
import { useEffect, useState } from "react";

type Cruz = { top: string; left: string; delay: string };

export default function CrucesAnimadas() {
  const [cruces, setCruces] = useState<Cruz[]>([]);

  useEffect(() => {
    // Esto solo corre en el cliente (navegador), no en SSR
    const generadas = Array.from({ length: 25 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setCruces(generadas);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {cruces.map((cruz, i) => (
        <div
          key={i}
          className="cross animate-fadeInOut"
          style={{
            top: cruz.top,
            left: cruz.left,
            animationDelay: cruz.delay,
          }}
        >
          ✚
        </div>
      ))}
    </div>
  );
}
