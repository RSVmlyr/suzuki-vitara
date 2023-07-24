import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="header--nav">
        <ul className="header--nav__list">
          <li className="header--nav__item">
            <Link to="/">HOME</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/premios">PREMIOS</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/galeria">GALERIA</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/ranking">RANKING</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/faqs">FAQS</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/condiciones">CONDICIONES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
