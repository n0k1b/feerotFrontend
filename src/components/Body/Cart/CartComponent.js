import CartItemDelete from "../../UI/CartItemDelete";
import styles from "./CartComponent.module.css";
import { useSelector } from "react-redux";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.shop.cartItem);
  const totalPrice = useSelector((state) => state.shop.totalPrice);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.upperSection}>
          <p className={styles.itemQuantity}>{cartItems.length} ITEM</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.middleSection}>
          {cartItems.map((data, i) => (
            <CartItemDelete
              key={i}
              id={data.id}
              name={data.name}
              price={data.price}
              color={data.color}
              size={data.size}
              quantity={data.quantity}
              image={data.image}
            />
          ))}
        </div>

        <hr className={styles.hr} />

        <div className={styles.lowerSection}>
          <div className={styles.subTotal}>
            <p>Subtotal</p>
            <p>${totalPrice}</p>
          </div>

          <div className={styles.total}>
            <p>TOTAL TO PAY</p>
            <p>${totalPrice}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
