// src/app/public/page.tsx

import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Servicios from '@/components/servicios/servicios';
import Especialidades from '@/components/especialidades/especialidades';
// import CitasCTA from '@/components/CitasCTA';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/preguntasFrecuentes';
import Contacto from '@/components/contacto/contacto';
import Footer from '@/components/footer/footer';
import InformacionEmpresa from '@/components/informacionEmpresa/informacionEmpresa';
import { ScrollProvider } from '@/components/ui/scrollProvider/ScrollProvider';
import Galeria from '@/components/galeria/galeria';

export default function PublicHomePage() {
  return (
    <>
      <Header />
      {/* <ScrollProvider> */}
      <main >
        <Hero />
        <Servicios />
        <Especialidades />
         <InformacionEmpresa />
        <Galeria />
        <PreguntasFrecuentes />
        <Contacto />
        <Footer />
      </main>
      {/* </ScrollProvider> */}
      
     
    </>
  );
}