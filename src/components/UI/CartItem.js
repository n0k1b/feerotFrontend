import styles from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
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
    </>
  );
};

export default CartItem;
