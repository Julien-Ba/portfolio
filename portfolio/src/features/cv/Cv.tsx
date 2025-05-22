import './Cv.scss';
import CvMain from './CvMain';
import CvSidebar from './CvSidebar';

export default function Cv(props: { ref?: React.Ref<HTMLDivElement> }) {
    return (
        <div className='cv' ref={props.ref}>
            <CvSidebar />
            <CvMain />
        </div>
    );
}
