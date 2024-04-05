interface IData{
  dataLogo: {
    name: string,
    url: string
  }
}

export const ImageComponent = ({ dataLogo }:IData) => {
  return (
    <div className="mx-auto flex justify-center items-center p-3">
      <img src={dataLogo.url} alt={dataLogo.name} className="rounded-full w-auto h-[80px]"/>
    </div>
  )
}