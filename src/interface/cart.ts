import { IItem } from "./item";

export interface AmountItems {
  id: number;
  amount: number;
  accPrice: number;
}
export interface Cart {
  itemsInCart: IItem[];
  amountItems: AmountItems[];
  totalBuy: number;
}
