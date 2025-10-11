'use client'
import { Home, MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Headroom from 'headroom.js'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

const NavMenu = () => {

    const [open, setOpen] = useState(false)
    const headerRef = useRef(null)

    const menuItems = [
        { name: "Inicio", href: "/" },
        { name: "Nosotros", href: "/nosotros" },
        { name: "Productos", href: "/productos" },
        { name: "Contacto", href: "/contacto" },
    ]

    useEffect(() => {
        const headroom = new Headroom(headerRef.current);
        headroom.init()
    }, [])

    return (
        <header ref={headerRef} className='headroom sticky top-0 z-50 bg-slate-900 backdrop-blur-lg border-b border-slate-800 py-3'>
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
                        {menuItems.map((item, i) => (
                            <li key={i}>
                                <Link href={item.href} className='relative group text-lg font-medium text-white hover:text-blue-400 transition-colors duration-300'>
                                    {item.name}
                                    <span className='absolute left-0 bottom-0 h-[2px] w-0 bg-sky-500 transition-all duration-300 group-hover:w-full' />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* NavMenu Mobile */}

                <div className='lg:hidden'>
                    <Sheet open={open} onOpenChange={setOpen} >

                        <SheetTrigger asChild>
                            <Button>
                                <MenuIcon className='w-6 h-6 text-white' />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side='right'>
                            <div className='flex flex-col'>

                                <SheetHeader className="pb-6 border-b border-slate-700 text-center">
                                    <SheetTitle className="pt-2 text-xl font-bold">
                                        IEoDomotics
                                    </SheetTitle>
                                    <SheetDescription className="text-sm text-muted-foreground">
                                        Tu servicio de Confianza
                                    </SheetDescription>
                                </SheetHeader>


                                <nav className='mt-12'>
                                    <ul className='flex flex-col pl-6 space-y-6'>
                                        {menuItems.map((item, i) => (
                                            <li key={i}>
                                                <Link href={item.href}>
                                                    <span className='text-lg font-medium'>{item.name}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>


            </div>
        </header>
    )
}

export default NavMenu