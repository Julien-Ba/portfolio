import './app.scss';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/router';
import { useThemeStore } from '@/store/themeStore';
import { ThemeState } from '@/types/theme';

export default function App() {
    const theme = useThemeStore((state: ThemeState) => state.theme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return <RouterProvider router={router} />;
}
