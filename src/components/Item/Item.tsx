import React from "react";
import * as Styles from "./Item.css";
import { IItem } from "../../interface/item";

const Item = (props: IItem) => {
  console.log(props);

  return <Styles.MainItem></Styles.MainItem>;
};

export default Item;
