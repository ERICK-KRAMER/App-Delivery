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
          <li className=" flex justify-center items-center cursor-pointer gap-1 hover:text-blue-500 transition">
            <FaFacebookF/>
            <span>Facebook</span>
          </li>
          <li className=" flex justify-center items-center cursor-pointer gap-1 hover:text-green-500 transition">
            <FaWhatsapp/>
            <span>Whatsapp</span>
          </li>
        </ul>
        <div className="flex gap-5">
          <span>{context.data ? context.data.name : null}</span>
          {context.data ? <button onClick={() => {sessionStorage.clear(), window.location.reload()}} className="hover: text-red-500">Logout</button> : 
          <Link to={"/login"} className=" flex justify-center items-center cursor-pointer gap-1 hover:text-red-500 duration-500 transition-colors">
            <User/>
            <span>{context.data ? context.data.name : "entrar"}</span>
          </Link>}
        </div>
      </nav>
    </div>
  )
}
export default TopBar;