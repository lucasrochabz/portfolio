import './Header.css';

export const Header = () => {
  return (
    <>
      <header className="header-bg">
        <div className="header">
          <h2>Logo</h2>
          <nav>
            <ul className="nav-bar">
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
