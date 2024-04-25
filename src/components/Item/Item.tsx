import React from "react";
import { RiHandbagLine } from "react-icons/ri";
import * as Styles from "./Item.css";
import { IItem } from "../../interface/item";

const Item = (props: IItem) => {
  return (
    <Styles.MainItem>
      <img src={props.photo} alt={props.name} />
      <Styles.InfoContainer>
        <h2>{props.name}</h2>
        <div>
          <span>R${props.price}</span>
        </div>
      </Styles.InfoContainer>

      <p>{props.description}</p>
      <button>
        <RiHandbagLine />
        <span>COMPRAR </span>
      </button>
    </Styles.MainItem>
  );
};

export default Item;
