"use client";
import { useState, useEffect } from "react";
import CrucesAnimadas from "../ui/cruces/cruces";
import { Button } from "../ui/borderHover/borderHover";






export default function Hero() {

  const frases = [
  "Tu salud es nuestra prioridad.",
  "Cuidamos de ti y de los que más amas.",
  "Atención médica con calidad humana.",
  "Agenda tu cita en línea, sin complicaciones.",
  "Tu bienestar es nuestro compromiso diario.",
];

const frasesSubtitulo = [
  "con horarios flexibles.",
  "con atención personalizada.",
  "con profesionales certificados.",
  "con tecnología avanzada.",
]

 const [indice, setIndice] = useState(0);
  const [textoVisible, setTextoVisible] = useState("");
  const [modo, setModo] = useState<"escribiendo" | "esperando" | "borrando">("escribiendo");
  const [visible, setVisible] = useState(true); // para el fade del h2

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const textoActual = frasesSubtitulo[indice] ?? "";

    if (modo === "escribiendo") {
      if (textoVisible.length < textoActual.length) {
        timeout = setTimeout(() => {
          setTextoVisible(textoActual.slice(0, textoVisible.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setModo("esperando"), 1000);
      }
    }

    if (modo === "esperando") {
      timeout = setTimeout(() => setModo("borrando"), 500);
    }

    if (modo === "borrando") {
      if (textoVisible.length > 0) {
        timeout = setTimeout(() => {
          setTextoVisible(textoActual.slice(0, textoVisible.length - 1));
        }, 50);
      } else {
        // Efecto de fade-out antes de cambiar frase
        setVisible(false);
        setTimeout(() => {
          setIndice((prev) => (prev + 1) % frases.length);
          setModo("escribiendo");
          setVisible(true); // fade-in
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [textoVisible, modo, indice]);
 
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
        <p className="mt-4 text-gray-600 text-lg min-h-[2.5rem]">
          Consulta con especialistas certificados y{" "}
          <span className="inline-block bg-blue-100/50 backdrop-blur-lg border border-white/60 text-blue-700 font-semibold px-4 py-1.5 rounded-xl shadow-md transition-all duration-300">
            {textoVisible}
            <span className="animate-pulse">|</span>
          </span>
        </p>
      
        <div className="mt-[40px] flex justify-center text-center">
            <Button
            borderRadius="1.1rem"
            className="bg-white dark:bg-blue-500 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer "
          >
            AGENDAR CITA
          </Button>
        </div>
      </div>
           {/* Difuminado blanco -> azul (parte inferior) */}
        <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
        </div>
     
      
    </section>
  );
}
