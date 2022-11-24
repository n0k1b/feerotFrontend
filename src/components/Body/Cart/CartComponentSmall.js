import styles from "./CartComponentSmall.module.css";
import ButtonGreen from "../../UI/ButtonGreen";
import CartItemSmall from "../../UI/CartItemSmall";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartComponent = () => {
  const cartItems = useSelector((state) => state.shop.cartItem);
  const totalPrice = useSelector((state) => state.shop.totalPrice);

  return (
    <>
      <div className={styles.container}>
        {cartItems.length === 0 && (
          <p className={styles.empty}>Cart is Empty</p>
        )}

        {cartItems.length !== 0 && (
          <div>
            <div className={styles.topSection}>
              <div className={styles.upperSection}>
                <p className={styles.itemQuantity}>{cartItems.length} ITEM</p>
              </div>

              <hr className={styles.hr} />

              <div className={styles.middleSection}>
                {cartItems.map((data, i) => (
                  <CartItemSmall
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
            </div>

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
            <Link className={styles.link} to="/cart">
              <ButtonGreen>View Cart</ButtonGreen>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartComponent;
