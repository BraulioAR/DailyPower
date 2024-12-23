'use client'
import { useState, useEffect } from 'react'
import { IoArrowDownCircleOutline, IoArrowUpCircleOutline } from 'react-icons/io5'
import ProductView from '@/components/ProductView'
import Link from 'next/link'
import ShareButtons from '@/components/ShareButtons'
import { performRequest } from '@/lib/datocms' 

// Mapeo de las letras a las categorías
const categoryMap = {
  'B': 'Baterias',
  'I': 'Inversores',
  'P': 'Paneles-Solares',
  'E': 'Otros',
  'O': 'Otros',
  'C': 'Otros',
}

export default function Productos() {
  const [products, setProducts] = useState([])
  const [heroData, setHeroData] = useState([])
  const [loadingProducts, setLoadingProducts] = useState(true)
  const [loadingHero, setLoadingHero] = useState(true)
  const [showAllStates, setShowAllStates] = useState({}) // Estado separado para cada categoría

  // Actualiza el estado de una categoría específica
  const toggleShowAll = (subcategoryCode) => {
    setShowAllStates((prevState) => ({
      ...prevState,
      [subcategoryCode]: !prevState[subcategoryCode],
    }))
  }

  // Obtención de los productos usando performRequest de datocms
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `{
          allProductos(first: 100) {
            titulo
            categoria
            subcategoria
            slug
            productImage {
              url
            }
          }
        }`
        const response = await performRequest(query)
        setProducts(response.allProductos)
      } catch (error) {
        console.error('Error al obtener productos:', error)
      } finally {
        setLoadingProducts(false)
      }
    }

    const fetchHeroData = async () => {
      try {
        const query = `{
          paginaProducto {
            tituloInversores
            subtituloInversores
          }
        }`
        const response = await performRequest(query)
        if (response.paginaProducto) {
          setHeroData(response.paginaProducto)
        }
      } catch (error) {
        console.error('Error al obtener hero data:', error)
      } finally {
        setLoadingHero(false)
      }
    }

    fetchProducts()
    fetchHeroData()
  }, [])

  const filterProductsBySubcategory = (subcategoryCode) =>
    products.filter((producto) => producto.subcategoria === subcategoryCode)

  const renderCategory = (subcategoryCode, title) => {
    const productsInCategory = filterProductsBySubcategory(subcategoryCode)
    const showAll = showAllStates[subcategoryCode] || false

    return (
      <div id={subcategoryCode} className="relative isolate z-50 px-6 lg:px-8 transition-transform duration-500">
        <div className="mx-auto max-w-2xl px-4 pt-16 lg:max-w-7xl lg:px-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-start">{title}</h2>
          {loadingProducts ? (
            <div className="bg-orange-100 text-center my-24 text-orange-800 p-4">Cargando productos...</div>
          ) : productsInCategory.length === 0 ? (
            <div className="text-center my-24">
              <p className="text-xl text-gray-600">
                Aún no hay productos disponibles en esta categoría. Por favor, contacte a un representante.
              </p>
              <Link href="/Contacto" className="text-[#E73516] hover:text-[#C33F1A] font-semibold">
                Ir a Contacto
              </Link>
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {productsInCategory.slice(0, showAll ? productsInCategory.length : 4).map((producto) => (
                <ProductView
                  key={producto.slug}
                  src={producto.productImage?.[0]?.url}
                  title={producto.titulo}
                  route={categoryMap[producto.categoria]}
                  slug={producto.slug}
                />
              ))}
            </div>
          )}
          {productsInCategory.length > 4 && (
            <div className="text-center mt-6">
              <button
                onClick={() => toggleShowAll(subcategoryCode)}
                className="text-[#E73516] hover:text-[#C33F1A] font-semibold"
                aria-label={showAll ? 'Ver menos' : 'Ver más'}
              >
                {showAll ? (
                  <IoArrowUpCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in" />
                ) : (
                  <IoArrowDownCircleOutline className="text-[#E73516] h-12 w-12 animate-bounce animate-infinite animate-ease-in" />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
  return (
    <div className="bg-white w-full h-full mx-auto max-w-7xl mt-20">
      <section className="relative pt-20 lg:mt-24">
        <div className="lg:pb-80 pt-16 pb-24 lg:pt-40">
          <div className="lg:relative mx-auto max-w-7xl px-4 static lg:px-6">
            <div className="max-w-lg">
              {loadingHero ? (
                <>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 animate-fade-out-down animate-delay-500 animate-steps-modern ">
                El inversor que necesitas lo encuentras aquí
                </h1>
              <h2 className="mt-4 text-xl text-gray-500 animate-fade-out-down animate-delay-700 animate-steps-modern ">
                Inversores, Paneles Solares, UPS, Sistema Solar.
              </h2>
                </>
              )
                : (
                  <>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 animate-fade-in-up animate-duration-300 animate-steps-modern ">
                {heroData.tituloInversores}
              </h1>
               <h2 className="mt-4 text-xl text-gray-500 animate-fade-in-up animate-duration-400 animate-steps-modern">
                {heroData.subtituloInversores}
              </h2>
              </>
                )
              }
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform top-0 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                      <div className="grid shrink-0 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg opacity-100">
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
                      <div className="grid shrink-0 gap-y-6 lg:gap-y-8">
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
            <div className='flex flex-col mt-10'>
              <h2 className="text-lg font-semibold text-gray-900">Compartir</h2>
            <ShareButtons titulo="Catálogo de Inversores Daily Power" url="https://dailypower.com.do/Productos/Inversores"/>
            </div>
          </div>
        </div>
      </section>
      <section id="productos" className='pb-20'>
        <div className='w-full flex flex-col gap-y-10 mx-auto max-w-5xl justify-center'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900 text-center'>Categorías</h1>
          <div className='grid grid-cols-2 grid-flow-row lg:flex lg:flex-row gap-4 lg:gap-10 justify-center mx-auto px-4 lg:px-0'>
            <Link href="/Productos/Baterias#productos" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Baterías</Link>
            <Link href="/Productos/Inversores#productos" className='rounded-md p-4  border shadow text-white bg-[#E73516] lg:w-52 flex justify-center items-center'>Inversores</Link>
            <Link href="/Productos/Paneles-Solares#productos" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center items-center'>Paneles Solares</Link>
            <Link href="/Productos#E" className='rounded-md p-4 text-[#E73516] bg-transparent border shadow border-[#E73516] hover:text-white hover:bg-[#E73516] lg:w-52 flex justify-center text-center '>Estructuras de Montaje</Link>
          </div>
        </div>
        {renderCategory('IC', 'Inversores Convencionales')}
         {renderCategory('IO', 'Inversores Solares Off-Grid')}
        {renderCategory('ION', 'Inversores Solares On-Grid')}
        {renderCategory('IH', 'Inversores Híbridos')}
      </section>
    </div>
  );
}