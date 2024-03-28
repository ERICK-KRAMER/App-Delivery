import { ShoppingCart } from "lucide-react";

interface Props{
  handleSearchItem: () => void
}

const NavBar = ({ handleSearchItem }:Props) => {
  return(
    <div className="w-screen flex justify-center items-center">
      <div className=" h-[70px] w-[800px] border border-zinc-200 flex items-center px-7 rounded-lg shadow-sm 2xl:w-4/5 justify-center xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5">
        <nav className="flex justify-between w-full">
          <ul className=" flex gap-4 ">
            <li className="hover:underline hover:text-yellow-500 cursor-pointer" onClick={(e)=>handleSearchItem(e.target.value)}>Hambúrgueres</li>
            <li className="hover:underline hover:text-yellow-500 cursor-pointer" onClick={(e)=>handleSearchItem(e.target.value)}>Pizzas</li>
            <li className="hover:underline hover:text-yellow-500 cursor-pointer" onClick={(e)=>handleSearchItem(e.target.value)}>Complementos</li>
            <li className="hover:underline hover:text-yellow-500 cursor-pointer" onClick={(e)=>handleSearchItem(e.target.value)}>Sobrimesas</li>
            <li className="hover:underline hover:text-yellow-500 cursor-pointer" onClick={(e)=>handleSearchItem(e.target.value)}>Bebidas</li>
          </ul>
          <div className="flex">
          </div>
        </nav>
        <div className=" flex justify-center items-center gap-3">
          <div className=" relative bg-zinc-200 w-11 h-11 rounded-full flex justify-center items-center">
            <ShoppingCart/>
            <small className=" bg-yellow-500 w-5 h-5 top-[-4px] right-[-4px] rounded-full absolute flex justify-center items-center">{0}</small>
          </div>
          <div className="flex justify-center items-center flex-col ">
            <small>Carrinho</small>
            <small>R${"0,00"}</small>
          </div>
        </div>
      </div>
    </div>
  )
}
export default NavBar;