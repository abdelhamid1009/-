import { Wrench, Briefcase, Footprints } from 'lucide-react';
import { Translations } from '../lib/translations';

interface ServicesProps {
  translations: Translations;
  language: 'ar' | 'fr';
}

const services = [
  {
    id: 'shoe-repair',
    icon: Wrench,
    image: '/service-shoe-repair.jpg',
    getTitle: (t: Translations) => t.services.shoeRepair.title,
    getDescription: (t: Translations) => t.services.shoeRepair.description,
  },
  {
    id: 'bag-repair',
    icon: Briefcase,
    image: '/service-bag-repair.jpg',
    getTitle: (t: Translations) => t.services.bagRepair.title,
    getDescription: (t: Translations) => t.services.bagRepair.description,
  },
  {
    id: 'traditional-shoes',
    icon: Footprints,
    image: '/service-traditional-shoes.jpg',
    getTitle: (t: Translations) => t.services.traditionalShoes.title,
    getDescription: (t: Translations) => t.services.traditionalShoes.description,
  },
];

export default function Services({ translations, language }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-20 px-4 moroccan-pattern"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-leather-brown mb-4 ${
              language === 'ar' ? 'font-arabic-title' : 'font-french'
            }`}
          >
            {translations.services.title}
          </h2>
          <p
            className={`text-xl md:text-2xl text-dark-gray max-w-2xl mx-auto ${
              language === 'ar' ? 'font-arabic' : 'font-french'
            }`}
          >
            {translations.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover animate-slideUp"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.getTitle(translations)}
                    className="w-full h-full object-cover image-zoom"
                    loading="lazy"
                  />
                  {/* Icon Overlay */}
                  <div className="absolute top-4 right-4 bg-light-gold rounded-full p-3 shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold text-leather-brown mb-3 ${
                      language === 'ar' ? 'font-arabic-title' : 'font-french'
                    }`}
                  >
                    {service.getTitle(translations)}
                  </h3>
                  <p
                    className={`text-dark-gray leading-relaxed ${
                      language === 'ar' ? 'font-arabic' : 'font-french'
                    }`}
                  >
                    {service.getDescription(translations)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

