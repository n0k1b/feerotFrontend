import React from "react";
import styles from "./Cart.module.css";

import CartComponent from "../components/Body/Cart/CartComponent";
import ButtonGreen from "../components/UI/ButtonGreen";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <p className={styles.cartTitle}>CART</p>

      <div className={styles.cartTable}>
        <CartComponent />
        <Link to="/checkout">
          <ButtonGreen>Proceed To Checkout</ButtonGreen>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
