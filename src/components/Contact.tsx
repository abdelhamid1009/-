import { Phone, Clock, MapPin } from 'lucide-react';
import { Translations } from '../lib/translations';

interface ContactProps {
  translations: Translations;
  language: 'ar' | 'fr';
}

export default function Contact({ translations, language }: ContactProps) {
  const handleCall = () => {
    window.location.href = `tel:${translations.contact.phone.number}`;
  };

  const contactCards = [
    {
      id: 'phone',
      icon: Phone,
      title: translations.contact.phone.title,
      content: (
        <div className="text-center">
          <p className="text-2xl font-bold text-dark-gray mb-4 font-french">
            {translations.contact.phone.number}
          </p>
          <button onClick={handleCall} className="btn-secondary w-full">
            {translations.contact.phone.cta}
          </button>
        </div>
      ),
    },
    {
      id: 'hours',
      icon: Clock,
      title: translations.contact.hours.title,
      content: (
        <div className="text-center space-y-2">
          <p className={`text-dark-gray ${language === 'ar' ? 'font-arabic' : 'font-french'}`}>
            {translations.contact.hours.weekdays}
          </p>
          {translations.contact.hours.friday && (
            <p className={`text-dark-gray ${language === 'ar' ? 'font-arabic' : 'font-french'}`}>
              {translations.contact.hours.friday}
            </p>
          )}
        </div>
      ),
    },
    {
      id: 'location',
      icon: MapPin,
      title: translations.contact.location.title,
      content: (
        <p className={`text-dark-gray text-center ${language === 'ar' ? 'font-arabic' : 'font-french'}`}>
          {translations.contact.location.address}
        </p>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-cream-beige"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-leather-brown mb-4 ${
              language === 'ar' ? 'font-arabic-title' : 'font-french'
            }`}
          >
            {translations.contact.title}
          </h2>
          <p
            className={`text-xl md:text-2xl text-dark-gray max-w-2xl mx-auto ${
              language === 'ar' ? 'font-arabic' : 'font-french'
            }`}
          >
            {translations.contact.subtitle}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-8 shadow-lg card-hover animate-slideUp text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-light-gold rounded-full p-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-2xl font-bold text-leather-brown mb-6 ${
                    language === 'ar' ? 'font-arabic-title' : 'font-french'
                  }`}
                >
                  {card.title}
                </h3>

                {/* Content */}
                <div className={`${language === 'ar' ? 'font-arabic' : 'font-french'}`}>
                  {card.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

