import './Contact.css';

export const Contact = () => {
  const handleBtnMessage = (event) => {
    event.preventDefault();
    console.log('clicou');
  };

  return (
    <>
      <section className="contact-container" id="contact">
        <div className="contact-info">
          <h2>Entre em contato</h2>

          <div className="contact-item">
            <h3>Redes sociais</h3>
            <ul className="social-links">
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <form className="form-contact">
          <div className="form-top">
            <div className="input-top">
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome" />
            </div>

            <div className="input-top">
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

          <button className="btn-send-message" onClick={handleBtnMessage}>
            Enviar Mensagem
          </button>
        </form>
      </section>
    </>
  );
};
