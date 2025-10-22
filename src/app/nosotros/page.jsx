"use client";

import FoundSection from "../components/home/FoundSection";
import CountUp from "react-countup";
import {
    Crown,
    Cpu,
    Code2,
    Wrench,
} from "lucide-react";

export default function Nosotros() {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
            <section className="relative w-full bg-gradient-to-b from-blue-600 to-indigo-700 text-white py-24 px-6 text-center animate__animated animate__fadeIn">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
                    Transformamos Hogares, Inspiramos Futuro
                </h1>
                <p className="max-w-2xl mx-auto text-lg opacity-90 animate__animated animate__fadeInUp">
                    Somos un equipo apasionado por la tecnología y la innovación,
                    dedicados a mejorar tu estilo de vida a través de soluciones
                    inteligentes para tu hogar.
                </p>
            </section>

            <section className="py-20 px-6 md:px-12 lg:px-24 text-center bg-gray-50 animate__animated animate__fadeInUp">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
                    Nuestra Misión y Visión
                </h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn">
                        <h3 className="text-2xl font-bold mb-3 text-blue-600">Misión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Mejorar la calidad de vida de las personas mediante la integración
                            de tecnología domótica en sus hogares, garantizando confort,
                            seguridad y eficiencia energética.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 animate__animated animate__zoomIn">
                        <h3 className="text-2xl font-bold mb-3 text-indigo-600">Visión</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Ser líderes en innovación y servicios de domótica, creando hogares
                            inteligentes que inspiren un futuro más conectado y sostenible.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900 text-center animate__animated animate__fadeInUp">
                    Conoce a Nuestro Equipo
                </h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
                    {[
                        { name: "FullChow La Realeza", rol: "CEO & Fundador", icon: <Crown size={32} /> },
                        { name: "Gerald", rol: "Especialista en Domótica", icon: <Cpu size={32} /> },
                        { name: "David", rol: "Ingeniero de Software", icon: <Code2 size={32} /> },
                        { name: "Ramiro", rol: "Ingeniero de Software", icon: <Wrench size={32} /> },
                    ].map((person, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate__animated animate__fadeInUp"
                        >
                            <div className="w-24 h-24 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mb-4 text-white">
                                {person.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{person.name}</h3>
                            <p className="text-sm text-gray-500">{person.rol}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-16 px-6 text-center animate__animated animate__fadeInUp">
                <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
                    Nuestro Impacto
                </h2>
                <p className="mb-8 max-w-2xl mx-auto opacity-90">
                    Descubre cómo la domótica puede mejorar tu estilo de vida y hacer de tu
                    casa un espacio más moderno y eficiente.
                </p>

                <div className="flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
                    <div className="animate__animated animate__zoomIn">
                        <p className="text-4xl font-bold text-blue-600">
                            <CountUp end={500} duration={2.5} />+
                        </p>
                        <p className="text-gray-600">Instalaciones Realizadas</p>
                    </div>
                    <div className="animate__animated animate__zoomIn">
                        <p className="text-4xl font-bold text-blue-600">
                            <CountUp end={95} duration={2.5} />%
                        </p>
                        <p className="text-gray-600">Satisfacción del Cliente</p>
                    </div>
                    <div className="animate__animated animate__zoomIn">
                        <p className="text-4xl font-bold text-blue-600">
                            <CountUp end={5} duration={2.5} />+
                        </p>
                        <p className="text-gray-600">Años de Experiencia</p>
                    </div>
                </div>
            </section>

            <FoundSection />
        </div>
    );
}