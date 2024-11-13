'use client';
import { useState, useRef } from 'react';

export default function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [submenuDirection, setSubmenuDirection] = useState('right'); // Estado para la dirección del submenú
  let menuTimeout; // Variable para almacenar el temporizador
  const submenuRef = useRef(null); // Referencia al submenú

  const handleMouseEnter = (submenu = null) => {
    clearTimeout(menuTimeout); // Limpia cualquier temporizador de cierre activo
    setIsProductsOpen(true);
    setActiveSubmenu(submenu);
    
    // Si es un submenú, verifica la posición
    if (submenu && submenuRef.current) {
      const submenuRect = submenuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const isOverflowingRight = submenuRect.right > viewportWidth;
      
      // Cambia la dirección del submenú si es necesario
      setSubmenuDirection(isOverflowingRight ? 'left' : 'right');
    }
  };

  const handleMouseLeave = () => {
    menuTimeout = setTimeout(() => {
      setIsProductsOpen(false);
      setActiveSubmenu(null);
    }, 200); // Temporizador de 200ms antes de cerrar el menú
  };

  return (
    <header className="w-full max-w-7xl mx-auto">
      <div className="w-full h-full flex flex-row justify-between items-center px-20 py-5">
        <img src="./logo-daily-power-1.webp" alt="Logo Daily Power" className="w-[80px] h-[60px] object-fit" />
        <nav>
          <ul className="flex gap-x-4">
            <li>
              <a href="/" className="text-[17px] font-semibold text-gray-700 hover:text-[#EDB25C]">Inicio</a>
            </li>

            {/* Productos con Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => handleMouseEnter()}
              onMouseLeave={handleMouseLeave}
            >
                          <a href="/" className="text-[17px] font-semibold text-gray-700 hover:text-[#EDB25C] flex flex-row items-center gap-2">Productos
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" >
                                 <path fillRule="evenodd" clipRule="evenodd" d="M4.16672 6.19946L10.0001 12.0328L15.8334 6.19946L16.7173 7.08335L10.0001 13.8006L3.28284 7.08335L4.16672 6.19946Z" fill="#374151" stroke="#374151" strokeWidth="0.5" strokeLinecap="square"/>
                                </svg></a>
              
              {/* Dropdown de Productos */}
              {isProductsOpen && (
                <div className="absolute flex flex-col bg-white border border-gray-300 p-4 mt-4 shadow-lg border-b border-t-2 border-t-[#EDB25C] z-30 w-80 "
                  onMouseEnter={() => clearTimeout(menuTimeout)} // Evita que el menú se cierre
                  onMouseLeave={handleMouseLeave} // Cierra cuando se sale del dropdown
                >
                  <ul>
                    <li
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('bateriasGelatina')}
                      onMouseLeave={handleMouseLeave}
                    >
                                          <a href="#" className=" text-gray-700 hover:text-[#EDB25C] flex flex-row items-center justify-between gap-2 hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Baterias de Gelatina
                                              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" >
                                                 <path fillRule="evenodd" clipRule="evenodd" d="M4.16672 6.19946L10.0001 12.0328L15.8334 6.19946L16.7173 7.08335L10.0001 13.8006L3.28284 7.08335L4.16672 6.19946Z" fill="#374151" stroke="#374151" strokeWidth="0.5" strokeLinecap="square"/>
                                                </svg></a>
                      {/* Submenu de Baterias de Gelatina */}
                      {activeSubmenu === 'bateriasGelatina' && (
                        <div 
                        ref={submenuRef}
                          className={`absolute top-0 mt-0 bg-white border border-gray-300 p-4 shadow-lg z-40 w-[400px] gap-y-1 ${submenuDirection === 'left' ? 'right-full' : 'right-full'} border-b border-t-2 border-t-[#EDB25C]`}>
                          <ul>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria De Gelatina Aokly 100Ah</a></li>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria De Gelatina Aokly 150Ah</a></li>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria De Gelatina Aokly 200Ah</a></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('bateriasLitio')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a href="#" className=" text-gray-700 hover:text-[#EDB25C] flex  flex-row items-center justify-between gap-2 hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Baterias de Litio 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.16672 6.19946L10.0001 12.0328L15.8334 6.19946L16.7173 7.08335L10.0001 13.8006L3.28284 7.08335L4.16672 6.19946Z" fill="#374151" stroke="#374151" strokeWidth="0.5" strokeLinecap="square"/>
                        </svg>
                      </a>
                      {/* Submenu de Baterias de Litio */}
                      {activeSubmenu === 'bateriasLitio' && (
                        <div 
                        ref={submenuRef}
                          className={`absolute top-0 mt-0 bg-white border border-gray-300 p-4 shadow-lg z-40 w-[400px] gap-y-1 ${submenuDirection === 'right' ? 'left-full' : 'right-full'} border-b border-t-2 border-t-[#EDB25C]`}>
                          <ul>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria Felicity de 5KWH 24Vdc</a></li>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria Felicity de 10KWH 51.2Vdc</a></li>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria Felicity de 15KWH 51.2Vdc</a></li>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] py-2 px-2">Bateria Felicity de 17.5KWH 51.2Vdc</a></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('inversoresOffGrid')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <a href="#" className=" text-gray-700 hover:text-[#EDB25C] flex flex-row items-center justify-between gap-2 hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Inversores solares Off-Grid
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 20 20" fill="none" >
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.16672 6.19946L10.0001 12.0328L15.8334 6.19946L16.7173 7.08335L10.0001 13.8006L3.28284 7.08335L4.16672 6.19946Z" fill="#374151" stroke="#374151" strokeWidth="0.5" strokeLinecap="square"/>
                        </svg>
                      </a>
                      {/* Submenu de Inversores solares Off-Grid */}
                      {activeSubmenu === 'inversoresOffGrid' && (
                        <div 
                        ref={submenuRef}
                          className={`absolute top-0 mt-0 bg-white border border-gray-300 p-4 shadow-lg z-40 w-[400px] gap-y-1 ${submenuDirection === 'right' ? 'left-full' : 'right-full'} border-b border-t-2 border-t-[#EDB25C]`}>
                          <ul>
                            <li><a href="#" className="block text-gray-700 hover:text-[#EDB25C] ">Inversor Felicity Solar 8KW IVPA10048</a></li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li  className="relative"
                      onMouseEnter={() => handleMouseEnter('inversoresSolares')}
                      onMouseLeave={handleMouseLeave}><a href="#" className="block text-gray-700 hover:text-[#EDB25C] hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Inversores Solares Growatt</a></li>
                    <li  className="relative"
                      onMouseEnter={() => handleMouseEnter('estructurasdeMontaje')}
                      onMouseLeave={handleMouseLeave}><a href="#" className="block text-gray-700 hover:text-[#EDB25C] hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Estructuras de Montaje</a></li>
                    <li  className="relative"
                      onMouseEnter={() => handleMouseEnter('panelesSolares')}
                      onMouseLeave={handleMouseLeave}><a href="#" className="block text-gray-700 hover:text-[#EDB25C] hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Paneles Solares</a></li>
                    <li  className="relative"
                      onMouseEnter={() => handleMouseEnter('inversoresConvencionales')}
                      onMouseLeave={handleMouseLeave}><a href="#" className="block text-gray-700 hover:text-[#EDB25C] hover:rounded-lg hover:opacity-[0.5] hover:bg-slate-100 px-2 py-2">Inversores Convencionales</a></li>
                  </ul>
                </div>
              )}
            </li>
            
            <li >
              <a href="/" className="text-[17px] font-semibold text-gray-700 hover:text-[#EDB25C]">Quienes Somos</a>
            </li>
            <li>
              <a href="/" className="text-[17px] font-semibold text-gray-700 hover:text-[#EDB25C]">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

