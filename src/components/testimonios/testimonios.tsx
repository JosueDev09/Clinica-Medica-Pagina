"use client";
import { useState, useEffect } from "react";

const testimonios = [
  {
    texto: "Atención excelente, el proceso fue muy rápido y cómodo.",
    autor: "Ana G.",
  },
  {
    texto: "Los doctores son muy profesionales y atentos. Me sentí seguro.",
    autor: "Luis R.",
  },
  {
    texto: "Todo fue muy organizado desde que llegué. Lo recomiendo ampliamente.",
    autor: "María S.",
  },
];

export default function Testimonios() {
  const [actual, setActual] = useState(0);
  const [visible, setVisible] = useState(true);

  const siguiente = () => {
    setVisible(false);
    setTimeout(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
      setVisible(true);
    }, 300); // tiempo para que se desvanezca antes de cambiar
  };

  const anterior = () => {
    setVisible(false);
    setTimeout(() => {
      setActual((prev) => (prev - 1 + testimonios.length) % testimonios.length);
      setVisible(true);
    }, 300);
  };

  // ⏱ Autoplay
  useEffect(() => {
    const intervalo = setInterval(() => {
      siguiente();
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  const { texto, autor } = testimonios[actual];

  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h3 className="text-3xl font-semibold mb-10">
          Lo que opinan nuestros pacientes
        </h3>

        <div className="relative h-32">
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <blockquote className="italic text-gray-700 text-lg">
              “{texto}”
            </blockquote>
            <p className="mt-2 font-medium">– {autor}</p>
          </div>
        </div>

        {/* <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={anterior}
            className="px-4 py-2 bg-white border border-blue-300 rounded hover:bg-blue-100 transition"
          >
            ◀
          </button>
          <button
            onClick={siguiente}
            className="px-4 py-2 bg-white border border-blue-300 rounded hover:bg-blue-100 transition"
          >
            ▶
          </button>
        </div> */}
      </div>
    </section>
  );
}
