// src/app/[lang]/menu/drinks/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuPageLayout from '@/components/organisms/MenuPageLayout';
// No longer need to import MenuDisplay here

const drinksCategories = [
  'drinks', 'aguasFrescas', 'beer', 'wines',
];

export default async function DrinksMenuPage({ params: { lang } }) {
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Bebidas' : 'Drinks';

  return (
    // FIX: Pass data directly as props, remove function child
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={drinksCategories}
    />
  );
}