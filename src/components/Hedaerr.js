'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { FiMenu, FiX } from 'react-icons/fi';  // Reemplazamos los íconos de Heroicons con los de react-icons
import { Popover } from '@headlessui/react'
import { IoChevronDown, IoClose  } from 'react-icons/io5'

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Quiénes Somos', href: '/Nosotros' },
  { name: 'Ubícanos', href: '/Contacto#ubicacion' },
];

const products = [
   { name: 'Baterías de Gelatina',  href: '/Productos/Baterias/#gelatina' },
  { name: 'Baterías para Vehículos',  href: '/Productos/Baterias/#vehiculo'},
  { name: 'Baterías de Litio', href: '/Productos/Baterias/#litio'},
  { name: 'Inversores Solares Off-Grid', href: '/Productos/Inversores/#offgrid'},
  { name: 'Inversores Solares Growatt',  href: '/Productos/Inversores/#growatt' },
  { name: 'Estructuras de Montaje', href: '/Productos#montaje' },
  { name: 'Paneles Solares', href: '/Contacto' },
  { name: 'Inversores Convencionales',  href: '/Contacto'},
];

export default function Hedaerr() {
       const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
     return (
         <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 hover:scale-105 transition-transform duration-300">
              <span className="sr-only">Daily Power</span>
              <img
                alt="Logo DP"
                src="/logo-daily-power-1.webp"
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-[#E73516] transition-colors duration-300"
            >
              <span className="sr-only">Abrir menu</span>
              <FiMenu aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-gray-900 hover:text-[#E73516] transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            {/* Aquí agregamos el Popover para Productos */}
            <Popover className="relative z-50">
              <Popover.Button className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
                <span>Productos</span>
                <IoChevronDown aria-hidden="true" className="h-5 w-5" />
              </Popover.Button>

              <Popover.Panel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                        <div>
                          <a href={item.href} className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-full divide-gray-900/5 bg-gray-50">
              <a
                href="/Productos"
                className=" p-3 font-semibold text-gray-900 hover:bg-gray-100 text-center"
              > Ver todos los productos
              </a>
          </div>
                </div>
              </Popover.Panel>
            </Popover>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="/Contacto" className="text-sm/6 font-semibold text-gray-900 hover:text-[#E73516] transition-colors duration-300">
              Contáctanos <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
         <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Daily Power</span>
                <img
                 alt="Logo DP"
                src="./logo-daily-power-1.webp"
                className="h-16 w-auto object-contain"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <IoClose aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                   <Popover className="relative z-50">
              <Popover.Button className="inline-flex items-center gap-x-1 -mx-3 rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                <span>Productos</span>
                <IoChevronDown aria-hidden="true" className="h-5 w-5" />
              </Popover.Button>

              <Popover.Panel
                transition
                className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {products.map((item) => (
                      <div key={item.name} className="group relative flex gap-x-6 rounded-lg lg:justify-normal justify-center p-4 hover:bg-gray-50">
                        <div>
                          <a href={item.href} className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                   <div className="flex items-center justify-center w-full divide-gray-900/5 bg-gray-50">
              <a
                href="/Productos"
                className=" p-3 font-semibold text-gray-900 hover:bg-gray-100 text-center"
              > Ver todos los productos
              </a>
                  </div>
                </div>
              </Popover.Panel>
            </Popover>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Contáctanos
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
         </header>
     );
}