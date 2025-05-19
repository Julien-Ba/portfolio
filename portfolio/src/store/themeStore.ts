import { create } from 'zustand';
import { Theme, ThemeState } from '@/types/theme';

export const useThemeStore = create<ThemeState>((set) => ({
    theme: ((): Theme => {
        if (typeof window === 'undefined') return 'light';

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    })(),

    toggleTheme: () =>
        set((state: ThemeState) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return { theme: newTheme };
        }),

    setTheme: (newTheme: Theme) =>
        set(() => {
            localStorage.setItem('theme', newTheme);
            return { theme: newTheme };
        }),
}));
