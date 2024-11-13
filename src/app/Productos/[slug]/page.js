
import Head from 'next/head';
import { fetchProductBySlug } from '@/app/contenfulClient';
import { notFound } from 'next/navigation';
import { HiStar } from 'react-icons/hi'

export default async function ProductoPage({ params }) {
  const  { slug } = await params; // Accede al slug dinámico de la URL
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound(); // Si no se encuentra el producto, devuelve un 404
  }


  const { 
    titulo, 
    descripcion, 
    productImage, 
    specsPdf, 
    advantages, 
    specsImage, 
    connectionDiagram, 
    category 
  } = product;


  return (
    <>
      <Head>
        <title>{`Detalles de ${titulo}`}</title>
        <meta name="description" content={`Detalles del producto ${titulo}`} />
      </Head>
      <div className="bg-white mt-20">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              alt={titulo}
              src={productImage?.[0]?.fields.file.url}
              className="size-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={titulo}
                src={productImage?.[1]?.fields.file.url}
                className="size-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                alt={titulo}
                src={productImage?.[2]?.fields.file.url}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              alt={titulo}
              src={productImage?.[3]?.fields.file.url}
              className="size-full object-cover object-center"
            />
          </div>
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{titulo}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">RD$5000</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <HiStar
                      key={rating}
                      aria-hidden="true"
                      
                    />
                  ))}
                </div>
                <p className="sr-only">5 out of 5 stars</p>
                <a className="ml-3 text-sm font-medium text-[#E73516] hover:scale-105">
                  7 reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#E73516] px-8 py-3 text-base font-medium text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E73516] focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{descripcion}</p>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                 
                    <li className="text-gray-400">
                      <span className="text-gray-600">SKERE</span>
                    </li>
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Ventajas</h2>
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{advantages}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
