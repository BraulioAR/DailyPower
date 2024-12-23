'use client';
import { useEffect, useState } from 'react';
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from "react-icons/io5";
import ProductView from '@/components/ProductView';
import { performRequest } from '@/lib/datocms';

 const categoryMap = {
    'B': 'Baterias',
    'I': 'Inversores',
    'P': 'Paneles-Solares',
    'E': 'Otros',
    'O': 'Otros',
    'C': 'Otros',
  };

export default function NewProducts() {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PAGE_CONTENT_QUERY = `
  query {
    allProductos(first: 100) {
      id
      titulo
  		categoria
  		slug	
  		productImage{
        url
      }	
    }
}
`;

  // Función para alternar entre mostrar más o menos productos
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await performRequest(PAGE_CONTENT_QUERY);
       
        // Directamente verifica si la propiedad paginaInicio existe
        if (response && response.allProductos) {
          setProducts(response.allProductos); // Establece los datos correctamente
        
        } else {
          console.error('No se encontraron datos en la respuesta:', response);
        }
      } catch (error) {
        console.error('Error al obtener contenido de la página:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  
  if (loading) {
    return (
      <div className="relative z-50 mx-auto max-w-2xl px-4 py-10 lg:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
        <div className="bg-orange-100 text-center my-24 text-orange-800 p-4">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative z-50 mx-auto max-w-2xl px-4 py-10 lg:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
        <div className="bg-red-100 text-center my-24 text-red-800 p-4">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative z-50 mx-auto max-w-2xl px-4 py-10 lg:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center">Productos Nuevos</h2>
      <div className="mt-12 grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {/* Mostrar solo los primeros 4 productos si showAll es falso */}
        {products.slice(0, showAll ? Math.min(products.length, 8) : 4).map((producto) => (
          <ProductView
            key={producto.id}
            src={producto.productImage?.[0]?.url}
            title={producto.titulo}
            route={categoryMap[producto.categoria]}
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