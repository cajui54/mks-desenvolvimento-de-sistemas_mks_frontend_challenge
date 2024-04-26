import React from "react";
import { IoClose } from "react-icons/io5";
import * as Styles from "./Cart.css";
import ItemCart from "./ItemCart";

const Cart = () => {
  return (
    <Styles.MainCart>
      <Styles.HeaderCart>
        <h3>Carrinho de compras</h3>
        <button>
          <IoClose />
        </button>
      </Styles.HeaderCart>
      <ItemCart />
    </Styles.MainCart>
  );
};

export default Cart;
