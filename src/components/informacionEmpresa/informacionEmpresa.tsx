
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import CrucesAnimadas from "../ui/cruces/cruces";

const contenidoEmpresa = [
  {
    title: "¿Quiénes somos?",
    description:
      "Somos una clínica médica dedicada a brindar atención de calidad con un enfoque humano y tecnológico. Nuestro equipo está conformado por especialistas certificados con amplia experiencia.",
    image: "/assets/imagenesInfoEmpresa/info1.jpg",
    },
  {
    title: "¿Qué ofrecemos?",
    description:
      "Ofrecemos consultas generales, especialidades médicas, laboratorio clínico, y diagnóstico por imagen, todo en un solo lugar y con atención personalizada.",
      image: "/assets/imagenesInfoEmpresa/info2.jpg",
  },
  {
    title: "Visión",
    description:
      "Ser la clínica de referencia en nuestra región por excelencia médica, calidad humana y tecnología de punta, enfocada siempre en el bienestar del paciente.",
      image: "/assets/imagenesInfoEmpresa/info3.jpg",
  },
];

export default function InformacionEmpresa() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const fondoOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const fondoScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);
  const whiteOverlayOpacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);


  return (
    <section ref={sectionRef} className="relative min-h-[350vh] ">

        {/* Espacio extra para scroll final */}
    
     {/* Fondo azul base */}
       <motion.div
            className="absolute inset-0 z-0 bg-gradient-to-b from-white "
            style={{ opacity: fondoOpacity, scale: fondoScale }}
            />
         <CrucesAnimadas/>
         
        {/* Difuminado azul -> blanco (parte superior) */}
        <div className="absolute top-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
        </div>

        {/* Difuminado blanco -> azul (parte inferior) */}
        <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
        </div>

      {/* Contenido fijo con transiciones por scroll */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-20 px-6 text-center">
        <div className="relative xl:w-[50%] max-w-3xl mx-auto h-[200px]">
          {contenidoEmpresa.map((item, index) => {
            // Si es el último, le damos más espacio
            const isLast = index === contenidoEmpresa.length;
            const start = 0.1 + index * 0.2;
            const end = isLast ? start + 0.1 : start + 0.2;

            const itemOpacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 2, 0]
            );
            const itemY = useTransform(scrollYProgress, [start, end], [40, 0]);
            const itemScale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

            return (
              <motion.div
                key={index}
                style={{
                  opacity: itemOpacity,
                  y: itemY,
                  scale: itemScale,
                  position: "relative",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center", 
                  transition: "transform 0.3s ease-out",          
                  top: `${index * 10}vh`, // Espacio entre cada item
                }}
                className="bg-blue-100/40 backdrop-blur-3xl `p-8 rounded-lg shadow-lg xl:w-full"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 ">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-black leading-relaxed  break-words whitespace-normal">
                  {item.description}
                </p>

                <img
                    src={item.image}
                    alt={item.title}
                    className="xl:w-[60%] lg:w-[50%] max-w-md mx-auto mt-6 rounded-lg shadow-lg"
                    />

          
              </motion.div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}
