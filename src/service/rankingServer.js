const urlApi = 'https://dev-suzuki-vitara.pantheonsite.io/api/prizescooters';

const getAllRanking = async () => {
    const response = await fetch(`${urlApi}/ranking`);
    const data = await response.json();
    return data;
}

export default getAllRanking;