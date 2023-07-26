import React from 'react';
import './Awards.scss';
import skateBoard from '../../assets/images/bg/skateBoard-award.png';

export const Awards = () => {
  return (
    <main>
      <div className='awards'>
        <div className='awards--top'>
          <div className='awards--top__award'>
              <h2>Minca 500w</h2>
              <div className='image'>
                <figure>
                  <img src={skateBoard} alt="" />
                </figure>
                <p>15 patinetas disponibles</p>
              </div>
          </div>
          <div className='awards--top__characteristics'>
            <ul>
              <li>
                <h4>Motor 500w</h4>
                <p>Brushless</p>
              </li>
              <li>
                <h4>Llantas</h4>
                <p>1'" Sellomatic</p>
              </li>
              <li>
                <h4>Velocidad Máxima</h4>
                <p>40 km/h</p>
              </li>
              <li>
                <h4>Frenos</h4>
                <p>Discos mecánicos</p>
              </li>
              <li>
                <h4>Plegado</h4>
                <p>Fácil</p>
              </li>
              <li>
                <h4>Peso máximo</h4>
                <p>100 kg</p>
              </li>
            </ul>
          </div>
          <div className='awards--top__characteristics'>
            <ul>
              <li>
                <h4>Bateria</h4>
                <p>Litio 48V/15AH</p>
              </li>
              <li>
                <h4>Autonomía</h4>
                <p>35 / 45 Km</p>
              </li>
              <li>
                <h4>Tiempo de carga</h4>
                <p>8 horas</p>
              </li>
              <li>
                <h4>Peso</h4>
                <p>22 kg</p>
              </li>
              <li>
                <h4>Doble</h4>
                <p>Suspensión</p>
              </li>
              <li>
                <h4>Luz</h4>
                <p>Direccionales</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
