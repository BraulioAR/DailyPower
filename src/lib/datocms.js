import { executeQuery } from '@datocms/cda-client';
import { cache } from 'react';

const dedupedPerformRequest = cache(async (serializedArgs) => {
  return executeQuery(...JSON.parse(serializedArgs));
})

export function performRequest(query, options) {
  return dedupedPerformRequest(JSON.stringify([
    query,
    {
      ...options,
      token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
      environment: 'main',
    },
  ]));
}


// Función para obtener los detalles completos de un producto por su slug y categoría
export async function fetchProductBySlug(slug) {
  // Map de categorías estático
  const categoryMap = {
    'B': 'Baterias',
    'I': 'Inversores',
    'P': 'Paneles-Solares',
    'E': 'Otros',
    'O': 'Otros',
    'C': 'Otros',
  };

  const query = `
    query ProductBySlug($slug: String!) {
      allProductos(filter: { slug: { eq: $slug } }) {
        titulo
        descripcion
        categoria
        subcategoria
        slug
        productImage {
          url
        }
        specsPdf {
          url
        }
        specsImage {
          url
        }
        diagramImage {
          url
        }
        ventajas {
          ventaja
        }
        disponibilidad
        pdfExtra {
          titulo
          archivoPdf {
            url
          }
        }
        garantia
        precio
      }
    }
  `;

  try {
    // Realiza la consulta sin el filtro de categoría
    const response = await performRequest(query, {
      variables: {
        slug,
      },
    });

    if (response) {
      return response; // Devuelve el primer producto que coincida con la categoría
    } else {
      console.error(`Producto con slug ${slug}  no encontrado.`);
      return null;
    }
  } catch (error) {
    console.error('Error al obtener el producto de DatoCMS:', error);
    return null;
  }
}