import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import { LoadingCircle } from "../components/loading";
import { IProducts } from "../types/Products";
import FooterComponent from "../components/footer/footer"
import ItemComponent from "../components/items/itemCompoenet1";
import Complements from "../components/complements";
import ItemComponent2 from "../components/items/itemComponent2";
import SaleComponent from "../components/sale";
import Search from "../components/search";
import { useRef, useState } from "react";
import TopBar from "../components/topbar";
import Header from "../components/header";
import Toolbar from "../components/toolbar";

export default function Home() {
  const itemNameRef = useRef<HTMLInputElement>(null);
  const [filterItems, setFilterItems] = useState<IProducts>([]);
  const { data, error, isLoading } = useQuery<IProducts>({ queryKey: ['products'], queryFn: getProducts });

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

  const handleSearchItem = () => {
    console.log("clicou")
  }

  return (
    <>
      <TopBar/>

      <Header handleSearchItem={ handleSearchItem }/>

      <Search filterItemsData={filterItemsData} itemNomeRef={itemNameRef} />
      
      {filterItems.length > 0 ? (
        <Complements title={"Filtrados"}>
          {filterItems.map(values => <ItemComponent2 values={values} key={values._id} />)}
        </Complements>
      ) : (
        <>
          <SaleComponent>
            {data && data.map(values => <ItemComponent values={values} key={values._id} />)}
          </SaleComponent>

          <Complements title={"Hambúrgeres"} description={"Os melhores hambúrgueres de Recife"}>
            {data && hamburgueres.map(values => <ItemComponent2 values={values} key={values._id} />)}
          </Complements>

          <Complements title={"Complementos"} description={"Acompanhamentos para ninguém botar defeito!"}>
            {data && complementos.map(values => <ItemComponent2 values={values} key={values._id} />)}
          </Complements>

          <Complements title={"Sobremesas"}>
            {data && sobremesa.map(values => <ItemComponent2 values={values} key={values._id} />)}
          </Complements>

          <Complements title={"Bebidas"}>
            {data && bebidas.map(values => <ItemComponent2 values={values} key={values._id} />)}
          </Complements>
        </>
      )}
      
      <FooterComponent/>

      <Toolbar/>
    </>
  );
}
