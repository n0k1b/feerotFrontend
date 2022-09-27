import styles from "./ButtonRed.module.css";

const ButtonRed = (props) => {
  return (
    <>
      <button className={styles.btn}>
        <strong>{props.children}</strong>
      </button>
    </>
  );
};

export default ButtonRed;
