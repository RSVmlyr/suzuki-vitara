

const urlApi = 'https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter';

const getAll = async () => {
    const galery = ''
    const response = await fetch(`${urlApi}/photos`);
    const data = await response.json().catch(error => console.log("Error fetching galeryService:", error));
    return data;
}

export default getAll;