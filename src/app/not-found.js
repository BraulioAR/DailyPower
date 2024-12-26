import Link from "next/link"

export default function notFound() {
    return (
        <section className="bg-white flex items-center justify-center">
            <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                <div>
                    <p className="text-sm font-medium text-[#E73516] 00">Error 404</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">No podemos encontrar esta página</h1>
                    <p className="mt-4 text-gray-500">Disculpa, la página que buscas no existe o ha sido movida.</p>

                    <div className="flex items-center mt-6 gap-x-3">
                        <Link href="/Productos" className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto  hover:bg-gray-100">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>

                            <span>Ver Productos</span>
                        </Link>

                        <Link href="/" className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#E73516] rounded-lg shrink-0 sm:w-auto hover:bg-white hover:text-[#E73516] hover:border-[#E73516] hover:border border-[#E73516]">
                            Volver al Inicio
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}