export const OptionComponent = ({text}: {text: string}) => {
  return <li className="hover:underline hover:text-yellow-500 cursor-pointer max-[800px]:text-sm">{text}</li>
}