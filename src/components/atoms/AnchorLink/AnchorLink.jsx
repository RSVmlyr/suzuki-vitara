import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export const AnchorLink = ({text}) => {
  return (
    <Link to='/#form--inscription__container'>
        {text}
    </Link>
  )
}
