import { ShoppingCart } from "lucide-react"

export const ShoppingCartComponent = () => {
  return(
    <div className=" flex justify-center items-center gap-3 max-[800px]:hidden">
      <div className=" relative bg-zinc-200 w-11 h-11 rounded-full flex justify-center items-center">
        <ShoppingCart/>
        <small className=" bg-yellow-500 w-5 h-5 top-[-4px] right-[-4px] rounded-full absolute flex justify-center items-center">{0}</small>
      </div>
      <div className="flex justify-center items-center flex-col ">
        <small>Carrinho</small>
        <small>R${"0,00"}</small>
      </div>
    </div>
  )
}