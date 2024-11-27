import AboutUs from "@/components/AboutUs";

export const metadata = {
  title: "Sobre Nosotros | DailyPower - Expertos en Energía Solar",
  description:
    "Conoce DailyPower, líderes en soluciones de energía solar. Descubre nuestra misión, visión y compromiso con la sostenibilidad y el desarrollo energético.",
  keywords: [
    "Sobre DailyPower",
    "Quiénes somos DailyPower",
    "Historia de DailyPower",
    "Expertos en energía solar",
    "Sostenibilidad energética",
    "DailyPower misión y visión",
  ],
  openGraph: {
    title: "Sobre Nosotros | DailyPower - Expertos en Energía Solar",
    description:
      "En DailyPower estamos comprometidos con ofrecer soluciones de energía renovable para hogares y empresas. Conoce nuestra historia y valores.",
    url: "https://www.dailypower.com/Nosotros", // Cambia a la URL real
    type: "website",
    images: [
      {
        url: "/logo-daily-power-1.webp", // Cambia a la URL real de la imagen
        width: 1200,
        height: 630,
        alt: "DailyPower - Sobre Nosotros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | DailyPower - Expertos en Energía Solar",
    description:
      "Descubre cómo DailyPower lidera en soluciones sostenibles para energía solar. Nuestra misión es ayudarte a construir un futuro más verde.",
  },
};

export default function Home() {
  return (
    <main className="scroll-smooth py-8">
    <AboutUs/>
    </main>
  );
}
