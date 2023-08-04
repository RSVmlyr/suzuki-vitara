// const urlApi = 'https://dev-suzuki-vitara.pantheonsite.io/api/prizescooter';
const urlApi = import.meta.env.VITE_BACKEND_API_URL;

const getAllGalery = async () => {

    const response = await fetch(`${urlApi}/photos`);
    const data = await response.json();
    return data;
}

export default getAllGalery;