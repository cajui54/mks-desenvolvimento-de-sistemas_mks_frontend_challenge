import React from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import * as Styles from "./ItemCart.css";
import { IItem } from "../../interface/item";
const ItemCart = () => {
  const { itemsInCart } = useSelector((state: RootState) => state.cart);
  console.log(itemsInCart);

  const getAmoutItem = (item: IItem): number => {
    const amount = itemsInCart.filter((_item) => _item.id === item.id).length;
    console.log(amount);

    return amount;
  };
  return (
    <Styles.ItemCartMain>
      {itemsInCart.length > 0 &&
        itemsInCart.map((item, index) => (
          <Styles.CardItem key={index}>
            <div>
              <img src={item.photo} alt={item.name} />
            </div>
            <div>
              <h2>{item.name}</h2>
            </div>
            <Styles.InputContainer>
              <p>Qtd</p>
              <div>
                <button>-</button>
                <input
                  type="text"
                  min={1}
                  readOnly
                  value={getAmoutItem(item)}
                />
                <button>+</button>
              </div>
            </Styles.InputContainer>
            <Styles.PriceContainer>
              <span>R$:{item.price.split(".")[0]}</span>
            </Styles.PriceContainer>
            <button className="button-close">X</button>
          </Styles.CardItem>
        ))}
    </Styles.ItemCartMain>
  );
};

export default ItemCart;
