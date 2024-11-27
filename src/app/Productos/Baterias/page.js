'use client';
import React, { useEffect, useState } from 'react';
import contentfulClient from '@/app/contenfulClient';
import { Open_Sans } from "next/font/google";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import Link from 'next/link';
import ProductView from '@/components/ProductView';

const osans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Mapeo de las letras a las categorías
// Mapeo de las letras a las categorías
const categoryMap = {
  B: 'Baterías',
  I: 'Inversores',
  P: 'Paneles-Solares',
  E: 'Estructuras-de-Montaje',
  O: 'Otros',
};

export default function Baterias() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Función para alternar entre mostrar más o menos productos
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    // Función para obtener productos desde Contentful
    const fetchProducts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'producto', // Usa el ID del content model
        });

        // Almacenar los productos en el estado
        const items = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.titulo, // Obtenemos el título del producto
          image: item.fields.productImage?.[0]?.fields.file.url, // Obtenemos la primera imagen del array de imágenes
          slug: item.fields.slug, // Obtener el slug del producto
          category: item.fields.category, // Obtenemos la categoría del producto
          subcategory: item.fields.subcategory,
        }));
        setProducts(items);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

    const filterProductsBySubcategory = (subcategoryCode) => {
    return products.filter((producto) => producto.subcategory === subcategoryCode);
  };

  return (
    <div className="bg-white w-full h-full mx-auto max-w-7xl">
      <section className="relative pt-20 lg:mt-24">
        <div className="lg:pb-80 pt-16 sm:pt-24 pb-24 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Conoce nuestras baterías libres de mantenimiento para vehículos
              </h1>
              <h2 className="mt-4 text-xl text-gray-500">
                Baterías de gelatina para inversores, UPS, sistemas solares, música, LiFePo4.
              </h2>
            </div>
            <div>
               <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt="Baterías libres de mantenimiento para vehículos"
                            title="Baterías libres de mantenimiento para vehículos"
                            src="/Bat-5kwh-2.webp"
                            className="size-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Baterías de gelatina para inversores, UPS, sistemas solares y música."
                            title="Baterías de gelatina para inversores, UPS, sistemas solares y música."
                            src="/Bat-175kwh-4.webp"
                            className="size-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Baterías de litio"
                            title="Baterías de litio"
                            src="/Bat-15kwh-2.webp"
                            className="size-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Inversores solares"
                            title="Paneles solares"
                            src="/IVPA10048-1.webp"
                            className="size-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            alt="Estructura para instalación de paneles solares"
                            title="Estructura para instalación de paneles solares"
                            src="/RAIL-CROSS-CONNECTER.webp"
                            className="size-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <a
              href="/Productos"
              className="inline-block rounded-md border border-transparent bg-[#E73516] px-8 py-3 text-center font-medium text-white hover:scale-105"
            >
              Ver todos los productos
            </a>
          </div>
        </div>
      </section>
g
      <section id="baterias">
        <div className='w-full flex flex-col gap-y-10 mx-auto max-w-5xl justify-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 text-center'>Categorías</h1>
          <div className='grid grid-cols-2 grid-flow-row lg:flex lg:flex-row gap-4 lg:gap-10 justify-center mx-auto'>
            <Link href="#baterias" className='rounded-md p-4 border shadow border-[#E73516] text-white bg-[#E73516] hover:scale-105 lg:w-52 flex justify-center items-center'>Baterías</Link>
            <Link href="Inversores#inversores" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Inversores</Link>
            <Link href="/Contacto" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Paneles Solares</Link>
            <Link href="#montaje" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center text-center '>Estructuras de Montaje</Link>
          </div>
        </div>

        {/* Lista de productos */}
           <div id="gelatina" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">Baterías de Gelatina</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filterProductsBySubcategory('BG').slice(0, showAll ? products.length : 4).map((producto) => (
                <ProductView key={producto.id} src={producto.image} title={producto.title} route={categoryMap[producto.category]} slug={producto.slug}/>
              ))}
            </div>
            {products.length < 4 &&
              <div className="text-center mt-6">
                <button onClick={toggleShowAll} className="text-[#E73516] hover:text-[#C33F1A] font-semibold">
                  {showAll ? (
                    <IoArrowUpCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " />
                  ) : (
                    <IoArrowDownCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " />
                  )}
                </button>
              </div>
            }
          </div>
        </div>
 
          <div id="litio" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">Baterías de Litio</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
               {filterProductsBySubcategory('BL').slice(0, showAll ? products.length : 4).map((producto) => (
                <ProductView key={producto.id} src={producto.image} title={producto.title} route={categoryMap[producto.category]} slug={producto.slug}/>
              ))}
            </div>
            {products.length < 4 &&
              <div className="text-center mt-6">
                <button onClick={toggleShowAll} className="text-[#E73516] hover:text-[#C33F1A] font-semibold">
                  {showAll ? (
                    <IoArrowUpCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " />
                  ) : (
                    <IoArrowDownCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " />
                  )}
                </button>
              </div>
            }
          </div>
        </div>
          <div id="vehiculo" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500 pb-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">Baterías para Vehículos</h2>
            <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filterProductsBySubcategory('BV').slice(0, showAll ? products.length : 4).map((producto) => (
                 <ProductView key={producto.id} src={producto.image} title={producto.title} route={categoryMap[producto.category]} slug={producto.slug}/>
              ))}
            </div>
            {products.length < 4 &&
           <div className="text-center mt-2">
        <button onClick={toggleShowAll} className="text-[#E73516] hover:text-[#C33F1A] font-semibold">
          {showAll ? (
            <IoArrowUpCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " /> 
          ) : (
            <IoArrowDownCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " />  // Aquí puedes usar cualquier ícono de flecha
          )}
        </button>
              </div>
            }
          </div>
        </div>
     </section>
  </div>
  );
}