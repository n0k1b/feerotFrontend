import styles from "./StoreBig.module.css";
import { BsPlusCircleFill } from "react-icons/bs";

const StoreBig = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.img} src={props.image} alt="" />
        </div>
        <div className={styles.textContainer}>
          <BsPlusCircleFill className={styles.plus} />
          <p>
            {props.discount}% discount <span>was {props.was}%</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default StoreBig;
