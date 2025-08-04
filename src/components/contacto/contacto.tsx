// components/Contacto.tsx
export default function Contacto() {
    return (
      <section id="contacto" className="py-20 bg-blue-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-semibold mb-6">Contáctanos</h3>
          <p className="text-gray-700">📍 Calle 123, Ciudad, Estado</p>
          <p className="text-gray-700">📞 (123) 456 7890</p>
          <p className="text-gray-700">📧 contacto@clinicaesymbel.com</p>
        </div>
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