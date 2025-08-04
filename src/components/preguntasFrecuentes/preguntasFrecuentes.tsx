import { ColourfulText } from "../ui/colourful-text/colourful-text";

export default function PreguntasFrecuentes() {
    return (
      <section className="py-20 bg-white relative h-[90vh]">
        <div className="max-w-4xl mx-auto px-4 mt-[180px]">
         <h1 className="text-4xl font-bold text-center mb-10">
                     <div className="relative bottom-11 inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
                     <ColourfulText text="Preguntas Frecuentes" />
                     </div>
                   </h1>
          <div className="space-y-6 w-[50%] m-auto">
            <details className="border p-4 rounded">
              <summary className="font-medium cursor-pointer">¿Cómo agendo una cita?</summary>
              <p className="mt-2 text-gray-600">Solo da clic en ´Agendar cita´ y elige el especialista, fecha y hora.</p>
            </details>
            <details className="border p-4 rounded">
              <summary className="font-medium cursor-pointer">¿Puedo pagar en línea?</summary>
              <p className="mt-2 text-gray-600">Sí, aceptamos pagos con tarjeta a través de PayPal.</p>
            </details>
             <details className="border p-4 rounded">
              <summary className="font-medium cursor-pointer">¿Cómo agendo una cita?</summary>
              <p className="mt-2 text-gray-600">Solo da clic en ´Agendar cita´ y elige el especialista, fecha y hora.</p>
            </details>
             
          </div>
        </div>
         {/* Difuminado blanco -> azul (parte inferior) */}
      {/* Difuminado azul -> blanco (parte superior) */}
        {/* Gradientes decorativos */}
     <div className="absolute top-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
        </div>
         <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>
      </section>
    );
  }