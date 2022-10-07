import { useEffect, useState } from "react";
import styles from "./Counter.module.css";

const Counter = (props) => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };

  const changeHandler = () => {
    props.numberHandler(number);
  };

  useEffect(() => {
    changeHandler();
  }, [number]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.minus} onClick={decrement}>
          -
        </div>

        <div className={styles.number}>{number}</div>

        <div className={styles.plus} onClick={increment}>
          +
        </div>
      </div>
    </>
  );
};

export default Counter;
