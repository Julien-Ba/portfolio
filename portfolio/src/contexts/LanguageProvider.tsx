import { useState, PropsWithChildren } from 'react';
import { DEFAULT_LANGUAGE } from '@/configs/common';
import { LanguageContext } from '@/contexts/LanguageContext';
import { Languages, LanguagesSchema, TranslationKey } from '@/types/translations';
import { translations } from '@/translations';
import { consoleWarn } from '@/utils/console';

function getDefaultLanguage(): Languages {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && LanguagesSchema.includes(savedLanguage)) {
        return savedLanguage as Languages;
    }
    const navigatorLanguage = navigator.language.slice(0, 2);
    if (LanguagesSchema.includes(navigatorLanguage)) {
        return navigatorLanguage as Languages;
    }
    return DEFAULT_LANGUAGE;
}

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
        consoleWarn(`Translation key not found: ${key}`);
        return key;
    }

    return String(current[lastKey]);
}

// if a translation wasn't found with the chosen language, default to another
function getAlternateTranslation(key: TranslationKey, lang: Languages): string {
    // prioritize either 'en' or 'fr'
    const altDefaultLang = lang === 'en' ? 'fr' : 'en';
    consoleWarn(`Trying to default to: ${altDefaultLang}`);
    let altTranslation = getTranslation(key, altDefaultLang);
    if (altTranslation !== key) {
        return altTranslation;
    }

    // else go through the LanguagesSchema and try them in order
    const restLangs = LanguagesSchema.filter((l) => l !== lang && l !== altDefaultLang);
    function tryNextLanguage(remainingLangs: string[]) {
        // if no more language to go through, return the key
        if (remainingLangs.length === 0) {
            return key;
        }
        const nextLang = remainingLangs[0];
        consoleWarn(`Trying to default to: ${nextLang}`);
        altTranslation = getTranslation(key, nextLang as Languages);
        if (altTranslation !== key) {
            return altTranslation;
        }
        return tryNextLanguage(remainingLangs.slice(1));
    }
    return tryNextLanguage(restLangs);
}

export function LanguageProvider({ children }: PropsWithChildren) {
    const [language, setLanguageState] = useState<Languages>(getDefaultLanguage());

    function getLanguages(): Record<Languages, string> {
        return { en: 'English', fr: 'Français' };
    }

    function setLanguage(lang: Languages): void {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    }

    function t(key: TranslationKey): string {
        const translate = getTranslation(key, language);
        if (translate !== key) return translate;
        return getAlternateTranslation(key, language);
    }

    return (
        <LanguageContext.Provider value={{ language, getLanguages, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
