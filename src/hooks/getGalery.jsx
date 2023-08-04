import React, { useEffect, useState } from 'react'
import getAllGalery from '../service/galeryService';
import messageError from '../helpers/messageApiError';
import { set } from 'react-hook-form';



export const useGalery = () => {

    const [galery, setGalery] = useState([]);
    const [error, setError] = useState(false);

    const fetchData = async () => {

        let data = [];

        try {
            data = await getAllGalery();
        } catch (error) {
            setError(true);
        }
        return setGalery(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


  return {
    galery, setGalery, error, setError
  }
}
