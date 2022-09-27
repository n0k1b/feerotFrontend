import styles from "./CartItemDelete.module.css";
import { AiFillDelete } from "react-icons/ai";
import {useDispatch} from "react-redux";
import {shopActions} from "../../redux/shop-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(shopActions.deleteCartItem(parseInt(props.id)))
  }
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img className={styles.img} src={props.image} alt="" />

          <div className={styles.text}>
            <p className={styles.price}>${props.price}</p>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.size}>
              {props.color} {props.size}
            </p>
            <p className={styles.quantity}>
              Qty: <strong>{props.quantity}</strong>
            </p>
          </div>
        </div>
        <AiFillDelete onClick={deleteItemHandler} className={styles.deleteIcon} />
      </div>
    </>
  );
};

export default CartItem;
