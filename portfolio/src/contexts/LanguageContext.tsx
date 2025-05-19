import { createContext } from 'react';
import { Languages, TranslationKey } from '@/types/translations';

export interface LanguageContextType {
    language: Languages;
    changeLanguage: (lang: Languages) => void;
    t: (key: TranslationKey) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
