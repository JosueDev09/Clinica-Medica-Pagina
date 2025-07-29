// components/Especialistas.tsx
export default function Especialistas() {
    return (
       <section id="especialistas" className="h-[100vh] relative py-20 bg-white">
        
        <div className="max-w-6xl mx-auto px-4 mt-[150px]">
          <h3 className="text-3xl font-semibold text-center mb-10">Conoce a nuestros especialistas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded shadow text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full" />
                <h4 className="font-bold text-lg">Dr. Nombre {i + 1}</h4>
                <p className="text-gray-600 text-sm">Especialidad</p>
              </div>
            ))}
          </div>
        </div>

           {/* Difuminado azul -> blanco (parte superior) */}
        <div className="absolute top-0 left-0 w-full h-40 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
        </div>
        
        {/* Difuminado blanco -> azul (parte inferior) */}
        <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
        </div>
        
      </section>
    );
  }