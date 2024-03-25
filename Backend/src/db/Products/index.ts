import { model, Schema } from "mongoose"

interface IProducts {
  type: String,
  name: String,
  description?: String,
  price: Number,
  img?: String
}

const productSchema = new Schema<IProducts>({
  type: { type: String, required: true },
  name: {  type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  img: { type: String }
});

export const useProduct = model<IProducts>("product", productSchema);

export const getAllProducts = async() => useProduct.find();
export const getProductByName = async(name: string) => useProduct.findOne({ name })
export const getProductById = async(id: string) => useProduct.findById(id);
export const createNewProduct = (values: IProducts) => new useProduct(values).save();
export const updateProduct = (id: string, values: Record<string, any>) => useProduct.findOneAndUpdate({ _id: id }, values);
export const removeProduct = (id: string) => useProduct.findOneAndDelete({ _id: id });