import React, { useEffect, useRef } from 'react'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import './SliderImages.scss';

import photo1 from '../../../assets/images/bg/skateboard-complete.jpg'
import photo2 from '../../../assets/images/bg/skateboard-tires.jpg'
import photo3 from '../../../assets/images/bg/skateboard-structure.jpg'
import photo4 from '../../../assets/images/bg/skateboard-back.jpg'
import photo5 from '../../../assets/images/bg/skateboard-compact.jpg'

const images = [
  photo1, photo2, photo3, photo4, photo5, 
]

const options = {
  pageDots: false,
  cellAlign: 'left',
}

export const SliderImages = () => {
  return (
    <Flickity className='sliderImages' options={options}>
      {images.map(image => {
        return (
          <img src={image} alt="" />
        )
      })}
    </Flickity>
  )
}