import { Home } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NavMenu = () => {

    const menuItems = [
        { name: "Inicio", href: "/"},
        { name: "Nosotros", href: "/"},
        { name: "Productos", href: "/"},
        { name: "Contacto", href: "/"},
    ]



    return (
        <header className='sticky top-0 z-50 bg-slate-900 backdrop-blur-lg border-b border-slate-800'>
            <div className='container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20'>

                {/* Logo */}
                <div className='flex items-center gap-3'>

                    {/* Icono */}
                    <div className='w-10 h-10 bg-blue-600 rounded-3xl flex items-center justify-center'>
                        <Home className='w-7 h-7 text-white' />
                    </div>

                    {/* Nombre */}
                    <Link href="/" className='text-2xl font-bold text-white'>
                        lEoDomoTics
                    </Link>
                </div>

                {/* NavMenu Desktop */}
                <nav className='hidden lg:flex items-center gap-8'>
                    <ul className='flex space-x-8'>
                        {menuItems.map((item) => (
                            <li>
                                <Link href={item.href} className='relative group text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300'>
                                    {item.name}
                                    <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full'/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default NavMenu