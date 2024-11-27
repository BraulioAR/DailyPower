
const stats = [
  { name: 'Mayor Tiempo de Garantía del Mercado', src: '/icons/warranty.webp' },
  { name: 'Experiencia, Conocimiento y Profesionalismo en Nuestro Equipo de Trabajo', src: '/icons/team3.webp' },
  { name: 'Calidad Certificada (ISO9001)', src: '/icons/iso-w.webp' },
  { name: 'Presencia en los Cinco Continentes', src: '/icons/world-map.webp' },
  { name: 'Materia Prima de Primera Calidad', src: '/icons/materia-prima-2.webp' },
  { name: 'Disponibilidad de Inventario Garantizada', src: '/icons/inventario-2.webp' },
  { name: 'Comprometidos con el Medio Ambiente (ISO14001)', src: '/icons/enviroment.webp' },
]

export default function Values() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#EC7610] to-[#E73516] py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="hidden absolute -top-10 right-1/2 -z-10 mr-10 lg:block transform-gpu blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-20"
        />
      </div>
     
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-white ">Propuesta de Valor</h2>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1 items-center justify-center">
                <dt className="text-base/7 text-gray-300 text-center">{stat.name}</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white"><img src={stat.src} className="w-16 h-16"/></dd>
              </div>
            ))}
          </dl>
        </div>
          </div>
           <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-20"
        />
      </div>
    </div>
  )
}