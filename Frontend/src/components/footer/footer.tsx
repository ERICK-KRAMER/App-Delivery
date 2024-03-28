import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const FooterComponent = () => {
  return(
    <footer className="bg-slate-800 p-8 text-white mb-14">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <img src="" alt="name" />
          <div className="flex flex-col items-center">
          <h3>Informações de Contato</h3>
          <p>Rua Dois, Centro do Recife/PE</p>
          <p>(81)90000-0000</p>
        </div>
        </div>
        <div className="flex flex-col items-center">
          <h3>Categorias</h3>
          <ul>
            <li>Hambúrgueres</li>
            <li>Pizzas</li>
            <li>Complementos</li>
            <li>Sobremesas</li>
            <li>Bebidas</li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3>Páginas</h3>
          <ul>
            <li>Contato</li>
            <li>Sobre</li>
            <li>Política de Privacidade</li>
            <li>Termos de Uso</li>
            <li>Trocas</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-flow-col place-items-center   py-2 ">
        <div className="flex justify-center items-center flex-col">
          <h3 className="text-xl font-medium">Rede sociais</h3>
          <div className="flex justify-start ">
            <div className="p-2 flex justify-center items-center bg-slate-600 rounded-md m-1 hover:bg-white hover:text-blue-500 transition duration-500">
              <FaFacebookF className="w-12 h-12"/>
            </div>
            <div className="p-2 flex justify-center items-center bg-slate-600 rounded-md m-1 hover:bg-white hover:text-green-500 transition duration-500">
              <FaWhatsapp className="w-12 h-12"/>
            </div>
            <div className="p-2 flex justify-center items-center bg-slate-600 rounded-md m-1 hover:bg-white hover:text-violet-500 transition duration-500">
              <FaInstagram className="w-12 h-12"/>
            </div>
          </div>
        </div>
        <div className=" bg-white text-black p-4 rounded-md w-[420px]">
          <h3 className="text-center font-bold text-2xl">Horario de Funcionamento</h3>
          <ul className="font-semibold">
            <li>DOM: Fechado</li>
            <li>Seg: 11:00 as 12:22</li>
            <li>Ter: 11:00 as 14:00 / 19:00 as 23:30</li>
            <li>Qua: 11:00 as 14:00 / 19:00 as 23:30</li>
            <li>Qui: 11:00 as 14:00 / 19:00 as 23:30</li>
            <li>Sex: 11:00 as 14:00</li>
            <li>Sáb: 11:00 as 14:00 / 19:00 as 23:30</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
