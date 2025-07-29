// components/Especialistas.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useMediaQuery } from "react-responsive";

export default function Especialistas() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const especialistas = [...Array(3)].map((_, i) => ({
    nombre: `Dr. Nombre ${i + 1}`,
    especialidad: "Especialidad",
  }));

  return (
    <section id="especialistas" className="h-[100vh] relative py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mt-[150px]">
        <h3 className="text-3xl font-semibold text-center mb-10">
          Conoce a nuestros especialistas
        </h3>

        {isMobile ? (
          <Swiper spaceBetween={20} slidesPerView={1} className="pb-10">
            {especialistas.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white p-6 rounded shadow text-center max-w-xs mx-auto">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full" />
                  <h4 className="font-bold text-lg">{item.nombre}</h4>
                  <p className="text-gray-600 text-sm">{item.especialidad}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {especialistas.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded shadow text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full" />
                <h4 className="font-bold text-lg">{item.nombre}</h4>
                <p className="text-gray-600 text-sm">{item.especialidad}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gradientes */}
      <div className="absolute top-0 left-0 w-full h-40 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>
    </section>
  );
}
