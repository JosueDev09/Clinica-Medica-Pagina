// src/app/public/page.tsx

import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Servicios from '@/components/servicios/servicios';
import Especialidades from '@/components/especialidades/especialidades';
// import CitasCTA from '@/components/CitasCTA';
import Testimonios from '@/components/testimonios/testimonios';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/preguntasFrecuentes';
import Contacto from '@/components/contacto/contacto';
import Footer from '@/components/footer/footer';
import InformacionEmpresa from '@/components/informacionEmpresa/informacionEmpresa';

import { ScrollProvider } from '@/components/ui/scrollProvider/ScrollProvider';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function PublicHomePage() {
  return (
    <>
      <Header />
      <ScrollProvider>
      <main >
        <Hero />
        <Servicios />
        <Especialidades />
         <InformacionEmpresa />
        <Testimonios />
        <PreguntasFrecuentes />
        <Contacto />
      </main>
      </ScrollProvider>
     
    </>
  );
}