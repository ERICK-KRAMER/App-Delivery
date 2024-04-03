import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import { LoadingCircle } from "../components/loading";
import { IProducts, ProductsPops } from "../types/Products";
import FooterComponent from "../components/footer/footer";
import ItemComponent from "../components/items/itemCompoenet1";
import Complements from "../components/complements";
import ItemComponent2 from "../components/items/itemComponent2";
import SaleComponent from "../components/sale";
import Search from "../components/search";
import { useRef, useState, useEffect, useContext } from "react";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Toolbar from "../components/toolbar";
import ModalComponent from "../components/modal/modal";
import Item from "../components/modal/item";
import UserContext from "../context";

export default function Home() {
  
  const itemNameRef = useRef<HTMLInputElement>(null);
  const [filterItems, setFilterItems] = useState<IProducts>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [targetItem, setTargetItem] = useState<ProductsPops | undefined>();
  const { data, error, isLoading } = useQuery<IProducts>({ queryKey: ['products'], queryFn: getProducts });
  const [showToolbar, setShowToolbar] = useState<boolean>(false);
  const userLogin = useContext(UserContext);

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

  return (
    <>

      <button onClick={()=> console.log(userLogin?.email)}> teste </button>

      <TopBar/>

      <Header/>

      <Search filterItemsData={filterItemsData} itemNomeRef={itemNameRef} />
            
      {isOpen && targetItem && <ModalComponent isOpen={isOpen} setIsOpen={setIsOpen} children={<Item values={targetItem} />} />}

      {showToolbar && (
        <Toolbar />
      )}
      
      {filterItems.length > 0 ? (
        <Complements title={"Filtrados"}>
          {filterItems.map(values => <ItemComponent2 values={values} key={values._id} setIsOpen={setIsOpen} setTargetItem={setTargetItem} />)}
        </Complements>
      ) : (
        <>
          <SaleComponent>
            {data && data.map(values => <ItemComponent values={values} key={values._id} setIsOpen={setIsOpen} setTargetItem={setTargetItem}/>)}
          </SaleComponent>

          <Complements title={"Hambúrgeres"} description={"Os melhores hambúrgueres de Recife"}>
            {data && hamburgueres.map(values => <ItemComponent2 values={values} key={values._id}setIsOpen={setIsOpen} setTargetItem={setTargetItem} />)}
          </Complements>

          <Complements title={"Complementos"} description={"Acompanhamentos para ninguém botar defeito!"}>
            {data && complementos.map(values => <ItemComponent2 values={values} key={values._id} setIsOpen={setIsOpen} setTargetItem={setTargetItem}/>)}
          </Complements>

          <Complements title={"Sobremesas"}>
            {data && sobremesa.map(values => <ItemComponent2 values={values} key={values._id} setIsOpen={setIsOpen} setTargetItem={setTargetItem}/>)}
          </Complements>

          <Complements title={"Bebidas"}>
            {data && bebidas.map(values => <ItemComponent2 values={values} key={values._id} setIsOpen={setIsOpen} setTargetItem={setTargetItem}/>)}
          </Complements>
        </>
      )}

      <FooterComponent/>
    </>
  );
}
