import "../styles/globals.css";
import 'locomotive-scroll/dist/locomotive-scroll.css';



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="w-full overflow-x-hidden">
      <body className="w-full max-w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
