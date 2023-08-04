import React, { useEffect, useState } from 'react'
import CardGallery from '../../components/atoms/CardGallery/CardGallery'
import './Galery.scss';
import { useGalery } from '../../hooks/getGalery';
import { MessageError } from '../../components/molecules/MessageError/MessageError';


export const Galery = () => {

  const {galery, setGalery, error, setError} = useGalery();
  return (
    <main>
      <div className='gallery'>
        <div className='gallery--container'>
          <h1 className='title'>Galeria</h1>
          <div className='gallery--list'>
            { error && galery.length == 0 && 
                (<MessageError redirect={false} />)  
              }

            { !error && galery.length > 0 &&
            galery.map(photo => {
              return <CardGallery data={photo} key={photo.id}/>
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
