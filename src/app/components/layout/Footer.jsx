import React from 'react'
import { Facebook, Heart, Home, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {

    const marcaItems = [
        { icono: Facebook, href: "/" },
        { icono: Instagram, href: "/" },
        { icono: Twitter, href: "/" },
    ]

    const seccionesItems = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/" },
        { name: "Productos", href: "/" },
        { name: "Contacto", href: "/" },
    ]


    return (
        <footer className='pt-6 bg-gray-900 text-gray-400'>
            <div className='container mx-auto px-6 mb-6 grid md:grid-cols-1 lg:grid-cols-4 gap-8'>

                {/* Marca */}

                <div className='space-y-4'>
                    <div className='flex items-center gap-2'>

                        <div className='w-10 h-10 bg-blue-600 rounded-3xl flex items-center justify-center'>
                            <Home className='w-7 h-7 text-white' />
                        </div>

                        <Link href="/" className='text-lg font-bold text-white'>
                            lEoDomoTics
                        </Link>
                    </div>
                    <p className='text-sm md:text-base'>Renovando y Transformando tu hogar con las nuevas tecnologias</p>
                    <div>
                        <ul className='flex gap-3'>
                            {marcaItems.map((item) => (
                                <li className='flex items-center justify-center'>
                                    <Link href={item.href} className='w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-sky-600 transition-colors duration-300'>
                                        <item.icono className='w-6 h-6' />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Secciones */}

                <div className='space-y-4 ml-6'>
                    <h3 className='font-semibold text-lg text-white mb-3'>Secciones</h3>
                    <ul className='space-y-2'>
                        {seccionesItems.map((item) => (
                            <li>
                                <Link href={item.href} className='text-sm md:text-base hover:text-sky-600 transition-colors duration-300'>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contacto */}

                <div className='space-y-4'>
                    <h3 className='font-semibold text-lg text-white'>Contacto</h3>
                    <ul className='text-sm md:text-base space-y-3'>
                        <li className='flex gap-3'>
                            <MapPin className='w-5 h-5 mt-1 text-blue-500'/>
                            <span>
                                Jirón de la Unión
                                <span className='block'> 1081 Lima, Perú</span>
                            </span>
                        </li>
                        <li className='flex gap-3 pb-2'>
                            <Phone className='w-5 h-5 mt-1 text-blue-500'/>
                            +51 999 888 777
                        </li>
                        <li className='flex gap-3'>
                            <Mail className='w-5 h-5 mt-1 text-blue-500'/>
                            info@hogar.com
                        </li>
                    </ul>
                </div>

                {/* Terminos */}
                
                <div className='space-y-4'>
                    <h3 className='font-semibold text-lg text-white'>Legales</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link href="/">
                                Politicas de Cookies
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Politicas de Privacidad
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 text-center text-sm text-gray-500 py-6 px-4">
                © 2025 Servicios Hogar. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer