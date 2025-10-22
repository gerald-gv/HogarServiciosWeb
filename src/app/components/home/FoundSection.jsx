import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const FoundSection = () => {
  return (
    <section className='py-16 md:py-20 bg-blue-600'>

      <div className='container mx-auto px-4 md:px-6 '>

        <div className='max-w-4xl mx-auto text-center space-y-6 md:space-y-8'>
          
          {/* Cabecera */}

          <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white'>
            ¿Listo para transformar tu hogar?
          </h2>
          <p className='max-w-2xl mx-auto md:text-lg lg:text-2xl text-white leading-relaxed'>
            Ven y Descubre como la domótica puede mejorar tu calidad de vida.
            Transforma tu hogar a lo moderno
          </p>

          {/* Botones */}
          
          <div className='flex flex-col justify-center sm:flex-row gap-4'>
            <Link href="/productos">
              <Button size="lg" className="rounded-3xl border-white text-white md:text-lg px-8 md:px-10 py-6 md:py-8 cursor-pointer hover:scale-105 transition-all duration-300">
                Ver Productos
                <ArrowRight className='ml-1 w-3 h-3 md:w-4 md:h-4' />
              </Button>
            </Link>

            <Link href="/contacto">
              <Button size="lg" variant="outline" className="rounded-3xl bg-transparent border-white text-white md:text-lg px-8 md:px-10 py-6 md:py-8 cursor-pointer hover:scale-105 transition-all duration-300">
                Ir a Contacto
              </Button>
            </Link>

          </div>
        </div>
      </div>

    </section>
  )
}

export default FoundSection