import { useState } from 'react';

const useCities = () => {
  const [cities, setCities] = useState([
    { id: 'armenia', name: 'armenia' },
    { id: 'barraquilla', name: 'barranquilla' },
    { id: 'bogota', name: 'bogotá' },
    { id: 'bucaramanga', name: 'bucaramanga' },
    { id: 'cali', name: 'cali' },
    { id: 'cartagena', name: 'cartagena' },
    { id: 'chia', name: 'chía' },
    { id: 'cucuta', name: 'cucuta' },
    { id: 'florencia', name: 'florencia' },
    { id: 'ibagua', name: 'ibague' },
    { id: 'manizales', name: 'manizales' },
    { id: 'medellin', name: 'medellin' },
    { id: 'monteria', name: 'montería' },
    { id: 'neiva', name: 'neiva' },
    { id: 'pasto', name: 'pasto' },
    { id: 'pereira', name: 'pereira' },
    { id: 'popayan', name: 'popayán' },
    { id: 'rionegro', name: 'rionegro' },
    { id: 'santamarta', name: 'santa marta' },
    { id: 'sincelejo', name: 'sincelejo' },
    { id: 'tunja', name: 'tunja' },
    { id: 'valledupar', name: 'valledupar' },
    { id: 'villavicencio', name: 'villavicencio' },
    { id: 'yopal', name: 'yopal' },
  ]);

  return cities;
};

export default useCities;
