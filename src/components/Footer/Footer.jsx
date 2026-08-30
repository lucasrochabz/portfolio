import { profile } from '@/data/profile';
import { contact } from '@/data/contact';
import { NAVIGATION_LINKS } from '@/constants/navigation';
import { Logo } from '@/components/Logo';
import { Link } from '@/components/Link';
import { Heading } from '@/components/Heading';
import { ContactButton } from '@/components/ContactButton';
import { StatusButton } from '../StatusButton';
import styles from './Footer.module.css';

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
            <ContactButton />
          </div>

          <nav className={styles.links}>
            <div>
              <Heading as="h3" className={styles.title}>
                Menu
              </Heading>

              <ul className={styles.list}>
                {NAVIGATION_LINKS.map((link) => (
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
          <StatusButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
