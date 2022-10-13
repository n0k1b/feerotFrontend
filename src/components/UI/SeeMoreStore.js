import styles from "./SeeMoreStore.module.css";
import { BsPlusCircleFill } from "react-icons/bs";

const SeeMoreStore = (props) => {
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

export default SeeMoreStore;
