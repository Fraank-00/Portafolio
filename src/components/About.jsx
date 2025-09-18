import { motion } from "framer-motion";
console.log(motion)
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Sobre mí</h2>

        <p className="text-gray-300 mb-6">
          Soy un desarrollador web apasionado por crear aplicaciones modernas y funcionales. Me gusta escribir código limpio, aprender nuevas tecnologías y enfrentar desafíos.
        </p>

        <h3 className="text-xl font-semibold text-white mb-4">Tecnologías que manejo:</h3>

        <div className="flex flex-wrap justify-center gap-6 text-purple-400 mt-6 ">
          {[
            { Icon: FaHtml5, name: "HTML" },
            { Icon: FaCss3Alt, name: "CSS" },
            { Icon: FaJs, name: "JavaScript" },
            { Icon: FaReact, name: "React" },
            { Icon: SiTailwindcss, name: "Tailwind" },
            { Icon: FaGitAlt, name: "Git" },
            { Icon: FaNodeJs, name: "Node JS" },
            { Icon: SiMysql, name: "MySQL" },
            { Icon: SiMongodb, name: "MongoDB" },
          ].map(({ Icon, name }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              title={name}
              className="w-16 h-16 flex items-center justify-center bg-gray-800 rounded-full text-3xl hover:bg-purple-600 hover:text-white transition"
            >
              <Icon />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;




