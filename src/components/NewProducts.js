'use client';
import { useEffect, useState } from 'react';
import contentfulClient, { fetchProducts } from '@/utils/contenfulClient'; // Traemos la función optimizada
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import ProductView from '@/components/ProductView';

const categoryMap = {
  B: 'Baterias',
  I: 'Inversores',
  P: 'Paneles-Solares',
  E: 'Estructuras-de-Montaje',
  O: 'Otros',
};

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para alternar entre mostrar más o menos productos
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  useEffect(() => {
    // Función para obtener productos desde Contentful (con el cache optimizado)
    const fetchProductsData = async () => {
      try {
        // Usamos la función optimizada de contentfulClient
        const fetchedProducts = await fetchProducts();

        // Almacenar los productos en el estado
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error al obtener productos:', error);
        setError('Hubo un problema al cargar los productos.');
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []);

  if (loading) {
    return (
      <div className="relative z-50 mx-auto max-w-2xl px-4 py-10 lg:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
        <div className="text-center mt-12">Cargando productos...</div>
        </div>
        );
  }

  if (error) {
    return (
      <div className="relative z-50 mx-auto max-w-2xl px-4 py-10 lg:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
      <div className="text-center text-red-500 mt-12">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative z-50 mx-auto max-w-2xl px-4 py-10 lg:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
      <div className="mt-12 grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Mostrar solo los primeros 4 productos si showAll es falso */}
        {products.slice(0, showAll ? products.length : 4).map((producto) => (
          <ProductView
            key={producto.id}
            src={producto.image}
            title={producto.title}
            route={categoryMap[producto.category]}
            slug={producto.slug}
          />
        ))}
      </div>

      {/* Botón de alternancia para mostrar más o menos productos */}
      <div className="text-center mt-6">
        <button
          onClick={toggleShowAll}
          className="text-[#E73516] hover:text-[#C33F1A] font-semibold"
          aria-label={showAll ? "Ver menos" : "Ver más"}
        >
          {showAll ? (
            <IoArrowUpCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in" />
          ) : (
            <IoArrowDownCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in" />
          )}
        </button>
      </div>
    </div>
  );
}