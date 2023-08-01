import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const AnchorLink = ({text, path, scrollWithOffset}) => {

  return (
    <Link to={path} onClick={ 
      scrollWithOffset
      }>
        {text}
    </Link>
  )
}
