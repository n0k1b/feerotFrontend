import { useParams } from "react-router-dom";
import BrandWOShop from "./BrandWOShop";
import styles from "./Pages.module.css";

const ShopPage = () => {
  const params = useParams();
  const id = params.id;
  return (
    <>
      <div className={styles.sPContainer}>
        <BrandWOShop id={parseInt(id)} />
      </div>
    </>
  );
};

export default ShopPage;
