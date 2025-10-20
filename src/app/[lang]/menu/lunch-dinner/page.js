// src/app/[lang]/menu/lunch-dinner/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuPageLayout from '@/components/organisms/MenuPageLayout';
// No longer need to import MenuDisplay here

const lunchDinnerCategories = [
  'tacosALaCarta', 'gorditasALaCarta', 'enchiladasPlates', 'lunchDinnerPlates',
  'newItems', 'appetizers', 'salads', 'soupsAndMore', 'sideOrders', 'childMenu'
];

export default async function LunchDinnerMenuPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Almuerzos y Cenas' : 'Lunch & Dinner';

  return (
    // FIX: Pass data directly as props, remove function child
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={lunchDinnerCategories}
    />
  );
}