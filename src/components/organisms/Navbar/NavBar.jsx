import React from 'react'
import { NavLink } from 'react-router-dom';
import { AnchorLink } from '../../atoms/AnchorLink/AnchorLink';

const linkNavbar = [
  {
    name: "HOME",
    path: "/",
  },
  {
    name: "REGISTRATE",
    path: "/hola",
    anchor: true
  },
  {

    name: "PREMIOS",
    path: "/premios",
  },
  // {
  //   name: "GALERÍA",
  //   path: "/galeria",
  // },
  // {
  //   name: "RANKING",
  //   path: "/ranking",
  // },
  {
    name: "FAQS",
    path: "/faqs",
  },
  {
    name: "CONDICIONES",
    path: "/condiciones",
  }
]


export const NavBar = ({isMobile, setBurguer}) => {
  return (
    <nav  className={isMobile ? 'dissable': 'header--nav'}>
        <ul className='header--nav__list'>
          {linkNavbar.map(link => {
            return (
            <li className='header--nav__item' key={link.name}>
              {!link.anchor ? 
                <NavLink to={link.path} 
                  className={({ isActive }) => isActive ? 'active' : 'navbar__menu'}
                  onClick={() => setBurguer(true)}>
                    {link.name}
                </NavLink>
                :
                <AnchorLink text={link.name} onClick={() => setBurguer(true)}/> 
               }
              
            </li>)
          })}
        </ul>
      </nav> 
  )
}
