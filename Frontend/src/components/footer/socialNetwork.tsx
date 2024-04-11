import { ElementType, HtmlHTMLAttributes } from "react"

export interface IIcon extends HtmlHTMLAttributes<HTMLDivElement>{
  icon: ElementType
  className?: string
}

export const SocialNetwork = ({icon: Icon, className}: IIcon) => {
  return (
    <div className={`p-2 flex justify-center items-center bg-slate-600 rounded-md m-1 hover:bg-white transition duration-500 cursor-pointer ${className}`}>
      <Icon className="w-12 h-12"/>
    </div>
  )
}
