"use client";

import  CardDemo  from "../ui/card-demo/card-demo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ColourfulText } from "../ui/colourful-text/colourful-text";
import VitalLines  from "../ui/VitalLines/VitalLines";

export default function Servicios() {
  //   const servicios = [
  //   { icon: "📆", title: "Consultas generales",description: "Atención médica personalizada y rápida.",image:"/assets/imagenesServicios/serv1.jpg",  },
  //   { icon: "🩺", title: "Especialidades médicas", description: "Acceso a especialistas certificados.",image:"/assets/imagenesServicios/serv2.jpg",  },
  //   { icon: "💉", title: "Laboratorio clínico", description: "Resultados rápidos y confiables.",image:"/assets/imagenesServicios/serv3.jpg", },
  // ];
  
  const servicios = [
    { icon: "📆", title: "Consultas generales",description: "Atención médica personalizada y rápida.",image:"/assets/imagenesServicios/serv1.webp",  },
    { icon: "🩺", title: "Especialidades médicas", description: "Acceso a especialistas certificados.",image:"/assets/imagenesServicios/serv2.webp",  },
    { icon: "💉", title: "Laboratorio clínico", description: "Resultados rápidos y confiables.",image:"/assets/imagenesServicios/serv3.webp", },
  ];

  return (
    <section id="servicios" className="py-20 bg-blue-100 relative h-auto w-full overflow-hidden">
      
     
      <h1 className="text-4xl font-bold text-center mb-10">
        <div className="relative bottom-9 inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
          <ColourfulText text="Nuestros Servicios" />
        </div>
      </h1>

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
               // icon={servicio.icon}
                imageUrl={servicio.image}
              // hoverImageUrl={servicio.video} // Assuming video is used as hover image
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid en desktop */}
    <div className="relative w-full mt-10">
    <VitalLines />
    <div className="hidden md:grid md:grid-cols-3 gap-6 justify-items-center relative z-10">
      {servicios.map((servicio, i) => (
        <CardDemo key={i} title={servicio.title} imageUrl={servicio.image} />
      ))}
    </div>
  </div>
    </section>
  );
}