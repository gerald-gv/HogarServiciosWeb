import React from 'react'
import { Badge } from '../ui/badge'
import { Award, Star, TrendingUp, Users } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

const RankingSection = () => {

    const rating = [
        {name: "Josue FullChow", score: 5, comment: "Increible Servicio. Los productos que eh comprado estaban en perfectas condiciones, y la instalacion fue breve y precisas. El equitpo tecnico fue muy detallado en todo"},
        {name: "DavidPOOMaster", score: 4, comment: "Los mejores focos inteligentes que eh tenido fue gracias a este servicio, ahora puedo controlar mucho mejor la iluminación de mi hogar, gracias a esto eh logrado reducir los gastos de energia "},
        {name: "Quiero Break", score: 5, comment: "Excelente aencion al cliente, la entrega no demoro muchos dias, el equipo tecnino es muy amigable y la instalacion fue muy rapida. Fue la mejor inversion que eh hecho,"},
    ]


    const stats = [
        {stat: "500+", icon: Users, bgColor: "bg-blue-100", textColor: "text-blue-600", descripcion: "Clientes Satisfechos"},
        {stat: "95%", icon: Award, bgColor: "bg-green-100", textColor: "text-green-600", descripcion: "Taza de Satisfaccion"},
        {stat: "5+", icon: TrendingUp, bgColor: "bg-purple-100", textColor: "text-purple-600", descripcion: "Años de Experiencia"},
        {stat: "4.85/5", icon: Star, bgColor: "bg-orange-100",  textColor: "text-orange-600", descripcion: "Puntuacion Promedio"},
    ]
    


  return (
    <section className='py-16 md:py-20 mb-6'>
        <div className='container mx-auto px-4 md:px-6'>

            {/* Cabecera */}

            <div className='text-center mb-12'>
                <Badge variant="secondary" className="px-3 py-1 md:px-4 md:py-2 bg-blue-200/30 rounded-full border border-blue-400 mb-4 md:mb-6">
                    <Star  className='w-4 h-4 fill-yellow-400 text-yellow-400'/>
                    <span className='text-xs md:text-sm font-medium text-blue-700'>Opiniones</span>
                    <Star  className='w-4 h-4 fill-yellow-400 text-yellow-400'/>
                </Badge>

                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 md:mb-6'>
                    Opiniones de nuestros Clientes
                </h2>
                <p className='md:text-lg lg:text-xl text-slate-800 max-w-3xl mx-auto'>
                    Miles de personas confian en nuestros servicios para hacer a sus hogares mucho más modernos y eficientes
                </p>
            </div>

            {/* Cards Opiniones */}

            <div className='grid lg:grid-cols-3 gap-8 '>
                {rating.map((item, i) => (
                    
                    <Card key={i} className="border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all  duration-300">
                        <CardContent className="flex flex-col flex-grow">
                            {/* Calificacion */}

                            <div className='flex gap-1 mb-4'>
                                {[...Array(item.score)].map((_, i) => (
                                    <Star key={i} className='w-5 h-5 fill-yellow-400 text-yellow-400 '/>
                                ))}
                            </div>

                            {/* Comentario */}

                            <p className='text-sm md:text-base text-slate-700 leading-relaxed mb-6 flex-grow'>
                                "{item.comment}"
                            </p>

                            {/* Nombre */}
                            
                            <p className='text-sm md:text-base font-semibold text-slate-900'>
                                {item.name}
                            </p>
                        </CardContent>
                    </Card>
                    
                ))}
            </div>

            {/* Cards Stats */}

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16 mt-16 md:mt-20'>
                {stats.map((item, i) => (

                    <Card key={i} className="group hover:scale-105 transition-transform duration-300 bg-slate-50 rounded-2xl border border-slate-200">
                        <CardContent className="flex flex-col items-center p-4 md:p-6">
                            <div className={`group-hover:scale-110 transition-transform duration-300 w-12 h-12 md:w-16 md:h-16 ${item.bgColor} rounded-full flex items-center justify-center mb-3`}>
                                <item.icon className={`w-6 h-6 md:w-8 md:h-8 ${item.textColor}`}/>
                            </div>

                            <h3 className='text-2xl md:text-3xl font-bold text-slate-900 mb-1'>{item.stat}</h3>
                            <span>{item.descripcion}</span>
                        </CardContent>
                    </Card>

                ))}
            </div>

        </div>
    </section>
  )
}

export default RankingSection