import styles from "./CartItemDelete.module.css";
import { AiFillDelete } from "react-icons/ai";

const CartItem = (props) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img className={styles.img} src={props.image} alt="" />

          <div className={styles.text}>
            <p className={styles.price}>{props.price}</p>
            <p className={styles.name}>{props.name}</p>
            <p className={styles.size}>{props.size}</p>
            <p className={styles.quantity}>
              Qty: <strong>{props.quantity}</strong>
            </p>
          </div>
        </div>
        <AiFillDelete className={styles.deleteIcon} />
      </div>
    </>
  );
};

export default CartItem;
