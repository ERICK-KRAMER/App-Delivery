import { IPropsProduct, ProductsPops } from "../../types/Products";
import ButtonCartComponent from "../ButtonCart";

interface Props extends IPropsProduct {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTargetItem: React.Dispatch<React.SetStateAction<ProductsPops | undefined>>
}

const ItemComponent2 = ({ values, setIsOpen, setTargetItem }: Props) => {

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(true);
    setTargetItem({...values,_id: "unique_id"});
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return(
    <div className=" w-[400px] h-36 flex justify-between items-center border border-zinc-200 rounded-md pr-3 max-lg:w-[700px] max-md:w-[600px] max-sm:w-[400px] cursor-pointer" onClick={handleClick}>
      <img src={ values.img } alt={ values.name } className="w-32 h-full bg-red-200 rounded-s-md" />
      <div className="p-4 flex justify-center flex-col items-start gap-4">
        <h3 className="font-medium text-lg hover:text-red-500 transition duration-400">{ values.name }</h3>
        <h3 className="text-blue-500">R$: { values.price }</h3>
        {values.description ? <small>{ values.description }</small> : null}
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <ButtonCartComponent onClick={handleButtonClick} />
      </div>
    </div>
  )
}
export default ItemComponent2;
