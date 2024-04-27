import {
  openMenu,
  getTotalBuy,
  decrementItem,
  removeItemCart,
  getAmountItems,
} from "./sliceCart";
import { store } from "../store";
import { AmountItems } from "../../interface/cart";
const initialStateAmount: AmountItems[] = [
  { id: 1, accPrice: 600, amount: 1 },
  { id: 2, accPrice: 1000, amount: 1 },
  { id: 3, accPrice: 4200, amount: 1 },
];
describe("Testing SliceCart redux", () => {
  it("Testing openMenu, if send open, must retun 1", () => {
    store.dispatch(openMenu("open"));
    const { opacityMenu } = store.getState().cart;
    expect(opacityMenu).toBe(1);
  });
  it("Testing openMenu, if send close, must retun 0", () => {
    store.dispatch(openMenu("close"));
    const { opacityMenu } = store.getState().cart;
    expect(opacityMenu).toBe(0);
  });
  it("Testing getTotalBuy, if array empty []: must return total 0", () => {
    store.dispatch(getTotalBuy());
    const { totalBuy } = store.getState().cart;
    expect(totalBuy).toBe(0);
  });
  it("Testing getTotalBuy, if send with prices: AmountItems[] must return total 5800", () => {
    initialStateAmount.forEach((item) => store.dispatch(decrementItem(item)));
    store.dispatch(getTotalBuy());
    const { totalBuy } = store.getState().cart;
    expect(totalBuy).toBe(5800);
  });
  it("Testing removeItemCart, if send id: 1 must return without id:1", () => {
    initialStateAmount.forEach((item) => store.dispatch(getAmountItems(item)));
    store.dispatch(removeItemCart(1));
    const { amountItems } = store.getState().cart;
    const items = amountItems.map((item) => item.id);
    expect(!items.includes(1)).toBeTruthy();
  });
});
