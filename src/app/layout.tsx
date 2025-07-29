import "../styles/globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="w-full overflow-x-hidden">
      <body className="w-full max-w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
