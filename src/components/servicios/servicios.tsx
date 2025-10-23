"use client";

import { useState } from "react";
import {
  Stethoscope,
  FlaskConical,
  Heart,
  Scan,
  Syringe,
  Ambulance,
  Video,
  Clipboard,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
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

const ServicioCard = ({ icon: Icon, titulo, descripcion, caracteristicas, index } : { icon: React.ElementType; titulo: string; descripcion: string; caracteristicas: string[]; index: number; }) => {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <div
      className="backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl text-white shadow-lg">
          <Icon size={32} />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
          <p className="text-gray-600 leading-relaxed">{descripcion}</p>
        </div>
      </div>

      <button
        onClick={() => setMostrarDetalles(!mostrarDetalles)}
        className="text-blue-600 font-semibold hover:text-cyan-500 transition-colors duration-300 flex items-center gap-2 mb-3"
      >
        {mostrarDetalles ? "Ver menos" : "Ver detalles"}
        <span
          className={`transition-transform duration-300 ${
            mostrarDetalles ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          mostrarDetalles ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-2 pt-4 border-t border-gray-200">
          {caracteristicas.map((caracteristica: string, idx: number) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-green-500" />
              <span>{caracteristica}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const VentajaCard = ({ icon: Icon, titulo, descripcion }: { icon: React.ElementType; titulo: string; descripcion: string; }) => {
  return (
    <div className="backdrop-blur-xl bg-white/40 border border-white/40 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg text-white">
          <Icon size={24} />
        </div>
        <h4 className="font-bold text-gray-800">{titulo}</h4>
      </div>
      <p className="text-gray-600 text-sm">{descripcion}</p>
    </div>
  );
};

export default function MisServicios() {
  const servicios = [
    {
      icon: Stethoscope,
      titulo: "Consulta Médica General",
      descripcion:
        "Atención médica integral para diagnóstico, tratamiento y seguimiento de enfermedades comunes.",
      caracteristicas: [
        "Evaluación médica completa",
        "Revisión de signos vitales",
        "Diagnóstico y tratamiento",
        "Recetas médicas digitales",
        "Seguimiento personalizado",
      ],
    },
    {
      icon: FlaskConical,
      titulo: "Laboratorio Clínico",
      descripcion:
        "Estudios de laboratorio con resultados rápidos y confiables para un diagnóstico preciso.",
      caracteristicas: [
        "Análisis clínicos generales",
        "Pruebas especializadas",
        "Resultados en 24-48 horas",
        "Entrega digital de resultados",
        "Interpretación médica incluida",
      ],
    },
    {
      icon: Scan,
      titulo: "Imagenología y Diagnóstico",
      descripcion:
        "Estudios de imagen con tecnología de última generación para diagnósticos precisos.",
      caracteristicas: [
        "Rayos X digitales",
        "Ultrasonidos",
        "Electrocardiogramas",
        "Interpretación por especialistas",
        "Archivo digital de imágenes",
      ],
    },
    {
      icon: Syringe,
      titulo: "Vacunación y Prevención",
      descripcion:
        "Esquemas de vacunación completos para niños y adultos, siguiendo normas oficiales.",
      caracteristicas: [
        "Vacunas infantiles completas",
        "Vacunas para adultos",
        "Certificados de vacunación",
        "Asesoría en inmunizaciones",
        "Seguimiento de esquemas",
      ],
    },
    {
      icon: Heart,
      titulo: "Chequeo Médico Preventivo",
      descripcion:
        "Evaluación integral de salud para detectar y prevenir enfermedades a tiempo.",
      caracteristicas: [
        "Análisis clínicos completos",
        "Evaluación cardiovascular",
        "Revisión de factores de riesgo",
        "Recomendaciones personalizadas",
        "Plan de seguimiento",
      ],
    },
    {
      icon: Video,
      titulo: "Telemedicina",
      descripcion:
        "Consultas médicas virtuales desde la comodidad de tu hogar, sin perder calidad.",
      caracteristicas: [
        "Videoconsultas en vivo",
        "Horarios flexibles",
        "Recetas electrónicas",
        "Seguimiento remoto",
        "Plataforma segura y privada",
      ],
    },
    {
      icon: Clipboard,
      titulo: "Certificados Médicos",
      descripcion:
        "Expedición de certificados médicos para escuela, trabajo, deportes y trámites oficiales.",
      caracteristicas: [
        "Certificados escolares",
        "Certificados laborales",
        "Certificados deportivos",
        "Evaluación médica incluida",
        "Entrega inmediata",
      ],
    },
    {
      icon: Ambulance,
      titulo: "Atención de Urgencias",
      descripcion:
        "Servicio de urgencias médicas para situaciones que requieren atención inmediata.",
      caracteristicas: [
        "Atención sin cita previa",
        "Personal médico 24/7",
        "Estabilización de pacientes",
        "Referencias hospitalarias",
        "Seguimiento post-urgencia",
      ],
    },
  ];

  const ventajas = [
    {
      icon: Clock,
      titulo: "Horarios Flexibles",
      descripcion: "Atención de lunes a sábado con horarios amplios",
    },
    {
      icon: Shield,
      titulo: "Calidad Certificada",
      descripcion: "Profesionales certificados y tecnología avanzada",
    },
    {
      icon: TrendingUp,
      titulo: "Precios Accesibles",
      descripcion: "Tarifas justas y planes de pago flexibles",
    },
  ];

  return (
    <section
      id="mis-servicios"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={7.5} left={6} top={18} size={3.2} opacity={0.13} />
      <FloatingCross delay={1.2} duration={8} left={92} top={28} size={3.8} opacity={0.11} />
      <FloatingCross delay={0.6} duration={6.5} left={14} top={68} size={2.6} opacity={0.17} />
      <FloatingCross delay={1.8} duration={9} left={84} top={82} size={3.1} opacity={0.14} />
      <FloatingCross delay={0.3} duration={7} left={48} top={12} size={2.2} opacity={0.19} />
      <FloatingCross delay={1.5} duration={8.5} left={35} top={50} size={2.7} opacity={0.15} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <div className="inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
              <ColourfulText text="Nuestros Servicios" />
            </div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de servicios médicos diseñados para cuidar tu
            salud y la de tu familia con{" "}
            <span className="font-semibold text-blue-600">
              tecnología avanzada y atención personalizada
            </span>
            .
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {servicios.map((servicio, index) => (
            <ServicioCard
              key={index}
              icon={servicio.icon}
              titulo={servicio.titulo}
              descripcion={servicio.descripcion}
              caracteristicas={servicio.caracteristicas}
              index={index}
            />
          ))}
        </div>

        {/* Sección de ventajas */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
            ¿Por qué elegirnos?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ventajas.map((ventaja, index) => (
              <VentajaCard
                key={index}
                icon={ventaja.icon}
                titulo={ventaja.titulo}
                descripcion={ventaja.descripcion}
              />
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/40 rounded-2xl p-10 shadow-lg text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            ¿Listo para agendar tu cita?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Agenda tu consulta en línea de forma rápida y sencilla. Elige el servicio
            que necesitas, selecciona tu horario preferido y recibe atención de calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/agendarCita"
              className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Agendar Cita Ahora
            </a>
            <a
              href="tel:+524771234567"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-blue-200"
            >
              📞 Llamar
            </a>
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