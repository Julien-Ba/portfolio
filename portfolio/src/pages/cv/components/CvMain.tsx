import './cvMain.scss';
import Link from '@/components/link/Link';
import Bullet from '@/components/bullet/Bullet';
import openclassrooms from '@/assets/icons/openclassrooms.png';
import sacreCoeur from '@/assets/icons/sacre-coeur-full.png';

export default function CvMain() {
    return (
        <section className='cv-main__section' aria-label='Professional Experience'>
            <article className='cv-main__article cv-main__presentation'>
                <h1 className='cv-main__name'>Julien Barbier</h1>
                <h2 className='cv-main__title'>Développeur Web</h2>
                <p className='cv-main__text'>
                    Développeur web junior spécialisé en React/JavaScript, combinant une formation
                    technique récente avec des compétences éprouvées en gestion d&apos;équipe et
                    organisation. Motivé par l&apos;apprentissage continu et la résolution de
                    problèmes.
                </p>
            </article>
            <article className='cv-main__article cv-main__education'>
                <h2 className='cv-main__title'>Formation</h2>
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
                            <span className='cv-main__text'>Développeur concepteur logiciel</span>
                            <Bullet size='small' />
                            <span className='cv-main__text'>Niveau 6 (bac +3/4)</span>
                        </Link>
                        <Link
                            to='https://openclassrooms.com/fr/paths/877-developpeur-dapplication-javascript-react'
                            target='_blank'
                        >
                            <span className='cv-main__description'>Formation Openclassrooms</span>
                            <Bullet size='small' />
                            <span className='cv-main__description'>Distanciel</span>
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
                            <span className='cv-main__text'>BTS - Hôtellerie restauration</span>
                            <Bullet size='small' />
                            <span className='cv-main__text'>Niveau 5 (bac +2)</span>
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
                <h2 className='cv-main__title'>Expérience</h2>
                <ul className='cv-main__list'>
                    <li className='cv-main__item'>
                        <h3 className='cv-main__subtitle'>
                            Développeur d&apos;application JavaScript React
                        </h3>
                        <ol className='cv-main__sublist'>
                            <li className='cv-main__subitem'>
                                <Link to='https://github.com/Julien-Ba/project14' target='_blank'>
                                    Déploiement d&apos;un projet full stack
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://www.npmjs.com/package/react-simple-table-component'
                                    target='_blank'
                                >
                                    Publication de composant React
                                </Link>
                                <span>, </span>
                                <Link
                                    to='https://www.npmjs.com/package/str-case-converter'
                                    target='_blank'
                                >
                                    de package utilitaire
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project13/tree/main/argent-bank/client/src/store'
                                    target='_blank'
                                >
                                    Gestion d&apos;un store Redux
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project13/blob/main/argent-bank/server/swagger.yaml'
                                    target='_blank'
                                >
                                    Création d&apos;une documentation API avec Swagger
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project12/tree/main/my-sportsee-frontend'
                                    target='_blank'
                                >
                                    Réalisation de graphiques avec D3/Recharts
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link to='https://github.com/Julien-Ba/project10' target='_blank'>
                                    Définition de besoins avec methode Agile: diagrammes Mermaid de
                                    cas d&apos;usage, User stories, maquettes Figma, Kanban.
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project9/tree/main'
                                    target='_blank'
                                >
                                    Création de test avec Jest
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project7/tree/main'
                                    target='_blank'
                                >
                                    Développement d&apos;un algorithme de recherche
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project6/tree/main'
                                    target='_blank'
                                >
                                    Implémentation de design patterns en JavaScript
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                <Link
                                    to='https://github.com/Julien-Ba/project3/blob/main/'
                                    target='_blank'
                                >
                                    Exploitation approfondie des fonctionnalités Sass
                                </Link>
                            </li>
                            <li className='cv-main__subitem'>
                                Intégration HTML: respect des standards sémantiques, conformité aux
                                normes d&apos;accessibilité, optimisation pour le référencement
                                naturel
                            </li>
                        </ol>
                    </li>
                    <li className='cv-main__item'>
                        <h3 className='cv-main__subtitle'>Autres expériences</h3>
                        <ol className='cv-main__sublist'>
                            <li className='cv-main__subitem'>
                                Maitrise avancée en ZenScript depuis 2017 (langage similaire à
                                JavaScript créé pour se hook sur du Java)
                            </li>
                            <li className='cv-main__subitem'>
                                Excel scripting pour faciliter le quotidien en entreprise
                            </li>
                            <li className='cv-main__subitem'>
                                Conception de site web pour communautés avec chat, forum, base de
                                donnée MySQL
                            </li>
                            <li className='cv-main__subitem'>
                                Création de contenu graphique web avec GIMP - spécialisé dans la
                                conception d&apos;éléments visuels personnalisés
                            </li>
                        </ol>
                    </li>
                </ul>
            </article>
            <article className='cv-main__article cv-main__previous'>
                <h2 className='cv-main__title'>Parcours professionnel</h2>
                <p className='cv-main__description'>
                    Mon parcours dans le secteur de la restauration m&apos;a permis de développer
                    des skills importants, notamment à travers des postes clés tels que :
                </p>
                <ol className='cv-main__sublist'>
                    <li>
                        <p className='cv-main__text'>
                            Responsable de Cuisine, association Artic42 (St Etienne, France) 2020/21
                        </p>
                        <p className='cv-main__description'>
                            Un poste à responsabilités axé sur la gestion des priorités et la prise
                            de décision stratégique, incluant la supervision opérationnelle pendant
                            la prériode COVID
                        </p>
                    </li>
                    <li>
                        <p className='cv-main__text'>
                            Second de cuisine, Novotel Atria (Annecy, France) 2017
                        </p>
                        <p className='cv-main__description'>
                            La gestion événementielle et le management d&apos;équipe, développant
                            mes compétences en coordination et en leadership
                        </p>
                    </li>
                    <li>
                        <p className='cv-main__text'>
                            Second de cuisine, restaurant Le Pharamond (Paris 1er, France) 2016
                        </p>
                        <p className='cv-main__description'>
                            Une environnement exigeant qui a forgé ma rigueur professionnelle et mon
                            perfectionnisme, alliant créativité et sens aigu de la précision
                        </p>
                    </li>
                </ol>
            </article>
        </section>
    );
}
