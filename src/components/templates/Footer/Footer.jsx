import React from 'react'
import Logo from '../../atoms/Logo/Logo';

const contentFooter = [
  {
    "title": "Nuestros Vehículos",
    "links": [
      "Listos para la ciudad",
      "Listos para la aventura",
      "Comprometidos con el medio ambiente"
    ]
  },
  {
    "title": "Postventa",
    "links": [
      "Talleres Autorizados",
      "Campaña de seguridad",
      "Tecnología Suzuki"
    ]
  },
  {
    "title": "Sobre Derco",
    "links": [
      "Contáctanos",
      "Peticiones, quejas y reclamos"
    ]
  },

]
export const Footer = () => {

  const showContent = () => {
    
  }

  return (
    <footer className='footer'>
      <div className='footer--top'>
        <Logo />
      </div>
      <ul>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>

      </ul>
      
      {contentFooter.map(content => {
        console.log(content.title);
        return (
          <div className='footer--content' key={content.title}>
            <h4>{content.title}</h4>
            <ul>
              {content.links.map(link => {
                return <li key={link}>
                  <a href={"hol"}>{link}</a>
                </li>
              })}
            </ul>
          </div>
        )
      })}

      <div className='footer--bottom'>
        <ul className='bottom__paragraph'>
          <li>
            <a href="">Términos y Condiciones</a> <span>|</span>
            <a href="">Política de protección de datos</a> <span>|</span>
            <a href="">Política de Cookies</a>
          </li>
        </ul>
        <div className='copyright'>
          <p>© 2022. Todos los derechos reservados - Derco Colombia S.A.S, NIT: 900.327.290-9</p>
        </div>
      </div>
    

    </footer>
  )
}
