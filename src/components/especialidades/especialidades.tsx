// components/Especialidades.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ColourfulText } from "../ui/colourful-text/colourful-text";

export default function Especialidades() {
  const especialidades = [
    { nombre: "Cardiología", descripcion: "Cuidado del corazón y sistema circulatorio." },
    { nombre: "Pediatría", descripcion: "Atención integral a niños y adolescentes." },
    { nombre: "Dermatología", descripcion: "Salud de la piel, cabello y uñas." },
    { nombre: "Ginecología", descripcion: "Salud femenina y planificación familiar." },
    { nombre: "Neurología", descripcion: "Diagnóstico de enfermedades neurológicas." },
    { nombre: "Medicina Interna", descripcion: "Tratamiento integral de adultos." },
  ];

  return (
    <section id="especialidades" className="relative h-[45rem] py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-center mb-16">
          <div className="inline-block relative top-10 mb-[40px] px-6 py-4 rounded-2xl backdrop-blur-xl bg-blue/30 border border-white/30 shadow-lg ring-1 ring-white/20">
            <ColourfulText text="Nuestras Especialidades" />
          </div>
        </h1>

     <Swiper
        modules={[Autoplay]}
        loop={true}
        grabCursor={true}
        slidesPerView={"auto"}
        speed={6000} // velocidad más alta para movimiento continuo
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {especialidades.map((item, i) => (
          <SwiperSlide key={i} className="w-[200px]">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center max-w-sm mx-auto border border-blue-100 hover:shadow-xl transition">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-md" />
              <h4 className="font-bold text-xl text-blue-900">{item.nombre}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.descripcion}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      {/* Gradientes decorativos */}
      <div className="absolute top-0 left-0 w-full h-40 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>
    </section>
  );
}
