import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contentType = searchParams.get('content_type') || 'producto'; // Por defecto, trae 'producto'

  try {
    const response = await client.getEntries({
      content_type: contentType,
    });

    const items = response.items.map((item) => {
      // Si es producto
      if (contentType === 'producto') {
        return {
          id: item.sys.id,
          title: item.fields.titulo,
          image: item.fields.productImage?.[0]?.fields.file.url,
          slug: item.fields.slug,
          category: item.fields.category,
          subcategory: item.fields.subcategory,
        };
      }

      // Si es preguntaFrecuente
      if (contentType === 'preguntaFrecuente') {
        return {
          title: item.fields.pregunta,
          content: item.fields.respuesta,
        };
      }

      // Si es imagenGeneral
      if (contentType === 'imagenGeneral') {
        return {
          image:item.fields.nosotros?.fields.file.url
        };
      }

      // Si se agrega otro content_type en el futuro
      return item.fields;
    });

    return new Response(JSON.stringify(items), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error al obtener contenido:', error);
    return new Response('Error al obtener contenido', { status: 500 });
  }
}