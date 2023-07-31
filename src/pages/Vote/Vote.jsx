import React from 'react'
import FormVote from '../../components/molecules/ForrmVote/ForrmVote'
import imgVote from '../../assets/images/bg/img-vote.jpeg'

export const Vote = () => {
  return (
    <div className='vote'>
      <div className='vote--container'>
        <div className='vote--left'>
          <figure className='vote--image'>
            <img
                className="vote--image__file"
                src={imgVote}
                loading="lazy"
                alt="Suzuki Vitara"
                title="Suzuki Vitara"
              />
          </figure>
        </div>
        <div className='vote--right'>
           <div className='vote--count'>
             <span className='vote--count__number'>10.1k</span>
             <span className='vote--count__namer'>Nombre here</span>
           </div>
          <FormVote />
        </div>
      </div>
    </div>
  )
}

export default Vote
