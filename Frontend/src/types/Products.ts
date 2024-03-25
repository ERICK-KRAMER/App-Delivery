export type IProducts = ProductsPops[]

export interface ProductsPops {
  _id: string
  name: string
  price: number
  description?: string
  img?: string,
  type: string
}

export interface IPropsProduct {
  values: {
    img?: string;
    name: string;
    price: number;
    description?: string;
    type: string
  };
}