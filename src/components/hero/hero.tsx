"use client";

import { useState, useEffect } from "react";
import { Heart, Shield, Clock, Award, ChevronDown } from "lucide-react";

// Componente de cruces flotantes
const CrucesAnimadas = () => {
  const cruces = [
    { delay: 0, duration: 6, left: 10, top: 20, size: 3, opacity: 0.15 },
    { delay: 1, duration: 8, left: 85, top: 30, size: 4, opacity: 0.1 },
    { delay: 2, duration: 7, left: 20, top: 70, size: 2.5, opacity: 0.2 },
    { delay: 0.5, duration: 9, left: 75, top: 80, size: 3.5, opacity: 0.12 },
    { delay: 1.5, duration: 6.5, left: 50, top: 15, size: 2, opacity: 0.18 },
  ];

  return (
    <>
      {cruces.map((cruz, i) => (
        <div
          key={i}
          className="absolute text-blue-200 pointer-events-none animate-float"
          style={{
            left: `${cruz.left}%`,
            top: `${cruz.top}%`,
            fontSize: `${cruz.size}rem`,
            opacity: cruz.opacity,
            animationDelay: `${cruz.delay}s`,
            animationDuration: `${cruz.duration}s`,
          }}
        >
          +
        </div>
      ))}
    </>
  );
};

// Badge de característica
const FeatureBadge = ({ icon: Icon, text } : { icon: React.ElementType; text: string; }) => {
  return (
    <div className="backdrop-blur-xl bg-white/40 border border-white/60 rounded-xl px-4 py-2 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="flex items-center gap-2">
        <Icon size={20} className="text-blue-600" />
        <span className="text-sm font-semibold text-gray-700">{text}</span>
      </div>
    </div>
  );
};

// Botón personalizado
const Button = ({ onClick, children, className } : { onClick: () => void; children: React.ReactNode; className?: string; }) => {
  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

// Componente de Slider de Imágenes
const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Heart,
      titulo: "Atención de Calidad",
      descripcion: "Con profesionales certificados",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      titulo: "Tecnología Avanzada",
      descripcion: "Equipos de última generación",
      color: "from-cyan-500 to-blue-400",
    },
    {
      icon: Award,
      titulo: "15+ Años de Experiencia",
      descripcion: "Cuidando tu salud",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Clock,
      titulo: "Horarios Flexibles",
      descripcion: "Disponibles cuando nos necesites",
      color: "from-cyan-600 to-blue-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = slides[currentSlide].icon;

  return (
    <div className="relative w-full max-w-md">
      <div className="relative backdrop-blur-xl bg-white/30 border border-white/40 rounded-3xl p-6 shadow-2xl">
        {/* Contenedor del slider */}
        <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
          {/* Círculos decorativos */}
          <div className="absolute top-5 left-5 w-20 h-20 bg-blue-300/30 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-5 right-5 w-24 h-24 bg-cyan-300/30 rounded-full blur-xl animate-pulse delay-75" />
          
          {/* Contenido del slide actual */}
          <div className="relative z-10 text-center px-6 transition-all duration-500">
            <div className="mb-4">
              <CurrentIcon 
                size={80} 
                className={`text-blue-500 mx-auto animate-pulse bg-gradient-to-br ${slides[currentSlide].color} bg-clip-text text-transparent`}
              />
            </div>
            <div className="space-y-2">
              <div className="text-xl font-bold text-gray-800">
                {slides[currentSlide].titulo}
              </div>
              <div className="text-sm text-gray-600">
                {slides[currentSlide].descripcion}
              </div>
            </div>
          </div>

          {/* Mini badge flotante */}
          <div className="absolute top-4 right-4 backdrop-blur-lg bg-white/60 rounded-lg px-2 py-1 shadow-lg animate-float">
            <div className="text-xs font-semibold text-blue-600">
              ✓ Certificados
            </div>
          </div>
        </div>

        {/* Indicadores de slides */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-gradient-to-r from-blue-600 to-cyan-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Decoración adicional */}
        <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-xl" />
        <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl" />
      </div>
    </div>
  );
};

