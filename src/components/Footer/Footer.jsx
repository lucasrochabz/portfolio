import { profile } from '@/data/profile';
import { ROUTES } from '@/constants/routes';
import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { Heading } from '@/components/Heading';
import styles from './Footer.module.css';

const navigationLinks = [
  { path: ROUTES.HOME, label: 'Home' },
  { path: ROUTES.ABOUT, label: 'Sobre' },
  { path: ROUTES.PROJECTS.INDEX, label: 'Projetos' },
  { path: ROUTES.COURSE, label: 'Cursos' },
];

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Logo />

            <p className={styles.tagline}>
              Transformando aprendizado em projetos.
            </p>
            <Link.Root
              href="mailto:lucasbezerrar@gmail.com?subject=Assunto%20do%20e-mail"
              variant="cta"
            >
              Entre em contato
            </Link.Root>
          </div>

          <nav className={styles.links}>
            <div>
              <Heading as="h3" className={styles.title}>
                Menu
              </Heading>

              <ul className={styles.list}>
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link.Root to={link.path} variant="footer">
                      {link.label}
                    </Link.Root>
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
                    <Link.Root href={social.url} variant="footer">
                      {social.text}
                    </Link.Root>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p>{profile.copyright}</p>

          <Link.Root to={ROUTES.CHANGELOG} variant="status">
            {profile.version}
          </Link.Root>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
