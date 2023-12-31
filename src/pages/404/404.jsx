import { NavLink } from 'react-router-dom'
import imgPageNotFound from '../../assets/images/bg/bg-404.png'

import './404.scss'

const PageNotFound = () => {
  return (
    <main>
      <div className="page-notfound">
        <img className="img-404" src={imgPageNotFound} loading="lazy" alt="Ha ocurrido un error" title="Ha ocurrido un error"/>
        <h1 className='title'>Ha ocurrido un error</h1>
        <NavLink to="/" className='btn__trans'>Ir al Home</NavLink>
      </div>
    </main>
  )
}

export default PageNotFound