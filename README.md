# DailyPower

**DailyPower** es una página web para una empresa dedicada a la venta de insumos, como baterías. En esta web, los administradores pueden gestionar productos, ver información detallada de cada uno, y los clientes pueden obtener detalles sobre los productos y realizar compras.

## Características

- **Administración de productos**: Los administradores pueden agregar, editar y eliminar productos de manera sencilla.
- **Página de productos**: Los clientes pueden ver los productos con imágenes, títulos, descripciones, PDF descargables de especificaciones, ventajas y diagramas de conexión.
- **Optimización SEO**: Se ha implementado un enfoque de SEO para asegurar un buen posicionamiento de la página en los motores de búsqueda.
- **Formulario de contacto**: Integración con HubSpot para enviar consultas o solicitudes a la empresa.
- **Ubicación de la empresa**: Mapa interactivo utilizando **Leaflet.js** para mostrar la ubicación de la empresa.

## Tecnologías utilizadas

- **Frontend**:
  - [Next.js](https://nextjs.org/) (React Framework)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [HubSpot Forms](https://www.hubspot.com/products/forms)
  - [Leaflet.js](https://leafletjs.com/) para mapas interactivos
- **Backend y Base de Datos**:
  - **Contentful** para la gestión de contenido de productos
  - **Netlify** para el despliegue del frontend y manejo de DNS
  - **Cloudinary** para almacenamiento de imágenes de productos

## Funcionalidades

### Administración de productos

- Los administradores pueden agregar productos, especificando:
  - Imagen del producto
  - Título y descripción
  - PDF con especificaciones técnicas
  - Ventajas y diagrama de conexión
  - Todo esto se puede hacer fácilmente desde el panel de administración en **Contentful**.

### Mapa de ubicación

- Se integra un mapa interactivo con **Leaflet.js** para mostrar la ubicación de la empresa.

### Formularios de contacto

- Se utiliza la integración con **HubSpot** para manejar los formularios de contacto. Si el formulario no carga correctamente, se le informa al usuario que podría tener un bloqueador de anuncios activo.

## SEO

Se ha implementado una optimización SEO básica para asegurar que los productos y la página principal tengan un buen posicionamiento en Google.

### Estrategias SEO implementadas:

- **Meta tags** adecuados para cada página y producto.
- **Sitemap.xml** para facilitar el rastreo de Googlebot.
- **Optimización de imágenes** para tiempos de carga rápidos.
