import Hedaerr from "@/components/Hedaerr"

export const metadata = {
    title: 'Baterías de Gelatina, Paneles Solares, Inversores y Más para tu Sistema de Energía Solar | DailyPower',
    description: 'Encuentra baterías solares, de litio, para inversores y más en DailyPower. Ofrecemos productos de alta calidad y fiabilidad con la mejor garantía del mercado, ideal para sistemas solares, UPS, música para vehículos y más. Ubicados en Santo Domingo, garantizamos la mejor experiencia de uso y servicio.',
    keywords: [
    "productos energía solar",
    "baterías solares",
    "inversores solares",
    "paneles solares",
    "soluciones energéticas",
    "DailyPower productos",
  ],
    openGraph: {
    title: "Productos de Energía Solar | Baterías, Inversores y Más | DailyPower",
    description:
      "DailyPower ofrece productos confiables y de alta calidad para sistemas de energía solar, incluyendo baterías solares, inversores y paneles solares.",
    url: "https://www.dailypower.com/Productos", // Cambia a la URL real
    type: "website",
    images: [
      {
        url: "/logo-daily-power-1.webp", // Cambia a la URL real de la imagen
        width: 1200,
        height: 630,
        alt: "DailyPower - Productos de Energía Solar",
      },
    ],
  },
     twitter: {
    card: "summary_large_image",
    title: "Productos de Energía Solar | Baterías, Inversores y Más | DailyPower",
    description:
      "Descubre productos de energía solar de alta calidad en DailyPower. Ofrecemos baterías, inversores y más para tu sistema solar.",
    images: [
      "/logo-daily-power-1.webp", // Cambia a la URL real de la imagen
    ],
  },
}
const Layout = ({ children }) => {
    return (<>
        <Hedaerr />
        {children}
    </>)
}

export default Layout;