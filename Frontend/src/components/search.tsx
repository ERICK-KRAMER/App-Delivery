import { SearchIcon } from "lucide-react";
import { RefObject } from "react";

interface IPropsSearch{
  itemNomeRef: RefObject<HTMLInputElement>
  filterItemsData: () => void
}

const Search = ({ itemNomeRef, filterItemsData }: IPropsSearch) => {
  return(
    <div className=" flex justify-center items-center pt-5">
      <div className="max-2xl:w-4/5 max-xl:w-4/5 max-lg:w-4/5 max-md:w-4/5 max-sm:w-[90%] w-[90%] flex justify-center items-center h-[60px] rounded-md  border border-zinc-200 px-4">
        <input type="text" className="bg-zinc-200 w-[90%] rounded-sm h-3/5 px-3 border border-zinc-200 outline-none font-medium" placeholder="Search" ref={ itemNomeRef } onChange={ filterItemsData }/>
        <button className="h-[60%] w-14 flex justify-center items-center bg-yellow-500 rounded-sm "><SearchIcon/></button>
      </div>
    </div>
  )
}
export default Search;