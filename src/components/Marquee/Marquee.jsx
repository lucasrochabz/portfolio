import { techStacks } from '@/data/techStacks';
import styles from './Marquee.module.css';

const Marquee = () => {
  const repeatedStacks = techStacks.concat(techStacks);

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
