import React from 'react';
import './Awards.scss';
import skateBoard from '../../assets/images/bg/skateBoard-award.png';
import skateBoardName from '../../assets/images/bg/skateBoard-name.svg';

export const Awards = () => {
  return (
      <div className='awards'>
        <div className='awards--top'>
          <div className='awards--top__info title'>
              <figure className='awards--top__image'>
                <img src={skateBoardName} alt="" />
              </figure>
          </div>
          <div className='awards--top__info skateboard'>
            <figure className='awards--top__image '>
              <img src={skateBoard} alt="" />
            </figure>
            <p>15 patinetas disponibles</p>
          </div>

          <div className='awards--top__subtitle'>
            <h3>Caracteristicas</h3>
          </div>

          <div className='awards--top__info info--one'>
            <ul className='awards--top__list'>
              <li className='awards--top__items'>
                <h4>Motor 500w</h4>
                <p>Brushless</p>
              </li>
              <li className='awards--top__items'>
                <h4>Llantas</h4>
                <p>1'" Sellomatic</p>
              </li>
              <li className='awards--top__items'>
                <h4>Velocidad Máxima</h4>
                <p>40 km/h</p>
              </li>
              <li className='awards--top__items'>
                <h4>Frenos</h4>
                <p>Discos mecánicos</p>
              </li>
              <li className='awards--top__items'>
                <h4>Plegado</h4>
                <p>Fácil</p>
              </li>
              <li className='awards--top__items'>
                <h4>Peso máximo</h4>
                <p>100 kg</p>
              </li>
            </ul>
          </div>
          <div className='awards--top__info info--two'>
            <ul className='awards--top__list'>
              <li className='awards--top__items'>
                <h4>Bateria</h4>
                <p>Litio 48V/15AH</p>
              </li>
              <li className='awards--top__items'>
                <h4>Autonomía</h4>
                <p>35 / 45 Km</p>
              </li>
              <li className='awards--top__items'>
                <h4>Tiempo de carga</h4>
                <p>8 horas</p>
              </li>
              <li className='awards--top__items'>
                <h4>Peso</h4>
                <p>22 kg</p>
              </li>
              <li className='awards--top__items'>
                <h4>Doble</h4>
                <p>Suspensión</p>
              </li>
              <li className='awards--top__items'>
                <h4>Luz</h4>
                <p>Direccionales</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
