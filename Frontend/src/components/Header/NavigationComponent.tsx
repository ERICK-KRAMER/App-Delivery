export const NavigationComponent = ({children}:{children: React.ReactNode}) => {
  return(
    <div className="flex justify-center items-center">
      <div className=" h-[70px] w-[800px] border border-zinc-200 flex items-center px-7 rounded-lg shadow-sm 2xl:w-4/5 justify-center xl:w-4/5 lg:w-4/5 md:w-4/5 sm:w-4/5">
        {children}        
      </div>
    </div>
  )
}
   