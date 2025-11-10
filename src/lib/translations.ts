export type Language = 'ar' | 'fr';

export interface Translations {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    shoeRepair: {
      title: string;
      description: string;
    };
    bagRepair: {
      title: string;
      description: string;
    };
    traditionalShoes: {
      title: string;
      description: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    phone: {
      title: string;
      number: string;
      cta: string;
    };
    hours: {
      title: string;
      weekdays: string;
      friday: string;
    };
    location: {
      title: string;
      address: string;
    };
  };
  map: {
    title: string;
    subtitle: string;
  };
  footer: {
    name: string;
    copyright: string;
  };
}

export const translations: Record<Language, Translations> = {
  ar: {
    hero: {
      title: 'اسكافي البهجة',
      subtitle: 'حرفة مغربية أصيلة منذ أجيال',
      description: 'نقدم خدمات احترافية في إصلاح الأحذية والحقائب وصناعة الأحذية التقليدية المغربية بأعلى معايير الجودة',
      cta: 'احجز موعدك الآن',
    },
    services: {
      title: 'خدماتنا المتميزة',
      subtitle: 'نقدم مجموعة شاملة من الخدمات الاحترافية',
      shoeRepair: {
        title: 'إصلاح الأحذية',
        description: 'نصلح جميع أنواع الأحذية بمهارة عالية ونستخدم مواد أصلية لضمان الجودة والمتانة',
      },
      bagRepair: {
        title: 'إصلاح الحقائب',
        description: 'خدمات احترافية لإصلاح الحقائب الجلدية والقماشية بأفضل التقنيات',
      },
      traditionalShoes: {
        title: 'صناعة الأحذية التقليدية',
        description: 'نصنع البلغة المغربية والأحذية التقليدية بحرفية عالية وتصاميم أصيلة',
      },
    },
    contact: {
      title: 'احجز موعدك',
      subtitle: 'تواصل معنا للحصول على خدماتنا الاحترافية',
      phone: {
        title: 'اتصل بنا',
        number: '+212 666 154 733',
        cta: 'اتصل الآن',
      },
      hours: {
        title: 'ساعات العمل',
        weekdays: 'كل يوم: 10:30 - 20:30',
        friday: '',
      },
      location: {
        title: 'الموقع',
        address: 'الصخيرات، المغرب',
      },
    },
    map: {
      title: 'موقعنا',
      subtitle: 'زورنا في موقعنا',
    },
    footer: {
      name: 'اسكافي البهجة',
      copyright: '© 2025 جميع الحقوق محفوظة - صناعة مغربية تقليدية بجودة عالية',
    },
  },
  fr: {
    hero: {
      title: 'Cordonnier Al-Bahja',
      subtitle: 'Un métier marocain authentique depuis des générations',
      description: 'Nous offrons des services professionnels de réparation de chaussures et de sacs, ainsi que la fabrication de chaussures traditionnelles marocaines selon les plus hauts standards de qualité',
      cta: 'Réservez votre rendez-vous maintenant',
    },
    services: {
      title: 'Nos Services Distingués',
      subtitle: 'Nous offrons une gamme complète de services professionnels',
      shoeRepair: {
        title: 'Réparation de Chaussures',
        description: 'Nous réparons tous types de chaussures avec une grande compétence et utilisons des matériaux originaux pour garantir qualité et durabilité',
      },
      bagRepair: {
        title: 'Réparation de Sacs',
        description: 'Services professionnels pour réparer les sacs en cuir et en tissu avec les meilleures techniques',
      },
      traditionalShoes: {
        title: 'Fabrication de Chaussures Traditionnelles',
        description: 'Nous fabriquons les babouches marocaines et chaussures traditionnelles avec un savoir-faire élevé et des designs authentiques',
      },
    },
    contact: {
      title: 'Réservez votre Rendez-vous',
      subtitle: 'Contactez-nous pour bénéficier de nos services professionnels',
      phone: {
        title: 'Appelez-nous',
        number: '+212 666 154 733',
        cta: 'Appeler maintenant',
      },
      hours: {
        title: 'Heures d\'ouverture',
        weekdays: 'Tous les jours: 10:30 - 20:30',
        friday: '',
      },
      location: {
        title: 'Emplacement',
        address: 'Skhirat, Maroc',
      },
    },
    map: {
      title: 'Notre Emplacement',
      subtitle: 'Visitez-nous dans notre emplacement',
    },
    footer: {
      name: 'Cordonnier Al-Bahja',
      copyright: '© 2025 Tous droits réservés - Artisanat marocain traditionnel de haute qualité',
    },
  },
};

