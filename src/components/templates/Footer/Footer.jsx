import React from 'react'
import Logo from '../../atoms/Logo/Logo';
import './Footer.scss';
import facebookIcon from '../../../assets/images/icon/facebook-icon.svg'
import instagramIcon from '../../../assets/images/icon/instagram-icon.svg'
import twitterIcon from '../../../assets/images/icon/twitter-icon.svg'
import youtubeIcon from '../../../assets/images/icon/youtube-icon.svg'
import { SocialMedia } from '../../organisms/SocialMedia/SocialMedia';

const socialMedias = [
  {
    title: "facebook",
    image: facebookIcon,    
    url: "https://www.facebook.com/SuzukiAutosColombia/"
  },
  {
    title: "instagram",
    image: instagramIcon,    
    url: "https://www.instagram.com/suzukiautoscol/"
  },
  {
    title: "twitter",
    image: twitterIcon,    
    url: "https://twitter.com/SUZUKIAUTOSCO"
  },
  {
    title: "youtube",
    image: youtubeIcon,    
    url: "https://www.youtube.com/suzukiautos"
  },

]

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

  return (
    <footer className='footer'>
      <div className='footer__content'>

        <div className='footer--top'>
          <Logo />
          <ul className='social'>
            {socialMedias.map(social => {
              return <SocialMedia imageData={social} key={social.title}/>
            })}
          </ul>
        </div>
        
        <div className='footer--bottom'>
          {contentFooter.map(content => {
            return (
              <div className='bottom--content' key={content.title}>
                <h4 className='bottom--content__title'>{content.title}</h4>
                <ul className='bottom--content__list'>
                  {content.links.map(link => {
                    return <li className='bottom--content__items' key={link}>
                      <a href={"hol"}>{link}</a>
                    </li>
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        <div className='footer--copyright'>
          <div className='copyright'>
          <ul className='copyright__paragraph'>
            <li className='copyright__items'>
              <a href="">Términos y Condiciones <span>|</span></a>
              <a href="">Política de protección de datos <span>|</span></a>
              <a href="">Política de Cookies</a>
            </li>
          </ul>
          <div className='footer--copyright__copyright'>
            <p>© 2022. Todos los derechos reservados - Derco Colombia S.A.S, NIT: 900.327.290-9</p>
          </div>

          </div>
        </div>
      </div>
    

    </footer>
  )
}
