import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { ROUTES } from '@/constants/routes';
// import { Anchor } from '@/components/Anchor';
import styles from './Footer.module.css';

const navigationLinks = [
  { path: ROUTES.ABOUT, label: 'Sobre' },
  { path: ROUTES.PROJECTS, label: 'Projetos' },
  { path: ROUTES.COURSE, label: 'Cursos' },
  { path: ROUTES.CONTACT, label: 'Contato' },
];

// fix: remover Anchor e tentar ver se uso em outro canto
const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
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

        <div className={styles.content}>
          <Link to={ROUTES.HOME}>
            <h2>Lucas Rocha</h2>
          </Link>

          <div className={styles.links}>
            <ul className={styles.list}>
              <li className={styles.top}>Páginas</li>

              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <ul className={styles.list}>
              <li className={styles.top}>Redes Sociais</li>
              {profile.socials.map((social) => (
                <li key={social.text}>
                  <a href={social.url} target="_blank">
                    {social.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{profile.copyright}</p>

          <Link to={ROUTES.CHANGELOG}>
            <p className={styles.version}>{profile.version}</p>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
