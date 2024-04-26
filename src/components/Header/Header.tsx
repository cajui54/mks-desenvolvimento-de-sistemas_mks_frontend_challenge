import * as Styles from "./Header.css";
import { BsCart4 } from "react-icons/bs";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { openMenu } from "../../redux/slice/sliceCart";

const Header = () => {
  const { amountItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  return (
    <Styles.MainHeader>
      <Styles.LogoHeader>
        <h1>
          <span>MKS</span>
          <span>Sistemas</span>
        </h1>
      </Styles.LogoHeader>

      <button className="buttonCart" onClick={() => dispatch(openMenu("open"))}>
        <BsCart4 />
        <span>
          {amountItems.length > 0
            ? amountItems.reduce((acc, curr) => acc + curr.amount, 0)
            : 0}
        </span>
      </button>
    </Styles.MainHeader>
  );
};

export default Header;
