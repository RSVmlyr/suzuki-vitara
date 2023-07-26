import { Link } from 'react-router-dom';
import imgTerms from '../../assets/images/bg/terms.jpeg'
import './Terms.scss'

const Terms = () => {
  return (
    <div className="terms">
      <div className="terms--container">
        <div className="terms--container__left">
          <h1 className="title">Términos y condiciones</h1>
          <p className="description">Válido del 1 de agosto al 30 de septiembre de 2023, o hasta agotar existencias, lo que primero ocurra. (1) Nuevo equipamiento incluye: estribos laterales, barras de techo y bombillos led. (2) Descuento aplica sobre precio de venta de lista sugerido al público (PVSP) para Suzuki Vitara modelo 2024. Aplica para vehículos facturados a cliente final del 1 de agosto al 30 de septiembre y entregados a cliente final hasta el 31 de octubre de 2023 en la red de concesionarios autorizada a nivel nacional. Aplica para vehículos financiados a través de Banco de Occidente, BBVA, Banco de Bogotá y Finandina, si el trámite de la financiación es realizado a través del punto de venta o concesionario autorizado. Para vehículos financiados con otras entidades financieras aplica descuento de $8.000.000. (3) Consulta la dinámica para participar en el concurso de las 15 patinetas eléctricas marca Minca y la totalidad de los términos y condiciones de la promoción en <Link to="/">www.estrenavitara.com.co</Link>.  Tras el cierre de publicación pueden haberse producido cambios en el equipamiento, precio y /o diseño que sugerimos verificar en la red de concesionarios autorizada al momento de realizar el pedido y/o firmar contrato de compraventa. Esta oferta no es acumulable, canjeable ni transferible con otras ofertas y/o promociones de la marca. Cualquier irregularidad por favor no dude en reportarla haciendo uso de los mecanismos institucionales de peticiones quejas y reclamos de la red de concesionarios autorizada y/o de Derco Colombia S.A.S. Mayor información en <Link to="https://www.suzukiautos.com.co/" target="_blank" rel="noopener noreferrer">www.suzukiautos.com.co</Link></p>
        </div>
        <div className="terms--container__right">
        <img
          className="terms__img"
          src={imgTerms}
          loading="lazy"
          alt="Términos y condiciones"
          title="Términos y condiciones"
        />
        </div>
      </div>
    </div>
  )
}

export default Terms