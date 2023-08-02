const urlApi = 'https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter';

const getAllRanking = async () => {
    const response = await fetch(`${urlApi}/ranking`);
    const data = await response.json().catch(error => console.log("Error fetching rankingService:", error));
    return data;
}

export default getAllRanking;