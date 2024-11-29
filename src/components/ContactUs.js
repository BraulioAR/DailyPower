'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ContactCard from '@/components/ContactCard';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function ContactUs() {
  const [formLoaded, setFormLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID,
          formId: process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID,
          target: '#hubspot-form',
          onFormReady: () => {
            setFormLoaded(true); // El formulario se cargó con éxito
            setIsLoading(false); // Dejar de mostrar el estado de carga
          },
        });
      }
    };

    script.onerror = () => {
      setIsLoading(false); // Dejar de mostrar el estado de carga si ocurre un error
    };

    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (!formLoaded) {
        setIsLoading(false); // Si después de un tiempo no se carga, dejar de mostrar la carga
      }
    }, 5000); // Tiempo de espera máximo antes de determinar que falló

    return () => {
      clearTimeout(timeout);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Contacto
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Estamos aquí para atenderte
        </p>
      </div>
      <section className="w-full flex lg:flex-row flex-col justify-center gap-14">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-4">
            Envíanos un mensaje
          </h2>
          {isLoading && (
            <div className="bg-orange-100 mt-8 mb-0 lg:my-64 text-orange-800 p-4 rounded-md max-w-md">
              Cargando el formulario, por favor espera...
            </div>
          )}
          {!isLoading && !formLoaded && (
            <div className="bg-yellow-100 mt-8 mb-0 lg:my-64 text-yellow-800 p-4 rounded-md max-w-md">
              Parece que un bloqueador de anuncios está impidiendo cargar el formulario. Por favor, desactiva el bloqueador y recarga la página.
            </div>
          )}
          <div id="hubspot-form" className="mt-8"></div>
        </div>
        <ContactCard />
      </section>
      <section className="max-w-6xl gap-4 m-auto px-6 pt-10 pb-20 w-full">
        <h2 className="text-gray-900 pb-4 text-center lg:text-start text-4xl font-bold">
          Visítanos
        </h2>
        <div id="ubicacion" className="mt-10">
          <LeafletMap />
        </div>
      </section>
    </div>
  );
}