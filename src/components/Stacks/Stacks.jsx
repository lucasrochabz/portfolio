import styles from './Stacks.module.css';

const stacks = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
];

const Stacks = () => {
  const stacksList = stacks.concat(stacks);

  return (
    <section className={styles.stacks}>
      <div className={styles.marquee}>
        {stacksList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </section>
  );
};

export default Stacks;
