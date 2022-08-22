import styles from "./Item.module.css";

import { BsHeartFill, BsHeart } from "react-icons/bs";
import { useState } from "react";

const Item = (props) => {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={props.image} alt="product_image" />
          {!liked && <BsHeart onClick={likeHandler} className={styles.heart} />}
          {liked && (
            <BsHeartFill onClick={likeHandler} className={styles.heart} />
          )}
        </div>

        <p className={styles.title}>{props.title}</p>

        <p className={styles.price}>${props.price}</p>
      </div>
    </>
  );
};

export default Item;
