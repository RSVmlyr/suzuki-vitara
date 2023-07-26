import { useState } from 'react';

const useCities = () => {
  const [cities, setCities] = useState([
    { id: 1, name: 'Bogotá', code: 'BOG' },
    { id: 2, name: 'Medellín', code: 'MDE' },
    { id: 3, name: 'Cali', code: 'CLO' },
    { id: 4, name: 'Barranquilla', code: 'BAQ' },
    { id: 5, name: 'Cartagena', code: 'CTG' },
  ]);

  return cities;
};

export default useCities;
