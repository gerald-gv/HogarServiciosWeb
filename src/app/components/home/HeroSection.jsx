import React from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'

const HeroSection = () => {

    const statsHeroSec = [
        { stat: "500+", descripcion: "Instalaciones Realizadas" },
        { stat: "95%", descripcion: "Satisfaccion" },
        { stat: "24/7", descripcion: "Soporte" },
    ]

    return (
        <section className='flex items-center pt-14 md:pt-20 mb-20'>
            <div className='container mx-auto px-4'>
                <div className='grid md:grid-cols-2 gap-8 items-center'>

                    {/* Presentacion */}
                    <div className='space-y-6 max-w-2xl'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight text-balance'>
                            Transforma tu hogar en un {""}
                            <span className='text-blue-600'>Espacio Inteligente</span>
                        </h1>

                        <p className='md:text-lg text-slate-600 leading-relaxed'>
                            Descubre la implementacion de la tecnologia moderna a tu hogar. Control de iluminación, Seguridad, Asistentes de voz y mucho más
                            desde cualquier lugar. Mejora tu casa al maximo.
                        </p>

                        <div className='flex flex-col items-center md:flex-row gap-3 md:gap-4 py-2'>
                            <Link href="/">
                                <Button size="lg" className="text-base md:text-lg text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg py-6 font-semibold hover:-translate-y-2 transition-all ease-in-out duration-300 cursor-pointer">
                                    Ver Nuestros Productos
                                    <ArrowRight className='w-4 h-4 md:w-5 md:h-5' />
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}

                        <div className='grid grid-cols-3 gap-4 pt-6 border-t border-slate-300'>
                            {statsHeroSec.map((item, i) => (
                                <div className='leading-tight' key={i}>
                                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600'>{item.stat}</h3>
                                    <span className='text-xs md:text-sm text-slate-600'>{item.descripcion}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection