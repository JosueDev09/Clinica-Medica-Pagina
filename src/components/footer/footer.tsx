"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Heart,
  ChevronRight,
} from "lucide-react";

const FloatingCross = ({ delay, duration, left, top, size, opacity }: { delay: number; duration: number; left: number; top: number; size: number; opacity: number }) => {
  return (
    <div
      className="absolute text-blue-300/30 pointer-events-none animate-float"
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

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Gracias por suscribirte con: ${email}`);
      setEmail("");
    }
  };

  const serviciosRapidos = [
    "Consultas Generales",
    "Especialidades Médicas",
    "Laboratorio Clínico",
    "Telemedicina",
    "Urgencias",
    "Chequeo Preventivo",
  ];

  const enlacesUtiles = [
    { nombre: "Sobre Nosotros", href: "#sobre-nosotros" },
    { nombre: "Servicios", href: "#servicios" },
    { nombre: "Especialidades", href: "#especialidades" },
    { nombre: "Preguntas Frecuentes", href: "#preguntas-frecuentes" },
    { nombre: "Agendar Cita", href: "/agendarCita" },
    { nombre: "Contacto", href: "#contacto" },
  ];

  const redesSociales = [
    { nombre: "Facebook", icono: "📘", url: "https://facebook.com" },
    { nombre: "Instagram", icono: "📷", url: "https://instagram.com" },
    { nombre: "Twitter", icono: "🐦", url: "https://twitter.com" },
    { nombre: "LinkedIn", icono: "💼", url: "https://linkedin.com" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={8} left={5} top={20} size={2.5} opacity={0.4} />
      <FloatingCross delay={1} duration={7} left={92} top={40} size={3} opacity={0.3} />
      <FloatingCross delay={0.5} duration={9} left={15} top={70} size={2} opacity={0.5} />
      <FloatingCross delay={1.5} duration={6.5} left={85} top={85} size={2.5} opacity={0.35} />
      <FloatingCross delay={2} duration={8.5} left={50} top={30} size={1.8} opacity={0.45} />

      <div className="relative z-10">
        {/* Contenido principal del footer */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Columna 1: Logo y descripción */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl shadow-lg">
                  <Heart size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Clínica Médica</h3>
                  <p className="text-blue-200 text-sm">Tu salud, nuestra misión</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Comprometidos con tu bienestar y el de tu familia. Más de 15 años
                brindando atención médica de calidad con calidez humana.
              </p>
              <div className="flex gap-3">
                {redesSociales.map((red, i) => (
                  <a
                    key={i}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-700/50 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm text-2xl"
                    title={red.nombre}
                  >
                    {red.icono}
                  </a>
                ))}
              </div>
            </div>

            {/* Columna 2: Enlaces rápidos */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Enlaces Rápidos
              </h4>
              <ul className="space-y-3">
                {enlacesUtiles.map((enlace, index) => (
                  <li key={index}>
                    <a
                      href={enlace.href}
                      className="text-blue-100 hover:text-white flex items-center gap-2 group transition-all duration-300"
                    >
                      <ChevronRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                      {enlace.nombre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 3: Servicios */}
            <div>
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                Nuestros Servicios
              </h4>
              <ul className="space-y-3">
                {serviciosRapidos.map((servicio, index) => (
                  <li key={index} className="text-blue-100 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    {servicio}
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 4: Contacto y Newsletter */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
                  Contáctanos
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-blue-100">
                    <MapPin size={20} className="flex-shrink-0 mt-1 text-cyan-400" />
                    <span>Av. Principal #123, La Trinidad, Guanajuato, México</span>
                  </li>
                  <li className="flex items-center gap-3 text-blue-100">
                    <Phone size={20} className="flex-shrink-0 text-cyan-400" />
                    <a href="tel:+524771234567" className="hover:text-white transition-colors">
                      +52 477 123 4567
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-blue-100">
                    <Mail size={20} className="flex-shrink-0 text-cyan-400" />
                    <a
                      href="mailto:info@clinicamedica.com"
                      className="hover:text-white transition-colors"
                    >
                      info@clinicamedica.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-blue-100">
                    <Clock size={20} className="flex-shrink-0 mt-1 text-cyan-400" />
                    <div>
                      <p>Lun - Vie: 8:00 AM - 8:00 PM</p>
                      <p>Sábados: 9:00 AM - 2:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="pt-6 border-t border-blue-700/50">
                <h5 className="font-semibold mb-3">Suscríbete a nuestro boletín</h5>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    className="flex-1 px-4 py-2 rounded-lg bg-blue-700/50 border border-blue-600 text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all backdrop-blur-sm"
                  />
                  <button
                    onClick={handleSubscribe}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-blue-700/50"></div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-blue-200">
            <p className="text-sm text-center md:text-left">
              © {new Date().getFullYear()} Clínica Médica. Todos los derechos
              reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacidad" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <span className="text-blue-600">|</span>
              <a href="#terminos" className="hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <span className="text-blue-600">|</span>
              <a href="#aviso" className="hover:text-white transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}