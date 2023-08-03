const urlApi = import.meta.env.VITE_BACKEND_API_URL;

const getAllRanking = async () => {
    const response = await fetch(`${urlApi}/ranking`);
    const data = await response.json();
    return data;
}

export default getAllRanking;