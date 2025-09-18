const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-6 px-4 text-center mt-10">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Franco. Todos los derechos reservados.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/Fraank-00"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/franco-rojas-1a03b015b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
