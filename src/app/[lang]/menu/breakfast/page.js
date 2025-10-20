// src/app/[lang]/menu/breakfast/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuPageLayout from '@/components/organisms/MenuPageLayout';
// No longer need to import MenuDisplay here

const breakfastCategories = [
  'breakfastTacos',
  'breakfastPlates',
  'omelettes',
];

export default async function BreakfastMenuPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Desayunos' : 'Breakfast';

  return (
    // FIX: Pass data directly as props, remove function child
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={breakfastCategories}
    />
  );
}