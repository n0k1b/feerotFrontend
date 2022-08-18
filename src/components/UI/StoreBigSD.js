import styles from "./StoreBigSD.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import ButtonRound from "./ButtonRound";

const StoreBigSD = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.img} src={props.image} alt="" />
        </div>
        <div className={styles.textContainer}>
          <BsPlusCircleFill className={styles.plus} />
          <p>
            {props.discount} <span>was {props.was}</span>
          </p>
        </div>
        <ButtonRound>See Details</ButtonRound>
      </div>
    </>
  );
};

export default StoreBigSD;
