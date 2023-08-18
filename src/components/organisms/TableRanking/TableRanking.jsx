import React from 'react'
import './TableRanking.scss';
import { Link } from 'react-router-dom';
import filterName from '../../../helpers/clearNameVote';

export const TableRanking = ({data}) => {

  const scrollWithOffset = () => {
    window.scrollTo({top: 0});
    setBurguer(true);
  }
  return (

    <table className='board'>
    <thead className='board--head'>
      <tr className='board--head__row'>
        <th className='board--head__position'>Posición</th>
        <th className='board--head__name'>Nombre</th>
        <th className='board--head__image'>Imagen</th>
        <th className='board--head__vote'>Votos</th>
      </tr>
    </thead>
    
    <tbody className='board--body'>

        {data.map((datum, i) => {
            return (
                <tr className='board--body__row' key={datum.entity_id}>
                    <th className='board--body__position'>#{i + 1}</th>
                    <th className='board--body__name'>{filterName(datum.competitor_id)}</th>
                    <th className='board--body__image'>
                      <Link 
                        className="vote--card" 
                        to={`/votar/${datum.entity_id}`}
                        onClick={scrollWithOffset}
                      >
                        <img src={datum.name_file} alt={datum.competitor_id + " foto"} />
                      </Link>
                    </th>
                    <th className='board--body__vote'>{datum.likes} <span>votos</span></th>
                </tr>
            )
        })}
    </tbody>
  </table>
  )
}
