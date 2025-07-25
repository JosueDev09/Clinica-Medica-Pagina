
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const contenidoEmpresa = [
  {
    title: "¿Quiénes somos?",
    description:
      "Somos una clínica médica dedicada a brindar atención de calidad con un enfoque humano y tecnológico. Nuestro equipo está conformado por especialistas certificados con amplia experiencia.",
  },
  {
    title: "¿Qué ofrecemos?",
    description:
      "Ofrecemos consultas generales, especialidades médicas, laboratorio clínico, y diagnóstico por imagen, todo en un solo lugar y con atención personalizada.",
  },
  {
    title: "Visión",
    description:
      "Ser la clínica de referencia en nuestra región por excelencia médica, calidad humana y tecnología de punta, enfocada siempre en el bienestar del paciente.",
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
  const whiteOverlayOpacity = useTransform(scrollYProgress, [0.95, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-[270vh]">
      {/* Fondo azul */}
      <motion.div
        className="absolute inset-0 bg-blue-300 z-0"
        style={{ opacity: fondoOpacity, scale: fondoScale }}
      />

      {/* Capa blanca final */}
      <motion.div
        className="absolute inset-0 bg-white z-10"
        style={{ opacity: whiteOverlayOpacity }}
      />

      {/* Contenido fijo con transiciones por scroll */}
      <div className="sticky top-0 h-screen flex items-center justify-center z-20 px-6 text-center">
        <div className="relative w-full max-w-3xl mx-auto h-[400px]">
          {contenidoEmpresa.map((item, index) => {
            // Si es el último, le damos más espacio
            const isLast = index === contenidoEmpresa.length - 1;
            const start = 0.3 + index * 0.2;
            const end = isLast ? start + 0.4 : start + 0.25;

            const itemOpacity = useTransform(
              scrollYProgress,
              [start, (start + end) / 2, end],
              [0, 1, 0]
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
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full"
              >
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {item.title}
                </h2>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)] break-words whitespace-normal">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Espacio extra para scroll final */}
      <div className="h-[40vh]" />
    </section>
  );
}
