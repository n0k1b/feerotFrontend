import { useParams } from "react-router-dom";
import styles from "./Pages.module.css";

const SeeMore = () => {
  const params = useParams();
  const titleModified = params.title.replace(/_/g, " ");
  const title = titleModified.replace("-percent", "%");

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
      </div>
    </>
  );
};

export default SeeMore;
