import { Link } from "react-router-dom";
import imgTest from '../../../assets/images/bg/gallery--test.jpeg'

const apiLink = 'https://dev-suzuki-vitara.pantheonsite.io/'

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
            {apiLink + data.photo_url}
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
        <span className="image--autor">{data.competitor_name}</span>
      </div>
    </div>
  );
};

export default CardGallery;