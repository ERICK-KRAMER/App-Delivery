import { User } from "lucide-react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { loginContext } from "../context/userLogin";

const TopBar = () => {
  const context = useContext(loginContext);
  return (
    <div className=" bg-slate-600 text-white">
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
        <Link to={"/login"} className=" flex justify-center items-center cursor-pointer gap-1 hover:text-red-500 duration-500 transition-colors">
          <User/>
          <span>{context.data ? context.data.name : "entrar"}</span>
        </Link>
      </nav>
    </div>
  )
}
export default TopBar;