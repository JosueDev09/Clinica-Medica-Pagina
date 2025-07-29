"use client";

import { CardDemo } from "../ui/card-demo/card-demo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Servicios() {
  const servicios = [
    { icon: "📆", title: "Consultas generales", description: "Atención médica personalizada y rápida." },
    { icon: "🩺", title: "Especialidades médicas", description: "Acceso a especialistas certificados." },
    { icon: "💉", title: "Laboratorio clínico", description: "Resultados rápidos y confiables." },
  ];

  return (
    <section id="servicios" className="py-20 bg-blue-100 relative h-auto w-full overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10">Nuestros Servicios</h2>

      {/* Slider en móviles */}
      <div className="block md:hidden px-6">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
          grabCursor={true}
        >
          {servicios.map((servicio, i) => (
            <SwiperSlide key={i}>
              <CardDemo
                title={servicio.title}
               // description={servicio.description}
                icon={servicio.icon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid en desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 justify-items-center">
        {servicios.map((servicio, i) => (
          <CardDemo
            key={i}
            title={servicio.title}
           // description={servicio.description}
            icon={servicio.icon}
          />
        ))}
      </div>
    </section>
  );
}