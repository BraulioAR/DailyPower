import { fetchAllProductSlugsAndCategories } from '../../contenfulClient';

export async function generateStaticParams() {
  const products = await fetchAllProductSlugsAndCategories(); // Asegúrate de que esta función también devuelva la categoría
  return products.map(({ slug, category }) => ({
    slug: `${categoryMap[category]}/${slug}`,  // Usamos categoryMap para obtener el nombre de la categoría
  }));
}