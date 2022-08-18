import styles from "./ButtonRound.module.css";

const ButtonRound = (props) => {
  return (
    <>
      <button className={styles.btn}>{props.children}</button>
    </>
  );
};

export default ButtonRound;
