import AboutUs from "@/components/AboutUs";
import Clients from "@/components/Clients";
import NewProducts from "@/components/NewProducts";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import dynamic from 'next/dynamic';

const LazyComponent = dynamic(() => import('../components/NewProducts'), { ssr: false });

export const metadata = {
  title: "Daily Power | Distribuidor Exclusivo de las Baterias Aokly",
  description: "Distribuidor Exclusivo de las Baterias Aokly",
};


export default function Home() {
  return (
    <main className="scroll-smooth">
     <Hero/>
      <Values/>
      <AboutUs />
      <LazyComponent />
      <Clients />
          <div className="w-full h-full bg-[#292929] relative z-40">
      <div className="w-full h-full max-w-7xl mx-auto">
        <div className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-0  items-center justify-between py-9">
        <h1 className="text-[#F5F5F5] font-bold text-4xl leading-[50.4px] text-center lg:text-start ">Para más información:</h1>
          <a href="/Contacto" className="border-[4px] border-[#E73516] bg-transparent text-[#E73516] hover:text-white hover:scale-105 hover:bg-[#E73516] py-3 text-[14px] font-bold leading-[23.8px] px-14">CONTÁCTENOS</a>
          </div>
          </div>
      </div>
      </main>
  );
}
