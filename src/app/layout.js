import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata = {
  icons: [
    {
      sizes: '57x57',
      href: '/icons/apple-icon-57x57.png',
      url: '/icons/apple-icon-57x57.png',
    },
    {
      sizes: '60x60',
      href: '/icons/apple-icon-60x60.png',
      url: '/icons/apple-icon-60x60.png',
    },
    {
      sizes: '72x72',
      href: '/icons/apple-icon-72x72.png',
      url: '/icons/apple-icon-72x72.png',
    },
    {
      sizes: '76x76',
      href: '/icons/apple-icon-76x76.png',
      url: '/icons/apple-icon-76x76.png',
    },
    {
      sizes: '114x114',
      href: '/icons/apple-icon-114x114.png',
      url: '/icons/apple-icon-114x114.png',
    },
    {
      sizes: '120x120',
      href: '/icons/apple-icon-120x120.png',
      url: '/icons/apple-icon-120x120.png',
    },
    {
      sizes: '144x144',
      href: '/icons/apple-icon-144x144.png',
      url: '/icons/apple-icon-144x144.png',
    },
    {
      sizes: '152x152',
      href: '/icons/apple-icon-152x152.png',
      url: '/icons/apple-icon-152x152.png',
    },
    {
      sizes: '180x180',
      href: '/icons/apple-icon-180x180.png',
      url: '/icons/apple-icon-180x180.png',
    },
    {
      sizes: '192x192',
      href: '/icons/android-icon-192x192.png',
      url: '/icons/android-icon-192x192.png',
    },
    {
      sizes: '32x32',
      href: '/icons/favicon-32x32.png',
      url: '/icons/favicon-32x32.png',
    },
    {
      sizes: '96x96',
      href: '/icons/favicon-96x96.png',
      url: '/icons/favicon-96x96.png',
    },
    {
      sizes: '16x16',
      href: '/icons/favicon-16x16.png',
      url: '/icons/favicon-16x16.png',
    },
  ],

};



export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Preload para las fuentes */}
        <link
          rel="preload"
          href="/fonts/OpenSans-Medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans-Regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans-SemiBold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans text-[var(--foreground)] bg-[var(--background)]">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
