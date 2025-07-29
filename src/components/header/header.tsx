
const Menu = [
  {
    title: "Inicio",
    href: "/inicio",
  },
  {
    title: "Servicios",
    href: "#servicios",
  },
  {
    title: "Especialistas",
    href: "#especialistas",
  },
  {
    title: "Agendar",
    href: "/public/agendar",
  },
  {
    title: "Contacto",
    href: "#contacto",
  },
]


export default function Header() {
    return (
      
      
     <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/20 shadow-md overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap justify-between items-center overflow-x-hidden">
        <h1 className="font-bold text-lg text-blue-700 whitespace-nowrap">
          Clínica Esymbel
        </h1>
        <nav className="flex flex-wrap justify-center md:justify-end gap-2 sm:gap-4 w-full md:w-auto">
          {Menu.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm sm:text-base nav-link relative inline-block text-gray-900 hover:text-blue-600 transition-colors duration-500"
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </header>


    );
  }