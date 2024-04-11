export const SocialNetworkContainer = ({children}: {children: React.ReactNode}) => {
  return(
    <div className="flex justify-center items-center flex-col">
      <h3 className="text-xl font-medium">Rede sociais</h3>
      <div className="flex justify-start ">
        {children}
      </div>
    </div>
  )
}