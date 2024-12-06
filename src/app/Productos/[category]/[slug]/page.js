import { fetchProductBySlugAndCategory } from '@/utils/contenfulClient';
import { notFound } from 'next/navigation';
import ShareButtons from '@/components/ShareButtons'; 

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  // Obtener el producto para generar metadata
  const product = await fetchProductBySlugAndCategory(slug, category);

  if (!product) {
    return {
      title: 'Producto no encontrado',
      description: 'El producto que buscas no existe.',
    };
  }

  const { titulo, descripcion } = product;

  // Convertir URLs relativas a absolutas si es necesario
  const baseImageURL = "https://dailypower.com.do";
  const images = product.productImage?.map(
    (img) => `${baseImageURL}${img.fields?.file?.url}` // Asegúrate de que las URLs sean absolutas
  );

  return {
    metadataBase: new URL('https://dailypower.com.do'),
    title: titulo,
    description: descripcion,
    openGraph: {
      title: titulo,
      description: descripcion,
      url: `/Productos/${category}/${slug}`,
      images: images?.[0] ? images : [`${baseImageURL}/default-image.jpg`], // Usa imagen por defecto si no hay
    },
    twitter: {
      title: titulo,
      description: descripcion,
      images: images?.[0] ? [images[0]] : [`${baseImageURL}/default-image.jpg`], // Usa imagen por defecto si no hay
    },
  };
}


export default async function ProductoPage({ params }) {
    const { category, slug } = await params; // Accede a los parámetros de la URL directamente desde 'params'

  // Llamamos a la función fetchProductBySlugAndCategory pasando el slug y la categoría
  const product = await fetchProductBySlugAndCategory(slug, category);

  if (!product) {
    notFound(); // Si no se encuentra el producto, devuelve un 404
  }




  const {
    titulo,
    descripcion,
    productImage,
    specsPdf,
    ventajas,
    specsImage,
    connectionDiagram,
    disponibilidad,
    pdfAdicionales,
    titulosPdfAdicionales,
    garantia,
    precio,
  } = product;


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": titulo,
    "image": [
      productImage?.[0]?.fields.file.url,
      productImage?.[1]?.fields.file.url
    ],
    "description": descripcion,
    "brand": {
      "@type": "Brand",
      "name": "Daily Power"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://dailypower.com.do/Productos/${category}/${slug}`,
      "priceCurrency": "DOP",
      "price": precio,
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock"
    }
  };

  
 // Define currentUrl dentro de la función ProductoPage
  const currentUrl = `https://dailypower.com.do/Productos/${category}/${slug}`;

  return (
    <> <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="bg-white mt-20">
        <article className="pt-6">
          {/* Image gallery */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 overflow-hidden rounded-lg lg:block">
                <img
                  alt={titulo}
                  src={productImage?.[0]?.fields.file.url}
                  className="size-full object-scale-down  object-center"
                />
              </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
              {productImage?.[1]?.fields.url?.fields?.file?.url && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(specsImage.fields.file.url) && (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    alt={titulo}
                    src={productImage?.[1]?.fields.file.url}
                    className="size-full object-scale-down  object-center"
                  />
                </div>
              )}
              {productImage?.[2]?.fields.url?.fields?.file?.url && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(specsImage.fields.file.url) && (
              <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                <img
                  alt={titulo}
                  src={productImage?.[2]?.fields.file.url}
                  className="size-full object-scale-down  object-center"
                />
                </div>
                  )}
            </div>
            {productImage?.[3]?.fields.url?.fields?.file?.url && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(specsImage.fields.file.url) && (
            <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
              <img
                alt={titulo}
                src={productImage?.[3]?.fields.file.url}
                className="size-full object-scale-down object-center"
              />
              </div>
              )}
          </div>
          {/* Product info */}
          
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{titulo}</h1>
            </div>

           

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">información del {titulo}</h2>
              <p className="text-3xl tracking-tight text-gray-900">RD${precio}</p>
              {specsPdf && (
              <div className="mt-10">
                <a
                  href={specsPdf?.fields?.file?.url}
                  target='_blank'
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#E73516] px-8 py-3 text-base font-medium text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#E73516] focus:ring-offset-2"
                >
                  Descargar Brochure
                  </a>
                </div>
              )}

              {pdfAdicionales && (
                 <div className="mt-10 flex flex-col gap-3">
                  {pdfAdicionales?.map((pdfAdicional, index) => (
                    <a key={index} href={pdfAdicionales?.[index]?.fields?.file?.url} target='_blank' className="text-sm text-gray-600 text-justify hover:scale-105 hover:text-[#E73516]">Descargar {titulosPdfAdicionales?.[index]}</a>
                  ))}
                </div>
              )}

             {/* Share section */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">Compartir</h2>
               <ShareButtons titulo={titulo} url={currentUrl} />
            </div>
              

            </div>


            
            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Descripción</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">{descripcion}</p>
                </div>
              </div>
              {disponibilidad && (
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Disponibilidad</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    <li className="text-red-400">
                      <span className="text-red-600">{disponibilidad}</span>
                    </li>
                  </ul>
                </div>
              </div>
              )}
              {ventajas && (
              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Ventajas</h2>
                <div className="mt-4 grid grid-cols-2 grid-flow-row gap-4">
                  {ventajas?.map((ventaja, index) => (
                    <li key={index} className="text-sm text-gray-600 text-justify">{ventaja}</li>
                  ))}
                </div>
                </div>
               )}
            </div>
          </div>

          {/* Especificaciones */}
          {specsImage?.fields?.file?.url && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(specsImage.fields.file.url) && (
            <div className='mx-auto max-w-2xl lg:max-w-7xl w-full h-full flex flex-col gap-10 mb-10'>
              <div className='w-full flex flex-col gap-4'>
                <h2 className="text-xl font-bold text-gray-900">Especificaciones: </h2>
                <img src={specsImage?.fields?.file?.url} alt={`Especificaciones de ${titulo}`} />
              </div>
            </div>
          )}

           {garantia && (
                 <div className='max-w-4xl mx-auto my-12 '>
                <h3 className="sr-only">Términos de Garantía</h3>
                <div className="space-y-6">
                  <p className="text-xs text-gray-600 text-center">{garantia}</p>
                </div>
              </div>
              )}

          {/* Diagrama de conexión */}
          {connectionDiagram?.fields?.file?.url && /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(specsImage.fields.file.url) && (
            <div className='mx-auto max-w-2xl lg:max-w-7xl w-full h-full flex flex-col gap-10 mb-10'>
              <div className='w-full flex flex-col gap-4'>
                <h2 className="text-xl font-bold text-gray-900">Diagrama de conexión: </h2>
                <img src={connectionDiagram?.fields?.file?.url} alt={`Diagrama de conexión de ${titulo}`} />
              </div>
            </div>
          )}
        </article>
      </section>
      </>
  );
}
