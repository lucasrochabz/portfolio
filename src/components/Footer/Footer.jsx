import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { footer } from '@/data/footer';
import { Anchor } from '@/components/Anchor';
import styles from './Footer.module.css';

// fix: add links rápidos para outras páginas
const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
        <ul className={styles.listLinks}>
          {footer.socials.map((social) => (
            <li key={social.text}>
              <Anchor.Root href={social.url} variant="social">
                <Anchor.Icon src={social.iconPath} />
                {social.text}
              </Anchor.Root>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p>{footer.subtitle}</p>

          <Link to={ROUTES.CHANGELOG}>
            <p className={styles.version}>{footer.version}</p>
          </Link>
        </div>

        <ul>
          <li>Links rápidos</li>
          <li>
            <Link to={ROUTES.ABOUT}>Sobre</Link>
            <Link to={ROUTES.PROJECTS}>Projetos</Link>
          </li>
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
