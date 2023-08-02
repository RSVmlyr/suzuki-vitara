import React, { useEffect, useState } from 'react'
import './Ranking.scss'
    

import { useGetRanking } from '../../hooks/useGetRanking';
import { TableRanking } from '../../components/organisms/TableRanking/TableRanking';
import rankingPosition from '../../helpers/rankingPosition';
import { CardRanking } from '../../components/organisms/CardRanking/CardRanking';
import orderRanking from '../../helpers/orderRanking';

export const Ranking = () => {

  const {ranking, setRanking} = useGetRanking();


  return (
    <div className='ranking'>
      <div className='ranking--container'>
        <div className='ranking--container__title'>
          <h2 >Ranking</h2>
        </div>
        <div className='ranking--container__positions'>
          <CardRanking data={orderRanking(ranking)}/>
        </div>
        
        <div className='ranking--container__board'>
          <TableRanking data={orderRanking(ranking)}/>
        </div>
      </div>
    </div>
  )
}
