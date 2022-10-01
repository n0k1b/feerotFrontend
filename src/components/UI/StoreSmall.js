import styles from "./StoreSmall.module.css";
import { BsPlusCircleFill } from "react-icons/bs";

const StoreSmall = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={props.image} alt="logo" />
        </div>

        <div className={styles.text}>
          <p className={styles.brandTitle}>{props.name}</p>

          <div className={styles.description}>
            <BsPlusCircleFill className={styles.plus} />
            <p>
              {props.discount}% <span>was {props.was}%</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoreSmall;
