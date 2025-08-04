export default function Footer() {
    return (
      <footer className="py-6 bg-black border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Clínica Esymbel. Todos los derechos reservados.
      </footer>
    );
  }