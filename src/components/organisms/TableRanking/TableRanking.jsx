import React from 'react'
import './TableRanking.scss';

export const TableRanking = ({data}) => {
  return (

    <table className='board'>
    <thead className='board--head'>
      <tr className='board--head__row'>
        <th className='board--head__position'>Posición</th>
        <th className='board--head__name'>Nombre</th>
        <th className='board--head__vote'>Votos</th>
      </tr>
    </thead>
    
    <tbody className='board--body'>

        {data.map((datum, i) => {
            return (
                <tr className='board--body__row' key={datum.entity_id}>
                    <th className='board--body__position'>#{i + 1}</th>
                    <th className='board--body__name'>{datum.competitor_id}</th>
                    <th className='board--body__vote'>{datum.likes} <span>votos</span></th>
                </tr>
            )
        })}
    </tbody>
  </table>
  )
}
