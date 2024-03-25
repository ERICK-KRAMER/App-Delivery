import { SearchIcon } from "lucide-react";

const Search = () => {
  return(
    <div className=" flex justify-center items-center pt-5">
      <div className="2xl:w-4/5 xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5 flex justify-center items-center h-[60px] rounded-md  border border-zinc-200">
        <input type="text" className="bg-zinc-200 w-4/5 rounded-sm h-3/5 px-3 border border-zinc-200 outline-none font-medium" placeholder="Search" />
        <button className="h-[60%] w-14 flex justify-center items-center bg-yellow-500 rounded-sm "><SearchIcon/></button>
      </div>
    </div>
  )
}
export default Search;