import React, { useEffect, useRef } from 'react'
import Flickity from 'react-flickity-component'
import "flickity/css/flickity.css";
import './SliderImages.scss';

import photo from '../../../assets/images/bg/skateboard-complete.jpg'


const options = {
  // wrapAround: true,
  pageDots: false,
  cellAlign: 'left',
  // groupCells: 2
}

export const SliderImages = () => {


  return (
    <Flickity className='sliderImages' options={options}>
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
        <img src={photo} alt="" />
      {/* <figure>
      </figure>
      <figure>
      </figure>
      <figure>
      </figure>
      <figure>
      </figure>
      <figure>
      </figure> */}
    </Flickity>
  )
}
