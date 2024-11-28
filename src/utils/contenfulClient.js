import { createClient } from 'contentful';

// Inicializa el cliente de Contentful
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Reemplaza con tu space ID
  accessToken: process.env.CONTENTFUL_API_KEY, // Reemplaza con tu access token
});

// Cache simple para evitar llamadas repetidas a la API
let cachedProducts = null;
let cachedSlugs = null;

// Función para obtener todos los slugs de los productos
export async function fetchAllProductSlugsAndCategories() {
  if (cachedSlugs) {
    return cachedSlugs; // Si ya tenemos los datos en cache, los devolvemos
  }

  try {
    const response = await client.getEntries({
      content_type: 'producto', // Asegúrate de que el tipo de contenido sea correcto
      select: 'fields.slug, fields.category', // Solo obtenemos los campos necesarios
    });

    // Mapeamos los slugs y categorías
    if (response.items && response.items.length > 0) {
      cachedSlugs = response.items.map((item) => ({
        slug: item.fields.slug,
        category: item.fields.category, // La categoría (letra) del producto
      }));
      return cachedSlugs;
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
  // Map de categorías estático
  const categoryMap = {
    'B': 'Baterias',
    'I': 'Inversores',
    'P': 'Paneles-Solares',
    'E': 'Estructuras-de-Montaje',
    'O': 'Otros',
  };

  try {
    // Realiza la consulta a Contentful
    const response = await client.getEntries({
      content_type: 'producto',
      'fields.slug': slug, // Filtra por slug
      'fields.category': categoryMap[category], // Mapea la categoría correctamente
      limit: 1, // Limitar solo a 1 producto
    });

    if (response.items.length > 0) {
      return response.items[0].fields; // Devuelve los detalles del primer producto encontrado
    } else {
      console.error(`Producto con slug ${slug} y categoría ${category} no encontrado.`);
      return null; // Asegúrate de devolver siempre algo consistente
    }
  } catch (error) {
    console.error('Error al obtener el producto de Contentful:', error);
    return null;
  }
}

// Función para obtener productos (puedes usar un cache para mejorar el rendimiento)
export async function fetchProducts() {
  if (cachedProducts) {
    return cachedProducts; // Si ya tenemos los datos en cache, los devolvemos
  }

  try {
    const response = await client.getEntries({
      content_type: 'producto', // Asegúrate de que el tipo de contenido sea correcto
      select: 'fields.slug, fields.titulo, fields.productImage, fields.category', // Solo los campos necesarios
    });

    // Mapeamos los productos con la información básica
    const items = response.items.map((item) => ({
      id: item.sys.id,
      slug: item.fields.slug,
      title: item.fields.titulo,
      image: item.fields.productImage?.[0]?.fields.file.url,
      category: item.fields.category,
    }));

    cachedProducts = items; // Guardamos los productos en cache
    return items;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return []; // Devolver siempre algo consistente (vacío si no hay productos)
  }
}

export default client;