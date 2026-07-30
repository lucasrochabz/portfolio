import { profile } from '@/data/profile';
import styles from './Marquee.module.css';

const Marquee = () => {
  const repeatedStacks = profile.tools.concat(profile.tools);

  return (
    <section className={styles.marquee}>
      <div className={styles.stacks}>
        {repeatedStacks.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
