export const NavComponent = ({children}: {children: React.ReactNode}) => {
  return(
    <nav className="flex justify-between w-full">
      <ul className="flex gap-4 container max-[800px]:justify-between">
        {children}
      </ul>
    </nav>
  )
}