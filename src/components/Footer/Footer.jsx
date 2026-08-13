import { profile } from '@/data/profile';
import { contact } from '@/data/contact';
import { PATHS } from '@/constants/paths';
import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { Heading } from '@/components/Heading';
import styles from './Footer.module.css';

const navigationLinks = [
  { path: PATHS.HOME, label: 'Home' },
  { path: PATHS.ABOUT, label: 'Sobre' },
  { path: PATHS.PROJECTS.INDEX, label: 'Projetos' },
  { path: PATHS.COURSE, label: 'Cursos' },
];

const socials = [
  ['LinkedIn', contact.socials.linkedIn],
  ['GitHub', contact.socials.github],
  ['Instagram', contact.socials.instagram],
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
            <Link.Root href={contact.mailto} variant="cta">
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
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <Link.Root href={url} variant="footer">
                      {name}
                    </Link.Root>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.copyright}>
          <p>{profile.copyright}</p>

          <Link.Root to={PATHS.CHANGELOG} variant="status">
            {profile.version}
          </Link.Root>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
