import openclassrooms from '@/assets/icons/openclassrooms.png';
import sacreCoeur from '@/assets/icons/sacre-coeur-full.png';
import Bullet from '@/components/bullet/Bullet';
import Link from '@/components/link/Link';
import useTranslation from '@/hooks/useTranslation';
import './cvMain.scss';

export default function CvMain() {
    const { t } = useTranslation();

    return (
        <section className='cv-main__section' aria-label='Professional Experience'>
            <article className='cv-main__article cv-main__presentation'>
                <h1 className='cv-main__name'>Julien Barbier</h1>
                <h2 className='cv-main__title'>{t('pages.cv.main.presentation.title')}</h2>
                <p className='cv-main__text'>{t('pages.cv.main.presentation.text')}</p>
            </article>
            <article className='cv-main__article cv-main__education'>
                <h2 className='cv-main__title'>{t('pages.cv.main.education.title')}</h2>
                <ul className='cv-main__list'>
                    <li className='cv-main__item'>
                        <img
                            className='cv-main__icon'
                            src={openclassrooms}
                            alt="Icone de l'établissement de formation"
                        />
                        <Link
                            to='https://www.francecompetences.fr/recherche/rncp/38038/'
                            target='_blank'
                        >
                            <span className='cv-main__text'>
                                {t('pages.cv.main.education.openclassrooms.title')}
                            </span>
                            <Bullet size='small' />
                            <span className='cv-main__text'>
                                {t('pages.cv.main.education.openclassrooms.level')}
                            </span>
                        </Link>
                        <Link
                            to='https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react'
                            target='_blank'
                        >
                            <span className='cv-main__description'>
                                {t('pages.cv.main.education.openclassrooms.organization')}
                            </span>
                            <Bullet size='small' />
                            <span className='cv-main__description'>
                                {t('pages.cv.main.education.openclassrooms.location')}
                            </span>
                            <Bullet size='small' />
                            <span className='cv-main__description'>2025</span>
                        </Link>
                    </li>
                    <li className='cv-main__item'>
                        <img
                            className='cv-main__icon'
                            src={sacreCoeur}
                            alt="Icone de l'établissement de formation"
                        />
                        <Link
                            to='https://www.francecompetences.fr/recherche/rncp/1063/'
                            target='_blank'
                        >
                            <span className='cv-main__text'>
                                {t('pages.cv.main.education.sacrecoeur.title')}
                            </span>
                            <Bullet size='small' />
                            <span className='cv-main__text'>
                                {t('pages.cv.main.education.sacrecoeur.level')}
                            </span>
                        </Link>
                        <Link
                            to='https://www.ensemble-sacre-coeur.fr/pages/pole-superieur.html'
                            target='_blank'
                        >
                            <span className='cv-main__description'>L.P. Sacré Coeur</span>
                            <Bullet size='small' />
                            <span className='cv-main__description'>
                                St Chely D&apos;Apcher, 48, France
                            </span>
                            <Bullet size='small' />
                            <span className='cv-main__description'>2012</span>
                        </Link>
                    </li>
                </ul>
            </article>
            <article className='cv-main__article cv-main__experience'>
                <h2 className='cv-main__title'>{t('pages.cv.main.experience.title')}</h2>
                <ul className='cv-main__list'>
                    <li className='cv-main__item'>
                        <h3 className='cv-main__subtitle'>
                            {t('pages.cv.main.experience.react.title')}
                        </h3>
                        <ol className='cv-main__sublist'>
                            <li className='cv-main__subitem'>
                                <Link to='https://github.com/Julien-Ba/project14' target='_blank'>
                                    {t('pages.cv.main.experience.react.p14')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://www.npmjs.com/package/react-simple-table-component'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.table')}
                                </Link>
                                <span>, </span>
                                <Link
                                    to='https://www.npmjs.com/package/str-case-converter'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.fmt')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project13/tree/main/argent-bank/client/src/store'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.redux')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project13/blob/main/argent-bank/server/swagger.yaml'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.swagger')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project12/tree/main/my-sportsee-frontend'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.d3')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link to='https://github.com/Julien-Ba/project10' target='_blank'>
                                    {t('pages.cv.main.experience.react.p10')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project9/tree/main'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.jest')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project7/tree/main'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.p7')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project6/tree/main'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.p6')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project3/blob/main/'
                                    target='_blank'
                                >
                                    {t('pages.cv.main.experience.react.sass')}
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                {t('pages.cv.main.experience.react.html')}
                            </li>
                        </ol>
                    </li>
                    <li className='cv-main__item'>
                        <h3 className='cv-main__subtitle'>
                            {t('pages.cv.main.experience.misc.title')}
                        </h3>
                        <ol className='cv-main__sublist'>
                            <li className='cv-main__subitem'>
                                {t('pages.cv.main.experience.misc.zenscript')}
                            </li>
                            <li className='cv-main__subitem'>
                                {t('pages.cv.main.experience.misc.excel')}
                            </li>
                            <li className='cv-main__subitem'>
                                {t('pages.cv.main.experience.misc.website')}
                            </li>
                            <li className='cv-main__subitem'>
                                {t('pages.cv.main.experience.misc.gimp')}
                            </li>
                        </ol>
                    </li>
                </ul>
            </article>
            <article className='cv-main__article cv-main__previous'>
                <h2 className='cv-main__title'>{t('pages.cv.main.career.title')}</h2>
                <p className='cv-main__description'>{t('pages.cv.main.career.description')}</p>
                <ol className='cv-main__sublist'>
                    <li>
                        <p className='cv-main__text'>{t('pages.cv.main.career.artic.title')}</p>
                        <p className='cv-main__description'>
                            {t('pages.cv.main.career.artic.description')}
                        </p>
                    </li>
                    <li>
                        <p className='cv-main__text'>{t('pages.cv.main.career.novotel.title')}</p>
                        <p className='cv-main__description'>
                            {t('pages.cv.main.career.novotel.description')}
                        </p>
                    </li>
                    <li>
                        <p className='cv-main__text'>{t('pages.cv.main.career.pharamond.title')}</p>
                        <p className='cv-main__description'>
                            {t('pages.cv.main.career.pharamond.description')}
                        </p>
                    </li>
                </ol>
            </article>
        </section>
    );
}
