import { openMenu, getTotalBuy, decrementItem } from "./sliceCart";
import { store } from "../store";
import { AmountItems } from "../../interface/cart";
const initialStateAmount: AmountItems[] = [
  { id: 1, accPrice: 600, amount: 1 },
  { id: 2, accPrice: 1000, amount: 1 },
  { id: 3, accPrice: 4200, amount: 1 },
];
describe("Testing SliceCart redux", () => {
  it("Testing openMenu, payload: open, must retun 1", () => {
    store.dispatch(openMenu("open"));
    const { opacityMenu } = store.getState().cart;
    expect(opacityMenu).toBe(1);
  });
  it("Testing openMenu, payload: close, must retun 0", () => {
    store.dispatch(openMenu("close"));
    const { opacityMenu } = store.getState().cart;
    expect(opacityMenu).toBe(0);
  });
  it("Testing getTotalBuy, amountItems []: must return total 0", () => {
    store.dispatch(getTotalBuy());
    const { totalBuy } = store.getState().cart;
    expect(totalBuy).toBe(0);
  });
  it("Testing getTotalBuy, amountItems AmountItems[] must return total 5800", () => {
    initialStateAmount.forEach((item) => store.dispatch(decrementItem(item)));
    store.dispatch(getTotalBuy());
    const { totalBuy } = store.getState().cart;
    expect(totalBuy).toBe(5800);
  });
});
