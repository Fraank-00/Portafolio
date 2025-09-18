import { motion } from "framer-motion";
console.log(motion);

const Hero = () => {
  return (
    <section  id="hero"className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white px-4 text-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <p className="text-lg text-purple-400">Hola, soy</p>
        <h1 className="text-4xl sm:text-5xl font-bold mt-2">Franco Rojas</h1>
        <h2 className="text-2xl text-gray-300 mt-1">Desarrollador Web</h2>
        <p className="mt-4 text-gray-400">Construyo experiencias web atractivas y funcionales.</p>
        <button
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
          className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
        >
          Ver proyectos
        </button>

      </motion.div>

    </section>
  );
};

export default Hero;


