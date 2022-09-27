import { Link } from "react-router-dom";
import styles from "./Search.module.css";

const Search = (props) => {
  const close = () => {
    props.searchClose();
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.close}>
          <p className={styles.closeText} onClick={close}>
            Close
          </p>
        </div>
        {props.data.length && (
          <>
            {props.data.length === 0 && <p>Search Products...</p>}
            {props.data.products.length === 0 &&
              props.data.shops.length === 0 && <p>No Results Found</p>}
          </>
        )}

        {props.data && (
          <>
            <div className={styles.products}>
              {props.data.products &&
                props.data.products.map((data, i) => (
                  <Link
                    key={i}
                    className={styles.link}
                    to={`/product/${data.id}`}
                  >
                    <div className={styles.productItems}>
                      <img
                        className={styles.piImg}
                        src={data.thumbnail_image}
                        alt=""
                      />
                      <div className={styles.description}>
                        <p className={styles.piTitle}>{data.name}</p>
                        <p className={styles.piPrice}>
                          ${data.discount_price}
                          <span className={styles.priceWas}>
                            was ${data.price}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            <div className={styles.shops}>
              {props.data.shops &&
                props.data.shops.map((data, i) => (
                  <Link key={i} className={styles.link} to={`/shop/${data.id}`}>
                    <div className={styles.shopItems}>
                      <img
                        className={styles.siImg}
                        src={data.thumbnail_image}
                        alt={data.shop_name}
                      />
                      <p className={styles.siTitle}>{data.shop_name}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Search;
