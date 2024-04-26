export interface IItem {
  id: number;
  createdAt?: string;
  description: string;
  name: string;
  photo: string;
  price: string;
  brand: string;
  updatedAt: string;
}
export interface ItemResponse {
  products: IItem[];
}
