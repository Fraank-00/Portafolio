import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";


const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_261a71r",     
      "template_2iqb9nc",    
      form.current,
      "ZfBeYYH1BIorsucZH"      
    ).then(
      () => {
        Swal.fire({
          icon: "success",
          title: "¡Mensaje enviado!",
          text: "Gracias por contactarme. Te responderé pronto.",
          confirmButtonColor: "#7e22ce",
        });
        setSent(true);
        form.current.reset();
      },
      (error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Hubo un error al enviar tu mensaje. Intentá de nuevo.",
          confirmButtonColor: "#ef4444",
        });
      }
    );
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-6">Contacto</h2>
        <p className="mb-8 text-gray-300">¿Querés trabajar conmigo o tenés alguna duda? Mandame un mensaje:</p>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 text-left">
          <input type="text" name="user_name" placeholder="Tu nombre" required className="p-3 rounded bg-gray-800 text-white  w-full" />
          <input type="email" name="user_email" placeholder="Tu email" required className="p-3 rounded bg-gray-800 text-white  w-full" />
          <textarea name="message" placeholder="Tu mensaje" rows="5" required className="p-3 rounded bg-gray-800 text-white  "></textarea>
          <button type="submit" className="mt-4 px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Enviar
          </button>
        </form>

        {sent && <p className="text-green-400 mt-4">¡Mensaje enviado con éxito!</p>}
      </div>
    </section>
  );
};

export default Contact;
