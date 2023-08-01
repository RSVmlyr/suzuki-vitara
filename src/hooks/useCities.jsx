import { useState } from 'react';

const useCities = () => {
  const [cities, setCities] = useState([
    { id: 'arauca', name: 'arauca' },
    { id: 'armenia', name: 'armenia' },
    { id: 'barraquilla', name: 'barranquilla' },
    { id: 'bogota', name: 'bogotá' },
    { id: 'bucaramanga', name: 'bucaramanga' },
    { id: 'cali', name: 'cali' },
    { id: 'cartagena', name: 'cartagena' },
    { id: 'cucuta', name: 'cúcuta' },
    { id: 'florencia', name: 'florencia' },
    { id: 'ibagua', name: 'ibagué' },
    { id: 'leticia', name: 'leticia' },
    { id: 'manizales', name: 'manizales' },
    { id: 'medellin', name: 'medellín' },
    { id: 'mitu', name: 'mitú' },
    { id: 'mocoa', name: 'mocoa' },
    { id: 'monteria', name: 'montería' },
    { id: 'neiva', name: 'neiva' },
    { id: 'pasto', name: 'pasto' },
    { id: 'pereira', name: 'pereira' },
    { id: 'popayan', name: 'popayán' },
    { id: 'puertocarreno', name: 'puerto carreño' },
    { id: 'puertoinirida', name: 'puerto inírida' },
    { id: 'quibdo', name: 'quibdó' },
    { id: 'riohacha', name: 'riohacha' },
    { id: 'sanandres', name: 'san andrés' },
    { id: 'sanjosedelguaviare', name: 'san josé del guaviare' },
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
