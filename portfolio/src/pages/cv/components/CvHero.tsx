import './cvHero.scss';
import julien from '@/assets/images/julien.jpeg';
import useTranslation from '@/hooks/useTranslation';

export default function CvHero() {
    const { t } = useTranslation();

    return (
        <section className='cv__hero' aria-label='Profile Header'>
            <img className='cv__hero-picture' src={julien} alt='profile picture' />
            <div className='cv__hero-content'>
                <h1 className='cv__hero-name'>Julien Barbier</h1>
                <p className='cv__hero-title'>{t('pages.cv.hero.title')}</p>
            </div>
        </section>
    );
}
