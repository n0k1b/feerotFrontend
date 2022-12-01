import Cart from "../components/Body/Checkout/Cart";
import DeliveryAddress from "../components/Body/Checkout/DeliveryAddress";
import PromoCode from "../components/Body/Checkout/PromoCode";
import styles from "./Pages.module.css";

const Checkout = () => {
  return (
    <div className={styles.checkoutContainer}>
      <div>
        <p className={styles.checkoutTitle}>CHECKOUT</p>
        <div className={styles.mainSection}>
          <div className={styles.content}>
            <PromoCode />
            <DeliveryAddress />
          </div>

          <div className={styles.cart}>
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
