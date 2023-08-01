import React, { useEffect, useState } from 'react'
import getAll from '../service/galeryService';


export const useGalery = () => {

    const [galery, setGalery] = useState([]);

    const fetchData = async () => {
        let data = []
        try {
            data = await getAll();
        } catch (error) {
            console.error(error);
        }
        setGalery(data);
    }

    useEffect(() => {
        fetchData();
    }, [])


  return {
    galery, setGalery
  }
}
