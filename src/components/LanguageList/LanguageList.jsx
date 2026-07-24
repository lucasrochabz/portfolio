import { profile } from '@/data/profile';
import { Heading } from '@/components/Heading';
import styles from './LanguageList.module.css';

const LanguageList = () => {
  return (
    <section className={styles.language}>
      <Heading as="h2">Idiomas</Heading>

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
