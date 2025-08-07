
'use client';

import { ScrollProvider } from '@/components/ui/scrollProvider/ScrollProvider';
import Header from '@/components/header/header';
import Hero from '@/components/agendarCitas/hero/heroAgendar';
import InfoAgendar from '@/components/agendarCitas/infoAgendar/infoAgendar';
import FraseAgendar from '@/components/agendarCitas/fraseAgendar/fraseAgendar';
import FormularioCitaStepper from '@/components/agendarCitas/formularioAgendar/formularioAgendar';


export default function Page() {
  return (
    <>
      <Header />
      
    <ScrollProvider>
      {/* HERO SECTION */}
        <Hero />
        {/* INFO SECTION */}
       <InfoAgendar />
        {/* FRASE SECTION */}
       <FraseAgendar />
      {/* FORMULARIO (ANCLA) */}
        <FormularioCitaStepper data-scroll-section />
   
    </ScrollProvider>
    </>
  );
}
