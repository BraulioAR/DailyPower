'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react'
import dynamic from 'next/dynamic';
import ContactCard from '@/components/ContactCard'


const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const netlifyFormData = new FormData(e.target);
    
    await fetch('/__forms.html', {
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: new URLSearchParams(netlifyFormData).toString()
    })
      .then(() => (
        
        setShowSuccess(true) 

        // Clear the form fields
    && setFormData({
      name: '',
      company: '',
      email: '',
      message: ''
    })

    // Hide the success message after 4 seconds
    && setTimeout(() => {
      setShowSuccess(false);
    }, 4000)
      )
      

    )

    if (!formData.name || !formData.email || !formData.message || !agreed) {
      setFormError('Por favor, acepta la política de privacidad.');
      setTimeout(() => {
      setFormError('');
    }, 4000);
      return;
    }
    
    
  };

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
      <section className='w-full flex lg:flex-row flex-col justify-center gap-14'>
        <div className='flex flex-col justify-center'>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Envianos un mensaje
          </h2>
          {showSuccess && (
            <div className="bg-green-100 text-green-800 p-4 rounded-md mt-4 max-w-md">
              <span>Mensaje enviado con éxito, nuestro equipo estará en contacto contigo pronto.</span>
            </div>
          )}
          <form name="contactus" onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20" >
            <input required type='hidden' name='form-name' value='contactus' />
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="block text-sm/6 font-semibold text-gray-900">
                  Nombre
                </label>
                <div className="mt-2.5">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                  Empresa
                </label>
                <div className="mt-2.5">
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="organization"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                  Mensaje
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    required
                  />
                </div>
              </div>
              {formError && (
                    <div className="bg-red-100 text-red-800 p-4 rounded-md mt-4 col-span-2">
                      <span>{formError}</span>
                    </div>
                  )}
              <Field className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E73516] data-[checked]:bg-[#E73516]"
                  >
                    <span className="sr-only">Estoy de acuerdo con la política de privacidad.</span>
                    <span
                      aria-hidden="true"
                      className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                    />
                  </Switch>
                </div>
                <Label className="text-sm/6 text-gray-600">
                  Al marcar esta opción, aceptas el uso de tu información de contacto para ser contactado por un representante de {' '}
                  <a href="/Nosotros" className="font-semibold text-[#E73516]">
                    Daily&nbsp;Power&nbsp;WYX&nbsp;SRL.
                  </a>
                  .
                </Label>
              </Field>
            </div>
            <div className="mt-4 flex justify-center gap-x-6">
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-[#E73516] px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-[#EC7610] focus:outline-none focus:ring-2 focus:ring-[#E73516] focus:ring-offset-2"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
        <ContactCard/>
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