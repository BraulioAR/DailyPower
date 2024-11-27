"use client"

import { Instagram, Clock, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center w-full lg:w-1/3">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
         

          {/* Contact Grid */}
          <div className="grid grid-cols-1 gap-8">
            {/* Phone */}
            <div className="relative group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                <Phone className="w-6 h-6 mt-1 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                  <div className="mt-2 space-y-2 flex-col flex">
                  <Link 
                    href="https://api.whatsapp.com/send/?phone=8495678088&text&type=phone_number&app_absent=0" 
                    className=" text-gray-600 hover:text-[#E73516] transition-colors"
                  >
                    +1 (849) 567-8088 
                  </Link>
                  <Link 
                    href="https://api.whatsapp.com/send/?phone=8092878266&text&type=phone_number&app_absent=0" 
                    className=" text-gray-600 hover:text-[#E73516] transition-colors"
                  >
                    +1 (809) 287-8266 
                  </Link>
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
                    <p>Lun. a Vie: 8:30am – 5:30pm</p>
                    <p>Sábado: 8:30am – 2:30pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Accounts */}
            <div className="relative group">
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 transition-all duration-300 hover:bg-gray-100">
                <Instagram className="w-6 h-6 mt-1 text-gray-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Instagram</h3>
                  <div className="mt-2 space-y-2">
                    <Link 
                      href="https://instagram.com/aoklybaterias" 
                      target="_blank"
                      className="block text-gray-600 hover:text-[#E73516] transition-colors"
                    >
                      @aoklybaterias
                    </Link>
                    <Link 
                      href="https://instagram.com/dailypower.rd" 
                      target="_blank"
                      className="block text-gray-600 hover:text-[#E73516] transition-colors"
                    >
                      @dailypower.rd
                    </Link>
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
                     Av. 27 de febrero Esq. Tiradentes<br />
                    Plaza Merengue, Ensanche Naco, Local 103,<br />
                    Santo Domingo
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