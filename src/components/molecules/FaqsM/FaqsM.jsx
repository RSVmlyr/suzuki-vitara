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
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
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
    <main>
      <div className="faqs">
        <div className="faqs--container">
        <h1 className="title">Preguntas frecuentes</h1>
          {faqsData.map((faq, index) => (
            <AccordionItem key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default FaqsM;
