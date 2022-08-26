import styles from "./ButtonGreen.module.css";

const ButtonGreen = (props) => {
  return (
    <>
      <button className={styles.btn}>{props.children}</button>
    </>
  );
};

export default ButtonGreen;
