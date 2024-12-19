'use client';
import { ImPower } from 'react-icons/im';
import { useState, useEffect } from 'react';

export default function AboutUs() {
  const [content, setContent] = useState(null);

  useEffect(() => {
  const fetchContent = async () => {
    try {
      const response = await fetch('/api/contentful?content_type=imagenGeneral');
      const data = await response.json();

      console.log('JSON de la respuesta Sobre nosotros:', data); // Imprime el JSON en consola

      if (data && data.length > 0) {
        setContent(data[0]); // Asumimos que el contenido está en el primer objeto
      }
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  fetchContent();
}, []);

  if (!content) {
    return <p>Cargando datos...</p>; // Muestra un mensaje mientras se cargan los datos
  }

  const {
    titulo,
    subtitulo,
    primerParrafo,
    segundoParrafo,
    tercerParrafo,
    mision,
    vision,
    valores,
    image,
  } = content;

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
                {titulo}
              </h1>
              <p className="mt-6 text-gray-700 text-justify">{primerParrafo}</p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <div>
            {image ? (
              <img
                alt="Team Daily Power"
                src={`https:${image}`}
                width={768}
                height={768}
                className="w-[48rem] h-auto max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 hidden lg:block"
              />
            ) : (
              <p>Cargando imagen...</p>
            )}
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
              <p className="text-justify">{segundoParrafo}</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ImPower aria-hidden="true" className="mt-1 text-2xl flex-none text-[#E73516]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Misión<br /></strong>
                    {mision}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ImPower aria-hidden="true" className="mt-1 text-2xl flex-none text-[#E73516]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Visión<br /></strong>
                    {vision}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ImPower aria-hidden="true" className="mt-1 text-2xl flex-none text-[#E73516]" />
                  <span>
                    <strong className="font-semibold text-gray-900">Valores</strong>
                    <ul className="list-disc ml-6">
                      {valores.map((valor, index) => (
                        <li key={index}>{valor}</li>
                      ))}
                    </ul>
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 text-start lg:text-justify">
                {subtitulo}
              </h2>
              <p className="mt-6 text-justify">{tercerParrafo}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}