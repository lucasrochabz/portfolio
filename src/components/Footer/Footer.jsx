import { ROUTES } from '../../paths';
import { Link } from 'react-router-dom';
import { footerData } from '../../data/footerData';
import { ExternalLink } from '../ExternalLink';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
        <ul className={styles.listLinks}>
          {footerData.socials.map((social) => (
            <li key={social.text}>
              <ExternalLink.Root href={social.url} variant="social">
                <ExternalLink.Icon src={social.iconPath} />
                {social.text}
              </ExternalLink.Root>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p>{footerData.subtitle}</p>

          <Link to={ROUTES.changelog}>
            <p className={styles.version}>{footerData.version}</p>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
