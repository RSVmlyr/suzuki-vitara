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
    title: 'facebook',
    image: facebookIcon,    
    url: 'https://www.facebook.com/SuzukiAutosColombia/'
  },
  {
    title: 'instagram',
    image: instagramIcon,    
    url: 'https://www.instagram.com/suzukiautoscol/'
  },
  {
    title: 'twitter',
    image: twitterIcon,    
    url: 'https://twitter.com/SUZUKIAUTOSCO'
  },
  {
    title: 'youtube',
    image: youtubeIcon,    
    url: 'https://www.youtube.com/suzukiautos'
  },

]

const contentFooter = [
  {
    'title': 'Nuestros Vehículos',
    'links': [
      {
        name:'Listos para la ciudad',
        url: 'hola'
      },
      {
        name:'Listos para la aventura',
        url: 'hola'
      },
      {
        name:'Comprometidos con el medio ambiente',
        url: 'hola'
        
      }
    ]
  },
  {
    'title': 'Postventa',
    'links': [
      {
        name: 'Talleres Autorizados',
        url: 'https://www.suzukiautos.com.co/talleres-autorizados',
      },
      {
        name: 'Campaña de seguridad',
        url: 'https://www.suzukiautos.com.co/info/campanas-de-seguridad',
      },
      {
        name: 'Tecnología Suzuki',
        url: 'https://www.suzukiautos.com.co/info/tecnologia-suzuki',
      },
    ]
  },
  {
    'title': 'Sobre Derco',
    'links': [
      {
        name: 'Contáctanos',
        url: 'https://www.suzukiautos.com.co/info/contacto',
      },
      {
        name: 'Peticiones, quejas y reclamos',
        url: 'https://www.suzukiautos.com.co/info/peticiones-quejas-y-reclamos',
      },
    ]
  },

]

const contentCopyright = [
  {
    name: 'Términos y Condiciones',
    url: 'https://www.suzukiautos.com.co/info/terminos-y-condiciones'
  },
  {
    name: 'Política de protección de datos',
    url: 'https://www.suzukiautos.com.co/info/politica-de-proteccion-de-datos'
  },
  {
    name: 'Política de Cookies',
    url: 'https://www.suzukiautos.com.co/info/Politica-de-cookies'
  }
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
                    return <li className='bottom--content__items' key={link.name}>
                      <a href={link.url}>{link.name}</a>
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
              {contentCopyright.map((content, i) => {
                return (
                  <a href={content.url} key={content.name}>
                    {content.name} {i != contentCopyright.length && <span>|</span>}</a>

                )
              })}
              {/* <a href=''>Términos y Condiciones <span>|</span></a>
              <a href=''>Política de protección de datos <span>|</span></a>
              <a href=''>Política de Cookies</a> */}
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
