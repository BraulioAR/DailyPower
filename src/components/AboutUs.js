import { ImPower } from "react-icons/im";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 pt-24 pb-12 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden hidden lg:block">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-[#E73516]">Sobre Nosotros</p>
              <h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                DAILY POWER WYX SRL
              </h1>
              <p className="mt-6  text-gray-700 text-justify">
                En DAILY POWER WYX SRL ponemos a su disposición baterías libres de mantenimiento para vehículos y sistemas de energía renovable; así como una amplia variedad en materiales y equipos para sistemas fotovoltaicos. Nuestro compromiso es ofrecer productos de alta calidad con un servicio eficiente que agregue valor a los proyectos de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="Team Daily Power"
            src="/nosotros.webp"
            width={768}
            height={768}
            className="w-[48rem] h-auto max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 hidden lg:block"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p className='text-justify'>
                En el campo de la energía solar, contamos con equipos para la implementación de cualquier proyecto: paneles solares, Inversores on-grid e Inversores off-grid, Controladores solares, Baterías de Gel, Baterías de Litio, materiales de instalación, etc. Como importador, cooperamos con líderes empresas de energía solar en China, que se centran en la calidad, la eficiencia y la estabilidad. Al mismo tiempo, brindamos soporte técnico para que nuestros clientes obtengan soluciones de proyectos de manera más profesional, rápida y conveniente.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ImPower  aria-hidden="true" className="mt-1 text-2xl flex-none text-[#E73516]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Misión<br/> </strong> Brindar a nuestros clientes soluciones seguras, estables y eficientes con productos y servicios profesionales de alta calidad.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ImPower aria-hidden="true" className="mt-1 text-2xl flex-none text-[#E73516]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Visión<br/></strong> Convertirnos en un proveedor reconocido de productos de alta calidad en el campo solar dominicano y en el campo de las baterías, y brindar profesionalismo y valor al mercado.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ImPower aria-hidden="true" className="mt-1 text-2xl flex-none text-[#E73516]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Valores</strong>
                    <ul className='list-disc'>
                    <li>Responsabilidad</li>
                    <li>Cooperación</li>
                    <li>Honestidad</li>
                    <li>Innovación</li>
                    </ul>
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 text-start lg:text-justify">Somos representantes exclusivos de AOKLY en República Dominicana.</h2>
              <p className="mt-6 text-justify">
                AOKLY es la fábrica de baterías más grande del sur de China con más de 30 años de experiencia en I+D y producción. Sus productos son baterías GEL, baterías AGM, baterías de automóviles, baterías de vehículos eléctricos, baterías de montacargas, baterías de litio, etc. La fábrica cuenta con equipos de producción e instrumentos de prueba avanzados importados de Italia, Canadá y Alemania, además de una amplia variedad de baterías selladas de alta tecnología y líneas de producción automatizadas. Aokly mantiene un estricto control de la calidad en sus productos, sus procesos productivos han adoptado estándares internacionales, en los cuales hemos sido evaluados y certificados, como son: ISO9001, TS16949, ISO14001 en el sistema de control de calidad y el sistema ambiental, ROHS y las pruebas completas de IEC60095, etc. Ha sido reconocido por clientes globales en el mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}