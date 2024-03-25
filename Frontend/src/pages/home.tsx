import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import { LoadingCircle } from "../components/loading"
import { IProducts } from "../types/Products";
import ItemComponent from "../components/items/itemCompoenet1";
import Complements from "../components/complements";
import ItemComponent2 from "../components/items/itemComponent2";
import SaleComponent from "../components/sale";
import Toolbar from "../components/toolbar";
import TopBar from "../components/topbar";
import Search from "../components/search";
import Header from "../components/header";

export default function Home() {

  const { data, error, isLoading } = useQuery<IProducts>({ queryKey: ['products'], queryFn: getProducts })
  
  if(isLoading) return <div className="flex justify-center items-center h-screen"><LoadingCircle/></div>;
  
  if(error) return  <div className="flex justify-center items-center h-screen">Error! { error.message } </div>

  const sobremesa = data?.filter(item => item.type == "sobremesa") || [];

  const bebidas = data?.filter(item => item.type === "bebidas") || [];

  const complementos = data?.filter(item => item.type === "complemento") || [];

  const hamburgueres = data?.filter(item => item.type === "lanche" || item.type === "") || [];


  
  if(data && data.length > 0){

    return(
      <>
        <TopBar/>

        <Header/>

        <Search/>

        <SaleComponent>
          {data && data.map(values => 
            <ItemComponent values={values} key={values._id} />
            )}
        </SaleComponent>

        <Complements title={"Hambúrgeres"} description={"Os melhores hambúrgueres de Recife"}>
          {data && hamburgueres.map(values => 
            <ItemComponent2 values={values} key={values._id} />
            )}
        </Complements>

        <Complements title={"Complementos"} description={"Acompanhamentos para ninguém botar defeito!"}>
          {data && complementos.map(values => 
            <ItemComponent2 values={values} key={values._id} />
            )}
        </Complements>

        <Complements title={"Sobremesas"}>
          {data && sobremesa?.map(values => 
            <ItemComponent2 values={values} key={values._id} />
            )}
        </Complements>

        <Complements title={"Bebidas"}>
          {data && bebidas.map(values => 
            <ItemComponent2 values={values} key={values._id} />
            )}
        </Complements>

       { toolbar ? <div className="pt-14"><Toolbar/></div> : null }         
        
      </>
    )
  } 
}