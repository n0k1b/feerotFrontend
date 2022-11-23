import React from "react";
import styles from "./Cart.module.css";
import CartComponent from "../components/Body/Cart/CartComponent";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <p className={styles.cartTitle}>CART</p>

      <div className={styles.cartTable}>
        <CartComponent />
      </div>
    </div>
  );
};

export default Cart;
