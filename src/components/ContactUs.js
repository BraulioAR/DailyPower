'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ContactCard from '@/components/ContactCard';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function ContactUs() {
  const [formLoaded, setFormLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hubspotConfig, setHubspotConfig] = useState(null);

  useEffect(() => {
    const fetchHubspotConfig = async () => {
      try {
        const res = await fetch('/api/hubspot-config');
        if (!res.ok) throw new Error('Failed to fetch HubSpot configuration');
        const data = await res.json();
        setHubspotConfig(data);
      } catch (error) {
        console.error('Error fetching HubSpot configuration:', error);
        setIsLoading(false); // Dejar de mostrar el estado de carga si ocurre un error
      }
    };

    fetchHubspotConfig();
  }, []);

  useEffect(() => {
    if (!hubspotConfig) return;

    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.type = 'text/javascript';
    script.async = true;
    script.charset = 'utf-8';

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: hubspotConfig.portalId,
          formId: hubspotConfig.formId,
          target: '#hubspot-form',
          onFormReady: () => {
            setFormLoaded(true);
            setIsLoading(false);
          },
        });
      }
    };

    script.onerror = () => {
      setIsLoading(false);
    };

    document.body.appendChild(script);

    const timeout = setTimeout(() => {
      if (!formLoaded) {
        setIsLoading(false);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.body.removeChild(script);
    };
  }, [hubspotConfig]);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
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
            <div className="bg-orange-100 mt-8 text-orange-800 p-4 rounded-md max-w-md">
              Cargando el formulario, por favor espera...
            </div>
          )}
          {!isLoading && !formLoaded && (
            <div className="bg-yellow-100 mt-8 text-yellow-800 p-4 rounded-md max-w-md">
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
