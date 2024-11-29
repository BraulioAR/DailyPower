import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Contacto | DailyPower - Comunícate con Nosotros",
  description:
    "¿Tienes preguntas? Contáctanos a través de nuestro formulario, por teléfono o visítanos. En DailyPower estamos aquí para ayudarte con tus sistemas de energía solar.",
  keywords: [
    "Contacto DailyPower",
    "Servicio al cliente DailyPower",
    "Formulario de contacto",
    "Atención al cliente energía solar",
    "Soporte baterías solares",
    "Información de contacto DailyPower",
  ],
  openGraph: {
    title: "Contacto | DailyPower - Comunícate con Nosotros",
    description:
      "En DailyPower estamos listos para resolver tus dudas sobre sistemas de energía solar. Contáctanos por nuestros canales de comunicación.",
    url: "https://www.dailypower.com/contacto", // Asegúrate de usar la URL real
    type: "website",
    images: [
      {
        url: "https://www.dailypower.com/images/contacto-og-image.jpg", // Cambia a la URL real de la imagen
        width: 1200,
        height: 630,
        alt: "Imagen de contacto DailyPower",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | DailyPower - Comunícate con Nosotros",
    description:
      "Contáctanos para resolver tus dudas sobre baterías solares, inversores y más. Estamos aquí para ayudarte.",
    images: [
      "https://www.dailypower.com/images/contacto-twitter-card.jpg", // Cambia a la URL real de la imagen
    ],
  },
};



export default function Contacto() {
  return (
    <main className="scroll-smooth">
    <ContactUs/>
    </main>
  );
}
