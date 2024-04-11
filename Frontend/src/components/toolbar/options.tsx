import { ElementType, LiHTMLAttributes } from "react"

export interface IOptionsToolbar extends LiHTMLAttributes<HTMLLIElement> {
  text?: string
  icon: ElementType
}

export const OptionsToolbar = ({text, icon: Icon }: IOptionsToolbar) => {
  return(
    <li className="flex justify-center items-center flex-col  border border-zinc-300 w-full h-full cursor-pointer">
      <Icon />
      <small>{text}</small>
    </li>
  )
}