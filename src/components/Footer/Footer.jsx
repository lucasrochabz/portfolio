import { Link } from 'react-router-dom';
import { footerDetails } from '../../data/footer';
import { ExternalLink } from '../ExternalLink';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
        <ul className={styles.listLinks}>
          {footerDetails.socials.map((social) => (
            <li key={social.text}>
              <ExternalLink.Root href={social.url} variant="social">
                <ExternalLink.Icon src={social.iconPath} />
                {social.text}
              </ExternalLink.Root>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p>{footerDetails.subtitle}</p>

          <Link to="/historico">
            <p className={styles.version}>{footerDetails.version}</p>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
