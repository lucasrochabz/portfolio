import { techStacksData } from '../../data/techStacksData';
import styles from './Marquee.module.css';

const Marquee = () => {
  const repeatedStacks = techStacksData.concat(techStacksData);

  return (
    <section className={styles.stacks}>
      <div className={styles.marquee}>
        {repeatedStacks.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
