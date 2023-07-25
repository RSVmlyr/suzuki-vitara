import { useMediaQuery } from 'react-responsive';

import imgParticipate from '../../../assets/images/bg/participate.png'
import './Participate.scss'

const Participate = () => {
  const isMobile = useMediaQuery({ minWidth: 768 });
  return (
    <div className="participate">
      <div className="participate--top">
        <h2 className="title">Participa y se uno de los ganadores</h2>
        <p className="description">Si deseas ser uno de los ganadores debes seguir los siguientes pasos</p>
      </div>
      <div className="participate--bottom">
        <div className="participate--bottom__left">
          <div className='card--number'>
            <div className='card--number__left'>
              <span className='number'>1</span>
            </div>
            <div className='card--number__right'>
              <h4 className='subtitle'>Compra</h4>
              <p className='description'>Compra tu Suzuki Vitara durante el periodo de la promoción.</p>
            </div>
          </div>
          <div className='card--number'>
            <div className='card--number__left'>
              <span className='number'>2</span>
            </div>
            <div className='card--number__right'>
              <h4 className='subtitle'>Registrate</h4>
              <p className='description'>Una vez te entreguen el vehículo, regístrate con tus datos y los del vehículo.</p>
            </div>
          </div>
          <div className='card--number'>
            <div className='card--number__left'>
              <span className='number'>3</span>
            </div>
            <div className='card--number__right'>
              <h4 className='subtitle'>Sube tu foto</h4>
              <p className='description'>Sube una foto creativa con tu Vitara.</p>
            </div>
          </div>
          <div className='card--number'>
            <div className='card--number__left'>
              <span className='number'>4</span>
            </div>
            <div className='card--number__right'>
              <h4 className='subtitle'>¡Participa!</h4>
              <p className='description'>Comparte el link de la foto con tus amigos para que voten por ti.</p>
            </div>
          </div>
          <div className='card--number__info'>
            <span className='description'>Si tu foto es una de las 15 más votadas y cumples los términos y condiciones de la promoción, serás uno de los ganadores</span>
          </div>
        </div>
        <div className="participate--bottom__right">
        {isMobile ? (
            <img src={imgParticipate} loading="lazy" alt='Suzuki Vitara' title='Suzuki Vitara'/>
          ) : (
            false
          )}
        </div>
      </div>
      
    </div>
  )
}

export default Participate