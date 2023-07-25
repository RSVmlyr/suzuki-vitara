import imgPageNotFound from '../../assets/images/bg/bg-404.png'

import './404.scss'

const PageNotFound = () => {
  return (
    <div className="page-notfound">
      <img className="img-404" src={imgPageNotFound} loading="lazy" alt="Ha ocurrido un error" title="Ha ocurrido un error"/>
      <h1 className='title'>Ha ocurrido un error</h1>
      <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <button className='btn__trans'>Ir al Home</button>
    </div>
  )
}

export default PageNotFound