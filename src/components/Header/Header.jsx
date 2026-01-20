import './Header.css';
import { useTheme } from '../../hooks/useTheme';

import logoPurple from '../../assets/images/prontus - purple no bg.png';
import logoWhite from '../../assets/images/prontus - white no bg.png';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const logo = theme === 'dark' ? logoWhite : logoPurple;

  return (
    <header className="header">
      <div className="container header__content">

        <img src={logo} alt="Prontus RH" className="header__logo" />

        <div className="header__actions">
          <nav className="header__nav">
            <a href="#how">Como funciona</a>
            <a href="#about">Sobre</a>
          </nav>
          
          <a href="#contact" className="btn-primary">
            Quero contratar agora
          </a>

          <button
            className={`theme-toggle ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <span className="toggle-track">
              <span className="toggle-thumb">
                {theme === 'dark' ? '🌙' : '☀️'}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
