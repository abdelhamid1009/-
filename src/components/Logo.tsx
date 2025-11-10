import { Translations } from '../lib/translations';

interface LogoProps {
  translations: Translations;
  language: 'ar' | 'fr';
  className?: string;
}

export default function Logo({ translations, language, className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Image - Using hero workshop image */}
      <div className="relative">
        <div className="h-12 w-12 md:h-16 md:w-16 rounded-full overflow-hidden border-2 border-light-gold shadow-md">
          <img
            src="/hero-cobbler-workshop.jpg"
            alt={translations.footer.name}
            className="h-full w-full object-cover object-center"
            style={{
              objectPosition: 'center 30%', // Focus on the shoe/hands area
            }}
          />
        </div>
      </div>
      <h1
        className={`text-xl md:text-2xl lg:text-3xl font-bold text-leather-brown ${
          language === 'ar' ? 'font-arabic-title' : 'font-french'
        }`}
      >
        {translations.footer.name}
      </h1>
    </div>
  );
}

