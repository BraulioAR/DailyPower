import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contentType = searchParams.get('content_type') // Por defecto, trae 'producto'

  try {
    const response = await client.getEntries({
      content_type: contentType,
    });

    const items = response.items.map((item) => {
  if (!item.fields || !item.sys) {
    console.warn('Elemento inválido:', item);
    return null;
  }
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
          titulo: item.fields.titulo,
          subtitulo: item.fields.subtitulo,
          primerParrafo: item.fields.primerParrafo,
          segundoParrafo: item.fields.segundoParrafo,
          tercerParrafo: item.fields.parrafoTres,
          mision: item.fields.mision,
          vision: item.fields.vision,
          valores: item.fields.valores,
          image: item.fields.nosotros?.fields?.file.url || null, 
        };
      }

      // Si es datosContacto
      if (contentType === 'datosContacto') {
        return {
          telefono: item.fields.telefono,
          direccion: item.fields.direccion,
          instagram: item.fields.cuentasDeInstagram,
          horarioWeek: item.fields.horarioWeek,
          horarioWeekend: item.fields.horarioWeekend
        };
      }

      // Si es seccionInicio
      if (contentType === 'seccionInicio') {
        return {
          titulo: item.fields.titulo,
          subtitulo: item.fields.subtitulo,
        };
      }

      if (contentType === 'productspage') {
        return {
          tituloPrincipal: item.fields.tituloPrincipal,
          subtituloPrincipal: item.fields.subtituloPrincipal,
          tituloBaterias: item.fields.tituloBaterias,
          subtituloBaterias: item.fields.subtituloBaterias,
          tituloInversores: item.fields.tituloInversores,
          subtituloInversores: item.fields.subtituloCategoriaInversores,
          tituloPaneles: item.fields.tituloPaneles,
          subtituloPaneles: item.fields.subtituloPaneles,
        };
      }
    }).filter(Boolean);

    return new Response(JSON.stringify(items), {
      headers: { 'Content-Type': 'application/json' },
      'Cache-Control': 'no-store'
    });
  } catch (error) {
    console.error('Error al obtener contenido:', error);
    return new Response('Error al obtener contenido', { status: 500 });
  }
}