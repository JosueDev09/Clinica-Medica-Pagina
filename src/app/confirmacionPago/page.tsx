// src/app/gracias/page.tsx o como componente aparte
"use client";
import { ScrollProvider } from '@/components/ui/scrollProvider/ScrollProvider';
import { useRouter } from "next/navigation";
import "locomotive-scroll/dist/locomotive-scroll.css";
import VitalLines from '@/components/ui/VitalLines/VitalLines';



export default function GraciasPorAgendar() {
  const router = useRouter();

  

  return (
    <ScrollProvider>
      {/* HERO de agradecimiento */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-20 bg-blue-950 text-white" data-scroll-section>
        
        <h1
          className="mb-[140px] text-[10vw] md:text-[6vw] font-extrabold leading-tight uppercase tracking-tight"
          data-scroll
          data-scroll-speed="2"
        >
          ¡Gracias por agendar!
        </h1>
        
        <p
          className="mt-6 text-lg md:text-xl max-w-2xl"
          data-scroll
          data-scroll-speed="1"
        >
          Hemos recibido tu solicitud. Te enviaremos un correo de confirmación con los detalles de tu cita médica.
        </p>

        <VitalLines />

        
      </section>

      {/* INFO IMPORTANTE con efecto LERP */}
       <section className="min-h-screen bg-[#d9e7df] py-40 px-6" data-scroll-section>
        <div className="max-w-5xl mx-auto space-y-48 relative">

            {/* ITEM 01 */}
            <div
            className="flex items-start gap-8"
            data-scroll
            data-scroll-speed="1.5"
            data-scroll-position="top"
            >
            <div className="bg-black text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                01
            </div>
            <div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4 leading-tight">
                Llega puntual
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl">
                Te recomendamos llegar al menos 10 minutos antes de tu cita para completar cualquier documentación pendiente.
                </p>
            </div>
            </div>

            {/* ITEM 02 */}
            <div
            className="flex items-start gap-8"
            data-scroll
            data-scroll-speed="2"
            data-scroll-position="top"
            >
            <div className="bg-black text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                02
            </div>
            <div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4 leading-tight">
                Lleva tu identificación
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl">
                Es importante presentar una identificación oficial el día de la consulta.
                </p>
            </div>
            </div>

            {/* ITEM 03 */}
            <div
            className="flex items-start gap-8"
            data-scroll
            data-scroll-speed="2.5"
            data-scroll-position="top"
            >
            <div className="bg-black text-white text-lg font-bold w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                03
            </div>
            <div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4 leading-tight">
                Cambios o cancelaciones
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl">
                Puedes modificar o cancelar tu cita hasta 12 horas antes ingresando nuevamente a nuestro portal.
                </p>
            </div>
            </div>

        </div>
        </section>


      {/* CTA Final */}
      <section className="bg-green-600 text-white py-24 px-6" data-scroll-section>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-wide" data-scroll data-scroll-speed="1">
            ¿Tienes dudas?
          </h2>
          <p className="text-lg" data-scroll data-scroll-speed="1.5">
            Nuestro equipo de atención está disponible para ayudarte con cualquier pregunta. Escríbenos o llama a nuestro número de contacto.
          </p>
          <button
            onClick={() => router.push("/")}
            className="mt-4 bg-white text-green-700 font-semibold px-6 py-3 rounded-lg hover:bg-green-100 transition"
          >
            Volver al inicio
          </button>
        </div>
      </section>
    </ScrollProvider>
  );
}
