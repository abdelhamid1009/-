import { Translations } from '../lib/translations';

interface MapProps {
  translations: Translations;
  language: 'ar' | 'fr';
}

export default function Map({ translations, language }: MapProps) {
  // Google Maps embed URL
  // Coordinates: 33.85172456739427° N, -7.038144271137781° W
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.4728173038402!2d-7.038144271137781!3d33.85172456739427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7099cfe0505ef%3A0xb7689193a037c745!2z2KXYs9mD2KfZgdmKINin2YTYqNmH2KzYqQ!5e0!3m2!1sfr!2sma!4v1762796308408!5m2!1sfr!2sma';

  return (
    <section className="py-20 px-4 bg-cream-beige">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-leather-brown mb-4 ${
              language === 'ar' ? 'font-arabic-title' : 'font-french'
            }`}
          >
            {translations.map.title}
          </h2>
          <p
            className={`text-xl md:text-2xl text-dark-gray max-w-2xl mx-auto ${
              language === 'ar' ? 'font-arabic' : 'font-french'
            }`}
          >
            {translations.map.subtitle}
          </p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden shadow-2xl animate-slideUp map-grayscale">
          <iframe
            src={mapUrl}
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px] md:h-[500px]"
            title={translations.map.title}
          ></iframe>
        </div>
      </div>
    </section>
  );
}

