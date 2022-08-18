import styles from "./BrandCard.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import ButtonRound from "./ButtonRound";

const BrandCard = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img className={styles.img} src={props.image} alt="logo" />
        </div>

        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <div className={styles.textContainer}>
            <BsPlusCircleFill className={styles.plus} />
            <p>
              {props.discount} <span>was {props.was}</span>
            </p>
          </div>
        </div>

        <div className={styles.btn}>
          <ButtonRound>See Details</ButtonRound>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
