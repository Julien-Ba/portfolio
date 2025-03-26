import { fr } from '@/translations/fr';

export const LanguagesSchema = ['en', 'fr'];

export type Languages = 'en' | 'fr';

type Translations = typeof fr;

type FlattenKeys<T, Prefix extends string = ''> = {
    [K in keyof T]: T[K] extends object
        ? FlattenKeys<T[K], `${Prefix}${string & K}.`>
        : `${Prefix}${string & K}`;
}[keyof T];

export type TranslationKey = FlattenKeys<Translations>;
