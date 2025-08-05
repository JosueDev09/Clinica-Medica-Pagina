
/* eslint-disable @next/next/no-img-element */
"use client";
// import { useState, useEffect } from "react";
import { ColourfulText } from "../ui/colourful-text/colourful-text";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card/draggable-card";
import { useGalleryItems } from "@/hooks/testimonios/testimonios";



export default function Testimonios() {
   

  // const [actual, setActual] = useState(0);
  // const [visible, setVisible] = useState(true);
  const items = useGalleryItems();

  // const siguiente = () => {
  //   setVisible(false);
  //   setTimeout(() => {
  //     setActual((prev) => (prev + 1) % testimonios.length);
  //     setVisible(true);
  //   }, 300); // tiempo para que se desvanezca antes de cambiar
  // };

  // const anterior = () => {
  //   setVisible(false);
  //   setTimeout(() => {
  //     setActual((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  //     setVisible(true);
  //   }, 300);
  // };

  // ⏱ Autoplay
  // useEffect(() => {
  //   const intervalo = setInterval(() => {
  //     siguiente();
  //   }, 5000);

  //   return () => clearInterval(intervalo);
  // }, []);


  return (
    <section className="bg-blue-100 py-20 relative h-[90vh]">
      <div className="max-w-4xl mx-auto text-center px-4 mt-[50px]">
          {/* <h1 className="text-4xl font-bold text-center mb-10">
            <div className="relative bottom-11 inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
            <ColourfulText text="Lo que opinan nuestros pacientes" />
            </div>
          </h1> */}

        {/* <div className="relative h-32">
          <div
            className={`transition-opacity duration-500 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <blockquote className="italic text-gray-700 text-lg">
              “{texto}”
            </blockquote>
            <p className="mt-2 font-medium">– {autor}</p>
          </div>
        </div> */}

        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      
       <h1 className="text-4xl font-bold text-center mb-10">
            <div className="relative bottom-11 inline-block px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/30 border border-white/30 shadow-lg ring-1 ring-white/20">
            <ColourfulText text="Lo que opinan nuestros pacientes" />
            </div>
          </h1>
      
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={`relative flex flex-col justify-between ${item.className}`}>
        <img
          src={item.image}
          alt={item.title}
          className="h-80 w-full object-cover rounded-t-xl"
        />
        <div className="bg-blue-300 p-4 rounded-b-xl text-white text-center">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm text-black mt-1">{item.texto}</p>
        </div>
      </DraggableCardBody>
      ))}
    </DraggableCardContainer>
        {/* <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={anterior}
            className="px-4 py-2 bg-white border border-blue-300 rounded hover:bg-blue-100 transition"
          >
            ◀
          </button>
          <button
            onClick={siguiente}
            className="px-4 py-2 bg-white border border-blue-300 rounded hover:bg-blue-100 transition"
          >
            ▶
          </button>
        </div> */}
      </div>
       {/* Difuminado blanco -> azul (parte inferior) */}
      {/* Difuminado azul -> blanco (parte superior) */}
        <div className="absolute top-0 left-0 w-full h-60 z-10 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-blue-100 to-transparent" />
        </div>
    </section>
  );
}
