'use client';

import { useEffect, useState } from "react";
import { Instagram, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { performRequest } from "@/lib/datocms";

export default function ContactPage() {
  const [contactData, setContactData] = useState([]);

   const PAGE_CONTENT_QUERY = `
     query {
       datosContacto {
         numerosDeTelefono
            {
            telefono
            }
         direccion
         cuentasDeInstagram
            {
            cuentaInstagram
            }
         horarioWeekdays
         horarioWeekends
       }
     }
   `;
   
     useEffect(() => {
     const fetchPageContent = async () => {
       try {
         const response = await performRequest(PAGE_CONTENT_QUERY);
         console.log('Respuesta completa:', response); // Verifica el resultado de performRequest
   
         // Directamente verifica si la propiedad datosContacto existe
         if (response && response.datosContacto) {
           setContactData(response.datosContacto); // Establece los datos correctamente
         } else {
           console.error('No se encontraron datos en la respuesta:', response);
         }
       } catch (error) {
         console.error('Error al obtener contenido de la página:', error);
       } 
     };
   
     fetchPageContent();
     }, []);

  const formatPhoneNumber = (phoneNumber) => {
    const cleaned = phoneNumber.toString().replace(/\D/g, '');
    const countryCode = cleaned.slice(0, 1);
    const areaCode = cleaned.slice(1, 4);
    const centralOfficeCode = cleaned.slice(4, 7);
    const lineNumber = cleaned.slice(7);
    return `+${countryCode} (${areaCode}) ${centralOfficeCode}-${lineNumber}`;
  };

  if (!contactData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando información de contacto...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center w-full lg:w-1/3">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Contact Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Phone */}
            <div className="relative group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                <Phone className="w-6 h-6 mt-1 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                  <div className="mt-2 space-y-2 flex-col flex">
                    {contactData.numerosDeTelefono?.map((number, index) => (
                      <Link
                        key={index}
                        href={`https://api.whatsapp.com/send/?phone=${number.telefono}&text&type=phone_number&app_absent=0`}
                        className="text-gray-600 hover:text-[#E73516] transition-colors"
                      >
                        {formatPhoneNumber(number.telefono)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="relative group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                <Clock className="w-6 h-6 mt-1 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Horario</h3>
                  <div className="mt-2 space-y-1 text-gray-600">
                    <p>{contactData.horarioWeek}</p>
                    <p>{contactData.horarioWeekend}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <div className="relative group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                <Instagram className="w-6 h-6 mt-1 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                  <div className="mt-2 space-y-2 flex-col flex">
                    {contactData.cuentasDeInstagram?.map((cuenta, index) => (
                      <Link
                        key={index}
                        href={`https://instagram.com/${cuenta.cuentaInstagram}`}
                        className="text-gray-600 hover:text-[#E73516] transition-colors"
                      >
                        @{cuenta.cuentaInstagram}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="relative group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                <MapPin className="w-6 h-6 mt-1 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Dirección</h3>
                  <address className="mt-2 not-italic text-gray-600">
                    {contactData.direccion}
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}