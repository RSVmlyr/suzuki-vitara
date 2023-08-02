import React, { useEffect, useState } from 'react'
import getAllRanking from '../service/rankingServer';


export const useGetRanking = () => {

    const [ranking, setRanking] = useState([]);
    
    const fetchRanking = async () => {
        let data = [];
        try {
            data = await getAllRanking();
        } catch (error) {
            console.log(error);
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
