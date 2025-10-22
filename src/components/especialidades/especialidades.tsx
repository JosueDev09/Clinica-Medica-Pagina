"use client";

import { useState } from "react";
import {
  Heart,
  Baby,
  Brain,
  Bone,
  Eye,
  Stethoscope,
  Activity,
  Pill,
  Users,
  Scissors,
  Thermometer,
  AlertCircle,
} from "lucide-react";

const ColourfulText = ({ text } : { text: string; }) => {
  return (
    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">
      {text}
    </span>
  );
};

const FloatingCross = ({ delay, duration, left, top, size, opacity } : { delay: number; duration: number; left: number; top: number; size: number; opacity: number; }) => {
  return (
    <div
      className="absolute text-blue-200 pointer-events-none animate-float"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        fontSize: `${size}rem`,
        opacity: opacity,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      +
    </div>
  );
};

const EspecialidadCard = ({ icon: Icon, nombre, descripcion, doctores, index } : { icon: React.ElementType; nombre: string; descripcion: string; doctores: number; index: number; }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center text-center">
        <div
          className={`mb-4 p-5 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl text-white shadow-lg transition-all duration-300 ${
            isHovered ? "rotate-12 scale-110" : ""
          }`}
        >
          <Icon size={40} />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-3">{nombre}</h3>
        
        <p className="text-gray-600 leading-relaxed mb-4 min-h-[60px]">
          {descripcion}
        </p>

        <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
          <Users size={18} />
          <span>{doctores} especialistas</span>
        </div>

        <button className="mt-4 w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 hover:shadow-lg">
          Agendar Consulta
        </button>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, children } : { active: boolean; onClick: () => void; children: React.ReactNode; }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
          : "bg-white/60 text-gray-700 hover:bg-white/80"
      }`}
    >
      {children}
    </button>
  );
};

export default function NuestrasEspecialidades() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");

  const especialidades = [
    {
      icon: Heart,
      nombre: "Cardiología",
      descripcion: "Diagnóstico y tratamiento de enfermedades del corazón y sistema cardiovascular.",
      doctores: 3,
      categoria: "adultos",
    },
    {
      icon: Baby,
      nombre: "Pediatría",
      descripcion: "Atención médica integral para bebés, niños y adolescentes.",
      doctores: 4,
      categoria: "pediatria",
    },
    {
      icon: Brain,
      nombre: "Neurología",
      descripcion: "Tratamiento de trastornos del sistema nervioso y enfermedades cerebrales.",
      doctores: 2,
      categoria: "adultos",
    },
    {
      icon: Bone,
      nombre: "Traumatología",
      descripcion: "Especialistas en lesiones, fracturas y enfermedades del sistema musculoesquelético.",
      doctores: 3,
      categoria: "adultos",
    },
    {
      icon: Eye,
      nombre: "Oftalmología",
      descripcion: "Cuidado integral de la salud visual y tratamiento de enfermedades oculares.",
      doctores: 2,
      categoria: "todas",
    },
    {
      icon: Stethoscope,
      nombre: "Medicina Interna",
      descripcion: "Atención integral de adultos con enfermedades complejas y crónicas.",
      doctores: 5,
      categoria: "adultos",
    },
    {
      icon: Activity,
      nombre: "Ginecología",
      descripcion: "Salud integral de la mujer, embarazo y planificación familiar.",
      doctores: 3,
      categoria: "mujeres",
    },
    {
      icon: Pill,
      nombre: "Endocrinología",
      descripcion: "Tratamiento de diabetes, tiroides y otros trastornos hormonales.",
      doctores: 2,
      categoria: "adultos",
    },
    {
      icon: AlertCircle,
      nombre: "Dermatología",
      descripcion: "Diagnóstico y tratamiento de enfermedades de la piel, cabello y uñas.",
      doctores: 2,
      categoria: "todas",
    },
    {
      icon: Scissors,
      nombre: "Cirugía General",
      descripcion: "Procedimientos quirúrgicos con tecnología de vanguardia.",
      doctores: 4,
      categoria: "adultos",
    },
    {
      icon: Thermometer,
      nombre: "Medicina General",
      descripcion: "Primera línea de atención para diagnóstico y tratamiento de enfermedades comunes.",
      doctores: 6,
      categoria: "todas",
    },
    {
      icon: Brain,
      nombre: "Psiquiatría",
      descripcion: "Salud mental y tratamiento de trastornos psicológicos y emocionales.",
      doctores: 2,
      categoria: "todas",
    },
  ];

  const categorias = [
    { id: "todas", label: "Todas las Especialidades" },
    { id: "adultos", label: "Adultos" },
    { id: "pediatria", label: "Pediatría" },
    { id: "mujeres", label: "Salud de la Mujer" },
  ];

  const especialidadesFiltradas =
    categoriaActiva === "todas"
      ? especialidades
      : especialidades.filter((esp) => esp.categoria === categoriaActiva);

  return (
    <section
      id="especialidades"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={7} left={5} top={15} size={3.5} opacity={0.12} />
      <FloatingCross delay={1.5} duration={8.5} left={90} top={25} size={4} opacity={0.1} />
      <FloatingCross delay={0.5} duration={6} left={12} top={70} size={2.5} opacity={0.18} />
      <FloatingCross delay={2} duration={9} left={85} top={80} size={3} opacity={0.15} />
      <FloatingCross delay={1} duration={7.5} left={50} top={10} size={2} opacity={0.2} />
      <FloatingCross delay={0.8} duration={8} left={30} top={45} size={2.8} opacity={0.14} />
      <FloatingCross delay={1.8} duration={7} left={70} top={55} size={2.3} opacity={0.16} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <div className="inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
              <ColourfulText text="Nuestras Especialidades" />
            </div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Contamos con especialistas certificados en las principales áreas de la
            medicina para brindarte{" "}
            <span className="font-semibold text-blue-600">
              atención integral y personalizada
            </span>
            .
          </p>
        </div>

        {/* Tabs de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <TabButton
              key={cat.id}
              active={categoriaActiva === cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
            >
              {cat.label}
            </TabButton>
          ))}
        </div>

        {/* Grid de especialidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {especialidadesFiltradas.map((especialidad, index) => (
            <EspecialidadCard
              key={index}
              icon={especialidad.icon}
              nombre={especialidad.nombre}
              descripcion={especialidad.descripcion}
              doctores={especialidad.doctores}
              index={index}
            />
          ))}
        </div>

        {/* Banner informativo */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/40 rounded-2xl p-8 shadow-lg text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              ¿No encuentras la especialidad que necesitas?
            </h3>
            <p className="text-gray-600 mb-6">
              Contamos con una red de especialistas asociados que pueden atenderte.
              Contáctanos para más información sobre otras especialidades médicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Contactar
              </a>
              <a
                href="/agendarCita"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-200"
              >
                Agendar Cita
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}