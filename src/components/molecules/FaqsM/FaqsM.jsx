import React, { useState } from 'react';
import './FaqsM.scss'; // Estilos del acordeón (puedes crear tu propio archivo CSS)

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleItemClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion__section">
      <button
        className={`accordion__title ${isOpen ? 'active' : ''}`}
        onClick={handleItemClick}
      >
        {title}
      </button>
      {isOpen && (
        <div className="accordion__content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

const FaqsM = () => {
  const faqsData = [
    {
      title: '¿Cuál es la vigencia de la promoción?',
      content: '<p>Del 1 de agosto al 30 de septiembre de 2023.</p>',
    },
    {
      title: '¿Cuál es la cobertura de la promoción?',
      content: '<p>La cobertura de la promoción es a nivel Nacional; sin embargo, la participación y por ende la entrega de los premios, estará delimitada a los puntos de venta y concesionarios autorizados de Suzuki Autos. Consúltalos en <a href="https://www.suzukiautos.com.co/concesionarios" target="_blank" >https://www.suzukiautos.com.co/concesionarios</a></p>',
    },
    {
      title: '¿Cuál es el nuevo equipamiento de la Suzuki Vitara Total?',
      content: '<p>La Suzuki Vitara Total está equipada con estribos laterales, molduras, barras de techo y bombillos led.</p>',
    },
    {
      title: '¿Todas las versiones de la Suzuki Vitara aplican a la promoción?',
      content: '<p>Si, aplica la Suzuki Vitara 4x2 y 4x4 modelo 2023 y 2024.</p>',
    },
    {
      title: '¿Cuál es el descuento de la Suzuki Vitara Total y por cuánto tiempo aplica?',
      content: '<p>El descuento de $10.000.000 aplica sobre el precio de venta de lista sugerido al público (PVSP) para Suzuki Vitara modelo 2023 y 2024. Aplica para vehículos facturados a cliente final del 1 de agosto al 30 de septiembre 2023 y entregados a cliente final hasta el 31 de octubre de 2023 en la red de concesionarios autorizada a nivel nacional. Aplica para vehículos financiados a través de: Banco de Occidente, BBVA, Banco de Bogotá y Finandina, si el trámite de la financiación es realizado a través del punto de venta o concesionario autorizado. Para vehículos financiados con otras entidades financieras aplica descuento de $8.000.000.</p>',
    },
    {
      title: 'Si compré una Suzuki Vitara y me quedó facturada en julio, ¿puedo participar en la promoción?',
      content: '<p>No, la promoción aplica únicamente para vehículos facturados a cliente final del 1 de agosto al 30 de septiembre de 2023 y entregados a cliente final hasta el 31 de octubre de 2023 en la red de concesionarios autorizada a nivel nacional.</p>',
    },
    {
      title: '¿Cuáles son los requisitos para participar en el concurso de las patinetas eléctricas?',
      content: '<ul><li>Ser persona natural</li><li>Ser mayor de edad</li><li>Ser ciudadano Colombiano</li><li>Encontrarse en el territorio Colombiano</li><li>Comprar una Suzuki Vitara del 1 de agosto al 30 de septiembre de 2023, cuyo vehículo debe quedar facturado a su nombre dentro del mismo periodo (1 de agosto al 30 de septiembre de 2023) y le debe ser entregado a más tardar el 31 de octubre de 2023 en la red de concesionarios autorizada a nivel nacional.</li><li>No estar vinculado laboralmente a Derco Colombia S.A.S o a las sociedades del Grupo Inchcape en Colombia.</li><li>Cumplir los términos y condiciones de la promoción.</li></ul>',
    },
    {
      title: '¿Cuál es la fecha límite para registrarme y participar en el concurso de patinetas eléctricas?',
      content: '<p>La fecha límite para que los participantes se registren en el concurso de patinetas eléctricas, es hasta el 31 de octubre de 2023.</p>',
    },
    {
      title: '¿Cuáles son los requisitos para que las fotos sean aptas para la participación en el concurso?',
      content: '<ul><li>La fotografía debe incluir la Suzuki Vitara comprada por el participante durante el periodo de la promoción.</li><li>El contenido de la fotografía debe ser adecuado para una audiencia pública general. No debe contener violencia, sexo, ataques a personas u organizaciones y no debe ser ofensivo u obsceno. Cualquier fotografía cuyo contenido no cumpla con el presente numeral, no será aprobada por Derco Colombia S.A.S y por ende, no será publicada en <a href="https://www.estrenavitara.com.co" target="_blank">www.estrenavitara.com.co</a> y no participará en el concurso.</li><li>La foto debe ser una creación original, no es posible utilizar imágenes con derechos de autor. Al cargar la foto, el participante certifica y garantiza que esta no viola los derechos de un tercero o cualquier derecho de autor. Derco Colombia S.A.S ni las sociedades del Grupo Inchcape en Colombia, son responsables de las violaciones a la propiedad intelectual que se puedan derivar de las fotografías cargadas por los participantes en la página <a href="https://www.estrenavitara.com.co" target="_blank">www.estrenavitara.com.co</a></li><li>Al cargar la foto, el participante concede gratuitamente a Derco Colombia S.A.S el derecho a utilizar la foto en cualquier medio, incluyendo, sin limitación, el derecho a publicar, adaptar, distribuir, copiar en medios impresos o electrónicos, incluso si el participante no resulta ser uno de los ganadores.</li><li>Al cargar la foto, el participante certifica y garantiza que cuenta con el consentimiento y autorización de las personas que aparecen en la fotografía. En el caso de menores de edad, la autorización deberá ser otorgada por los padres o tutores legales del menor al participante.</li><li>La fotografía no debe contener nombres, marcas comerciales o logotipos.</li><li style="color:rgb(255 122 122)">La fotografía debe estar en formato PNG o JPG y no debe pesar más de 2MB.</li></ul>',
    },
    {
      title: '¿Cuántas patinetas eléctricas serán entregadas y cuál es la referencia?',
      content: '<p>15 patinetas eléctricas marca Minca - Referencia Minca 500W.</p>',
    },
    {
      title: '¿Cómo son elegidos los 15 ganadores del concurso?',
      content: '<p>Las fotos de los participantes estarán publicadas en la página <a href="https://www.estrenavitara.com.co" target="_blank">www.estrenavitara.com.co</a>  para que el público en general vote por la foto más creativa. Únicamente serán validos los votos de personas que ingresen en el formulario su nombre completo, cédula, celular, correo electrónico y ciudad y que sean recibidos desde dispositivos con IP en Colombia. Cada persona podrá votar una única vez.<br/> Una vez finalizado el periodo de votación (7 de noviembre de 2023), Derco Colombia S.A.S validará cuáles son los 25 participantes con la mayor cantidad de votos y que cumplen los términos y condiciones de la promoción. Los 15 primeros serán los posibles ganadores principales y los últimos 10 serán los posibles ganadores suplentes.<br/> En caso de no ser posible el contacto con los posibles ganadores principales y si estos no reclaman el premio en el tiempo estipulado en los términos y condiciones, Derco Colombia S.A.S se comunicará con los posibles ganadores suplentes.</p>',
    },
    {
      title: '¿Cómo se si he sido uno de los ganadores?',
      content: '<p>Los posibles ganadores principales y suplentes serán publicados en la página <a href="https://www.estrenavitara.com.co" target="_blank">www.estrenavitara.com.co</a> y en las redes sociales oficiales de Suzuki Autos Colombia entre el 8 y el 14 de noviembre de 2023.</p><ul><li><b>Cuenta oficial de Instagram:</b> @Suzukiautoscol - <a href="https://www.instagram.com/suzukiautoscol/?hl=es-la" target="_blank">https://www.instagram.com/suzukiautoscol/?hl=es-la</a></li><li><b>Cuenta oficial de Facebook:</b> Suzuki Autos Colombia - <a href="https://www.facebook.com/SuzukiAutosColombia/?locale=es_LA" target="_blank">https://www.facebook.com/SuzukiAutosColombia/?locale=es_LA</a></li></ul><p>Adicionalmente, Derco Colombia S.A.S se pondrá en contacto con los posibles ganadores principales entre el 10 y el 17 de noviembre de 2023.</p>',
    }
  ];

  return (
      <div className="faqs">
        <div className="faqs--container">
        <h1 className="title">Preguntas frecuentes</h1>
          {faqsData.map((faq, index) => (
            <AccordionItem key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
  );
};

export default FaqsM;
