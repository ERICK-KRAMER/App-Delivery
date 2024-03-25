import { User } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className=" w-screen bg-slate-600 text-white">
      <nav className=" flex items-center justify-between p-2 px-4">
        <ul className=" flex justify-start items-center gap-5">
          <li className=" flex justify-center items-center cursor-pointer gap-1">
            <FaFacebookF/>
            <span>Facebook</span>
          </li>
          <li className=" flex justify-center items-center cursor-pointer gap-1">
            <FaWhatsapp/>
            <span>Whatsapp</span>
          </li>
        </ul>
        <li className=" flex justify-center items-center  cursor-pointer gap-1">
          <User/>
          <span>Entrar</span>
        </li>
      </nav>
    </div>
  )
}
export default TopBar;