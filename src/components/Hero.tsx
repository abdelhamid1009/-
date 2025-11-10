import { Phone } from 'lucide-react';
import { Translations } from '../lib/translations';

interface HeroProps {
  translations: Translations;
  language: 'ar' | 'fr';
}

export default function Hero({ translations, language }: HeroProps) {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(/hero-cobbler-workshop.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-leather-brown/80"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fadeIn">
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-light-gold drop-shadow-2xl ${
            language === 'ar' ? 'font-arabic-title' : 'font-french'
          }`}
          style={{
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
          }}
        >
          {translations.hero.title}
        </h1>

        <h2
          className={`text-2xl md:text-3xl lg:text-4xl mb-6 text-light-gold font-semibold ${
            language === 'ar' ? 'font-arabic-title' : 'font-french'
          }`}
          style={{
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
          }}
        >
          {translations.hero.subtitle}
        </h2>

        <p
          className={`text-lg md:text-xl lg:text-2xl mb-10 text-white max-w-3xl mx-auto leading-relaxed ${
            language === 'ar' ? 'font-arabic' : 'font-french'
          }`}
          style={{
            textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
          }}
        >
          {translations.hero.description}
        </p>

        <button
          onClick={scrollToContact}
          className="btn-primary text-lg md:text-xl px-8 py-4 animate-slideUp"
        >
          <Phone className="w-5 h-5" />
          {translations.hero.cta}
        </button>
      </div>

      {/* Decorative Pattern Overlay */}
      <div className="absolute inset-0 moroccan-pattern opacity-20"></div>
    </section>
  );
}

