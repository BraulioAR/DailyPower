'use client'
import Header from "@/components/Header";
import Link from "next/link";



export default function Hero() {

  return (
    <div className="bg-white">
      <Header/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl lg:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className=" relative w-[72.1875rem] aspect-[1155/678] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 lg:left-[calc(50%-30rem)]"
          />
        </div>
        <div className="mx-auto max-w-7xl py-32 lg:py-56 animate-blurred-fade-in animate-duration-[300ms] animate-ease-in">
          <div className="hidden md:flex lg:mb-8 lg:flex lg:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Productos para todas tus necesidades eléctricas.{' '}
              <Link href="/Productos" className="font-semibold text-[#E73516] scroll-smooth">
                <span aria-hidden="true" className="absolute inset-0" />
                Ver Productos <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h1 className="mb-8 lg:text-balance text-5xl font-semibold tracking-tight text-gray-900 lg:text-7xl text-center"  >
              Daily Power
            </h1>
            <h2 className="font-medium text-gray-500 lg:text-xl text-center max-w-2xl ">
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
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl lg:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className=" relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 lg:left-[calc(50%+3rem)] lg:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
