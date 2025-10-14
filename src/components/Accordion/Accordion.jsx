import { useState } from 'react';
import styles from './Accordion.module.css';

const Accordion = ({ changelogData }) => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={styles.container}>
      <h1 className="title">{changelogData.title}</h1>
      <h3>{changelogData.subtitle}</h3>

      <div className={styles.accordion}>
        {changelogData.versions.map((version) => (
          <div
            key={version.version}
            className={`${styles.version} ${
              open === version.version ? styles.open : ''
            }`}
          >
            <button onClick={() => toggle(version.version)}>
              <div className={styles.versionHeader}>
                <h2>{version.version}</h2>
                <span>{version.date}</span>
              </div>

              <span>{open === version.version ? '-' : '+'}</span>
            </button>

            <div className={styles.content}>{version.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
