import { model, Schema } from "mongoose"

interface IProducts {
  name: String,
  description: String,
  price: Number
}

const productSchema = new Schema<IProducts>({
  name: {  type: String, required: true },
  description: { type: String, default: "" },
  price: { type: Number, required: true },
});

const useProduct = model<IProducts>("product", productSchema);

export const getALlProducts = async() => useProduct.find();
export const getProductById = async(id: string) => useProduct.findById(id);
export const createNewProduct = (values: IProducts) => new useProduct(values).save();
export const updateProduct = (id: string, values: Record<string, any>) => useProduct.findOneAndUpdate({ _id: id }, values);
export const removeProduct = (id: string) => useProduct.findOneAndDelete({ _id: id })