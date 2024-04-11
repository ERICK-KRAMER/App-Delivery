export const Category = ({children, title}:{children:React.ReactNode, title:string}) => {
  return(
    <div className="col-span-1 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h3>{title}</h3>
        <ul>
          {children}
        </ul>
      </div>
    </div>
  )
}