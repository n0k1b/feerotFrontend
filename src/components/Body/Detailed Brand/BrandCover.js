import styles from "./BrandCover.module.css";
import ButtonRed from "../../UI/ButtonRed";

const BrandCover = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>
            <strong>{props.brand}</strong> Cash Back Offers and Discounts
          </p>
        </div>

        <div className={styles.banner}>
          <img className={styles.cover} src={props.cover} alt="bannner" />
          <div className={styles.imageDP}>
            <img className={styles.dp} src={props.logo} alt="logo" />
          </div>
        </div>

        <div className={styles.discountText}>
          <p>
            {props.discount} {props.brand}
          </p>
          <ButtonRed>{props.btn}</ButtonRed>
        </div>
      </div>
    </>
  );
};

export default BrandCover;
