import styles from "./Pages.module.css";
import BrandCover from "../components/Body/Detailed Brand/BrandCover";

const DetailedProduct = () => {
  return (
    <>
      <div className={styles.container}>
        <BrandCover />
      </div>
    </>
  );
};

export default DetailedProduct;
