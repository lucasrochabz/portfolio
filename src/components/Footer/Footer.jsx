import { Link } from 'react-router-dom';
import logoWhite from '@/assets/images/logo-white.svg';
import { profile } from '@/data/profile';
import { ROUTES } from '@/constants/routes';
import { Anchor } from '@/components/Anchor';
import { Heading } from '@/components/Heading';
import styles from './Footer.module.css';

const navigationLinks = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'Sobre' },
  { path: ROUTES.PROJECTS.INDEX, label: 'Projetos' },
  { path: ROUTES.COURSE, label: 'Cursos' },
];

// fix: remover Anchor e tentar ver se uso em outro canto
const Footer = () => {
  return (
    <footer>
      {/* <ul className={styles.listLinks}>
          {footer.socials.map((social) => (
            <li key={social.text}>
              <Anchor.Root href={social.url} variant="social">
                <Anchor.Icon src={social.iconPath} />
                {social.text}
              </Anchor.Root>
            </li>
          ))}
        </ul> */}

      <header className={styles.header}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <img src={logoWhite} alt="Logo" />

            <p className={styles.tagline}>
              Transformando aprendizado em projetos.
            </p>
            <Anchor.Root
              href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
              variant="cta"
            >
              Entre em contato
            </Anchor.Root>
          </div>

          <nav className={styles.links}>
            <div>
              <Heading as="h3" className={styles.title}>
                Menu
              </Heading>
              <ul className={styles.list}>
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Heading as="h3" className={styles.title}>
                Redes Sociais
              </Heading>
              <ul className={styles.list}>
                {profile.socials.map((social) => (
                  <li key={social.text}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <section className={styles.section}>
        <div className={styles.copyright}>
          <p>{profile.copyright}</p>

          <Link to={ROUTES.CHANGELOG} className={styles.version}>
            {profile.version}
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
