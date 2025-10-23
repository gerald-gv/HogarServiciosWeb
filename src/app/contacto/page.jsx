"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Contacto() {
  const handleSubmit = () => {
    console.log("Enviando mensaje");
    toast.success("Mensaje enviado correctamente");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <section className="relative w-full bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-24 px-6 text-center animate__animated animate__fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          Contáctanos
        </h1>
        <p className="max-w-2xl mx-auto text-lg opacity-90 animate__animated animate__fadeInUp">
          ¿Tienes alguna pregunta o proyecto en mente? Estamos aquí para
          ayudarte a hacer tu hogar más inteligente.
        </p>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 text-center animate__animated animate__fadeInUp">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-gray-900">
          Ponte en contacto con nosotros
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            {
              icon: <Mail className="text-white" size={32} />,
              title: "Correo Electrónico",
              detail: "contacto@hogardomotico.com",
            },
            {
              icon: <Phone className="text-white" size={32} />,
              title: "Teléfono",
              detail: "+51 987 654 321",
            },
            {
              icon: <MapPin className="text-white" size={32} />,
              title: "Ubicación",
              detail: "Jirón de la Unión 1081 Lima, Perú",
            },
          ].map((info, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate__animated animate__zoomIn"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold">{info.title}</h3>
              <p className="text-gray-600 mt-2">{info.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white animate__animated animate__fadeInUp">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
            Envíanos un mensaje
          </h2>
          <p className="text-gray-600 mb-10">
            Completa el siguiente formulario y te responderemos lo antes
            posible.
          </p>

          <form
            className="bg-gray-50 p-8 rounded-2xl shadow-md space-y-6 animate__animated animate__fadeIn"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
              <input
                type="email"
                placeholder="Tu correo"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                required
              />
            </div>
            <textarea
              rows="5"
              placeholder="Tu mensaje"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex cursor-pointer items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition"
            >
              <Send size={18} /> Enviar Mensaje
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
