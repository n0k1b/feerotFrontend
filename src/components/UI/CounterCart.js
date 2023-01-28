import { useDispatch } from "react-redux";
import { shopActions } from "../../redux/shop-slice";
import styles from "./CounterCart.module.css";

const CounterCart = (props) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(shopActions.increaseCartItemQuantity(parseInt(props.id)));
  };

  const decrement = () => {
    if (props.children > 1) {
      dispatch(shopActions.decreaseCartItemQuantity(parseInt(props.id)));
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.minus} onClick={decrement}>
          -
        </div>

        <div className={styles.number}>{props.children}</div>

        <div className={styles.plus} onClick={increment}>
          +
        </div>
      </div>
    </>
  );
};

export default CounterCart;
