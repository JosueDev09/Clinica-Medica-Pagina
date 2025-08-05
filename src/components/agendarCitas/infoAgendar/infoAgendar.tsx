'use client';

import CrucesAnimadas from "@/components/ui/cruces/cruces";


export default function InfoAgendar() {

    return (
         <section className="min-h-screen bg-white py-40 px-6 overflow-hidden" data-scroll-section>
                <div className="flex flex-col gap-10 w-full">
                      <CrucesAnimadas />
                    {/* Izquierda ➡ Derecha */}
                    <div
                    className="bg-blue-100 px-10 py-3 text-[10vw] font-extrabold uppercase tracking-tighter shadow-md"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="10"
                    >
                    EN ESTA DIRECCIÓN
                    </div>
        
                    {/* Derecha ➡ Izquierda */}
                    <div
                    className="bg-blue-100 px-10 py-3 text-[10vw] font-extrabold uppercase tracking-tighter shadow-md rotate-3"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-10"
                    >
                    Y EN ESTA OTRA
                    </div>
        
                    {/* Izquierda ➡ Derecha */}
                    <div
                    className="bg-blue-100 px-10 py-3 text-[10vw] font-extrabold uppercase tracking-tighter shadow-md -rotate-2"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="13"
                    >
                    CUSTOMIZABLE!
                    </div>
        
                    {/* Derecha ➡ Izquierda */}
                    <div
                    className="bg-blue-100 px-10 py-3 text-[10vw] font-extrabold uppercase tracking-tighter shadow-md rotate-6"
                    data-scroll
                    data-scroll-direction="horizontal"
                    data-scroll-speed="-13"
                    >
                    OK, SUFICIENTE!!!!
                    </div>
        
                </div>
                </section>
    );


}


