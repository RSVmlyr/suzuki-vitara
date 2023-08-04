import React, { useEffect, useState } from 'react'
import './Ranking.scss'
    

import { useGetRanking } from '../../hooks/useGetRanking';
import { TableRanking } from '../../components/organisms/TableRanking/TableRanking';
import rankingPosition from '../../helpers/rankingPosition';
import { CardRanking } from '../../components/organisms/CardRanking/CardRanking';
import orderRanking from '../../helpers/orderRanking';
import { MessageError } from '../../components/molecules/MessageError/MessageError';

export const Ranking = () => {

  const {ranking, setRanking, error, setError} = useGetRanking();

  return (
    <div className='ranking'>
      <div className='ranking--container'>
        <div className='ranking--container__title'>
          <h2 >Ranking</h2>
        </div>
        <div className='ranking--container__positions'>
          {!error && ranking.length > 0 && (<CardRanking data={orderRanking(ranking)}/>)}
          { error && ranking.length == 0 && <MessageError />}
        </div>
        
        <div className='ranking--container__board'>
          <TableRanking data={orderRanking(ranking)}/>
        </div>
      </div>
    </div>
  )
}
