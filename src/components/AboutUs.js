export default function AboutUs() {
    return (
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      <section id="aboutus" className="w-full h-full relative z-50 ">
          <div className="flex flex-row items-center">
              <img src="/Banco-Baterias-3.webp" alt="Imagen Banco de Baterias" className="w-1/3 h-full object-cover lg:block hidden rounded-lg" />
              <div className="w-full lg:w-2/3 h-full flex flex-col px-20 gap-2 items-center relative z-40">
                  <h1 className="font-bold text-[42px] leading-[50.4px] text-[#333333] py-7 text-center lg:text-start">Acerca de Nosotros</h1>
                  <div className="border-2 border-b border-[#e41f18] w-20" />
                  <p className="font-medium text-[15px] leading-[27px] text-[#333333]">Ofrecemos soluciones de almacenamiento de energía y sistemas de energía alternativos. Dentro de estas soluciones hemos sido designados distribuidores exclusivos de las baterías Aokly para República Dominicana.<br /><br />
                      A través de nuestra alianza con Aokly, nuestro personal recibe entrenamiento que permite ofrecer soluciones alineadas con las necesidades de nuestros clientes y del mercado en general, además de ofrecer la garantía y niveles de servicios que cumplen con el compromiso de nuestra empresa.<br /><br />
                      Contamos con baterías de todo tipo, cubriendo campos residenciales, empresariales, automotrices e incluso aplicaciones para proyectos especiales de alta complejidad.</p>
                  <button className="border-[4px] border-[#E73516] bg-transparent text-[#E73516] hover:text-white hover:scale-105 hover:bg-[#E73516] py-3 text-[14px] font-bold leading-[23.8px] px-14 w-80">MAS INFORMACIÓN</button>
              </div>
          </div>
    </section>
    <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 sm:left-[calc(50%+3rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
  );
}