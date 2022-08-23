import styles from "./Deals.module.css";
import { AiOutlineRight } from "react-icons/ai";

const Deals = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img className={styles.img} src={props.image} alt="logo" />
        </div>

        <div className={styles.text}>
          <p className={styles.title}>{props.title}</p>
          <p>{props.discount}</p>
        </div>
      </div>

      <AiOutlineRight className={styles.arrow} />
    </div>
  );
};

export default Deals;
