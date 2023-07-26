import React from 'react'
import './SocialMedia.scss'

export const SocialMedia = ({imageData}) => {   
    return (
        <li className='social__items' key={imageData.title}>
            <a className='social__items--media' href={imageData.url} target='_blank'>
                <img src={imageData.image} alt={`${imageData.title} icon`} />
            </a>
        </li>
    )
}
