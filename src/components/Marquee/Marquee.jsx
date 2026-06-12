import { profile } from '@/data/profile';
import styles from './Marquee.module.css';

const Marquee = () => {
  const repeatedStacks = profile.skills.concat(profile.skills);

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
