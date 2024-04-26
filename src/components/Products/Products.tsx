import * as Styles from "./Products.css";
import useFetch from "../../hooks/useFetch";
import Item from "../Item/Item";

const Products = () => {
  const { data, isLoading } = useFetch();

  return (
    <Styles.MainProducts>
      {data?.map((item) => (
        <div key={item.id}>
          <Item {...item} />
        </div>
      ))}
    </Styles.MainProducts>
  );
};

export default Products;
