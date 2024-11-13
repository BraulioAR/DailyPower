import { fetchAllProductSlugs } from '../../contenfulClient';

export async function generateStaticParams() {
  const slugs = await fetchAllProductSlugs(); // Obtén los slugs de tus productos
  return slugs.map((slug) => ({
    slug: slug, // El nombre de la variable es el mismo que en la ruta
  }));
}