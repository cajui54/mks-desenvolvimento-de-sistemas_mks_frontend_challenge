import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../interface/item";
interface Cart {
  itemsInCart: IItem[];
}
const initialState: Cart = {
  itemsInCart: [],
};
const sliceCart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemCart(state, { payload }: PayloadAction<IItem>) {
      state.itemsInCart = [...state.itemsInCart, payload];
    },
  },
});

export const { addItemCart } = sliceCart.actions;

export default sliceCart.reducer;
