'use client';
import React, { useState, useEffect } from 'react';
import contentfulClient from '@/app/contenfulClient';
import { Open_Sans } from "next/font/google";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import ProductView from '@/components/ProductView';
import Head from 'next/head';


const osans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Mapeo de las letras a las categorías
const categoryMap = {
  B: 'Baterias',
  I: 'Inversores',
  P: 'Paneles-Solares',
  E: 'Estructuras-de-Montaje',
  O: 'Otros',
};

export default function Productos() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Función para alternar entre mostrar más o menos productos
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {

    // Fetching products from Contentful

    const fetchProducts = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: 'producto',
        });

        const items = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.titulo,
          image: item.fields.productImage?.[0]?.fields.file.url,
          slug: item.fields.slug,
          category: item.fields.category,
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
    <>
      <Head>
        <title>Baterías Solares, Inversores y Más para tu Sistema de Energía Solar | DailyPower</title>
        <meta name="description" content="Encuentra baterías solares, de litio, para inversores y más en DailyPower. Ofrecemos productos de alta calidad y fiabilidad con la mejor garantía del mercado, ideal para sistemas solares, UPS, música para vehículos y más. Ubicados en Santo Domingo, garantizamos la mejor experiencia de uso y servicio." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Baterías Solares, Inversores y Más para tu Sistema de Energía Solar | DailyPower" key="title"/>
        <meta property="og:description" content="Encuentra baterías solares, de litio, para inversores y más en DailyPower. Ofrecemos productos de alta calidad y fiabilidad con la mejor garantía del mercado, ideal para sistemas solares, UPS, música para vehículos y más. Ubicados en Santo Domingo, garantizamos la mejor experiencia de uso y servicio." />
        <meta property="og:image" content="/logo-daily-power-1.webp" />
      </Head>
    <div className="bg-white w-full h-full mx-auto max-w-7xl">
      <section className="relative pt-20 lg:mt-24">
        <div className="lg:pb-80 pt-16 sm:pt-24 pb-24 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                La solución que necesitas la encuentras aquí
              </h1>
              <h2 className="mt-4 text-xl text-gray-500">
                Baterías para Vehículos, Inversores, Paneles Solares, UPS, Sistema Solar.
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
              href="#productos"
              className="inline-block rounded-md border border-transparent bg-[#E73516] px-8 py-3 text-center font-medium text-white hover:scale-105"
            >
              Ver Productos
            </a>
          </div>
        </div>
      </section>
      <section id="productos">
        <div className='w-full flex flex-col gap-y-10 mx-auto max-w-5xl justify-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 text-center'>Categorías</h1>
          <div className='grid grid-cols-2 grid-flow-row lg:flex lg:flex-row gap-4 lg:gap-10 justify-center mx-auto'>
            <a href="Productos/Baterias#baterias" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Baterías</a>
            <a href="Productos/Inversores#inversores" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Inversores</a>
            <a href="/Contacto" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Paneles Solares</a>
            <a href="#montaje" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center text-center '>Estructuras de Montaje</a>
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
          <div id="vehiculo" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
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
          <div id="growatt" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6  lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">Inversores Solares Growatt</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filterProductsBySubcategory('IG').slice(0, showAll ? products.length : 4).map((producto) => (
                <ProductView key={producto.id} src={producto.image} title={producto.title} route={categoryMap[producto.category]} slug={producto.slug}/>
              ))}
            </div>
            {products.length < 4 &&
              <div className="text-center mt-6">
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
          <div id="offgrid" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">Inversores Solares Off-Grid</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {filterProductsBySubcategory('IO').slice(0, showAll ? products.length : 4).map((producto) => (
                <ProductView key={producto.id} src={producto.image} title={producto.title} route={categoryMap[producto.category]} slug={producto.slug}/>
              ))}
            </div>
            {products.length < 4 &&
              <div className="text-center mt-6">
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
          <div id="montaje" className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16 lg:max-w-7xl lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">Estructuras de Montaje</h2>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
             {filterProductsBySubcategory('E').slice(0, showAll ? products.length : 4).map((producto) => (
                <ProductView key={producto.id} src={producto.image} title={producto.title} route={categoryMap[producto.category]} slug={producto.slug}/>
              ))}
            </div>
            {products.length < 4 &&
              <div className="text-center mt-6">
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
      </>
  );
}