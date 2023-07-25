import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = ({isMobile}) => {
  return (
    <nav  className={isMobile ? "dissable": "header--nav"}>
        <ul className="header--nav__list">
          <li className="header--nav__item">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="header--nav__item">
            <NavLink 
              to="/premios"
              className={({ isActive }) => isActive ? "active": "navbar__menu"}
            >PREMIOS</NavLink>
          </li>
          <li className="header--nav__item">
            <NavLink 
              to="/galeria"
              className={({ isActive }) => isActive ? "active": "navbar__menu"}
            >GALERÍA</NavLink>
          </li>
          <li className="header--nav__item">
            <NavLink 
              to="/ranking"
              className={({ isActive }) => isActive ? "active": "navbar__menu"}
            >RANKING</NavLink>
          </li>
          <li className="header--nav__item">
            <NavLink 
              to="/faqs"
              className={({ isActive }) => isActive ? "active": "navbar__menu"}
            >FAQS</NavLink>
          </li>
          <li className="header--nav__item">
            <NavLink 
              to="/condiciones"
              className={({ isActive }) => isActive ? "active": "navbar__menu"}
            >CONDICIONES</NavLink>
          </li>
        </ul>
      </nav> 
  )
}
