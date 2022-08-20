import styles from "./BrandCover.module.css";
import banner from "../../../image/yellow_banner.webp";
import yellow from "../../../image/yellow.png";
import Button from "../../UI/Button";
import ButtonRed from "../../UI/ButtonRed";

const BrandCover = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>
            <strong>Yellow</strong> Cash Back Offers and Discounts
          </p>
        </div>

        <div className={styles.banner}>
          <img className={styles.cover} src={banner} alt="bannner" />
          <div className={styles.imageDP}>
            <img className={styles.dp} src={yellow} alt="logo" />
          </div>
        </div>

        <div className={styles.discountText}>
          <p>Get up to 8% of your purchase back when you shop with Yellow</p>
          <ButtonRed>Get Cash Back Now</ButtonRed>
        </div>
      </div>
    </>
  );
};

export default BrandCover;
