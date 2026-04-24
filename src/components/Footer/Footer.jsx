import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { footerData } from '../../data/footerData';
import { Anchor } from '@/components/Anchor';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBg}>
      <section className={styles.footer}>
        <ul className={styles.listLinks}>
          {footerData.socials.map((social) => (
            <li key={social.text}>
              <Anchor.Root href={social.url} variant="social">
                <Anchor.Icon src={social.iconPath} />
                {social.text}
              </Anchor.Root>
            </li>
          ))}
        </ul>

        <div className={styles.bottom}>
          <p>{footerData.subtitle}</p>

          <Link to={ROUTES.CHANGELOG}>
            <p className={styles.version}>{footerData.version}</p>
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
