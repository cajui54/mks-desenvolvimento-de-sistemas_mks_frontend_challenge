import * as Styles from "./Header.css";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  return (
    <Styles.MainHeader>
      <Styles.LogoHeader>
        <h1>
          <span>MKS</span>
          <span>Sistemas</span>
        </h1>
      </Styles.LogoHeader>

      <button className="buttonCart">
        <BsCart4 />
        <span>0</span>
      </button>
    </Styles.MainHeader>
  );
};

export default Header;
