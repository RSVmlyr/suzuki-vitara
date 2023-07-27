import React from 'react'
import CardGallery from '../../components/atoms/CardGallery/CardGallery'
import './Galery.scss'

export const Galery = () => {
  return (
    <main>
      <div className='gallery'>
        <div className='gallery--container'>
          <h1 className='title'>Galeria</h1>
          <div className='gallery--list'>
            <CardGallery />
          </div>
        </div>
      </div>
    </main>
  )
}
