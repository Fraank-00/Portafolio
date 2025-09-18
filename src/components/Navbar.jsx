import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const links = [
    { id: 1, text: "Inicio", href: "#hero" },
    { id: 2, text: "Proyectos", href: "#projects" },
    { id: 3, text: "Contacto", href: "#contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 bg-gray-950/70 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <a href="#home" className="text-xl font-bold text-purple-400">
          Franco.dev
        </a>

        {/* Íconos mobile */}
        <div className="sm:hidden z-50 text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {open ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links escritorio */}
        <nav>
          <ul className="hidden sm:flex gap-8 text-gray-300">
            {links.map(({ id, text, href }) => (
              <li key={id}>
                <a href={href} className="hover:text-purple-400 transition">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menú desplegable mobile */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-gray-950 text-white flex flex-col items-center py-6 sm:hidden">
            {links.map(({ id, text, href }) => (
              <li key={id} className="py-2">
                <a
                  href={href}
                  onClick={closeMenu}
                  className="text-lg hover:text-purple-400 transition"
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Navbar;
