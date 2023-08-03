import React, { useEffect, useState } from 'react'
import getAllRanking from '../service/rankingServer';
import messageError from '../helpers/messageApiError';


export const useGetRanking = () => {

    const [ranking, setRanking] = useState([]);
    const [error, setError] = useState(false);
    
    const fetchRanking = async () => {
        let data = [];
        try {
            data = await getAllRanking();
        } catch (error) {
            setError(true)
            
        }
        setRanking(data);
    }

    useEffect(() => {
        fetchRanking();
    }, [])

    return {
        ranking, setRanking, error, setError
    }
}
