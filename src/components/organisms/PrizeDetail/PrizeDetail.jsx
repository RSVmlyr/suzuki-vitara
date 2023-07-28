import React from 'react'
import { PrizeDetailList } from '../../atoms/PrizeDetailList/PrizeDetailList'

export const PrizeDetail = ({data}) => {
  return (
    <>
        <div className='awards--top__info title'>
            <figure className='awards--top__image'>
                <img src={data.name} alt="" />
            </figure>
        </div>
        <div className='awards--top__info skateboard'>
            <figure className='awards--top__image '>
                <img src={data.image} alt="" />
            </figure>
            <p>{data.availability} disponibles</p>
        </div>
        <div className='awards--top__subtitle'>
            <h3>Caracteristicas</h3>
        </div>
        
        <div className={`awards--top__info info--one`}>
            <PrizeDetailList details={data.details} number={'one'}/>
        </div>
        
        <div className={`awards--top__info info--two`}>
            <PrizeDetailList details={data.details} number={'two'}/>
        </div>
    </>
  )
}
