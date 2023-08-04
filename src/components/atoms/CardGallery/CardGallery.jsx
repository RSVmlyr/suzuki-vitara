import { Link } from "react-router-dom";
import imgTest from '../../../assets/images/bg/gallery--test.jpeg'
import filterName from "../../../helpers/clearNameVote";

const urlApi = import.meta.env.VITE_BACKEND_RESOURCE_URL;


const CardGallery = ({data}) => {

  const likesData = () => {
    let result = data.like
    if(result > 999) {
      result = result.slice(0, result.length-3) + "k";
    }
    return result
  }

  return (
    <div className="card--gallery">
      <div className="card--gallery__top">
        <figure className="image--card">
          <img
            className=""
            src=
            // {imgTest}
            {urlApi + data.photo_url}
            loading="lazy"
            alt="Suzuki Vitara"
            title="Suzuki Vitara"
          />
        </figure>
        <div className="image--actions">
          <span className="likes--card">{likesData()}</span>
          <Link className="vote--card" to={`/votar/${data.id}`}>Votar</Link>
        </div>
      </div>
      <div className="card--gallery__bottom">
        <span className="image--autor">{filterName(data.competitor_name)}</span>
      </div>
    </div>
  );
};

export default CardGallery;