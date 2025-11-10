import { Translations } from '../lib/translations';

interface FooterProps {
  translations: Translations;
  language: 'ar' | 'fr';
}

export default function Footer({ translations, language }: FooterProps) {
  return (
    <footer className="bg-leather-brown text-white py-12 px-4">
      <div className="container mx-auto text-center">
        <h3
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            language === 'ar' ? 'font-arabic-title' : 'font-french'
          }`}
        >
          {translations.footer.name}
        </h3>
        <p
          className={`text-lg opacity-90 ${
            language === 'ar' ? 'font-arabic' : 'font-french'
          }`}
        >
          {translations.footer.copyright}
        </p>
      </div>
    </footer>
  );
}

