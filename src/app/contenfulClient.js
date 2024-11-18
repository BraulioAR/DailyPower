import { createClient } from 'contentful';

// Inicializa el cliente de Contentful
const client = createClient({
  space: 'wbod95ak2u6e', // Reemplaza con tu space ID
  accessToken: 'fLik6D9n-h1xnYe3qZEargvUzXI16VAdxkzJZMhA91Y', // Reemplaza con tu access token
});

// Función para obtener todos los slugs de los productos
export async function fetchAllProductSlugsAndCategories() {
  try {
    const response = await client.getEntries({
      content_type: 'producto', // Asegúrate de que el tipo de contenido sea correcto
      select: 'fields.slug, fields.category', // Asegúrate de que 'category' es el nombre del campo en Contentful
    });

    // Verifica que la respuesta tenga items y mapea los slugs y categorías
    if (response.items && response.items.length > 0) {
      return response.items.map((item) => ({
        slug: item.fields.slug,
        category: item.fields.category,  // La categoría (letra) del producto
      }));
    } else {
      console.error('No se encontraron productos con slugs.');
      return [];
    }
  } catch (error) {
    console.error('Error al obtener los slugs y categorías de Contentful:', error);
    return [];
  }
}

// Función para obtener los detalles completos de un producto por su slug y categoría
export async function fetchProductBySlugAndCategory(slug, category) {
  try {
    const categoryMap = {
      'B': 'Baterias',
      'I': 'Inversores',
      'P': 'Paneles-Solares',
      'E': 'Estructuras-de-Montaje',
      'O': 'Otros',
    };

    // Realiza la consulta a Contentful
    const response = await client.getEntries({
      content_type: 'producto', 
      'fields.slug': slug, // Filtra por slug
      'fields.category': categoryMap[category], // Mapea la categoría correctamente
      limit: 1,
    });

    if (response.items.length > 0) {
      return response.items[0].fields; // Devuelve los detalles del primer producto encontrado
    } else {
      console.error(`Producto con slug ${slug} y categoría ${category} no encontrado.`);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto de Contentful:', error);
    return null;
  }
}
export default client;