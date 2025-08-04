// components/Especialidades.tsx
"use client";


import { ColourfulText } from "../ui/colourful-text/colourful-text";

const especialidades = [
  { nombre: "Cardiología", descripcion: "Cuidado del corazón y sistema circulatorio." },
  { nombre: "Pediatría", descripcion: "Atención integral a niños y adolescentes." },
  { nombre: "Dermatología", descripcion: "Salud de la piel, cabello y uñas." },
  { nombre: "Ginecología", descripcion: "Salud femenina y planificación familiar." },
  { nombre: "Neurología", descripcion: "Diagnóstico de enfermedades neurológicas." },
  { nombre: "Medicina Interna", descripcion: "Tratamiento integral de adultos." },
];

export default function Especialidades() {
const duplicado = [...especialidades, ...especialidades]; 
  return (
    <section id="especialidades" className="relative h-[45rem] py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 ">
        <h1 className="text-4xl font-bold text-center mb-16">
          <div className="inline-block relative top-10 mb-[40px] px-6 py-4 rounded-2xl backdrop-blur-xl bg-blue/30 border border-white/30 shadow-lg ring-1 ring-white/20">
            <ColourfulText text="Nuestras Especialidades" />
          </div>
        </h1>

     
       <div className="overflow-hidden w-[80%] m-auto relative py-10">
          <div className="marquee-track flex animate-marquee">
            {duplicado.map((item, i) => (
              <div
                key={i}
                className="w-[300px] flex-shrink-0 bg-white p-6 rounded-xl shadow-md text-center border border-blue-100 mx-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full shadow-md" />
                <h4 className="font-bold text-xl text-blue-900">{item.nombre}</h4>
                <p className="text-gray-600 text-sm mt-2">{item.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Gradientes decorativos */}
      <div className="absolute top-0 left-0 w-full h-40 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent" />
      </div>
    </section>
  );
}
