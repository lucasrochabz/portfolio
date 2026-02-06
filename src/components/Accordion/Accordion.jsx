import { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ changelogData }) => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className={styles.accordion}>
      {changelogData.versions.map((version) => (
        <article
          key={version.version}
          className={`${styles.card} ${
            open === version.version ? styles.open : ''
          }`}
        >
          <header>
            <button onClick={() => toggle(version.version)}>
              <div className={styles.versionHeader}>
                <h2>{version.version}</h2>
                <span>{version.date}</span>
              </div>

              <span>{open === version.version ? '-' : '+'}</span>
            </button>
          </header>

          <div className={styles.content}>
            <p>{version.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Accordion;
