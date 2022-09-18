import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <>
      <div className={styles.container}>
        {!props.data && <p>Search Products...</p>}

        {props.data && (
          <>
            <div className={styles.products}>
              {props.data.products &&
                props.data.products.map((data, i) => (
                  <p key={i}>{data.product_name}</p>
                ))}
            </div>
            <div className={styles.shops}>
              {props.data.shops &&
                props.data.shops.map((data, i) => (
                  <p key={i}>{data.shop_name}</p>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
