import Cart from "../components/Body/Checkout/Cart";
import DeliveryAddress from "../components/Body/Checkout/DeliveryAddress";
import Payment from "../components/Body/Checkout/Payment";
import PromoCode from "../components/Body/Checkout/PromoCode";
import ButtonGreen from "../components/UI/ButtonGreen";
import styles from "./Pages.module.css";

const Checkout = () => {
  const formSubmitHandler = () => {};
  return (
    <div className={styles.checkoutContainer}>
      <div>
        <p className={styles.checkoutTitle}>CHECKOUT</p>

        <div className={styles.mainSection}>
          <div className={styles.content}>
            <PromoCode />
            <DeliveryAddress />
            {/* <DeliveryOption /> */}
            <Payment />
            <div onClick={formSubmitHandler}>
              <ButtonGreen>PLACE ORDER</ButtonGreen>
            </div>
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
