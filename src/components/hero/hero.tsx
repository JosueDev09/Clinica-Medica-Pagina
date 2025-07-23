"use client";
import { useState, useEffect } from "react";
import CrucesAnimadas from "../ui/cruces/cruces";

const frases = [
  "Tu salud es nuestra prioridad.",
  "Cuidamos de ti y de los que más amas.",
  "Atención médica con calidad humana.",
  "Agenda tu cita en línea, sin complicaciones.",
  "Tu bienestar es nuestro compromiso diario.",
];




export default function Hero() {

  const [indice, setIndice] = useState(0);
  const [visible, setVisible] = useState(true);
  
    useEffect(() => {
    const intervalo = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndice((prev) => (prev + 1) % frases.length);
        setVisible(true);
      }, 500); // tiempo del fade-out antes de cambiar
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);
 
  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-white to-blue-50 flex items-center justify-center text-center px-6">

      {/* Cruces flotantes */}
      <CrucesAnimadas />
      {/* Contenido principal */}
     <div className="relative z-10 animate-float">
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-800 transition-opacity duration-500 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {frases[indice]}
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Consulta con especialistas certificados y agenda en línea.
        </p>
        <a
          href="/public/agendar"
          className="mt-6 inline-block bg-blue-200 text-white px-6 py-3 rounded-md shadow hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          Agendar cita
        </a>
      </div>
    </section>
  );
}
