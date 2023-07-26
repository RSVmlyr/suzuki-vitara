import React from 'react'
import CardGallery from '../../components/atoms/CardGallery/CardGallery'

export const Galery = () => {
  return (
    <div className='gallery'>
      <div className='gallery__container'>
        <h1 className='title'>Galeria</h1>
        <div className='gallery__list'>
          <CardGallery />
        </div>
      </div>
    </div>
  )
}
