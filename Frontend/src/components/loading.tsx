import { LoaderCircleIcon } from "lucide-react"

export const LoadingCircle = ({ message }: { message?: string }) => {
  return(
    <div className="h-14 bg-yellow-500 flex justify-between items-center gap-2 px-3 rounded-md p-1 font-semibold text-sm text-white">
      { message ? `${ message }` : 'Loading...' }
      <LoaderCircleIcon size={24} className=" animate-spin"/>
    </div>
  )
}