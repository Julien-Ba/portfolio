import './cvSidebar.scss';
import Bullet from '@/components/bullet/Bullet';
import {
    JestIcon,
    MailIcon,
    MongoIcon,
    NodeIcon,
    PhoneIcon,
    PinIcon,
    ReactIcon,
    ReduxIcon,
    SassIcon,
    SwaggerIcon,
} from '@/components/icons';
import julien from '@/assets/images/julien.jpeg';

const ICON_SIZE = 16;
const LOGO_SIZE = 24;

export default function CvSidebar() {
    return (
        <aside className='cv-sidebar' aria-label='Profile Details'>
            <img className='cv-sidebar__picture' src={julien} alt='profile picture' />
            {/* Contact Information */}
            <section className='cv-sidebar__section'>
                <h2 className='cv-sidebar__title'>Coordonées</h2>
                <address className='cv-sidebar__contact'>
                    <div className='cv-sidebar__item'>
                        <PinIcon width={ICON_SIZE} height={ICON_SIZE} />
                        <span className='cv-sidebar__text'>St Etienne - France </span>
                        <Bullet size='small' />
                        <span className='cv-sidebar__text'> Mobile</span>
                    </div>
                    <a className='cv-sidebar__item' href='mailto:julienbarbier42@gmail.com'>
                        <MailIcon width={ICON_SIZE} height={ICON_SIZE} />
                        <span className='cv-sidebar__text'>julienbarbier42@gmail.com</span>
                    </a>
                    <a className='cv-sidebar__item' href='tel:+33769947749'>
                        <PhoneIcon width={ICON_SIZE} height={ICON_SIZE} />
                        <span className='cv-sidebar__text'>+33 7 69 94 77 49</span>
                    </a>
                </address>
            </section>
            {/* Hard Skills */}
            <section className='cv-sidebar__section'>
                <h2 className='cv-sidebar__title'>Compétences</h2>
                <ul className='cv-sidebar__list'>
                    <li className='cv-sidebar__item'>
                        <ReactIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>React JS</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <SassIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>SASS</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <ReduxIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>Redux</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <NodeIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>Node JS</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <MongoIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>MongoDB</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <JestIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>Jest</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <SwaggerIcon width={LOGO_SIZE} height={LOGO_SIZE} />
                        <span className='cv-sidebar__text'>Swagger</span>
                    </li>
                </ul>
            </section>
            {/* Soft Skills */}
            <section className='cv-sidebar__section'>
                <h2 className='cv-sidebar__title'>Qualités personnelles</h2>
                <ul className='cv-sidebar__list'>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Adaptabilité</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Organisation</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Autonomie</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Curiosité</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Management</span>
                    </li>
                </ul>
            </section>
            {/* Languages */}
            <section className='cv-sidebar__section'>
                <h2 className='cv-sidebar__title'>Langues</h2>
                <ul className='cv-sidebar__list'>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Français</span>
                        <br />
                        <span className='cv-sidebar__description'>Langue maternelle</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Anglais</span>
                        <br />
                        <span className='cv-sidebar__description'>C1 - Avancé</span>
                    </li>
                    <li className='cv-sidebar__item'>
                        <Bullet />
                        <span className='cv-sidebar__text'>Espagnol</span>
                        <br />
                        <span className='cv-sidebar__description'>A1 - Élémentaire</span>
                    </li>
                </ul>
            </section>
        </aside>
    );
}
