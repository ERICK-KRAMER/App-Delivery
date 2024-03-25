import { IPropsProduct } from "../../types/Products";
import ButtonCartComponent from "../ButtonCart";

const ItemComponent = ({ values }: IPropsProduct) => {

  return (
    <>
      <div className=" w-52 rounded-md border border-zinc-200 cursor-pointer">
          <img src={ values.img } alt={ values.name } className="h-40 w-full rounded-t-md" />
        <div className="flex justify-center items-center flex-col p-4">
          <h2 className=" hover:text-red-500 transition duration-400 font-medium">{ values.name }</h2>
          { values.description && <small className="text-zinc-400 font-medium">{ values.description }</small> }
          <div className="flex justify-center items-center gap-5 mt-4">
            <h3 className="text-blue-500">R$: { values.price }</h3>
            <ButtonCartComponent/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemComponent;
