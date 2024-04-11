import { ElementType } from "react"

export const SocialNetwork = ({icon: Icon}:{icon:ElementType}) => {
  return (
    <div className="p-2 flex justify-center items-center bg-slate-600 rounded-md m-1 hover:bg-white hover:text-blue-500 transition duration-500">
      <Icon className="w-12 h-12"/>
    </div>
  )
}
