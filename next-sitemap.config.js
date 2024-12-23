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
  'E': 'Otros',
  'O': 'Otros',
  'C': 'Otros',
};

// Función para obtener todos los productos desde DatoCMS
async function getAllProducts() {
  const query = `
    query {
      allProductos (first: 100) {
        slug
        categoria
      }
    }
  `;

  try {
    const response = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const { data } = await response.json();

    // Verifica si hay productos en el array
    if (!Array.isArray(data.allProductos) || data.allProductos.length === 0) {
      console.error('La respuesta no contiene un array de productos');
      return [];
    }

    // Mapea los productos a la estructura que necesitamos
    return data.allProductos.map(item => ({
      slug: item.slug,
      category: categoryMap[item.categoria] || 'Otros', // Asegúrate de que el valor de la categoría sea correcto
    }));
  } catch (error) {
    console.error('Error al obtener los productos desde DatoCMS:', error);
    return [];
  }
}