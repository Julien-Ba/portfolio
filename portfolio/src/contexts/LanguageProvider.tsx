import { useState, PropsWithChildren } from 'react';
import { DEFAULT_LANGUAGE } from '@/configs/common';
import { LanguageContext } from '@/contexts/LanguageContext';
import { Languages, TranslationKey } from '@/types/translations';
import { translations } from '@/translations';

function getTranslation(key: TranslationKey, lang: Languages): string {
    const keys = key.split('.');
    let current = translations[lang] as Record<string, unknown>;

    for (let i = 0; i < keys.length - 1; i++) {
        if (current && typeof current === 'object' && keys[i] in current) {
            current = current[keys[i]] as Record<string, unknown>;
        } else {
            return key;
        }
    }

    const lastKey = keys[keys.length - 1];
    if (!(current && typeof current === 'object' && lastKey in current)) {
        if (process.env.NODE_ENV === 'development') {
            console.warn(`Translation key not found: ${key}`);
        }
        return key;
    }

    return String(current[lastKey]);
}

export function LanguageProvider({ children }: PropsWithChildren) {
    const [language, setLanguage] = useState<Languages>(() => {
        const savedLanguage = localStorage.getItem('language');
        return (savedLanguage as Languages) || DEFAULT_LANGUAGE;
    });

    function changeLanguage(lang: Languages) {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    }

    function t(key: TranslationKey): string {
        const translate = getTranslation(key, language);

        if (translate === key && language !== 'en') {
            const enTranslation = getTranslation(key, 'en');
            return enTranslation !== key ? enTranslation : key;
        }

        return translate;
    }

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
