export default function Values() {
  return (
    <section  className="relative bg-gradient-to-b from-[#e41f18] to-[#e87b00] h-full w-full py-4">
          <div className="relative z-10 w-full  h-full max-w-7xl mx-auto flex flex-col">
              <h1 className="font-bold text-[32px] leading-[38.4px] text-white text-center py-2">Propuesta de Valor</h1>
              <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-flow-cols items-center gap-4 py-4">
                  <div className="flex flex-row items-center gap-3">
                      <img src="/icons/warranty.webp" className="w-16 h-16" alt="Icono Garantia" />
                       <p className=" font-semibold text-[18px] leading-[25.2px] text-white">Mayor Tiempo de Garantía del Mercado</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                      <img src="/icons/team3.webp" className="w-16 h-16" alt="Icono Experiencia" />
                      <p className="font-semibold text-[18px] leading-[25.2px] text-white">Experiencia, Conocimiento y Profesionalismo en Nuestro Equipo de Trabajo</p>
                  </div>
                   <div className="flex flex-row items-center gap-3">
                      <img src="/icons/iso-w.webp" className="w-16 h-16" alt="Icono Calidad" />
                      <p className=" font-semibold text-[18px] leading-[25.2px] text-white">Calidad Certificada &#40;ISO9001&#41;</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                      <img src="/icons/world-map.webp" className="w-16 h-16" alt="Icono Continentes"/>
                      <p className=" font-semibold text-[18px] leading-[25.2px] text-white">Presencia en los Cinco Continentes</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                      <img src="/icons/materia-prima-2.webp" className="w-16 h-16" alt="Icono Materia Prima" />
                      <p className=" font-semibold text-[18px] leading-[25.2px] text-white">Materia Prima de Primera Calidado</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                      <img src="/icons/inventario-2.webp" className="w-16 h-16" alt="Icono Disponibilidad" />
                      <p className=" font-semibold text-[18px] leading-[25.2px] text-white">Disponibilidad de Inventario Garantizada</p>
                  </div>
                  <div className="flex flex-row items-center gap-3">
                      <img src="/icons/enviroment.webp" className="w-16 h-16" alt="Icono Medio Ambiente" />
                      <p className=" font-semibold text-[18px] leading-[25.2px] text-white">Comprometidos con el Medio Ambiente &#40;ISO14001&#41;</p>
                  </div>
              </div>              
    </div>
    </section>
  );
}