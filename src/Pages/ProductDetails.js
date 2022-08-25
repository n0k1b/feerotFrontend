import DetailedProduct from "../components/Body/Product Details/DetailedProduct";
import styles from "./Pages.module.css";

const ProductDetails = () => {
  return (
    <>
      <div className={styles.container}>
        <DetailedProduct />
      </div>
    </>
  );
};

export default ProductDetails;
