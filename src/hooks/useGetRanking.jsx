import React, { useEffect, useState } from 'react'
import getAllRanking from '../service/rankingServer';
import messageError from '../helpers/messageApiError';


export const useGetRanking = () => {

    const [ranking, setRanking] = useState([]);
    
    const fetchRanking = async () => {
        let data = [];
        try {
            data = await getAllRanking();
        } catch (error) {
            messageError()
        }
        setRanking(data);
    }

    useEffect(() => {
        fetchRanking();
    }, [])

    return {
        ranking, setRanking
    }
}
