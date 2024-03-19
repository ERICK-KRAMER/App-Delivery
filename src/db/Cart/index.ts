import { model, Schema } from "mongoose";

interface ICart {
  productId: string,
  quantity: number
}

const cartSchema = new Schema<ICart>({
  productId: { type: String, reqired: true },
  quantity: { type: Number, required: true }
});

export const useCart = model<ICart>('cart', cartSchema);
