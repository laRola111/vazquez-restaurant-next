// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import FeaturedItemsSection from '@/components/organisms/FeaturedItemsSection'; // Importar
import HoursContactSection from '@/components/organisms/HoursContactSection';
import DecorativeImageSection from '@/components/organisms/DecorativeImageSection'; 
import ReviewsSection from '@/components/organisms/ReviewsSection';

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <AboutSection lang={lang} dict={dict.about} />
      <DecorativeImageSection lang={lang} dict={dict} />
      <FeaturedItemsSection lang={lang} dict={dict.featuredItems} /> {/* Incluir sección */}
      <HoursContactSection lang={lang} dict={dict.hoursContact} />
      <ReviewsSection lang={lang} dict={dict.reviews} /> 
    </>
  );
}