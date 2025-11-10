import { useState, useEffect } from 'react';
import LanguageSwitcher from '../components/LanguageSwitcher';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Map from '../components/Map';
import Footer from '../components/Footer';
import { translations, Language } from '../lib/translations';

export default function Index() {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const currentTranslations = translations[language];

  return (
    <div className="min-h-screen">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo translations={currentTranslations} language={language} />
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={setLanguage}
          />
        </div>
      </header>

      <Hero translations={currentTranslations} language={language} />
      <Services translations={currentTranslations} language={language} />
      <Contact translations={currentTranslations} language={language} />
      <Map translations={currentTranslations} language={language} />
      <Footer translations={currentTranslations} language={language} />
    </div>
  );
}

