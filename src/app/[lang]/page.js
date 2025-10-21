// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import DecorativeImageSection from '@/components/organisms/DecorativeImageSection'; // Ahora es la mini-galería con fondo blanco
import FeaturedItemsSection from '@/components/organisms/FeaturedItemsSection';
import GallerySection from '@/components/organisms/GallerySection'; // <-- Importar la nueva sección
import HoursContactSection from '@/components/organisms/HoursContactSection';
import ReviewsSection from '@/components/organisms/ReviewsSection';

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      {/* NOTE: Orden de las secciones actualizado */}
      <HeroSection lang={lang} dict={dict.hero} />
      <AboutSection lang={lang} dict={dict.about} />
      {/* NOTE: Mini-galería (antes DecorativeImageSection) con fondo blanco */}
      <FeaturedItemsSection lang={lang} dict={dict.featuredItems} />
      {/* NOTE: Nueva sección de galería más amplia */}
      <GallerySection lang={lang} dict={dict} />
      <ReviewsSection lang={lang} dict={dict.reviews} />
      <DecorativeImageSection lang={lang} dict={dict} />
      <HoursContactSection lang={lang} dict={dict.hoursContact} />
    </>
  );
}