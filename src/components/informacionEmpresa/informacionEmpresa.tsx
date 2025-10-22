"use client";

import { useState, useEffect } from "react";
import { Heart, Users, Award, Clock } from "lucide-react";

const ColourfulText = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">
      {text}
    </span>
  );
};

const StatCard = ({ icon: Icon, number, label, delay }: { icon: any; number: number; label: string; delay: number } ) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById(`stat-${label}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        setCount(number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      id={`stat-${label}`}
      className="group relative backdrop-blur-xl bg-white/40 border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
          <Icon size={32} />
        </div>
        <h3 className="text-4xl font-bold text-gray-800 mb-2">
          {count}
          {label.includes("Años") ? "+" : label.includes("Pacientes") ? "k+" : "%"}
        </h3>
        <p className="text-gray-600 font-medium">{label}</p>
      </div>
    </div>
  );
};

const FloatingCross = ({ delay, duration, left, top, size, opacity }: { delay: number; duration: number; left: number; top: number; size: number; opacity: number }) => {
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

export default function SobreNosotros() {
  const stats = [
    { icon: Clock, number: 15, label: "Años de Experiencia" },
    { icon: Users, number: 50, label: "Pacientes Satisfechos" },
    { icon: Award, number: 20, label: "Especialistas Certificados" },
    { icon: Heart, number: 98, label: "Satisfacción del Paciente" },
  ];

  return (
    <section
      id="sobre-nosotros"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={6} left={10} top={15} size={3} opacity={0.15} />
      <FloatingCross delay={1} duration={8} left={85} top={25} size={4} opacity={0.1} />
      <FloatingCross delay={2} duration={7} left={20} top={75} size={2.5} opacity={0.2} />
      <FloatingCross delay={0.5} duration={9} left={75} top={80} size={3.5} opacity={0.12} />
      <FloatingCross delay={1.5} duration={6.5} left={50} top={10} size={2} opacity={0.18} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <div className="inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
              <ColourfulText text="Sobre Nosotros" />
            </div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una clínica médica comprometida con tu bienestar. Con más de{" "}
            <span className="font-semibold text-blue-600">15 años de experiencia</span>,
            brindamos atención médica de calidad con calidez humana, tecnología de
            vanguardia y un equipo de profesionales altamente capacitados.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Misión y Visión */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Misión */}
          <div className="group backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl text-white mr-4 group-hover:rotate-6 transition-transform duration-300">
                <Heart size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Nuestra Misión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Proporcionar servicios médicos de excelencia con un enfoque humano y
              cercano, garantizando el acceso a atención de calidad para toda la
              familia, promoviendo la salud preventiva y el bienestar integral de
              nuestra comunidad.
            </p>
          </div>

          {/* Visión */}
          <div className="group backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-400 rounded-xl text-white mr-4 group-hover:rotate-6 transition-transform duration-300">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Nuestra Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Ser la clínica médica de referencia en la región, reconocida por nuestra
              excelencia en el servicio, innovación tecnológica y compromiso con el
              bienestar de nuestros pacientes, expandiendo nuestros servicios para
              llegar a más familias.
            </p>
          </div>
        </div>
      </div>

      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-40 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
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