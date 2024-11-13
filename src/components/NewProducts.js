'use client';
import React, { useEffect, useState } from 'react';
import contentfulClient from '../app/contenfulClient';
import { Open_Sans } from "next/font/google";
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import Link from 'next/link'; // Importa Link de Next.js

const osans = Open_Sans({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function NewProducts() {
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
          slug: item.fields.slug, // Asegúrate de obtener el slug
          title: item.fields.titulo, // Obtenemos el título del producto
          image: item.fields.productImage?.[0]?.fields.file.url, // Obtenemos la primera imagen del array de imágenes
        }));
        setProducts(items);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div id="products" className="relative isolate z-50 px-6 pt-14 lg:px-8 transition-transform duration-500 scroll-smooth">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -z-40 transform-gpu overflow-hidden blur-3xl "
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#EC7610] to-[#E73516] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-6xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {/* Mostrar solo los primeros 4 productos si showAll es falso */}
          {products.slice(0, showAll ? products.length : 4).map((producto) => (
            <div key={producto.id} className="group relative">
              {/* Imagen del producto */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img src={producto.image} alt={producto.title} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-transparent border border-[#E73516] text-[#E73516] hover:bg-[#E73516] hover:text-white px-4 py-2 rounded-lg z-40">Ver Más</button>
              </div>

              {/* Título del producto */}
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-[18px] font-medium leading-[18px] text-gray-700 text-center">
                    <Link href={`/Productos/${producto.slug}`}>
                      <span aria-hidden="true" className="absolute inset-0"></span>
                      {producto.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botón de alternancia para mostrar más o menos productos */}
        <div className="text-center mt-6">
          <button onClick={toggleShowAll} className="text-[#E73516] hover:text-[#C33F1A] font-semibold">
            {showAll ? (
              <IoArrowUpCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " /> 
            ) : (
              <IoArrowDownCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in " />  // Aquí puedes usar cualquier ícono de flecha
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
