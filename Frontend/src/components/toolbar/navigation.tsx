export interface INavigationToolbar {
  children: React.ReactNode
}
export const Navigation = ({children}: INavigationToolbar) => {
  return(
    <div className="bg-zinc-100 w-screen h-[60px] fixed bottom-0">
      <nav className="h-full">
        <ul className=" flex justify-around items-center h-full">
          {children}
        </ul>
      </nav>
    </div>
  )
}
