import Header from "@/components/Header";
import Link from "next/link";



export default function Hero() {

  return (
    <>
    <Header/>
      <div className="bg-white">
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl py-32 lg:py-56 animate-blurred-fade-in animate-duration-[300ms] animate-ease-in">
          <div className="hidden lg:mb-8 lg:flex lg:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Productos para todas tus necesidades eléctricas.{' '}
              <Link href="/Productos" className="font-semibold text-[#E73516] scroll-smooth">
                <span aria-hidden="true" className="absolute inset-0" />
                Ver Productos <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-8 lg:text-balance text-5xl font-semibold tracking-tight text-gray-900 lg:text-7xl text-center">
              Daily Power
            </h1>
            <h2 className="font-medium text-gray-500 lg:text-xl text-center ">
              Representante exclusivo para República Dominicana de Baterías Aokly. Aplicaciones: Inversores, Paneles Solares y UPS.
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/Productos"
                className="rounded-md bg-[#E73516] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:scale-105 transition-transform duration-300 "
              >
                Ver Catálogo
              </Link>
              <Link href="/Contacto" className="text-sm/6 font-semibold text-gray-900 hover:text-[#f54f31] hover:scale-105">
                Contáctanos <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
