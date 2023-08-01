import React from 'react'
import './Ranking.scss'
    
import photo from '../../assets/images/bg/position-ranking.jpg';
import photo1 from '../../assets/images/bg/position-ranking2.jpg';
import photo2 from '../../assets/images/bg/position-ranking3.jpg';

import firtsStart from '../../assets/images/icon/Star-1.svg'
import secondStart from '../../assets/images/icon/Star-2.svg'
import thirdStart from '../../assets/images/icon/Star-3.svg'
// import photo1 from '../../assets/images/bg/position-ranking1.jpg';
// import photo2 from '../../assets/images/bg/position-ranking2.jpg';

// import photo from '../../assets/images/bg/skateBoard-award.png';
// import photo from '../../assets/images/bg/skateBoard-award.png';
// import photo from '../../assets/images/bg/skateBoard-award.png';

const data = [
  {
    id: 1,
    name: "Nombre aquí",
    votes: 1500,
    photo: photo,
    email: 'perdona@gmail.com'
  },
  {
    id: 2,
    name: "Nombre aquí",
    votes: 1400,
    // photo: '/src/assets/images/bg/position-ranking2.jpg',
    email: 'perdona@gmail.com'
  },
  {
    id: 3,
    name: "Nombre aquí",
    votes: 1300,
    // photo: '../../assets/images/bg/position-ranking3.jpg',
    email: 'perdona@gmail.com'
  },
  {
    id: 4,
    name: "Julián Esteban Betancourt Restrepo",
    votes: 1200,
    photo: '../../assets/images/bg/position-ranking3.jpg',
    email: 'perdona@gmail.com'
  }
]

export const Ranking = () => {
  return (
    <div className='ranking'>
      <div className='ranking--container'>
        <div className='ranking--container__title'>
          <h2 >Ranking</h2>
        </div>
        <div className='ranking--container__positions'>
          <div className='card card--first'>
            <div className='card--content'>
              <figure className='card--photo'>
                <img src={photo} alt="nombre aquí" />
                <img className='start' src={firtsStart} alt="first start" />
              </figure>
              <div className='card--position'>
                <div className='card--position__ranking'>
                  <p className='card--position__text'>Primer puesto</p>
                  <p className='card--position__votes'>1500 votos</p>
                </div>
                
                <h3 className='card--position__name'>Nombre aquí</h3>
                <figure className='start'>
                  <img src={firtsStart} alt="first start" />
                </figure>
              </div>
            </div>

          </div>

          <div className='card card--second'>
            <div className='card--content'>
              <figure className='card--photo'>
                <img src={photo1} alt="nombre aquí" />
                <img className='start' src={firtsStart} alt="first start" />
              </figure>
              <div className='card--position'>
              <div className='card--position__ranking'>
                  <p className='card--position__text'>Primer puesto</p>
                  <p className='card--position__votes'>1500 votos</p>
                </div>
                <h3 className='card--position__name'>Nombre aquí</h3>
                <figure className='start'>
                  <img src={secondStart} alt="first start" />
                </figure>
                
              </div>
            </div>

          </div>
          <div className='card card--third'>
            <div className='card--content'>
              <figure className='card--photo'>
                <img src={photo2} alt="nombre aquí" />
                <img className='start' src={firtsStart} alt="first start" />
              </figure>
              <div className='card--position'>
              <div className='card--position__ranking'>
                  <p className='card--position__text'>Primer puesto</p>
                  <p className='card--position__votes'>1500 votos</p>
                </div>
                <h3 className='card--position__name'>Nombre aquí</h3>
                <figure className='start'>
                  <img src={thirdStart} alt="first start" />
                </figure>
                
              </div>
            </div>

          </div>
          
        </div>

        <div className='ranking--container__board'>
          <table className='board'>
            <thead className='board--head'>
              <tr className='board--head__row'>
                <th className='board--head__position'>Posición</th>
                <th className='board--head__name'>Nombre</th>
                <th className='board--head__vote'>Votos</th>
              </tr>
            </thead>
            <tbody className='board--body'>
              <tr className='board--body__row'>
                <th className='board--body__position'>#1</th>
                <th className='board--body__name'>Julián Esteban Betancourt Restrepo</th>
                <th className='board--body__vote'>1500 <span>votos</span></th>
              </tr>
              <tr className='board--body__row'>
                <th className='board--body__position'>#1</th>
                <th className='board--body__name'>Julián Esteban Betancourt Restrepo</th>
                <th className='board--body__vote'>1500 <span>votos</span></th>
              </tr>
              <tr className='board--body__row'>
                <th className='board--body__position'>#1</th>
                <th className='board--body__name'>Julián Esteban Betancourt Restrepo</th>
                <th className='board--body__vote'>1500 <span>votos</span></th>
              </tr>
              <tr className='board--body__row'>
                <th className='board--body__position'>#1</th>
                <th className='board--body__name'>Julián Esteban Betancourt Restrepo</th>
                <th className='board--body__vote'>1500 <span>votos</span></th>
              </tr>
              <tr className='board--body__row'>
                <th className='board--body__position'>#1</th>
                <th className='board--body__name'>Julián Esteban Betancourt Restrepo</th>
                <th className='board--body__vote'>1500 <span>votos</span></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
