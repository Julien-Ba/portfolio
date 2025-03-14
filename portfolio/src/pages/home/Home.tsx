import './home.scss';
import Link from '@/components/link/Link';
import { ResumeIcon } from '@/components/icons';

export default function Home() {
    return (
        <main className='home'>
            <div className='home__hero'>
                <h1 className='home__hero-name'>Julien Barbier</h1>
                <p className='home__hero-title'>Développeur Web</p>
            </div>
            <Link className='link link-cv' to='/cv'>
                <ResumeIcon width={32} height={32} />
                CV
            </Link>
        </main>
    );
}
