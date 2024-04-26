import { useEffect } from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import * as Styles from "./ItemCart.css";
import {
  getAmountItems,
  decrementItem,
  removeItemCart,
  getTotalBuy,
} from "../../redux/slice/sliceCart";
import { IItem } from "../../interface/item";

const ItemCart = () => {
  const { itemsInCart, amountItems } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useDispatch();

  const getAmoutItem = (id: number, value = 1): number => {
    if (amountItems.length > 0) {
      const _item = amountItems.find((item) => item.id === id);

      return _item ? _item.amount : 1;
    }
    return value;
  };
  const handleClickIncrement = ({ id, price }: IItem) => {
    dispatch(getAmountItems({ id, amount: 1, accPrice: parseFloat(price) }));
    getAmoutItem(id);
  };
  const handleClickDecrement = ({ id, price }: IItem) => {
    const item = amountItems.find((item) => item.id === id);
    if (item && item.amount >= 2) {
      dispatch(decrementItem({ id, amount: 1, accPrice: parseFloat(price) }));
      getAmoutItem(id);
    }
  };
  const updatePriceItem = ({ id, price }: IItem) => {
    const _item = amountItems.find((item) => item.id === id);
    return _item ? _item.accPrice : price;
  };
  const handleRemoveItem = (id: number) => {
    dispatch(removeItemCart(id));
  };
  useEffect(() => {
    dispatch(getTotalBuy());
  }, [amountItems]);
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
                <button onClick={() => handleClickDecrement(item)}>-</button>
                <input
                  type="text"
                  min={1}
                  readOnly
                  value={getAmoutItem(item.id)}
                />
                <button onClick={() => handleClickIncrement(item)}>+</button>
              </div>
            </Styles.InputContainer>
            <Styles.PriceContainer>
              <span>R$:{updatePriceItem(item)}</span>
            </Styles.PriceContainer>

            <button
              className="button-close"
              onClick={() => handleRemoveItem(item.id)}
            >
              X
            </button>
          </Styles.CardItem>
        ))}
    </Styles.ItemCartMain>
  );
};

export default ItemCart;
