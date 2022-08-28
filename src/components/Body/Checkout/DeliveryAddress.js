import ButtonBlack from "../../UI/ButtonBlack";
import styles from "./DeliveryAddress.module.css";

const DeliveryAddress = () => {
  return (
    <>
      <div className={styles.emailContainer}>
        <p className={styles.title}>EMAIL ADDRESS</p>
        <p className={styles.email}>xyz@gmail.com</p>
      </div>

      <div className={styles.deliveryAddress}>
        <p className={styles.title}>DELIVERY ADDRESS</p>
        <p className={styles.secondaryTitle}>ADD ADDRESS :</p>

        <p className={styles.inputTitle}>FIRST NAME :</p>
        <input className={styles.input} type="text" />

        <p className={styles.inputTitle}>LAST NAME :</p>
        <input className={styles.input} type="text" />

        <p className={styles.inputTitle}>MOBILE (For delivery updates) :</p>
        <input className={styles.input} type="text" />

        <p className={styles.inputTitle}>ADDRESS :</p>
        <input className={styles.input} type="text" />
        <input className={styles.input} type="text" />

        <p className={styles.inputTitle}>CITY :</p>
        <input className={styles.input} type="text" />

        <p className={styles.inputTitle}>POSTCODE :</p>
        <input className={styles.input} type="text" />

        <p className={styles.inputTitle}>COUNTRY :</p>
        <input className={styles.input} type="text" />

        <ButtonBlack>DELIVER TO THIS ADDRESS</ButtonBlack>
      </div>
    </>
  );
};

export default DeliveryAddress;
