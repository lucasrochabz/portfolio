import styles from './Tools.module.css';

const tools = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Node.js',
  'Express.js',
  'MySQL',
];

export const Tools = () => {
  const toolsList = tools.concat(tools);

  return (
    <section className={styles.tools}>
      <div className={styles.marquee}>
        {toolsList.map((item, index) => (
          <h2 key={index}>{item}</h2>
        ))}
      </div>
    </section>
  );
};
