import React, { useEffect, useState } from 'react'
import CardGallery from '../../components/atoms/CardGallery/CardGallery'
import './Galery.scss';
import { useGalery } from '../../hooks/getGalery';


export const Galery = () => {

  const {galery, setGalery} = useGalery();

  return (
    <main>
      <div className='gallery'>
        <div className='gallery--container'>
          <h1 className='title'>Galeria</h1>
          <div className='gallery--list'>
            {
              galery.map(photo => {
                return <CardGallery data={photo} key={photo.id}/>
              })
            }
          </div>
        </div>
      </div>
    </main>
  )
}
