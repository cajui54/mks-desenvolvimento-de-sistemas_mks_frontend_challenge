import { useState, useEffect } from "react";
import { IItem, ItemResponse } from "../interface/item";
import { axiosInstance, endPoint } from "../helper/axios-instanse";
import { useQuery } from "@tanstack/react-query";
import { AxiosPromise } from "axios";

const useFetch = () => {
  const requestDatas = async (): AxiosPromise<ItemResponse> => {
    const response = await axiosInstance.get<ItemResponse>(endPoint);

    return response;
  };

  const queryProducts = useQuery({
    queryFn: requestDatas,
    queryKey: ["products-data"],
  });

  return {
    ...queryProducts,
    data: queryProducts.data?.data.products,
  };
};

export default useFetch;
