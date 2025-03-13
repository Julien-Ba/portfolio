import './header.scss';
import { useThemeStore } from '@/store/themeStore';

export default function Header() {
    const { theme, toggleTheme } = useThemeStore();

    return (
        <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</button>
    );
}
