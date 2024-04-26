import { IoClose } from "react-icons/io5";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import * as Styles from "./Cart.css";
import ItemCart from "./ItemCart";
const Cart = () => {
  const { totalBuy } = useSelector((state: RootState) => state.cart);
  return (
    <Styles.MainCart>
      <Styles.Container>
        <Styles.HeaderCart>
          <h3>Carrinho de compras</h3>
          <button>
            <IoClose />
          </button>
        </Styles.HeaderCart>
        <ItemCart />

        <Styles.TotalCartContainer>
          <div>
            <span>Total</span>
            <span>R$:{totalBuy}</span>
          </div>
          <button className="finishButton">Finalizar Compra</button>
        </Styles.TotalCartContainer>
      </Styles.Container>
    </Styles.MainCart>
  );
};

export default Cart;
