// src/app/[lang]/page.js
import { getDictionary } from '@/lib/dictionaries';
import HeroSection from '@/components/organisms/HeroSection';
import HoursContactSection from '@/components/organisms/HoursContactSection';
import AboutSection from '@/components/organisms/AboutSection';
import DecorativeImageSection from '@/components/organisms/DecorativeImageSection';
// Ya no importamos MenuSection aquí

export default async function HomePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection lang={lang} dict={dict.hero} />
      <AboutSection lang={lang} dict={dict.about} />
      <DecorativeImageSection lang={lang} dict={dict} />
      <HoursContactSection lang={lang} dict={dict.hoursContact} />
      {/* La sección del menú ya no va aquí */}
    </>
  );
}