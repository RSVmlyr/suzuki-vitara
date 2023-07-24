import './SliderHome.scss';
import sliderHome from '../../../assets/images/bg/slider-home.png';
import sliderHomeMobile from '../../../assets/images/bg/slider-home-mobile.png';
import { useMediaQuery } from 'react-responsive';

const SliderHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className='slider--home'>
      {isMobile ? (
        <img className='slider--home__img--mobile' src={sliderHomeMobile} loading="lazy" alt='Suzuki Vitara' title='Suzuki Vitara'/>
      ) : (
        <img className='slider--home__img' src={sliderHome} loading="lazy" alt='Suzuki Vitara' title='Suzuki Vitara'/>
      )}
    </div>
  )
}

export default SliderHome