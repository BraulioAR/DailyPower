import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-full">
      <section className="bg-[#292929] h-full lg:h-60 relative z-40">
        <div className=" flex px-12 w-full h-full flex-col lg:justify-center lg:items-center lg:flex-row mx-auto gap-x-14 lg:pt-2 pt-10">
          <div className="flex flex-col gap-y-6">
            <h1 className="text-base font-medium text-[#F5F5F5] lg:no-underline underline">Daily Power</h1>
            <div className="flex justify-between gap-x-14">
              <nav className="flex flex-col gap-3 items-start  lg:justify-normal justify-center">
                <Link href="/" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal text-start">Inicio</Link>                    
                <Link href="/Nosotros" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal text-start">Quienes Somos</Link>
                <Link href="/Contacto" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal text-start">Contacto</Link>
              </nav>
            <div>
              <nav className="flex flex-col gap-3 items-start lg:justify-normal justify-center">
                <Link href="/FAQs" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Preguntas Frecuentes</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-start  lg:justify-normal justify-center">
          <h1 className="text-base font-medium text-[#F5F5F5] lg:no-underline underline lg:my-0 my-2">Productos</h1>
          <div className="lg:flex lg:justify-between gap-x-14 grid grid-flow-row grid-cols-2 gap-y-2">
          <nav className="flex flex-col gap-3">
              <Link href="/Productos/Baterias#gelatina"className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Baterias de Gelatina</Link>
              <Link href="/Productos/Baterias#litio" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Baterias de Litio</Link>
              <Link href="/Productos/Inversores#offgrid" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Inversores Solares Off-Grid</Link>
          </nav>
          <div>
              <nav className="flex flex-col gap-3">
                <Link href="/Productos/Inversores#growatt"className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Inversores Solares Growatt</Link>
                <Link href="/Productos#montaje"className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Estructuras de Montaje</Link>
                <Link href="/Productos/Paneles-Solares#productos" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">Paneles Solares</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 items-start lg:mt-0 mt-4">
            <h1 className="text-base font-medium text-[#F5F5F5] lg:no-underline underline lg:my-0 my-2">Contacto</h1>
            <div className="flex justify-between gap-x-14">
              <nav className="flex flex-col gap-3">
                <Link href="mailto:juandailypower@gmail.com" className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">juandailypower@gmail.com</Link>
                <Link href="tel:18492598088"  className=" text-[#F5F5F5] hover:[#EDB059] hover:scale-105 text-base font-normal">+1 849-259-8088</Link> <br/>
              </nav>     
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#292929] lg:h-20">
        <div className="w-full flex px-20 md:px-10 lg:px-40 justify-between items-center lg:flex-row flex-col-reverse h-full gap-y-4 ">
          <div className="flex items-center gap-x-8 flex-col lg:flex-row">
            <img src="/logo-daily-power-1.webp" alt="Logo Daily Power"  className="w-[102.5px] h-10" />
            <h1 className=" text-base font-normal text-center lg:text-start">Copyright &copy; 2024 Daily Power WYX, SRL, todos los derechos reservados.</h1>
           </div>
          <div className="flex items-center gap-x-5 justify-center ">
            <Link href="https://www.instagram.com/dailypower.rd" className="hover:scale-105 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" role="img" aria-label="Instagram">
                <path d="M16.0031 2.88181C20.279 2.88181 20.7853 2.90057 22.4669 2.97558C24.0297 3.04434 24.8736 3.3069 25.4362 3.52569C26.1801 3.81325 26.7177 4.16331 27.2741 4.71967C27.8367 5.28228 28.1805 5.81364 28.4681 6.55753C28.6869 7.12014 28.9494 7.97031 29.0182 9.52686C29.0932 11.2147 29.1119 11.721 29.1119 15.9906C29.1119 20.2665 29.0932 20.7728 29.0182 22.4544C28.9494 24.0172 28.6869 24.8611 28.4681 25.4237C28.1805 26.1676 27.8304 26.7052 27.2741 27.2616C26.7115 27.8242 26.1801 28.168 25.4362 28.4556C24.8736 28.6744 24.0234 28.9369 22.4669 29.0057C20.7791 29.0807 20.2727 29.0994 16.0031 29.0994C11.7273 29.0994 11.2209 29.0807 9.53936 29.0057C7.97656 28.9369 7.13264 28.6744 6.57003 28.4556C5.82614 28.168 5.28853 27.8179 4.73217 27.2616C4.16956 26.699 3.82575 26.1676 3.53819 25.4237C3.3194 24.8611 3.05685 24.0109 2.98808 22.4544C2.91307 20.7666 2.89432 20.2602 2.89432 15.9906C2.89432 11.7148 2.91307 11.2084 2.98808 9.52686C3.05685 7.96406 3.3194 7.12014 3.53819 6.55753C3.82575 5.81364 4.17582 5.27603 4.73217 4.71967C5.29478 4.15706 5.82614 3.81325 6.57003 3.52569C7.13264 3.3069 7.98281 3.04434 9.53936 2.97558C11.2209 2.90057 11.7273 2.88181 16.0031 2.88181ZM16.0031 0C11.6585 0 11.1147 0.0187537 9.40809 0.0937683C7.70776 0.168783 6.53878 0.443837 5.52608 0.837664C4.46962 1.25024 3.5757 1.7941 2.68803 2.68802C1.7941 3.5757 1.25024 4.46962 0.837664 5.51983C0.443837 6.53878 0.168783 7.7015 0.0937683 9.40184C0.0187537 11.1147 0 11.6585 0 16.0031C0 20.3477 0.0187537 20.8916 0.0937683 22.5982C0.168783 24.2985 0.443837 25.4675 0.837664 26.4802C1.25024 27.5366 1.7941 28.4306 2.68803 29.3182C3.5757 30.2059 4.46962 30.756 5.51983 31.1623C6.53878 31.5562 7.7015 31.8312 9.40184 31.9062C11.1084 31.9812 11.6523 32 15.9969 32C20.3415 32 20.8853 31.9812 22.5919 31.9062C24.2922 31.8312 25.4612 31.5562 26.4739 31.1623C27.5241 30.756 28.4181 30.2059 29.3057 29.3182C30.1934 28.4306 30.7435 27.5366 31.1498 26.4864C31.5437 25.4675 31.8187 24.3047 31.8937 22.6044C31.9687 20.8978 31.9875 20.354 31.9875 16.0094C31.9875 11.6648 31.9687 11.1209 31.8937 9.41434C31.8187 7.71401 31.5437 6.54503 31.1498 5.53233C30.756 4.46962 30.2122 3.5757 29.3182 2.68802C28.4306 1.80035 27.5366 1.25024 26.4864 0.843915C25.4675 0.450088 24.3047 0.175034 22.6044 0.10002C20.8916 0.0187537 20.3477 0 16.0031 0Z" fill="white"/>
                <path d="M16.0031 7.78271C11.4647 7.78271 7.78271 11.4647 7.78271 16.0031C7.78271 20.5415 11.4647 24.2234 16.0031 24.2234C20.5415 24.2234 24.2234 20.5415 24.2234 16.0031C24.2234 11.4647 20.5415 7.78271 16.0031 7.78271ZM16.0031 21.3354C13.0587 21.3354 10.6708 18.9474 10.6708 16.0031C10.6708 13.0587 13.0587 10.6708 16.0031 10.6708C18.9474 10.6708 21.3354 13.0587 21.3354 16.0031C21.3354 18.9474 18.9474 21.3354 16.0031 21.3354Z" fill="white"/>
                <path d="M26.4676 7.4577C26.4676 8.52041 25.605 9.37683 24.5485 9.37683C23.4858 9.37683 22.6294 8.51416 22.6294 7.4577C22.6294 6.39499 23.4921 5.53857 24.5485 5.53857C25.605 5.53857 26.4676 6.40124 26.4676 7.4577Z" fill="white"/>
              </svg>
            </Link>
            <Link href="https://www.facebook.com/p/Daily-Power-WYX-SRL-100088135031853" className="hover:scale-105">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none" role="img" aria-label="Facebook">
                <path d="M16.3298 0.0554199C7.49158 0.0554199 0.32666 7.22034 0.32666 16.0585C0.32666 23.5634 5.49375 29.8609 12.4641 31.5905V20.9491H9.16423V16.0585H12.4641V13.9513C12.4641 8.50443 14.9292 5.97978 20.2768 5.97978C21.2908 5.97978 23.0402 6.17886 23.7559 6.3773V10.8102C23.3782 10.7705 22.7221 10.7506 21.9072 10.7506C19.2833 10.7506 18.2694 11.7447 18.2694 14.3289V16.0585H23.4966L22.5985 20.9491H18.2694V31.9445C26.1935 30.9875 32.3336 24.2406 32.3336 16.0585C32.3329 7.22034 25.168 0.0554199 16.3298 0.0554199Z" fill="white"/>
              </svg>
            </Link>
            <Link href="https://wa.me/184956780884" className="hover:scale-105">
              <img src="/icons/whatsapp-icon.png" alt="Whatsapp"/>
            </Link>
              </div>
        </div>
      </section>
    </footer>
  );
}

