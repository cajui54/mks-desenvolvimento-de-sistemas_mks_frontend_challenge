import { useState, useEffect } from "react";
import { IItem } from "../interface/item";
import { LogoHeader } from "../components/Header/Header.css";

const useFetch = () => {
  const [products, setProducts] = useState<IItem[] | null>(null);
  const url =
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC";

  useEffect(() => {
    const requestDatas = async () => {
      const response = await fetch(url);

      const datasJSON = await response.json();

      setProducts(datasJSON.products);
    };
    requestDatas();
  }, []);
  return { products };
};

export default useFetch;
