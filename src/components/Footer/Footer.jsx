import { profile } from '@/data/profile';
import { contact } from '@/data/contact';
import { NAVIGATION_LINKS } from '@/constants/navigation';
import { Logo } from '@/components/Logo';
import { Heading } from '@/components/Heading';
import { ContactButton } from '@/components/ContactButton';
import { StatusButton } from '@/components/StatusButton';
import { InternalLink } from '@/components/InternalLink';
import { ExternalLink } from '@/components/ExternalLink';
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
          <section className={styles.brand}>
            <Logo />

            <p className={styles.tagline}>
              Transformando aprendizado em projetos.
            </p>
            <ContactButton />
          </section>

          <div className={styles.links}>
            <nav>
              <Heading as="h3" className={styles.title}>
                Menu
              </Heading>

              <ul className={styles.list}>
                {NAVIGATION_LINKS.map((link) => (
                  <li key={link.label}>
                    <InternalLink to={link.path}>{link.label}</InternalLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <Heading as="h3" className={styles.title}>
                Redes Sociais
              </Heading>

              <ul className={styles.list}>
                {socials.map(([name, url]) => (
                  <li key={name}>
                    <ExternalLink href={url}>{name}</ExternalLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
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
