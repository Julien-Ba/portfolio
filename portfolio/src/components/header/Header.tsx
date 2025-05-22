import { ThemeIcon } from '@/components/icons';
import Cv from '@/features/cv/Cv';
import useTranslation from '@/hooks/useTranslation';
import { useThemeStore } from '@/store/themeStore';
import { Languages } from '@/types/translations';
import { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import './header.scss';

export default function Header() {
    const cvRef = useRef(null);
    const handlePrint = useReactToPrint({
        contentRef: cvRef,
        documentTitle: 'barbier_julien_resume',
    });
    const { toggleTheme } = useThemeStore();
    const { getLanguages, setLanguage } = useTranslation();

    const [showCv, setShowCv] = useState(false);

    useEffect(() => {
        if (showCv) {
            handlePrint();
            setShowCv(false);
        }
    }, [handlePrint, showCv]);

    return (
        <header className='header'>
            <button className='button button-print' onClick={() => setShowCv(true)}>
                Print CV
            </button>
            {showCv && (
                <div hidden>
                    <Cv ref={cvRef} />
                </div>
            )}
            <div className='header-setting'>
                <button className='button' onClick={toggleTheme}>
                    <ThemeIcon />
                </button>
                <form>
                    <select
                        className='select'
                        name='language'
                        id='language'
                        onChange={(e) => setLanguage(e.target.value as Languages)}
                    >
                        {Object.keys(getLanguages()).map((key) => (
                            <option key={key} value={key}>
                                {getLanguages()[key as Languages]}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
        </header>
    );
}
