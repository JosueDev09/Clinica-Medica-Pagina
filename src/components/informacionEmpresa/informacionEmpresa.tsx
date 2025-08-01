
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CrucesAnimadas from "../ui/cruces/cruces";
import  {ColourfulText}  from "../ui/colourful-text/colourful-text";
import { WobbleCard } from "../ui/wobble-card/wobble-card";
import { TextGenerateEffect } from "../ui/text-generate-effect/text-generate-effect";
import { ColourfulTextCopy } from "../ui/colourful-text-copy/colourful-text-copy";

const contenidoEmpresa = [
  {
    title: "¿Quiénes somos?",
    description:
      "Somos una clínica médica dedicada a brindar atención de calidad con un enfoque humano y tecnológico. Nuestro equipo está conformado por especialistas certificados con amplia experiencia.",
    image: "/assets/imagenesInfoEmpresa/info1.webp",
    },
  {
    title: "¿Qué ofrecemos?",
    description:
      "Ofrecemos consultas generales, especialidades médicas, laboratorio clínico, y diagnóstico por imagen, todo en un solo lugar y con atención personalizada.",
      image: "/assets/imagenesInfoEmpresa/info2.webp",
  },
  // {
  //   title: "Visión",
  //   description:
  //     "Ser la clínica de referencia en nuestra región por excelencia médica, calidad humana y tecnología de punta, enfocada siempre en el bienestar del paciente.",
  //     image: "/assets/imagenesInfoEmpresa/info3.jpg",
  // },
];

export default function InformacionEmpresa() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="informacion-empresa"
      className="relative py-20 bg-white h-auto w-full overflow-hidden"
      ref={ref}
    >
      <CrucesAnimadas />
      <motion.div
        className="container mx-auto px-6"
        style={{ y }}
      />
      <h1 className="text-4xl font-bold text-center mb-10">
        <div className="relative bottom-11 inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
          <ColourfulText text="Información Sobre Nosotros" />
        </div>
      </h1>
      
   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
  {contenidoEmpresa.map((item, index) => (
    <div
      key={index}
      className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Imagen siempre visible */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay con efecto glass */}
      <div className="absolute inset-0 bg-blue/30 backdrop-blur-md backdrop-brightness-75 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-center p-6">
        <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-3 animate-text-generate">
          
           <ColourfulTextCopy text={item.title} />
        </h3>
        
        {/*  */}
         <TextGenerateEffect words={item.description} />
      </div>
    </div>
  ))}
</div>

          {/* Gradientes */}
      <div className="absolute top-0 left-0 w-full h-9 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-9 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>
     
    </section>
  );
}
