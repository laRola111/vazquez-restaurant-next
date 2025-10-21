// src/app/[lang]/menu/lunch-dinner/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuPageLayout from '@/components/organisms/MenuPageLayout';

// Define qué categorías pertenecen a esta página
const lunchDinnerCategories = [
  'tacosALaCarta',
  'gorditasALaCarta',
  'enchiladasPlates',
  'lunchDinnerPlates',
  'newItems',
  'appetizers',
  'salads',
  'soupsAndMore',
  'sideOrders',
  'childMenu'
];

// FIX: Add searchParams prop
export default async function LunchDinnerMenuPage({ params: { lang }, searchParams }) {
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Almuerzos y Cenas' : 'Lunch & Dinner';
  // FIX: Read 'q' from searchParams
  const searchTerm = searchParams?.q || '';

  return (
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={lunchDinnerCategories}
      searchTerm={searchTerm} // <-- Pass searchTerm
    />
  );
}