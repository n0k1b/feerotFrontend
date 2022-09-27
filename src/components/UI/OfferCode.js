import styles from "./OfferCode.module.css";
import { BsTagFill } from "react-icons/bs";

const OfferCode = (props) => {
  return (
    <div className={styles.container}>
      <BsTagFill className={styles.tag} />
      <p className={styles.text}>
        {props.offer} <strong>{props.code}</strong>
      </p>
    </div>
  );
};

export default OfferCode;
