// src/app/[lang]/menu/breakfast/page.js
import { getDictionary } from '@/lib/dictionaries';
import MenuPageLayout from '@/components/organisms/MenuPageLayout';

const breakfastCategories = [ // Asegúrate que este array está definido correctamente
  'breakfastTacos',
  'breakfastPlates',
  'omelettes',
];

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }];
}

export default async function BreakfastMenuPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const menuData = dict.menu;
  const pageTitle = lang === 'es' ? 'Desayunos' : 'Breakfast';

  // Asegúrate que categoryOrder={breakfastCategories} se está pasando
  return (
    <MenuPageLayout
      pageTitle={pageTitle}
      menuData={menuData}
      categoryOrder={breakfastCategories} // <-- Pasar este array
    />
  );
}