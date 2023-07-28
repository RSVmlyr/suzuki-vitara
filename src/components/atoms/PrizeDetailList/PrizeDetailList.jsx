import React, { useState } from 'react'

const sort = (data, number) => {
    const result = data.filter((detail, i) => {
        if(i < 6 && number === 'one') {
            return detail
        }
        if(i >= 6 && number === 'two') {
            return detail
        }
    })

    return result;
}

export const PrizeDetailList = ({details, number}) => {

  return (
    <ul className='awards--top__list'>
        {sort(details, number).map((detail) => {
            return (
            <li className='awards--top__items' key={detail.name}>
                <h4>{detail.name}</h4>
                <p>{detail.detail}</p>
            </li>)
        })}
    </ul>
  )
}
