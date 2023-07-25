import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../../atoms/Logo/Logo";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="header--nav">
        <ul className="header--nav__list">
          <li className="header--nav__item">
            <Link to="/">HOME</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/premios">PREMIOS</Link>
          </li>
          <li className="header--nav__item">
            <Link to="/galeria">GALERÍA</Link>
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
