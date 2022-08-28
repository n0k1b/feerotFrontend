import DeliveryAddress from "../components/Body/Checkout/DeliveryAddress";
import DeliveryOption from "../components/Body/Checkout/DeliveryOption";
import Payment from "../components/Body/Checkout/Payment";
import PromoCode from "../components/Body/Checkout/PromoCode";
import ButtonGreen from "../components/UI/ButtonGreen";
import styles from "./Pages.module.css";

const Checkout = () => {
  return (
    <div className={styles.checkoutContainer}>
      <div>
        <p className={styles.checkoutTitle}>CHECKOUT</p>
        <PromoCode />
        <DeliveryAddress />
        <DeliveryOption />
        <Payment />
        <ButtonGreen>PLACE ORDER</ButtonGreen>
      </div>
    </div>
  );
};

export default Checkout;
