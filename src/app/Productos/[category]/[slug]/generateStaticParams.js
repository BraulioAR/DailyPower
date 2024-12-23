import { performRequest } from 'lib/performRequest';

export async function generateStaticParams() {
  try {
    // Ejecutar la consulta para obtener todos los productos
    const response = await performRequest(PRODUCTS_QUERY);

    if (!response || !response.data || !response.data.allProductos) {
      throw new Error('No se pudieron obtener los productos desde DatoCMS');
    }

    const products = response.data.allProductos;

    // Mapear los slugs y categorías para generar los parámetros estáticos
    return products.map(({ slug, categoria }) => ({
      slug,
      category: categoria,
    }));
  } catch (error) {
    console.error('Error al generar los parámetros estáticos desde DatoCMS:', error);
    return []; // Devolver un array vacío si hay error
  }
}