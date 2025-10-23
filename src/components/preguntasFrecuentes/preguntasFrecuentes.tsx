"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const ColourfulText = ({ text }: { text: string }) => {
  return (
    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent font-bold">
      {text}
    </span>
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

const FAQItem = ({ pregunta, respuesta, index }: { pregunta: string; respuesta: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group w-[65%] m-auto backdrop-blur-xl bg-white/50 border border-white/50 
      rounded-2xl shadow-lg mb-4 hover:shadow-xl transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-white/30 transition-colors duration-300"
      >
        <div className="flex items-center gap-4 flex-1">
          <div className="flex-shrink-0 p-2 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg text-white shadow-md group-hover:rotate-12 transition-transform duration-300">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 pr-4">
            {pregunta}
          </h3>
        </div>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2">
          <div className="pl-14 pr-4 text-gray-600 leading-relaxed border-l-4 border-blue-400 ml-2">
            {respuesta}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function PreguntasFrecuentes() {
  const faqs = [
    {
      pregunta: "¿Cómo puedo agendar una cita?",
      respuesta:
        "Puedes agendar tu cita de tres formas: a través de nuestro sistema de citas en línea disponible 24/7, llamando directamente a nuestras oficinas, o visitándonos en persona. El sistema en línea te permite elegir el especialista, fecha y horario que mejor se adapten a tu agenda.",
    },
    {
      pregunta: "¿Qué debo llevar a mi primera consulta?",
      respuesta:
        "Para tu primera consulta, te recomendamos llevar tu identificación oficial, tarjeta del seguro médico (si aplica), estudios o análisis previos relacionados con tu consulta, lista de medicamentos que estés tomando actualmente, y cualquier historial médico relevante.",
    },
    {
      pregunta: "¿Aceptan seguros médicos?",
      respuesta:
        "Sí, trabajamos con las principales aseguradoras del país. Te recomendamos contactarnos directamente para confirmar si aceptamos tu seguro específico. También ofrecemos planes de pago flexibles para pacientes sin seguro médico.",
    },
    {
      pregunta: "¿Cuáles son los horarios de atención?",
      respuesta:
        "Nuestro horario de atención es de lunes a viernes de 8:00 AM a 8:00 PM, y sábados de 9:00 AM a 2:00 PM. Para urgencias y consultas especiales, ofrecemos horarios extendidos previa cita. Algunos especialistas tienen horarios específicos.",
    },
    {
      pregunta: "¿Cuánto tiempo tarda en llegar el resultado de laboratorio?",
      respuesta:
        "Los tiempos de entrega varían según el tipo de estudio. Los análisis básicos generalmente están listos en 24-48 horas. Estudios más especializados pueden tardar de 3 a 7 días hábiles. Te notificaremos por correo electrónico o WhatsApp cuando tus resultados estén disponibles.",
    },
    {
      pregunta: "¿Ofrecen servicios de telemedicina?",
      respuesta:
        "Sí, contamos con servicio de consultas virtuales para seguimientos, revisión de resultados y consultas generales que no requieren exploración física. Las videoconsultas se realizan a través de nuestra plataforma segura y tienen el mismo costo que una consulta presencial.",
    },
    {
      pregunta: "¿Puedo cancelar o reagendar mi cita?",
      respuesta:
        "Sí, puedes cancelar o reagendar tu cita con al menos 24 horas de anticipación sin cargo alguno. Puedes hacerlo a través de nuestro sistema en línea, por teléfono o WhatsApp. Las cancelaciones con menos de 24 horas de anticipación pueden estar sujetas a un cargo mínimo.",
    },
    {
      pregunta: "¿Tienen estacionamiento disponible?",
      respuesta:
        "Sí, contamos con estacionamiento gratuito para nuestros pacientes. El estacionamiento está ubicado en las instalaciones de la clínica y tiene espacios reservados para personas con movilidad reducida. También hay transporte público cercano.",
    },
  ];

  return (
    <section
      id="preguntas-frecuentes"
      className="relative overflow-hidden py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Cruces flotantes decorativas */}
      <FloatingCross delay={0} duration={7} left={8} top={20} size={3.5} opacity={0.12} />
      <FloatingCross delay={1.5} duration={8} left={88} top={30} size={4} opacity={0.1} />
      <FloatingCross delay={0.5} duration={6} left={15} top={70} size={2.5} opacity={0.18} />
      <FloatingCross delay={2} duration={9} left={78} top={85} size={3} opacity={0.15} />
      <FloatingCross delay={1} duration={7.5} left={50} top={15} size={2} opacity={0.2} />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            <div className="inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
              <ColourfulText text="Preguntas Frecuentes" />
            </div>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Encuentra respuestas a las dudas más comunes sobre nuestros servicios,
            horarios y procedimientos.{" "}
            <span className="font-semibold text-blue-600">
              Estamos aquí para ayudarte.
            </span>
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
              index={index}
            />
          ))}
        </div>

        {/* CTA de contacto */}
        <div className="mt-12 text-center">
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-white/40 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está listo para resolver todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+524771234567"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                📞 Llamar ahora
              </a>
              <a
                href="https://wa.me/524771234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-blue-200"
              >
                💬 WhatsApp
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