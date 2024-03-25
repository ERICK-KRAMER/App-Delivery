import { IPropsProduct } from "../../types/Products";
import ButtonCartComponent from "../ButtonCart";

const ItemComponent2 = ({ values }: IPropsProduct) => {
  return(
    <div className=" w-[400px] h-36 flex justify-between items-center border border-zinc-200 rounded-md pr-3">
      <img src={ values.img } alt={ values.name } className="w-32 h-full bg-red-200 rounded-s-md" />
      <div className="p-4 flex justify-center flex-col items-start gap-4">
        <h3>{ values.name }</h3>
        <h3 className="text-blue-500">R$: { values.price }</h3>
        {values.description ? <small>{ values.description }</small> : null}
      </div>
      <div>
        <ButtonCartComponent/>
      </div>
    </div>
  )
}
export default ItemComponent2;