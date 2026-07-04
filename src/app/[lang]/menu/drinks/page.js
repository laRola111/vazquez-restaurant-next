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

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function DrinksMenuPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Bebidas' : 'Drinks';

  return (
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={drinksCategories}
    />
  );
}