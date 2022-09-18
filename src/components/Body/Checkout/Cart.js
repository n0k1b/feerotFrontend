import CartItem from "../../UI/CartItem";
import styles from "./Cart.module.css";

import img1 from "../../../image/1.webp";
import img2 from "../../../image/2.webp";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CART_ITEM = [
  {
    name: "Reebok Club C Mid II sneakers in chalk",
    price: "$93.50",
    size: "WHITE AU 13",
    quantity: 1,
    image: img1,
  },
  {
    name: "Reebok Club C 85 sneakers in white",
    price: "$130.50",
    size: "WHITE AU 13",
    quantity: 1,
    image: img2,
  },
];

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cartItem);
  const totalPrice = useSelector((state) => state.shop.totalPrice);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.upperSection}>
          <p className={styles.itemQuantity}>{cartItems.length} ITEM</p>
          <Link className={styles.link} to="/cart">
            <p className={styles.edit}>Edit</p>
          </Link>
        </div>

        <hr className={styles.hr} />

        <div className={styles.middleSection}>
          {cartItems.map((data, i) => (
            <CartItem
              key={i}
              name={data.name}
              price={data.price}
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

export default Cart;
