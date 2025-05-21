import { createContext } from 'react';
import { Languages, TranslationKey } from '@/types/translations';

export interface LanguageContextType {
    language: Languages;
    getLanguages: () => Record<Languages, string>;
    setLanguage: (lang: Languages) => void;
    t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
