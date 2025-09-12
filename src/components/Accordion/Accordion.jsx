import { useState } from 'react';
import styles from './Accordion.module.css';

const items = [
  {
    version: 'Versão 3.0',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, fuga eius repellendus quos non neque.',
  },
  {
    version: 'Versão 2.0',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, fuga eius repellendus quos non neque.',
  },
  {
    version: 'Versão 1.0',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, fuga eius repellendus quos non neque.',
  },
];

const Accordion = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <section className={styles.container}>
      <h2>Registro de alterações</h2>
      <p>
        Acompanhe a evolução do meu portfólio com atualizações e melhorias
        detalhadas.
      </p>
      <div className={styles.accordion}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`${styles.item} ${open === i ? styles.open : ''}`}
          >
            <button onClick={() => toggle(i)}>
              <span>{item.version}</span>
              <span>{open === i ? '-' : '+'}</span>
            </button>
            <div className={styles.content}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
