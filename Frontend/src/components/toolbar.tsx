import { ShoppingCart, Menu, User } from "lucide-react"

const Toolbar = () => {
  return(
    <div className="bg-zinc-100 w-screen h-[60px] fixed bottom-0">
      <nav className="h-full">
        <ul className=" flex justify-around items-center h-full">
          <li className="flex justify-center items-center flex-col  border border-zinc-300 w-full h-full cursor-pointer">
            <User/>
            <small>Entrar</small>
          </li>
          <li className="flex justify-center items-center flex-col  border border-zinc-300 w-full h-full cursor-pointer">
            <Menu/>
            <small>Inicio</small>
          </li>
          <li className=" flex justify-center items-center flex-col border border-zinc-300 w-full h-full cursor-pointer">
            <div className="relative">
              <ShoppingCart />
              <small className="absolute top-[-1px] right-[-23px] rounded-full bg-red-500 w-5 h-4 pb-1 flex justify-center items-center">{0}</small>
            </div>
            <small>0,00</small>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Toolbar
