import { Globe } from 'lucide-react';
import { Language } from '../lib/translations';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

export default function LanguageSwitcher({ currentLanguage, onLanguageChange, className = '' }: LanguageSwitcherProps) {
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'ar' ? 'fr' : 'ar';
    onLanguageChange(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 border border-gray-200 ${className}`}
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-leather-brown" />
      <span className="font-french font-semibold text-dark-gray">
        {currentLanguage === 'ar' ? 'FR' : 'AR'}
      </span>
    </button>
  );
}

