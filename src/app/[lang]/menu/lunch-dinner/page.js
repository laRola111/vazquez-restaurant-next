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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function LunchDinnerMenuPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Almuerzos y Cenas' : 'Lunch & Dinner';

  return (
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={lunchDinnerCategories}
    />
  );
}