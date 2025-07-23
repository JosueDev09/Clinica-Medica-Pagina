// src/app/public/page.tsx
import Header from '@/components/header/header';
import Hero from '@/components/hero/hero';
import Servicios from '@/components/servicios/servicios';
import Especialistas from '@/components/especialistas/especialistas';
// import CitasCTA from '@/components/CitasCTA';
import Testimonios from '@/components/testimonios/testimonios';
import PreguntasFrecuentes from '@/components/preguntasFrecuentes/preguntasFrecuentes';
import Contacto from '@/components/contacto/contacto';
import Footer from '@/components/footer/footer';

export default function PublicHomePage() {
  return (
    <>
      <Header />
      <main className="mt-16">
        <Hero />
        <Servicios />
        <Especialistas />
        
        <Testimonios />
        <PreguntasFrecuentes />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}