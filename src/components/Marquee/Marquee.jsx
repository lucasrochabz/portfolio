import styles from './Marquee.module.css';

const techStacks = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
];

const Marquee = () => {
  const repeatedStacks = techStacks.concat(techStacks);

  return (
    <section className={styles.stacks}>
      <div className={styles.marquee}>
        {repeatedStacks.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </section>
  );
};

export default Marquee;
