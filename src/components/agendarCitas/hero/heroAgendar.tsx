'use client';
import CrucesAnimadas from '@/components/ui/cruces/cruces';


export  default function Hero() {
    return (
        <section
                className="min-h-screen flex flex-col justify-center items-center bg-blue-100 text-black px-4"
                data-scroll-section
                >
                <CrucesAnimadas />
                <div className="text-center space-y-6">
                    <p
                    className="text-sm uppercase font-medium tracking-widest"
                    data-scroll
                    data-scroll-speed="2"
                    >
                    AGENDA.MED
                    </p>
        
                    <h1
                    className="text-[14vw] md:text-[9vw] leading-[1] font-extrabold tracking-tight"
                    data-scroll
                    data-scroll-speed="6"
                    >
                    AGENDA
                    </h1>
                    <h1
                    className="text-[14vw] md:text-[9vw] leading-[1] font-extrabold tracking-tight"
                    data-scroll
                    data-scroll-speed="4"
                    >
                    TU CITA
                    </h1>
                    <h2
                    className="text-[8vw] md:text-[5vw] leading-[1.2] font-light tracking-widest text-white"
                    data-scroll
                    data-scroll-speed="3"
                    >
                   AHORA
                    </h2>
                </div>
                    </section>
    );
}