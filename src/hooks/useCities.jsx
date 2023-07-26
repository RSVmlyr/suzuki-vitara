import { useState } from 'react';

const useCities = () => {
  const [cities, setCities] = useState([
    { id: 'bogota', name: 'Bogotá', code: 'BOG' },
    { id: 'medellin', name: 'Medellín', code: 'MED' },
    { id: 'cali', name: 'Cali', code: 'CAL' },
    { id: 'barranquilla', name: 'Barranquilla', code: 'BQU' },
    { id: 'cartagena', name: 'Cartagena', code: 'CAR' },
    { id: 'bucaramanga', name: 'Bucaramanga', code: 'BUC' },
    { id: 'pasto', name: 'Pasto', code: 'PAS' },
    { id: 'manizales', name: 'Manizales', code: 'MAN' },
    { id: 'pereira', name: 'Pereira', code: 'PER' },
    { id: 'cucuta', name: 'Cúcuta', code: 'CUC' },
    { id: 'santa_marta', name: 'Santa Marta', code: 'STM' },
    { id: 'villavicencio', name: 'Villavicencio', code: 'VVC' },
    { id: 'ibague', name: 'Ibagué', code: 'IBA' },
    { id: 'armenia', name: 'Armenia', code: 'ARM' },
    { id: 'valledupar', name: 'Valledupar', code: 'VAL' },
    { id: 'neiva', name: 'Neiva', code: 'NEI' },
    { id: 'sincelejo', name: 'Sincelejo', code: 'SIN' },
    { id: 'monteria', name: 'Montería', code: 'MTR' },
    { id: 'popayan', name: 'Popayán', code: 'POP' },
    { id: 'quibdo', name: 'Quibdó', code: 'QUI' },
    { id: 'tunja', name: 'Tunja', code: 'TUN' },
    { id: 'riohacha', name: 'Riohacha', code: 'RIO' },
    { id: 'arauca', name: 'Arauca', code: 'ARA' },
    { id: 'leticia', name: 'Leticia', code: 'LET' },
    { id: 'puerto_inirida', name: 'Puerto Inírida', code: 'PIN' },
    { id: 'puerto_carreno', name: 'Puerto Carreño', code: 'PCR' },
    { id: 'san_andres', name: 'San Andrés', code: 'SAD' },
    { id: 'mocoa', name: 'Mocoa', code: 'MOC' },
    { id: 'yopal', name: 'Yopal', code: 'YOP' },
    { id: 'florencia', name: 'Florencia', code: 'FLO' },
    { id: 'quindio', name: 'Quindío', code: 'QUI' },
    { id: 'cauca', name: 'Cauca', code: 'CAU' },
    { id: 'casanare', name: 'Casanare', code: 'CAS' },
  ]);

  return cities;
};

export default useCities;
