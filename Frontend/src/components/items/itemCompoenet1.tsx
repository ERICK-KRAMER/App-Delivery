import React from "react";
import { IPropsProduct, ProductsPops } from "../../types/Products";
import ButtonCartComponent from "../ButtonCart";

interface Props extends IPropsProduct {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setTargetItem: React.Dispatch<React.SetStateAction<ProductsPops | undefined>>
}

const ItemComponent = ({ values, setIsOpen, setTargetItem }:Props) => {

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setIsOpen(true);
    setTargetItem({...values,_id: "unique_id"});
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className=" w-52 rounded-md border border-zinc-200 cursor-pointer h-80" onClick={ handleClick }>
          <img src={ values.img } alt={ values.name } className="h-40 w-full rounded-t-md" />
        <div className="flex justify-center items-center flex-col p-4">
          <h2 className=" hover:text-red-500 transition duration-400 font-medium text-center">{ values.name }</h2>
          { values.description && <small className="text-zinc-400 font-medium">{ values.description }</small> }
          <div className="flex justify-center items-center gap-5 mt-4">
            <h3 className="text-blue-500">R$: { values.price }</h3>
            <ButtonCartComponent onClick={ handleButtonClick }/>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemComponent;
