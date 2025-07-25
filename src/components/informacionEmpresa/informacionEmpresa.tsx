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

  const fondoOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const fondoScale = useTransform(scrollYProgress, [0, 0.3], [1.1, 1]);

  return (
    <section ref={sectionRef} className="relative">
      {/* Fondo azul animado SOLO en esta sección */}
      <motion.div
        className="absolute inset-0 bg-blue-200 z-0"
        style={{ opacity: fondoOpacity, scale: fondoScale }}
      />

      {/* Contenido encima del fondo */}
      <div className="relative z-10">
        {contenidoEmpresa.map((item, index) => (
          <ScrollSection
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

function ScrollSection({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start 40%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section
      ref={ref}
      className="min-h-[60vh] flex items-center justify-center px-6 text-center"
    >
      <motion.div
        style={{ opacity, y: translateY, scale }}
        className="max-w-3xl text-white"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-white leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
}
