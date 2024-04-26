import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IItem } from "../../interface/item";
import { Cart, AmountItems } from "../../interface/cart";
type id = number;
const initialState: Cart = {
  itemsInCart: [],
  amountItems: [],
  totalBuy: 0,
};
const sliceCart = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemCart(state, { payload }: PayloadAction<IItem>) {
      if (state.itemsInCart.length > 0) {
        const getIds = state.itemsInCart.map((item) => item.id);
        if (getIds.includes(payload.id)) {
          state.itemsInCart = state.itemsInCart.map((item) => {
            if (item.id === payload.id) {
              return {
                ...item,
              };
            }
            return item;
          });
          return state;
        }
      }
      state.itemsInCart = [...state.itemsInCart, payload];
      return state;
    },
    getAmountItems(state, { payload }: PayloadAction<AmountItems>) {
      if (state.amountItems.length > 0) {
        const getIds = state.amountItems.map((item) => item.id);
        if (getIds.includes(payload.id)) {
          state.amountItems = state.amountItems.map((item) => {
            if (item.id === payload.id) {
              return {
                ...item,
                amount: item.amount + payload.amount,
                accPrice: item.accPrice + payload.accPrice,
              };
            }
            return item;
          });
          return state;
        }
      }
      state.amountItems = [...state.amountItems, payload];

      return state;
    },
    decrementItem(state, { payload }: PayloadAction<AmountItems>) {
      if (state.amountItems.length > 0) {
        const getIds = state.amountItems.map((item) => item.id);
        if (getIds.includes(payload.id)) {
          state.amountItems = state.amountItems.map((item) => {
            if (item.id === payload.id) {
              return {
                ...item,
                amount: item.amount - payload.amount,
                accPrice: item.accPrice - payload.accPrice,
              };
            }
            return item;
          });
          return state;
        }
      }
      state.amountItems = [...state.amountItems, payload];

      return state;
    },
    removeItemCart(state, { payload }: PayloadAction<id>) {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== payload
      );
      state.amountItems = state.amountItems.filter(
        (item) => item.id !== payload
      );
      return state;
    },
    getTotalBuy(state) {
      if (state.amountItems.length > 0) {
        state.totalBuy = state.amountItems.reduce(
          (acc, curr) => acc + curr.accPrice,
          0
        );
        return state;
      }
    },
  },
});

export const {
  addItemCart,
  getAmountItems,
  decrementItem,
  removeItemCart,
  getTotalBuy,
} = sliceCart.actions;

export default sliceCart.reducer;
