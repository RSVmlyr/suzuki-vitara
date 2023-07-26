import { useState } from 'react';

const useCities = () => {
  const [cities, setCities] = useState([
    { id: '1', name: 'Bogotá', code: 'BOG' },
    { id: '2', name: 'Medellín', code: 'MED' },
    { id: '3', name: 'Cali', code: 'CAL' },
    { id: '4', name: 'Barranquilla', code: 'BQU' },
    { id: '5', name: 'Cartagena', code: 'CAR' },
    { id: '6', name: 'Bucaramanga', code: 'BUC' },
    { id: '7', name: 'Pasto', code: 'PAS' },
    { id: '8', name: 'Manizales', code: 'MAN' },
    { id: '9', name: 'Pereira', code: 'PER' },
    { id: '10', name: 'Cúcuta', code: 'CUC' },
    { id: '11', name: 'Santa Marta', code: 'STM' },
    { id: '12', name: 'Villavicencio', code: 'VVC' },
    { id: '13', name: 'Ibagué', code: 'IBA' },
    { id: '14', name: 'Armenia', code: 'ARM' },
    { id: '15', name: 'Valledupar', code: 'VAL' },
    { id: '16', name: 'Neiva', code: 'NEI' },
    { id: '17', name: 'Sincelejo', code: 'SIN' },
    { id: '18', name: 'Montería', code: 'MTR' },
    { id: '19', name: 'Popayán', code: 'POP' },
    { id: '20', name: 'Quibdó', code: 'QUI' },
    { id: '21', name: 'Tunja', code: 'TUN' },
    { id: '22', name: 'Riohacha', code: 'RIO' },
    { id: '23', name: 'Arauca', code: 'ARA' },
    { id: '24', name: 'Leticia', code: 'LET' },
    { id: '25', name: 'Puerto Inírida', code: 'PIN' },
    { id: '26', name: 'Puerto Carreño', code: 'PCR' },
    { id: '27', name: 'San Andrés', code: 'SAD' },
    { id: '28', name: 'Mocoa', code: 'MOC' },
    { id: '29', name: 'Yopal', code: 'YOP' },
    { id: '30', name: 'Florencia', code: 'FLO' },
    { id: '31', name: 'Quindío', code: 'QUI' },
    { id: '32', name: 'Cauca', code: 'CAU' },
    { id: '33', name: 'Casanare', code: 'CAS' },
  ]);

  return cities;
};

export default useCities;
