import React from 'react'
import rankingPosition from '../../../helpers/rankingPosition';

import './CardRanking.scss';

import photo from '../../../assets/images/icon/goldMedal.png';
import photo1 from '../../../assets/images/icon/silverMedal.png';
import photo2 from '../../../assets/images/icon/bronzeMedal.png';
import firtsStar from '../../../assets/images/icon/Star-1.svg'
import secondStar from '../../../assets/images/icon/Star-2.svg'
import thirdStar from '../../../assets/images/icon/Star-3.svg'
import defaultStar from '../../../assets/images/icon/Star-default.svg'

const classCardPosition = (i) => {
    let result = 'cardRanking--'
    if(i === 0) {
        result += 'first';
    } else if(i === 1) {
        result += 'second'
    } else {
        result += 'third'
    }

    return result;
}

const namePosition = (i) => {
    let result = ''
    if(i === 0) {
        result = 'Primer puesto';
    } else if(i === 1) {
        result = 'Segundo puesto'
    } else {
        result = 'Tercer puesto'
    }

    return result;
}

const imagePosition = (i) => {
    let result = '';
    if(i === 0){
        result = photo;
    }
    else if(i === 1){
        result = photo1;
    }
    else {
        result = photo2
    }

    return result;
}

const imageStart = (i) => {
    let result = '';
    if(i === 0){
        result = firtsStar;
    }
    else if(i === 1){
        result = secondStar;
    }
    else {
        result = thirdStar
    }

    return result;
}

export const CardRanking = ({data}) => {

  return (
    <>
        {rankingPosition(data).map((datum, i)=> {
            return (
                <div className={`cardRanking ${classCardPosition(i)}`} key={datum.entity_id}>
                    <div className='cardRanking--content'>
                        <figure className='cardRanking--photo'>
                            <img src={imagePosition(i)} alt={datum.competitor_id} />
                            <img className='start' src={defaultStar} alt="star icon" />
                        </figure>
                        <div className='cardRanking--position'>
                            <div className='cardRanking--position__ranking'>
                                <p className='cardRanking--position__text'>{namePosition(i)}</p>
                                <p className='cardRanking--position__votes'>{datum.likes} votos</p>
                            </div>
                            
                            <h3 className='cardRanking--position__name'>{datum.competitor_id}</h3>
                            <figure className='start'>
                                <img src={imageStart(i)} alt="first start" />
                            </figure>
                        </div>
                    </div>
                </div>
            )
        })}

    </>
  )
}
