import './cv.scss';
import CvSidebar from './components/CvSidebar';
import CvMain from './components/CvMain';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import useTranslation from '@/hooks/useTranslation';
import { Languages } from '@/types/translations';

const documentTitle = 'barbier_julien_resume';

export default function Cv() {
    const { getLanguages, setLanguage } = useTranslation();
    const cvRef = useRef(null);
    const handlePrint = useReactToPrint({
        contentRef: cvRef,
        documentTitle: documentTitle,
    });

    return (
        <>
            <button onClick={() => handlePrint()}>Print</button>
            <form>
                <select
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
            <main className='cv' ref={cvRef}>
                <CvSidebar />
                <CvMain />
            </main>
        </>
    );
}
