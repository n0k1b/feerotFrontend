import styles from "./List.module.css";
import { AiFillCaretRight } from "react-icons/ai";

const List = (props) => {
  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.ListTitleContainer}>
          <AiFillCaretRight className={styles.arrow} />
          <p className={styles.title}>{props.title}</p>
        </div>

        <ul className={styles.ui}>
          {props.list.map((data, i) => (
            <li key={i} className={styles.li}>
              {data}
            </li>
          ))}
        </ul>
      </div>
      <hr className={styles.hr} />
    </>
  );
};

export default List;
