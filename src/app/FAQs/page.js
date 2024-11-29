import Link from "next/link";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

export const metadata = {
  title: "Preguntas Frecuentes | DailyPower - Soluciones en Energía Solar",
  description: "Resuelve todas tus dudas sobre baterías solares, inversores y más en nuestra sección de Preguntas Frecuentes. Aprende sobre envíos, garantías y soporte técnico.",
  keywords: [
    "Preguntas frecuentes",
    "FAQ energía solar",
    "DailyPower preguntas",
    "Baterías solares información",
    "Inversores energía solar",
    "Envíos y garantías DailyPower",
    "Soporte técnico energía solar"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Preguntas Frecuentes | DailyPower",
    description: "Consulta nuestra sección de preguntas frecuentes para resolver tus dudas sobre productos, garantías, y envíos de DailyPower.",
    url: "https://www.dailypower.com/preguntas-frecuentes",
    type: "website",
  },
  twitter: {
    title: "Preguntas Frecuentes | DailyPower",
    description: "Resuelve tus dudas sobre energía solar en nuestra sección de FAQ. Aprende sobre baterías, inversores y mucho más.",
    card: "summary",
  },
};


export default function FAQs() {    


    return (
        <section className=" w-full h-full flex flex-col justify-center items-center lg:items-start lg:flex-row gap-12 py-40 max-w-7xl mx-auto ">    
            <div className="w-full lg:w-1/3 flex flex-col px-4 lg:px-0">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-start text-center">Preguntas Frecuentes</h1>
                <p className="mt-4 text-xl text-gray-500 text-center lg:text-start">¿No encuentras la respuesta que buscabas? <span className="text-[#E73516]"><Link href="/Contacto" target="_self">Contacta directamente con nosotros.</Link></span></p>
            </div>
           <PreguntasFrecuentes/>
        </section>
    ); 
}

