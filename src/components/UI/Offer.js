import styles from "./Offer.module.css";

const Offer = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <p className={styles.text}>{props.brand} Offers</p>
          <p className={styles.text}>{props.type}</p>
        </div>

        <div className={styles.section2}>
          <div className={styles.text}>
            <p className={styles.text}>
              <strong>{props.title}*</strong>
            </p>
            <p className={styles.text}>*{props.description}.</p>
          </div>
          <p className={styles.discount}>{props.amount}</p>
        </div>
      </div>
    </>
  );
};

export default Offer;
