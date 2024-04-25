import * as Styles from "./Products.css";
import useFetch from "../../hooks/useFetch";
import Item from "../Item/Item";

const Products = () => {
  const { products } = useFetch();
  return (
    <Styles.MainProducts>
      {products &&
        products.map((item) => (
          <div key={item.id}>
            <Item {...item} />
          </div>
        ))}
    </Styles.MainProducts>
  );
};

export default Products;
