import { IPropsProduct } from "../../types/Products";
import ButtonCartComponent from "../ButtonCart";

const Item = ({ values }: IPropsProduct) => {
  return(
    <div>
      <h2>{values.name}</h2>
      <img src={values.img} alt={values.name} />
      <p>{values.price}</p>
      <p>{}</p>
      <ButtonCartComponent/>
    </div>
  )
}
export default Item;