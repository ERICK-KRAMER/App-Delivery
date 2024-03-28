import NavBar from "./navbar";

interface Props{
  handleSearchItem: () => void
}

const Header = ({ handleSearchItem }: Props) => {
  return (
    <div className="bg-darker bg-size-cover bg-position-center pb-4 pt-3 pt-md-5" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(251, 178, 22, 0.7)), url("https://painel.zeppy.com.br/storage/1/shops/1/34fa783b-bg-hamburguer.jpeg")', backgroundRepeat: 'no-repeat'}} >
      <div className="container py-md-4">
        <div className="row align-items-center g-3">
          <div className="col-3 col-md-auto">
            <img src="https://painel.zeppy.com.br/storage/1/shops/1/34fa7815-logo-burguer.png" alt="Logo" />
          </div>
        </div>
      </div>
      <NavBar handleSearchItem={ handleSearchItem }/>
    </div>
  )
}
export default Header;
