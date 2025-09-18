import { motion } from "framer-motion";
import project1 from "../assets/Project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const Projects = () => {
  const proyectos = [
    {
      id: 1,
      titulo: "App de e-commerce",
      descripcion:
        "App que consume productos desde la FakeStore API, permite agregar y quitar productos del carrito, vaciarlo, y navegar entre vistas.",
      link: "https://e-commerce-mini-indol.vercel.app/",
      imagen: project1,
    },
    {
      id: 2,
      titulo: "Sitio de Recetas",
      descripcion:
        "Web para buscar recetas usando una API pública. Estilo limpio y responsive.",
      link: "https://recetas-gilt.vercel.app/",
      imagen: project2,
    },
    {
      id: 3,
      titulo: "Dashboard Interactivo",
      descripcion:
        "Dashboard interactivo que muestra datos en distintos formatos gráficos utilizando React, Recharts y TailwindCSS.",
      link: "https://dashboard-two-theta-40.vercel.app/",
      imagen: project3,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-purple-400">
        Mis Proyectos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {proyectos.map((proyecto) => (
          <motion.div
            key={proyecto.id}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Imagen con hover zoom */}
            <div className="overflow-hidden">
              <img
                src={proyecto.imagen}
                alt={proyecto.titulo}
                className="w-full h-40 object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2 text-white">
                {proyecto.titulo}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 flex-grow">
                {proyecto.descripcion}
              </p>
              <a
                href={proyecto.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-purple-400 hover:underline"
              >
                Ver más →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
