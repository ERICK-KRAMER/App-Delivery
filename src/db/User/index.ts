import { model, Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  telephone: Number
}

const useSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  telephone: { type: Number, required: true }
});

const useModel = model<IUser>("Users", useSchema);

export const getUsers = async() => useModel.find();
export const getUserById = async(id: string) => useModel.findById(id);
export const getUserByEmail = async(email: string) => useModel.findOne({ email: email });
export const createUser = async(values: IUser) => new useModel(values).save();
export const updateUser = async(id: string, values: Record<string, any>) => useModel.findOneAndUpdate({ id }, values, { new: true });
export const removeUser = async(id: string) => useModel.findByIdAndDelete({ _id: id });

