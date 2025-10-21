// src/app/[lang]/menu/drinks/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuPageLayout from '@/components/organisms/MenuPageLayout';

// Define qué categorías pertenecen a esta página
const drinksCategories = [
  'drinks',
  'aguasFrescas',
  'beer',
  'wines',
];

// FIX: Add searchParams prop
export default async function DrinksMenuPage({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Bebidas' : 'Drinks';
  // FIX: Read 'q' from searchParams
  const searchTerm = searchParams?.q || '';

  return (
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={drinksCategories}
      searchTerm={searchTerm} // <-- Pass searchTerm
    />
  );
}