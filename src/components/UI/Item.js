import styles from "./Item.module.css";

import { BsHeartFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const [liked, setLiked] = useState(false);

  const likeHandler = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Link className={styles.link} to={`/product/${props.id}`}>
            <img src={props.image} alt="product_image" />
          </Link>
          {!liked && (
            <BsHeartFill onClick={likeHandler} className={styles.heart1} />
          )}
          {liked && (
            <BsHeartFill onClick={likeHandler} className={styles.heart2} />
          )}
        </div>

        <p className={styles.title}>
          <Link className={styles.link} to={`/product/${props.id}`}>
            {props.title}
          </Link>
        </p>

        <p className={styles.price}>${props.price} <span className={styles.was}>was ${props.was}</span></p>
        <p className={styles.price}>${props.price}</p>
      </div>
    </>
  );
};

export default Item;
