import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RiHandbagLine } from "react-icons/ri";
import * as Styles from "./Item.css";
import { IItem } from "../../interface/item";
import useFetch from "../../hooks/useFetch";

const Item = (props: IItem) => {
  const { isLoading } = useFetch();

  const handleAddItemCart = (item: IItem) => {
    console.log(item);
  };

  return (
    <Styles.MainItem>
      <SkeletonTheme baseColor="#ebebeb" highlightColor="#444" />
      {!isLoading ? (
        <img src={props.photo} alt={props.name} />
      ) : (
        <Skeleton height={150} />
      )}
      <Styles.InfoContainer>
        <h2>{!isLoading ? props.name : <Skeleton />}</h2>
        <div>{!isLoading && <span>R$:{props.price.split(".")[0]}</span>}</div>
      </Styles.InfoContainer>

      <p>{!isLoading ? props.description : <Skeleton />}</p>

      {!isLoading ? (
        <button onClick={() => handleAddItemCart(props)}>
          <RiHandbagLine />
          <span>COMPRAR </span>
        </button>
      ) : (
        <Skeleton width={218} height={31.91} />
      )}
    </Styles.MainItem>
  );
};

export default Item;
