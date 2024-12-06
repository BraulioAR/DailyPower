'use client'; // Esto indica que es un componente cliente

export default function ShareButtons({ titulo, url }) {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    alert('¡Enlace copiado al portapapeles!');
  };

  return (
    <div className="flex items-center space-x-4 mt-4">
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105"
      >
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 text-blue-600"
          >
        <path d="M22 12.073C22 6.498 17.523 2 12 2S2 6.498 2 12.073C2 16.635 5.656 20.4 10.254 21v-6.244h-2.6v-2.459h2.6V9.905c0-2.528 1.492-3.934 3.775-3.934 1.095 0 2.242.194 2.242.194v2.455h-1.264c-1.245 0-1.63.776-1.63 1.568v1.875h2.774l-.444 2.459h-2.33V21C18.344 20.4 22 16.635 22 12.073z" />
       </svg>
      </a>

      {/* WhatsApp Share */}
      <a
        href={`https://wa.me/?text=${encodeURIComponent(
          `Mira este producto: ${titulo}\n${url}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-105"
      >
            <img src="/icons/icon-whatsapp.png" alt="Compartir por whatsapp" className="w-6 h-6"/>
      </a>

      {/* Copiar enlace */}
      <button
        onClick={handleCopyLink}
        className="hover:scale-105 focus:outline-none"
      >
       <img src="/icons/icon-copy-link.png" alt="Copiar enlace" className="w-6 h-6"/>
      </button>
    </div>
  );
}