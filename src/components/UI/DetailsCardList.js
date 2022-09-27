import styles from "./DetailsCard.module.css";
import List from "../Body/Detailed Brand/List";

const DetailsCardList = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p>{props.title}</p>
        </div>
        <div className={styles.content}>
          <List title={props.description.title} list={props.description.list} />
        </div>
      </div>
    </>
  );
};

export default DetailsCardList;
