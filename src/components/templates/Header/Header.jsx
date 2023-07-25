import './Header.scss';
import Logo from '../../atoms/Logo/Logo';
import BurguerIcon from '../../../assets/images/icon/menu-burguer.svg';
import CloseIcon from '../../../assets/images/icon/close-icon.svg';
import { useEffect, useState } from 'react';
import { NavBar } from '../../organisms/Navbar/NavBar';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  const [burguer, setBurguer] = useState(true);
  const isMobile = useMediaQuery({ minWidth: 1024 });

  const handleClick = () => {
    setBurguer(!burguer)
  }

  return (
    <header className="header">
      <div className="header--top">
        <Logo />
        {!isMobile ? <button className={burguer ? 'burguer-icon' : "burguer-icon close"} onClick={handleClick}>
        </button> : false}
        
      </div>
        {!isMobile ? <NavBar isMobile={burguer} />: <NavBar isMobile={!isMobile} />}
      {/* {!burguer ? <NavBar /> : false}
      {isMobile ? <NavBar className={!burguer ? "dissable": "header--nav"}/> : false} */}
    </header>
  );
};

export default Header;
