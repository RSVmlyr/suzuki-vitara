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
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const FaqsM = () => {
  const faqsData = [
    {
      title: 'Pregunta 1',
      content: 'Respuesta de la Pregunta 1',
    },
    {
      title: 'Pregunta 2',
      content: 'Respuesta de la Pregunta 2',
    },
    {
      title: 'Pregunta 3',
      content: 'Respuesta de la Pregunta 3',
    },
    {
      title: 'Pregunta 4',
      content: 'Respuesta de la Pregunta 4',
    },
    {
      title: 'Pregunta 5',
      content: 'Respuesta de la Pregunta 5',
    },
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
