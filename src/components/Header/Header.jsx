import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header-bg">
        <div className="header">
          <h2>Logo</h2>
          <nav>
            <ul className="nav-bar">
              <li>Sobre</li>
              <li>Formação</li>
              <li>Serviços</li>
              <li>Experiência</li>
              <li>Tecnologias</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
