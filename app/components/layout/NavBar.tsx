 "use client";

import React from 'react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from '../ui/navigation-menu';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';


const navItems = [
  {
    label: 'Inicio',
    href: '/',
  },
  {
    label: 'Quienes somos',
    href: '/quienes-somos',
  },
  {
    label: 'Eventos',
    href: '/eventos',
  },
  {
    label: 'Ministerios',
    href: '/ministerios',
  },
  {
    label: 'Ofrendas',
    href: '/ofrendas',
  },
]

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full bg-black">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" aria-label="Inicio" onClick={closeMenu}>
          <Image className="stroke-white" src="/images/logo_white.png" alt="Casa de Oracion Camino Al Cielo" width={220} height={74} />
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10  hover:text-amber-300 md:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <NavigationMenu className="hidden w-full md:flex md:justify-end">
          <NavigationMenuList className="w-full justify-end bg-transparent">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuTrigger className="bg-transparent text-white font-bold">
                  <Link className="cursor-pointer" href={item.href}>{item.label}</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {isOpen && (
        <nav className="border-t border-white/15 md:hidden" aria-label="Menu movil">
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li className="cursor-pointer" key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md px-3 py-2 text-white hover:bg-white/10 cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
