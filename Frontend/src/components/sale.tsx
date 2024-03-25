const SaleComponent = ({ children }: { children: React.ReactNode }) => {
  return(
    <div>
      <div>
        <h1 className="text-4xl font-semibold pt-4 px-4 text-yellow-500 ">Ofertas</h1>
        <div className="grid grid-rows-1 grid-cols-4 gap-3 p-4 place-items-center">
          { children }
        </div>
      </div>
    </div>
  )
}
export default SaleComponent;