import { useState } from 'react';
import styles from './Accordion.module.css';

const items = [
  {
    version: 'Versão 2.0',
    date: '11 de Set de 2025',
    description:
      'Versão inicial do projeto, com apresentação de portfólio, currículo e habilidades técnicas. Desenvolvido com HTML, CSS e JavaScript. Responsivo e interativo.',
  },
  {
    version: 'Versão 1.0',
    date: '5 de Jun de 2025',
    description:
      'Versão inicial do projeto, com apresentação de portfólio, currículo e habilidades técnicas. Desenvolvido com HTML, CSS e JavaScript. Responsivo e interativo.',
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
              <div className={styles.itemHeader}>
                <h3>{item.version}</h3>
                <span>{item.date}</span>
              </div>
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
