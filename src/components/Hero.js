export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] lg:h-[80vh] bg-[url('/Inicio-1.jpg')] bg-cover">
      
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Contenido dentro de la sección */}
      <div className="relative z-10 w-full h-[70vh] lg:h-[80vh] max-w-7xl mx-auto flex">
        <div className="flex flex-col px-10 items-start justify-center lg:items-baseline lg:justify-end pb-12 gap-3">
            <div className="flex gap-4 flex-row items-center">
                <div className="w-[10px] h-[80px] bg-[#E41F18]"/>
                <h1 className="text-white text-[64px] font-bold leading-[70.4px]">Daily Power</h1>
            </div>
            <div className="w-full lg:w-1/2">
            <h2 className=" font-medium text-[22px] leading-[35.2px] text-white">Representante exclusivo para República Dominicana de Baterías Aokly.
             Aplicaciones: Inversores, Paneles Solares y UPS.</h2>
            </div>
        </div>
      </div>
    </section>
  );
}