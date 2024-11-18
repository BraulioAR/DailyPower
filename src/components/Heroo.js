import Hedaerr from "./Hedaerr";


export default function Heroo() {

  return (
    <div className="bg-white">
      <Hedaerr/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className=" relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 animate-blurred-fade-in animate-duration-[300ms] animate-ease-in">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Productos para todas tus necesidades eléctricas.{' '}
              <a href="./Productos" className="font-semibold text-[#E73516] scroll-smooth">
                <span aria-hidden="true" className="absolute inset-0" />
                Ver Productos <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Daily Power
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Representante exclusivo para República Dominicana de Baterías Aokly.
              Aplicaciones: Inversores, Paneles Solares y UPS.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/Productos"
                className="rounded-md bg-[#E73516] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  hover:scale-105 transition-transform duration-300 "
              >
                Ver Catálogo
              </a>
              <a href="/Contacto" className="text-sm/6 font-semibold text-gray-900 hover:text-[#f54f31] hover:scale-105">
                Contáctanos <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
