import { ShoppingCart } from "lucide-react";
import { HtmlHTMLAttributes } from "react";

const ButtonCartComponent: React.FC<HtmlHTMLAttributes<HTMLButtonElement>> = ({ ...props }) => {
  return <button className="bg-yellow-500 w-14 h-9 flex justify-center items-center rounded-md text-white" { ...props }>+<ShoppingCart size={20} /></button>
}
export default ButtonCartComponent;