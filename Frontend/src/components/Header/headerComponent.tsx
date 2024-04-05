export const HeaderComponent = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="bg-darker bg-size-cover bg-position-center pb-4 pt-3 pt-md-5 bg-cover bg-custom-background">
      <div className="py-md-4">
        <div className=" container mx-auto row align-items-center g-3">
          {children}
        </div>
      </div>
    </div>
  )
}
