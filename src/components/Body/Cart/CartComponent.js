import CartItemDelete from "../../UI/CartItemDelete";
import styles from "./CartComponent.module.css";
import { useSelector } from "react-redux";
import ButtonGreen from "../../UI//ButtonGreen";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.shop.cartItem);
  const totalPrice = useSelector((state) => state.shop.totalPrice);

  console.log(cartItems);

  return (
    <>
      {cartItems.length === 0 && (
        <div className={styles.empty}>
          <p>Cart is Empty</p>
        </div>
      )}
      {cartItems.length !== 0 && (
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

          <Link to="/checkout">
            <div className={styles.btn}>
              <ButtonGreen>Proceed To Checkout</ButtonGreen>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default CartComponent;
