export interface IData {
  data: {
    name: string;
    url: string;
  }
}

export const About = ({data}: IData) => {
  return (
    <div className="flex flex-col items-center">
      <img src={data.url} alt={data.name} />
      <div className="flex flex-col items-center">
      <h3>Informações de Contato</h3>
      <p>Rua Dois, Centro do Recife/PE</p>
      <p>(81)90000-0000</p>
      </div>
    </div>
  )
}