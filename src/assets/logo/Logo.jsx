import { Link } from "react-router-dom";
import Logotip from "../icons/LOGO.svg";

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={Logotip} alt="Logotip" />
      </Link>
    </div>
  );
};

export default Logo;
