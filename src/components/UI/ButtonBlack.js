import styles from "./ButtonBlack.module.css";

const ButtonBlack = (props) => {
  return (
    <>
      <button className={styles.btn}>{props.children}</button>
    </>
  );
};

export default ButtonBlack;
