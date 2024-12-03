import Link from 'next/link';

export default function ProductView({ src, title, route, slug }) {
  return (
    <div className="group relative">
      {/* Imagen del producto */}
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={src}
          alt={title}
          loading="lazy" 
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Link href={`/Productos/${route || 'otros'}/${slug}`}  className="bg-transparent border border-[#E73516] text-[#E73516] hover:bg-[#E73516] hover:text-white px-4 py-2 rounded-lg z-40">
          Ver Más
        </Link>
      </div>

      {/* Título del producto */}
      <div className="mt-4 flex justify-center">
        <div>
          <h3 className="text-[18px] font-medium leading-[18px] text-gray-700 text-center">
            <Link href={`/Productos/${route || 'otros'}/${slug}`}>
              <span aria-hidden="true" className="absolute inset-0 text-center"></span>
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
