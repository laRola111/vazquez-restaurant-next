// src/app/[lang]/layout.js
import '../globals.css';
// import { GeistSans } from 'geist/font/sans'; // Ensure this path is correct
import Header from '@/components/organisms/Header'; // <-- DESCOMENTADO Y RUTA VERIFICADA
import Footer from '@/components/organisms/Footer';
// import Footer from '@/components/organisms/Footer'; // Placeholder
import { getDictionary } from '@/lib/dictionaries';

export const metadata = {
  title: 'Vazquez Restaurant #3',
  description: 'Authentic Mexican Food in Austin, TX.',
};

export default async function LangLayout({ children, params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} >
      <body className="flex flex-col min-h-screen bg-background text-foreground">
        <Header lang={lang} dict={dict.navbar} /> {/* <-- USADO */}
        <main className="grow">
          {children}
        </main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}