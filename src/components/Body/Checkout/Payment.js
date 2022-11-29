import styles from "./Payment.module.css";

const Payment = (props) => {
  const formHandler = (e) => {
    props.paymentOptionHandler(e.target.value);
  };
  return (
    <>
      <div className={styles.container}>
        <p className={styles.text}>PAYMENT</p>
        <div className={styles.radio} onChange={formHandler}>
          <div className={styles.r1}>
            <input
              className={styles.input}
              type="radio"
              value="Cash on Delivery"
              name="payment"
            />{" "}
            Cash on Delivery
          </div>
          <div className={styles.r2}>
            <input
              className={styles.input}
              type="radio"
              value="MFS"
              name="payment"
            />{" "}
            MFS
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
