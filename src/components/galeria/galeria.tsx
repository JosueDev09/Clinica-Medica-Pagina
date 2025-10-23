"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

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

const ImageCard = ({ imagen, titulo, categoria, onClick } : { imagen: string; titulo: string; categoria: string; onClick: () => void; }) => {
  return (
    <div
      onClick={onClick}
      className="group relative backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105"
    >
      <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-50">
        {/* Placeholder con gradiente y texto */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-4">
            <div className="text-6xl mb-2">🏥</div>
            <p className="text-gray-600 font-semibold">{titulo}</p>
          </div>
        </div>
        
        {/* Overlay hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="p-3 bg-white rounded-full shadow-lg">
              <ZoomIn size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-2">
          {categoria}
        </span>
        <h3 className="font-bold text-gray-800">{titulo}</h3>
      </div>
    </div>
  );
};

const Modal = ({ imagen, onClose, onNext, onPrev, showNav } : { imagen: { titulo: string; categoria: string; descripcion: string; }; onClose: () => void; onNext: () => void; onPrev: () => void; showNav: boolean; }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
      >
        <X size={32} className="text-white" />
      </button>

      {showNav && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
          >
            <ChevronRight size={32} className="text-white" />
          </button>
        </>
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
      >
        <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-50 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-8xl mb-4">🏥</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{imagen.titulo}</h3>
            <p className="text-gray-600">{imagen.categoria}</p>
          </div>
        </div>
        <div className="p-6 bg-white">
          <p className="text-gray-600">{imagen.descripcion}</p>
        </div>
      </div>
    </div>
  );
};

const CategoryButton = ({ active, onClick, children } : { active: boolean; onClick: () => void; children: React.ReactNode; }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
        active
          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
          : "bg-white/60 text-gray-700 hover:bg-white/80"
      }`}
    >
      {children}
    </button>
  );
};

export default function Galeria() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [indiceImagen, setIndiceImagen] = useState(0);

  const imagenes = [
    {
      titulo: "Sala de Espera Principal",
      categoria: "Instalaciones",
      descripcion: "Cómoda sala de espera con mobiliario moderno y climatización.",
    },
    {
      titulo: "Consultorio Médico",
      categoria: "Consultorios",
      descripcion: "Consultorios equipados con tecnología de última generación.",
    },
    {
      titulo: "Laboratorio Clínico",
      categoria: "Laboratorio",
      descripcion: "Laboratorio certificado con equipos de alta precisión.",
    },
    {
      titulo: "Área de Urgencias",
      categoria: "Urgencias",
      descripcion: "Área de urgencias preparada para atención inmediata.",
    },
    {
      titulo: "Sala de Procedimientos",
      categoria: "Consultorios",
      descripcion: "Sala especializada para procedimientos médicos menores.",
    },
    {
      titulo: "Equipo de Imagenología",
      categoria: "Tecnología",
      descripcion: "Equipos de rayos X y ultrasonido de última generación.",
    },
    {
      titulo: "Recepción",
      categoria: "Instalaciones",
      descripcion: "Área de recepción moderna y acogedora para nuestros pacientes.",
    },
    {
      titulo: "Consultorio Pediátrico",
      categoria: "Consultorios",
      descripcion: "Consultorio especializado con ambiente amigable para niños.",
    },
    {
      titulo: "Área de Toma de Muestras",
      categoria: "Laboratorio",
      descripcion: "Espacio cómodo y privado para la toma de muestras.",
    },
    {
      titulo: "Farmacia Interna",
      categoria: "Instalaciones",
      descripcion: "Farmacia con medicamentos de calidad y precios accesibles.",
    },
    {
      titulo: "Sala de Telemedicina",
      categoria: "Tecnología",
      descripcion: "Espacio equipado para consultas virtuales de alta calidad.",
    },
    {
      titulo: "Equipo Médico Especializado",
      categoria: "Tecnología",
      descripcion: "Tecnología médica avanzada para diagnósticos precisos.",
    },
  ];

  const categorias = [
    { id: "todas", label: "Todas" },
    { id: "Instalaciones", label: "Instalaciones" },
    { id: "Consultorios", label: "Consultorios" },
    { id: "Laboratorio", label: "Laboratorio" },
    { id: "Tecnología", label: "Tecnología" },
    { id: "Urgencias", label: "Urgencias" },
  ];

  const imagenesFiltradas =
    categoriaActiva === "todas"
      ? imagenes
      : imagenes.filter((img) => img.categoria === categoriaActiva);

  const abrirModal = (imagen:any, index:any) => {
    setImagenSeleccionada(imagen);
    setIndiceImagen(index);
  };

  const cerrarModal = () => {
    setImagenSeleccionada(null);
  };

  const siguienteImagen = () => {
    const nuevoIndice = (indiceImagen + 1) % imagenesFiltradas.length;
    setIndiceImagen(nuevoIndice);
    //setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  const imagenAnterior = () => {
    const nuevoIndice =
      (indiceImagen - 1 + imagenesFiltradas.length) % imagenesFiltradas.length;
    setIndiceImagen(nuevoIndice);
    //setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  return (
    <section
      id="galeria"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={7} left={7} top={16} size={3.3} opacity={0.13} />
      <FloatingCross delay={1.3} duration={8.2} left={91} top={27} size={3.7} opacity={0.11} />
      <FloatingCross delay={0.7} duration={6.8} left={13} top={72} size={2.4} opacity={0.17} />
      <FloatingCross delay={1.9} duration={8.8} left={86} top={84} size={3.2} opacity={0.14} />
      <FloatingCross delay={0.4} duration={7.3} left={47} top={11} size={2.1} opacity={0.19} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <div className="inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
              <ColourfulText text="Nuestras Instalaciones" />
            </div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conoce nuestras modernas instalaciones diseñadas para brindarte{" "}
            <span className="font-semibold text-blue-600">
              comodidad y seguridad
            </span>{" "}
            en cada visita.
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <CategoryButton
              key={cat.id}
              active={categoriaActiva === cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
            >
              {cat.label}
            </CategoryButton>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {imagenesFiltradas.map((imagen, index) => (
            <ImageCard
              key={index}
              imagen={imagen as any}
              titulo={imagen.titulo}
              categoria={imagen.categoria}
              onClick={() => abrirModal(imagen, index)}
            />
          ))}
        </div>

        {/* Banner informativo */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/40 rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            ¿Te gustaría conocer nuestras instalaciones?
          </h3>
          <p className="text-gray-600 mb-6">
            Agenda una visita y conoce personalmente nuestras modernas instalaciones
            y equipo médico de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/agendarCita"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Agendar Visita
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-200"
            >
              Más Información
            </a>
          </div>
        </div>
      </div>

      {/* Modal de imagen */}
      {imagenSeleccionada && (
        <Modal
          imagen={imagenSeleccionada}
          onClose={cerrarModal}
          onNext={siguienteImagen}
          onPrev={imagenAnterior}
          showNav={imagenesFiltradas.length > 1}
        />
      )}

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