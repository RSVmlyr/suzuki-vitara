import React, { useEffect, useState } from 'react'
import getAllGalery from '../service/galeryService';
import messageError from '../helpers/messageApiError';



export const useGalery = () => {

    const [galery, setGalery] = useState([]);

    const fetchData = async () => {

        let data = [];

        try {
            data = await getAllGalery();
        } catch (error) {
            messageError() 
        }
        return setGalery(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


  return {
    galery, setGalery
  }
}
