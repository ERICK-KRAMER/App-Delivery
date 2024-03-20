import { model, Schema } from "mongoose";

interface ICart{
  productId: string;
  quantity: number;
  userId: string;
}

const cartSchema = new Schema<ICart>({
  productId: { type: String, reqired: true },
  quantity: { type: Number, required: true },
  userId: {type: String, required: true }
});

export const useCart = model<ICart>('cart', cartSchema);

export const addToCart = async(values: ICart) => new useCart(values).save();
export const removeToCart = async(id:string) => useCart.findByIdAndDelete(id);