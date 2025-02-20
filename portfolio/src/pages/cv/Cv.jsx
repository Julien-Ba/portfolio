import './cv.scss';
import CvSidebar from './components/CvSidebar';
import CvMain from './components/CvMain';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const documentTitle = 'barbier_julien_resume';

export default function Cv() {
    const cvRef = useRef(null);
    const handlePrint = useReactToPrint({
        contentRef: cvRef,
        documentTitle: documentTitle,
    });

    return (
        <>
            <button onClick={() => handlePrint()}>Print</button>
            <main className='cv' ref={cvRef}>
                <CvSidebar />
                <CvMain />
            </main>
        </>
    );
}
