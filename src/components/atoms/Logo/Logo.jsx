import { Link } from "react-router-dom";
import logo from "../../../assets/images/icon/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <figure className="logo">
      <Link to={"/"}>
        <img
          className="logo__img"
          src={logo}
          loading="lazy"
          alt="Suzuki Vitara"
          title="Suzuki Vitara"
        />
      </Link>
    </figure>
  );
};

export default Logo;
