"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare } from "lucide-react";

const ColourfulText = ({ text }: { text: string }) => {
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

const InfoCard = ({ icon: Icon, title, content, link, linkText } : { icon: React.ElementType; title: string; content: string; link?: string; linkText?: string; }) => {
  return (
    <div className="group backdrop-blur-xl bg-white/50 border border-white/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
          <Icon size={28} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 mb-2">{content}</p>
          {link && (
            <a
              href={link}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-cyan-500 transition-colors duration-300"
            >
              {linkText}
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Contactanos() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setEnviando(true);

    // Simulación de envío
    setTimeout(() => {
      alert("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
      setEnviando(false);
    }, 1500);
  };

  const infoContacto = [
    {
      icon: MapPin,
      title: "Nuestra Ubicación",
      content: "Av. Principal #123, La Trinidad, Guanajuato, México",
      link: "https://maps.google.com",
      linkText: "Ver en el mapa",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "Llámanos de lunes a sábado",
      link: "tel:+524771234567",
      linkText: "+52 477 123 4567",
    },
    {
      icon: Mail,
      title: "Email",
      content: "Escríbenos y te responderemos pronto",
      link: "mailto:info@clinicamedica.com",
      linkText: "info@clinicamedica.com",
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      content: "Lun - Vie: 8:00 AM - 8:00 PM\nSábados: 9:00 AM - 2:00 PM",
      link: null,
      linkText: null,
    },
  ];

  return (
    <section
      id="contacto"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={7} left={8} top={20} size={3} opacity={0.15} />
      <FloatingCross delay={1.5} duration={8} left={88} top={30} size={3.5} opacity={0.12} />
      <FloatingCross delay={0.5} duration={6.5} left={15} top={75} size={2.5} opacity={0.18} />
      <FloatingCross delay={2} duration={9} left={80} top={85} size={3} opacity={0.14} />
      <FloatingCross delay={1} duration={7.5} left={50} top={12} size={2} opacity={0.2} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <div className="inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
              <ColourfulText text="Contáctanos" />
            </div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte.{" "}
            <span className="font-semibold text-blue-600">
              Comunícate con nosotros
            </span>{" "}
            y agenda tu cita o resuelve tus dudas.
          </p>
        </div>

        {/* Tarjetas de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {infoContacto.map((info, index) => (
            <InfoCard
              key={index}
              icon={info.icon}
              title={info.title}
              content={info.content}
              link={info.link as string}
              linkText={info.linkText as string}
            />
          ))}
        </div>

        {/* Sección de formulario y mapa */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/60 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl text-white shadow-md">
                <MessageSquare size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Envíanos un Mensaje
              </h3>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
                  Nombre Completo
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Juan Pérez"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="telefono" className="block text-gray-700 font-semibold mb-2">
                  Teléfono
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder="+52 477 123 4567"
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="asunto" className="block text-gray-700 font-semibold mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-gray-700 font-semibold mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Escribe tu mensaje aquí..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={enviando}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {enviando ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensaje
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Mapa y accesos rápidos */}
          <div className="space-y-6">
            {/* Mapa */}
            <div className="backdrop-blur-xl bg-white/60 border border-white/60 rounded-2xl overflow-hidden shadow-lg h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5!2d-101.4!3d20.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU0JzAwLjAiTiAxMDHCsDI0JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Accesos rápidos */}
            <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/40 rounded-2xl p-6 shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Contacto Rápido
              </h4>
              <div className="space-y-3">
                <a
                  href="https://wa.me/524771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  <span className="text-3xl">💬</span>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-600">Chatea con nosotros</p>
                  </div>
                </a>

                <a
                  href="tel:+524771234567"
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  <span className="text-3xl">📞</span>
                  <div>
                    <p className="font-semibold text-gray-800">Llamar Ahora</p>
                    <p className="text-sm text-gray-600">+52 477 123 4567</p>
                  </div>
                </a>

                <a
                  href="/agendarCita"
                  className="flex items-center gap-3 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  <span className="text-3xl">📅</span>
                  <div>
                    <p className="font-semibold text-gray-800">Agendar Cita</p>
                    <p className="text-sm text-gray-600">Sistema en línea 24/7</p>
                  </div>
                </a>
              </div>
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