import { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Esymbel-Clinica Médica",
  description: "Sitio web de Esymbel Clinica Médica",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="w-full overflow-x-hidden">
      <body className="w-full max-w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
