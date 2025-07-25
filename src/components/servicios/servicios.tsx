import { PinContainer } from "../ui/3d-pin/3d-pin";

export default function Servicios() {
    const servicios = [
      { icon: '📆', title: 'Consultas generales' },
      { icon: '🩺', title: 'Especialidades médicas' },
      { icon: '💉', title: 'Laboratorio clínico' },
    ];
  
    return (
 <section id="servicios" className="py-20 bg-blue-100 relative h-[70vh]">
  <div className="max-w-6xl mx-auto px-4">
    <h3 className="text-3xl font-semibold mb-10 text-center">Nuestros servicios</h3>
    <div className="grid md:grid-cols-3 gap-8">
      {servicios.map((s, i) => (
        <div
          key={i}
          className="relative text-center p-6 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-[1.05] hover:shadow-2xl"
        >
          {/* Fondo glass más intenso */}
          <div className="absolute inset-0 bg-white/40 border border-white/30 backdrop-blur-lg rounded-2xl z-0" />

          {/* Contenido visible */}
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <span className="text-5xl drop-shadow-md text-blue-600">{s.icon}</span>
            </div>
            <h4 className="text-xl font-medium mt-[50px] text-gray-800">{s.title}</h4>
          </div>
        </div>
      ))}
    </div>
    {/* Difuminado blanco -> azul (parte inferior) */}
    <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
      <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
    </div>
    
  </div>
  
  
</section>


);
  }