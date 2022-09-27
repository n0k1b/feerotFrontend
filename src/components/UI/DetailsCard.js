import styles from "./DetailsCard.module.css";

const DetailsCard = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p>{props.title}</p>
        </div>
        <div className={styles.content}>
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
