
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "../../ui/input/input";
import { Label } from "../../ui/label/label";
import { Textarea } from "../../ui/textarea/textarea";
import { Button } from "../../ui/button/button";
import { User, Calendar, CreditCard, CheckCircle } from "lucide-react";
import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

const pasos = [
  { id: "datos", title: "Datos del Paciente", icon: <User /> },
  { id: "cita", title: "Detalles de la Cita", icon: <Calendar /> },
  { id: "pago", title: "Método de Pago", icon: <CreditCard /> },
];

export default function FormularioCita() {
  const [pasoActual, setPasoActual] = useState(0);
  const [completado, setCompletado] = useState<boolean[]>(Array(pasos.length).fill(false));
  const router = useRouter();
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    especialidad: "",
    doctor: "",
    fecha: "",
    hora: "",
    motivo: "",
    metodoPago: "",
    genero: "",
    comentarios: "",});

  const siguientePaso = () => {
    const nuevos = [...completado];
    nuevos[pasoActual] = true;
    setCompletado(nuevos);

    if (pasoActual === pasos.length - 1) {
      Swal.fire({
        icon: "success",
        title: "Cita agendada",
        text: "Recibirás un correo con los detalles.",
        confirmButtonColor: "#10B981",
      });
       setTimeout(() => {
        router.push("/confirmacionPago");
    }, 2000);
    } else {
      setPasoActual((prev) => prev + 1);
    }
  };

  const pasoAnterior = () => {
    const nuevos = [...completado];
    nuevos[pasoActual - 1] = false;
    setCompletado(nuevos);
    setPasoActual((prev) => Math.max(prev - 1, 0));
  };

  const variants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section
        className="min-h-screen bg-gray-100 py-20 px-6 md:px-20 text-gray-900"
        data-scroll-section
        >
    <div
        className="w-[60%]  mx-auto p-10 bg-white shadow-lg rounded-xl"
        data-scroll
        data-scroll-speed="1"
    >
        {/* Título scroll animado */}
        <h2
        className="text-3xl font-extrabold mt-[20px] mb-10 text-center text-blue-900"
        data-scroll
        data-scroll-speed="2"
        >
        Agenda tu cita médica
        </h2>

        {/* Barra de progreso con scroll */}
        <div
        className="relative h-2 bg-gray-200 rounded-full mb-10 overflow-hidden"
        data-scroll
        data-scroll-speed="1.5"
        >
        <div
            className="absolute top-0 left-0 h-full bg-green-500 transition-all duration-300"
            style={{ width: `${(pasoActual / (pasos.length - 1)) * 100}%` }}
        />
        </div>

        {/* Stepper scroll */}
        <div className="mb-8" data-scroll data-scroll-speed="2">
        <div className="flex justify-between mb-4">
            {pasos.map((paso, index) => (
            <div key={index} className="flex flex-col items-center w-full">
                {completado[index] ? (
                <motion.div
                    className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white text-lg font-bold z-10"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 0.4 }}
                >
                    <CheckCircle />
                </motion.div>
                ) : (
                <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-bold z-10 ${
                    index < pasoActual
                        ? "bg-green-500"
                        : index === pasoActual
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                >
                    {paso.icon}
                </div>
                )}
                <span className="text-xs text-center mt-1 w-24">{paso.title}</span>
            </div>
            ))}
        </div>
        <p className="text-center font-medium">
            Paso {pasoActual + 1} de {pasos.length}: {pasos[pasoActual].title}
        </p>
        </div>

        {/* Contenido del paso (sin cambios, solo encapsulado en data-scroll) */}
        <div data-scroll data-scroll-speed="1">
        <AnimatePresence mode="wait">
            <motion.div
            key={pasoActual}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
            >
            {/* PASO 1 - DATOS */}
        {pasoActual === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <Label className="mb-[20px]">Nombre completo</Label>
                <Input
                    type="text"
                    placeholder="Ej. Juan Pérez"
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
                </div>
                <div>
                <Label className="mb-[20px]">Correo electrónico</Label>
                <Input
                    type="email"
                    placeholder="ejemplo@correo.com"
                    value={form.correo}
                    onChange={(e) => setForm({ ...form, correo: e.target.value })}
                />
                </div>
                <div>
                <Label className="mb-[20px]">Teléfono</Label>
                <Input
                    type="tel"
                    placeholder="55 1234 5678"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                />
                </div>
                <div>
                <Label className="mb-[20px]">Género</Label>
                <select
                    value={form.genero || ''}
                    onChange={(e) => setForm({ ...form, genero: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecciona una opción</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                </select>
                </div>
                <div className="md:col-span-2">
                <Label className="mb-[20px]">Comentarios adicionales (opcional)</Label>
                <Textarea
                    placeholder="¿Hay algo importante que el médico deba saber?"
                    value={form.comentarios || ''}
                    onChange={(e) => setForm({ ...form, comentarios: e.target.value })}
                />
                </div>
            </div>
            )}


            {/* PASO 2 - CITA */}
            {pasoActual === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                <Label className="mb-[20px]">Especialidad</Label>
                <select
                    value={form.especialidad}
                    onChange={(e) => setForm({ ...form, especialidad: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecciona una especialidad</option>
                    <option value="medicina">Medicina General</option>
                    <option value="pediatria">Pediatría</option>
                    <option value="ginecologia">Ginecología</option>
                    <option value="psicologia">Psicología</option>
                    <option value="dermatologia">Dermatología</option>
                </select>
                </div>
                 <div>
                <Label className="mb-[20px]">Doctor</Label>
                <select
                    value={form.doctor}
                    onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Selecciona un doctor</option>
                    <option value="doctor1">Dr. Juan Pérez</option>
                    <option value="doctor2">Dra. María López</option>
                    <option value="doctor3">Dr. Carlos Sánchez</option>
                    <option value="doctor4">Dra. Ana Torres</option>
                    <option value="doctor5">Dr. Luis Gómez</option>
                </select>
                </div>


                <div>
                <Label className="mb-[20px]">Fecha deseada</Label>
                <Input
                    type="date"
                    value={form.fecha}
                    onChange={(e) => setForm({ ...form, fecha: e.target.value })}
                />
                </div>

                <div>
                <Label className="mb-[20px]">Hora disponible</Label>
                <Input
                    type="time"
                    value={form.hora}
                    onChange={(e) => setForm({ ...form, hora: e.target.value })}
                />
                </div>

                <div className="md:col-span-2">
                <Label className="mb-[20px]">Motivo de la consulta</Label>
                <Textarea
                    placeholder="Describe brevemente el motivo de la consulta"
                    value={form.motivo}
                    onChange={(e) => setForm({ ...form, motivo: e.target.value })}
                />
                </div>
            </div>
            )}


            {/* PASO 3 - PAGO */}
       {pasoActual === 2 && (
  <div className="grid grid-cols-1 gap-6">
    <div>
      <h3 className="text-lg font-semibold mb-2">Selecciona un método de pago:</h3>
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="pago"
            value="paypal"
            onChange={(e) => setForm({ ...form, metodoPago: e.target.value })}
          />
          PayPal
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="pago"
            value="tarjeta"
            onChange={(e) => setForm({ ...form, metodoPago: e.target.value })}
          />
          Tarjeta de crédito o débito
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="pago"
            value="efectivo"
            onChange={(e) => setForm({ ...form, metodoPago: e.target.value })}
          />
          Pago en efectivo en clínica
        </label>
      </div>
    </div>
  </div>
)}


    
            </motion.div>
        </AnimatePresence>
        </div>

        {/* Botones con scroll */}
        <div
        className="flex justify-between mt-[10px]"
        data-scroll
        data-scroll-speed="1.5"
        >
        {pasoActual > 0 && (
            <Button onClick={pasoAnterior} type="button">
            Atrás
            </Button>
        )}
        <Button onClick={siguientePaso} type="button" className="mb-9">
            {pasoActual === pasos.length - 1 ? "Confirmar cita" : "Siguiente"}
        </Button>
        </div>
    </div>
</section>
  );
    }