export default function Hero() {
  const frases = [
    "Tu salud es nuestra prioridad.",
    "Cuidamos de ti y de los que más amas.",
    "Atención médica con calidad humana.",
    "Agenda tu cita en línea, sin complicaciones.",
    "Tu bienestar es nuestro compromiso diario.",
  ];

  const frasesSubtitulo = [
    "con horarios flexibles.",
    "con atención personalizada.",
    "con profesionales certificados.",
    "con tecnología avanzada.",
  ];

  const [indice, setIndice] = useState(0);
  const [textoVisible, setTextoVisible] = useState("");
  const [modo, setModo] = useState("escribiendo");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout : any;
    const textoActual = frasesSubtitulo[indice] ?? "";

    if (modo === "escribiendo") {
      if (textoVisible.length < textoActual.length) {
        timeout = setTimeout(() => {
          setTextoVisible(textoActual.slice(0, textoVisible.length + 1));
        }, 70);
      } else {
        timeout = setTimeout(() => setModo("esperando"), 1000);
      }
    }

    if (modo === "esperando") {
      timeout = setTimeout(() => setModo("borrando"), 500);
    }

    if (modo === "borrando") {
      if (textoVisible.length > 0) {
        timeout = setTimeout(() => {
          setTextoVisible(textoActual.slice(0, textoVisible.length - 1));
        }, 50);
      } else {
        setVisible(false);
        setTimeout(() => {
          setIndice((prev) => (prev + 1) % frases.length);
          setModo("escribiendo");
          setVisible(true);
        }, 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [textoVisible, modo, indice]);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Cruces flotantes */}
      <CrucesAnimadas />

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal - Izquierda */}
            <div className="text-center lg:text-left space-y-8">
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 transition-opacity duration-500 ${
                  visible ? "opacity-100" : "opacity-0"
                }`}
              >
                {frases[indice]}
              </h2>

              <p className="text-gray-600 text-lg lg:text-xl min-h-[3rem]">
                Consulta con especialistas certificados y{" "}
                <span className="inline-block bg-blue-100/50 backdrop-blur-lg border border-white/60 text-blue-700 font-semibold px-4 py-2 rounded-xl shadow-md transition-all duration-300">
                  {textoVisible}
                  <span className="animate-pulse">|</span>
                </span>
              </p>

              {/* Badges de características */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <FeatureBadge icon={Clock} text="Disponible 24/7" />
                <FeatureBadge icon={Shield} text="Certificados" />
                <FeatureBadge icon={Award} text="15+ Años" />
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => console.log("Agendar cita")}>
                  AGENDAR CITA
                </Button>
                <button
                  onClick={() => console.log("Contactar")}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 font-bold rounded-xl shadow-md hover:shadow-lg border-2 border-blue-200 hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                >
                  CONTACTAR
                </button>
              </div>

              {/* Estadísticas rápidas */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50k+</div>
                  <div className="text-sm text-gray-600">Pacientes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Especialistas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfacción</div>
                </div>
              </div>
            </div>

            {/* Slider de Imágenes - Derecha */}
            <div className="relative flex justify-center lg:justify-end">
              <ImageSlider />
            </div>
          </div>
        </div>
      </div>

      {/* Botón de scroll hacia abajo */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={scrollToNext}
          className="p-3 backdrop-blur-lg bg-white/60 rounded-full shadow-lg hover:bg-white/80 transition-all duration-300"
        >
          <ChevronDown size={24} className="text-blue-600" />
        </button>
      </div>

      {/* Difuminado blanco -> azul (parte inferior) */}
      <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
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

        .delay-75 {
          animation-delay: 0.75s;
        }
      `}</style>
    </section>
  );
}