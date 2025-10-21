// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
import HoursContactSection from '@/components/organisms/HoursContactSection';
import AboutSection from '@/components/organisms/AboutSection';
import DecorativeImageSection from '@/components/organisms/DecorativeImageSection'; // Re-importar si se usa
import FeaturedItemsSection from '@/components/organisms/FeaturedItemsSection'; // Importar nueva sección
import ReviewsSection from '@/components/organisms/ReviewsSection'; // Importar sección reseñas

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <AboutSection lang={lang} dict={dict.about} />
      <FeaturedItemsSection lang={lang} dict={dict.featuredItems} /> 
     <HoursContactSection lang={lang} dict={dict.hoursContact} />
      <ReviewsSection lang={lang} dict={dict.reviews} /> 
    </>
  );
}