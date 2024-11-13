import { createClient } from 'contentful';

// Inicializa el cliente de Contentful
const client = createClient({
  space: 'wbod95ak2u6e', // Reemplaza con tu space ID
  accessToken: 'fLik6D9n-h1xnYe3qZEargvUzXI16VAdxkzJZMhA91Y', // Reemplaza con tu access token
});

// Función para obtener todos los slugs de los productos
export async function fetchAllProductSlugs() {
  try {
    const response = await client.getEntries({
      content_type: 'producto', // Asegúrate de que el tipo de contenido sea correcto
      select: 'fields.slug',    // Solo seleccionamos el campo 'slug'
    });

    // Verifica que la respuesta tenga items y mapea los slugs
    if (response.items && response.items.length > 0) {
      return response.items.map((item) => item.fields.slug);
    } else {
      console.error('No se encontraron productos con slugs.');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener los slugs de Contentful:', error);
    return [];
  }
}

// Función para obtener los detalles completos de un producto por su slug
export async function fetchProductBySlug(slug) {
  try {
    const response = await client.getEntries({
      content_type: 'producto', // Asegúrate de que el tipo de contenido sea correcto
      'fields.slug': slug,      // Filtra por el campo slug, ahora correcto
      limit: 1,                 // Limitamos la búsqueda a un único producto
    });

    // Verifica que la respuesta tenga items y que el primer item sea el correcto
    if (response.items && response.items.length > 0) {
      return response.items[0].fields;
    } else {
      console.error(`No se encontró el producto con el slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error(`Error al obtener el producto con el slug: ${slug}`, error);
    return null;
  }
}

export default client;