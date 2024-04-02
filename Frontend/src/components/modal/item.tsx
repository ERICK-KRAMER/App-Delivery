import { IPropsProduct } from "../../types/Products";
import ButtonCartComponent from "../ButtonCart";
import { Plus, MinusIcon } from "lucide-react"
const Item = ({ values }: IPropsProduct) => {
  
  return(
    <div className="container grid grid-cols-2 place-items-center gap-3">
        <h2 className=" col-span-2 p-2 text-lg font-sans font-medium text-yellow-500">{values.name}</h2>
      <div className="">
        <img src={values.img} alt={values.name} />
      </div>
      <div className="">
        <p>{values.description}</p>
        <div className="flex gap-3 justify-center items-center mt-4">
          <div className=" flex gap-1">
            {0}
            <MinusIcon className="cursor-pointer text-red-500"/>
            <Plus className="cursor-pointer text-yellow-500"/>
            {1}
          </div>
          <p className="text-xl text-green-500">{values.price}</p>
          <ButtonCartComponent/>
        </div>
      </div>
    </div>
  )
}
export default Item;