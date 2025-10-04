import { Lock, Shield, Smartphone } from 'lucide-react'
import React from 'react'
import { Card, CardContent } from '../ui/card'

const FeaturesSection = () => {

    const feature = [
        {icon: Smartphone, titulo: "Control Total", descripcion: "Gestiona todos tus dispositivos desde una sola aplicación móvil intuitiva.", 
            textcolor: "text-slate-600", bgColor: "bg-slate-500/10"},
        {icon: Shield, titulo: "Seguridad Avanzada", descripcion: "Protección 24/7 con cámaras inteligentes y sistemas de alarma conectados.", 
            textcolor: "text-slate-600", bgColor: "bg-sky-500/10"},
        {icon: Lock, titulo: "Acceso Inteligente", descripcion: "Cerraduras digitales y control de acceso desde cualquier lugar.", 
            textcolor: "text-slate-600", bgColor: "bg-slate-500/10"},
    ]


  return (
    <section className='py-16 bg-slate-100/60'>
        <div className='container mx-auto px-4 md:px-8'>

            <div className='text-center max-w-3xl mx-auto mb-12'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-balance font-bold text-slate-900 mb-6'>
                    ¿Porque deberias elegir nuestros servicios?
                </h2>
                <p className='md:text-lg text-slate-600 leading-relaxed'>
                    Ofrecemos soluciones completas con nuestros productos enfocada a la domótica para mejorar su estilo de vida, aumentar su
                    seguridad y optimizar la mejora de su hogar.
                </p>
            </div>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {feature.map((item, i) => (
                    <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-slate-200">
                        <CardContent className="p-6">
                            <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon className={`w-6 h-6 ${item.textcolor}`}/>
                            </div>
                            <h3 className='text-lg md:text-xl font-bold text-slate-800 mb-3'>{item.titulo}</h3>
                            <p className='text-sm md:text-base text-slate-600 leading-relaxed'>{item.descripcion}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection