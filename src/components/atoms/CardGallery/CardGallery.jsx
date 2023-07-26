import { Link } from "react-router-dom";
import imgTest from '../../../assets/images/bg/gallery--test.jpeg'

const CardGallery = () => {
  return (
    <div className="card--gallery">
      <div className="card--gallery__top">
        <figure className="image--card">
          <img
            className=""
            src={imgTest}
            loading="lazy"
            alt="Suzuki Vitara"
            title="Suzuki Vitara"
          />
        </figure>
        <div className="image--actions">
          <span className="likes--card">10.1 k</span>
          <Link className="vote--card" to={"/"}>Votar</Link>
        </div>
      </div>
      <div className="card--gallery__bottom">
        <span className="image--autor">Name here</span>
      </div>
    </div>
  );
};

export default CardGallery;