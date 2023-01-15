import { Link } from "react-router-dom";
import Button from "../UI/Button";
import styles from "./RStore.module.css";

const RStore = (props) => {
  return (
    <>
      <Link className={styles.link} to={`/shop/${props.id}`}>
        <div className={styles.container}>
          <div>
            <p className={styles.text}>{props.name}</p>
            <p className={styles.offer}>{props.offer}%</p>
          </div>
          <div className={styles.btn}>
            <Button>{props.btn}</Button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default RStore;
