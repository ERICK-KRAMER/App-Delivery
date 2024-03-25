const SaleComponent = ({ children }: { children: React.ReactNode }) => {
  return(
    <div className="grid place-items-center mb-10">
      <div>
        <h1 className="text-4xl font-semibold pt-4 px-4 text-yellow-500 ">Ofertas</h1>
        <div className="grid grid-rows-1 grid-cols-4 gap-20 p-4 place-items-center max-lg:grid-cols-3 max-lg:gap-14 max-md:grid-cols-2">
          { children }
        </div>
      </div>
    </div>
  )
}
export default SaleComponent;