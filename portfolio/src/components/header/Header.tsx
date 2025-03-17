import './header.scss';
import { useThemeStore } from '@/store/themeStore';
import { ThemeIcon } from '@/components/icons';

export default function Header() {
    const { toggleTheme } = useThemeStore();

    return (
        <button onClick={toggleTheme}>
            <ThemeIcon />
        </button>
    );
}
