export async function generateStaticParams() {
  try {
    // Llamar a tu API personalizada
    const response = await fetch(`https://dailypower.com.do/api/contentful`, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener los productos: ${response.statusText}`);
    }

    const products = await response.json();

    // Mapeamos los slugs y categorías para generar los parámetros estáticos
    return products.map(({ slug, category }) => ({
      slug,
      category,
    }));
  } catch (error) {
    console.error('Error al generar los parámetros estáticos:', error);
    return []; // Devolver un array vacío si hay error
  }
}