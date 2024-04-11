import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import { LoadingCircle } from "../components/loading";
import { IProducts, ProductsPops } from "../types/Products";
import { Footer } from "../components/footer";
import Search from "../components/search";
import { useRef, useState, useEffect, useContext } from "react";
import TopBar from "../components/topbar";
import { Toolbar } from "../components/toolbar/inedx";
import ModalComponent from "../components/modal/modal";
import Item from "../components/modal/item";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Container";
import { Itens } from "../components/items";
import { LogOut, Menu, ShoppingCart, User } from "lucide-react";
import { loginContext } from "../context/userLogin";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  
  const itemNameRef = useRef<HTMLInputElement>(null);
  const [filterItems, setFilterItems] = useState<IProducts>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [targetItem, setTargetItem] = useState<ProductsPops | undefined>();
  const { data, error, isLoading } = useQuery<IProducts>({ queryKey: ['products'], queryFn: getProducts });
  const [showToolbar, setShowToolbar] = useState<boolean>(false);
  const context = useContext(loginContext);

  useEffect(() => {
    const handleResize = () => {
      setShowToolbar(window.innerWidth < 800);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) return <div className="flex justify-center items-center h-screen"><LoadingCircle/></div>;
  if (error) return <div className="flex justify-center items-center h-screen">Error! { error.message }</div>;

  const sobremesa = data?.filter(item => item.type === "sobremesa") || [];
  const bebidas = data?.filter(item => item.type === "bebidas") || [];
  const complementos = data?.filter(item => item.type === "complemento") || [];
  const hamburgueres = data?.filter(item => item.type === "lanche" || item.type === "") || [];

  const filterItemsData = () => {
    if (itemNameRef && itemNameRef.current) {
      const searchTerm = itemNameRef.current.value.toLowerCase().trim();
      if (searchTerm === "") {
        setFilterItems([]);
      } else {
        const filteredData = data?.filter(item => item.name.toLowerCase().includes(searchTerm));
        setFilterItems(filteredData || []);
      }
    }
  };

  const dataLogo = {
    name: "LogoImage",
    url: "https://painel.zeppy.com.br/storage/1/shops/1/34fa7815-logo-burguer.png"
  }

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <>
      <TopBar/>

      <Header.Root>
        <Header.Image dataLogo={dataLogo}/>
        <Header.Navigation>
          <Header.Nav>
            <Header.Option text="Hamburguer"/>
            <Header.Option text="Pizza"/>
            <Header.Option text="Complementos"/>
            <Header.Option text="Sobrimesas"/>
            <Header.Option text="Bebidas"/>
          </Header.Nav>
          <Header.Cart/>
        </Header.Navigation>
      </Header.Root>

      <Search filterItemsData={filterItemsData} itemNomeRef={itemNameRef} />
            
      {isOpen && targetItem && <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} children={<Item values={targetItem} />} />}

      {showToolbar && ( 
         <Toolbar.Root>
          <Toolbar.Option text="Entrar" icon={ Menu }/>
          <Toolbar.Option text={ context ? context.data?.name : "Inicio" } icon={ context ? LogOut : User } onClick={ handleLogout } />
          <Toolbar.Option text="0,00" icon={ ShoppingCart }/>
         </Toolbar.Root>
      )}
      
      {filterItems.length > 0 ? (
        <Wrapper.Complements title={"Filtrados"}>
          {filterItems.map(values => 
            <Itens.Itens2
            values={values} 
            key={values._id} 
            setIsOpen={setIsOpen} 
            setTargetItem={setTargetItem} 
          />)}
        </Wrapper.Complements>
      ) : (
        <>
          <Wrapper.Sale>
            {data && data.map(values => 
              <Itens.Itens1
                values={values} 
                key={values._id} 
                setIsOpen={setIsOpen}
                setTargetItem={setTargetItem}
              />)}
          </Wrapper.Sale>

          <Wrapper.Complements title={"Hambúrgeres"} description={"Os melhores hambúrgueres de Recife"}>
            {data && hamburgueres.map(values =>
              <Itens.Itens2 
              values={values}
              key={values._id} 
              setIsOpen={setIsOpen}
              setTargetItem={setTargetItem} 
            />)}
          </Wrapper.Complements>

          <Wrapper.Complements title={"Complementos"} description={"Acompanhamentos para ninguém botar defeito!"}>
            {data && complementos.map(values => 
              <Itens.Itens2 
              values={values} 
              key={values._id} 
              setIsOpen={setIsOpen} 
              setTargetItem={setTargetItem}
            />)}
          </Wrapper.Complements>

          <Wrapper.Complements title={"Sobremesas"}>
            {data && sobremesa.map(values => 
              <Itens.Itens2 
              values={values} 
              key={values._id} 
              setIsOpen={setIsOpen} 
              setTargetItem={setTargetItem}
            />)}
          </Wrapper.Complements>

          <Wrapper.Complements title={"Bebidas"}>
            {data && bebidas.map(values => 
              <Itens.Itens2 
              values={values} 
              key={values._id} 
              setIsOpen={setIsOpen} 
              setTargetItem={setTargetItem}
            />)}
          </Wrapper.Complements>
        </>
      )}

      <Footer.Root>
        <Footer.About data={dataLogo}/>
        <Footer.Category title="Category">
          <Footer.Option text="Hambúrgueres"/>
          <Footer.Option text="Pizzas"/>
          <Footer.Option text="Complementos"/>
          <Footer.Option text="Sobremesas"/>
          <Footer.Option text="Bebidas"/>
        </Footer.Category>
        <Footer.Category title="Pages">
          <Footer.Option text="Contato"/>
          <Footer.Option text="Sobre"/>
          <Footer.Option text="Política de Privacidade"/>
          <Footer.Option text="Termos de Uso"/>
          <Footer.Option text="Trocas"/>
        </Footer.Category>
        <Footer.SocialNetworks>
          <Footer.SocialNetwork icon={FaFacebookF}/>
          <Footer.SocialNetwork icon={FaInstagram}/>
          <Footer.SocialNetwork icon={FaWhatsapp}/>
        </Footer.SocialNetworks>
     </Footer.Root>

    </>
  );
}
