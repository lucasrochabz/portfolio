import { profile } from '@/data/profile';
import styles from './LanguageList.module.css';

const LanguageList = () => {
  return (
    <section className={styles.language}>
      <h2>Idiomas</h2>

      <ul className={styles.list}>
        {profile.languages.map((language) => (
          <li key={language.name}>
            {language.name} — {language.level}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LanguageList;
