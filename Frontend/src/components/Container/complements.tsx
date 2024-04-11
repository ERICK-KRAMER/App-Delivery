const Complements = ({ children, title, description }: { children: React.ReactNode, title: string, description?: string }) => {
  return(
    <div className="grid place-items-center my-8">
      <h1 className="text-4xl font-semibold px-4 text-yellow-500 ">{ title }</h1>
      { description ? <p className=" text-zinc-400 font-medium px-4">{ description }</p>: null }
      <div className="grid grid-rows-1 grid-cols-3 gap-14 p-4 place-items-center max-xl:grid-cols-2 max-lg:grid-cols-1">
        { children }
      </div>
    </div>
  )
}
export default Complements;