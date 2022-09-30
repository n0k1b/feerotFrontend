import Item from "../../UI/Item";
import styles from "./Products.module.css";

const Products = (props) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Products</p>
        <div className={styles.products}>
          {props.productsData.map((data, i) => (
            <Item
              key={i}
              id={data.id}
              image={data.thumbnail_image}
              title={data.name}
              price={data.discount_price}
              was={data.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
