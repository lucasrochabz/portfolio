import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import styles from './Contact.module.css';

export const Contact = () => {
  const handleBtnMessage = (event) => {
    event.preventDefault();
    console.log('clicou');
  };

  return (
    <>
      <section className={styles['contact-container']} id="contact">
        <div className={styles['contact-info']}>
          <h2>Entre em contato</h2>

          <div className={styles['contact-item']}>
            <h3>Redes sociais</h3>
            <ul className={styles['social-links']}>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucas-bezerra-rocha"
                  target="blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/lucasrochabz" target="blank">
                  GitHub
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/lucasrochabz" target="blank">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className={styles['form-contact']} onSubmit={handleBtnMessage}>
          <div className={styles['form-top']}>
            <Input label="Nome" type="text" id="name" placeholder="Seu nome" />

            <Input
              label="Telefone"
              type="text"
              id="phone"
              placeholder="(85) 9.9999-9999"
            />
          </div>

          <Input
            label="E-mail"
            type="text"
            id="email"
            placeholder="contato@email.com"
          />

          <label htmlFor="message">Mensagem</label>
          <textarea
            className={styles.textarea}
            name="message"
            id="message"
            placeholder="O que você precisa?"
          ></textarea>

          <Button>Enviar mensagem</Button>
        </form>
      </section>
    </>
  );
};
