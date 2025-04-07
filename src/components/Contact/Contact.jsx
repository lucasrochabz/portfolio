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

        <form className={styles['form-contact']}>
          <div className={styles['form-top']}>
            <div className={styles['input-top']}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome" />
            </div>

            <div className={styles['input-top']}>
              <label htmlFor="phone">Telefone</label>
              <input type="text" id="phone" placeholder="(85) 99999-9999" />
            </div>
          </div>

          <label htmlFor="email">Email</label>
          <input type="text" id="email" placeholder="contato@email.com" />

          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            placeholder="O que você precisa?"
          ></textarea>

          <button
            className={styles['btn-send-message']}
            onClick={handleBtnMessage}
          >
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
};
