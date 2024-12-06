module.exports = {
  siteUrl: 'https://dailypower.com.do', // Cambia por tu dominio
  generateRobotsTxt: true, // Opcional: para generar automáticamente el archivo robots.txt
  exclude: ['/api/*'], // Excluir rutas de la API si no quieres que se indexen
  additionalPaths: async (config) => {
    const products = await getAllProducts(); // Obtén todos los productos

    return products.map((product) => ({
      loc: `${config.siteUrl}/Productos/${product.category}/${product.slug}`, // Generar la URL del producto
      lastmod: new Date().toISOString(), // Fecha de última modificación
    }));
  },
};

const categoryMap = {
    'B': 'Baterias',
    'I': 'Inversores',
    'P': 'Paneles-Solares',
    'E': 'Estructuras-de-Montaje',
    'O': 'Otros',
  };

async function getAllProducts() {
  const response = await fetch('https://dailypower.com.do/api/contentful');
  const data = await response.json();

  // Verifica si hay productos en el array
  if (!Array.isArray(data)) {
    console.error('La respuesta no contiene un array de productos');
    return [];
  }

  // Mapea los productos a la estructura que necesitamos
  return data.map(item => ({
    slug: item.slug,
    category: categoryMap[item.category],
  }));
}
