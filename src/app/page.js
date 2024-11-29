import AboutUs from "@/components/AboutUs";
import NewProducts from "@/components/NewProducts";
import Hero from "@/components/Hero";
import Values from "@/components/Values";

export const metadata = {
  metadataBase: new URL("https://www.dailypower.com.do"),
  title: "Daily Power | Soluciones en Baterías y Energía Renovable en Santo Domingo",
  description:
    "Encuentra las mejores baterías libres de mantenimiento, baterías solares, paneles solares e inversores en Santo Domingo. Calidad garantizada, profesionalismo y los productos más confiables del mercado para tus proyectos de energía renovable y vehículos.",
  keywords: [
    "baterías libres de mantenimiento",
    "baterías solares",
    "paneles solares",
    "inversores solares",
    "baterías de litio",
    "baterías de gelatina",
    "baterías LiFePo4",
    "cable fotovoltáico",
    "estructuras para paneles solares",
    "energía renovable Santo Domingo",
    "tienda de baterías",
    "productos para sistemas solares",
    "UPS Santo Domingo",
    "soluciones de energía confiable",
    "Daily Power"
  ],
  openGraph: {
    title: "Daily Power | Soluciones en Energía Renovable y Baterías",
    description:
      "En Daily Power ofrecemos baterías solares, paneles solares, inversores y más con la mejor garantía y calidad del mercado. Ubícanos en Santo Domingo y lleva tus proyectos de energía renovable al siguiente nivel.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/logo-daily-power-1.webp",
        alt: "Daily Power - Baterías y Paneles Solares en Santo Domingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Power - Baterías y Energía Renovable",
    description:
      "Conoce nuestras soluciones en baterías solares, inversores y paneles solares en Santo Domingo. Calidad, confiabilidad y profesionalismo garantizados.",
    images: ["/logo-daily-power-1.webp"],
  },
  canonical: "/",
};


export default function Home() {
  return (
    <main className="scroll-smooth">
     <Hero/>
      <Values/>
      <AboutUs />
      <NewProducts />
          <section className="w-full h-full bg-[#292929] relative z-40">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-0  items-center justify-between py-9">
        <h1 className="text-[#F5F5F5] font-bold text-4xl leading-[50.4px] text-center lg:text-start ">Para más información:</h1>
          <a href="/Contacto" className="border-[4px] border-[#E73516] bg-transparent text-[#E73516] hover:text-white hover:scale-105 hover:bg-[#E73516] py-3 text-[14px] font-bold leading-[23.8px] px-14">CONTÁCTENOS</a>
          </div>
          </div>
      </section>
      </main>
  );
}
