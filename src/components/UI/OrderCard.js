import styles from "./OrderCard.module.css";
import Button from "../UI/Button";

const OrderCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p>
            <strong>Order Date:</strong>
          </p>
          <p>12.11.2022</p>
        </div>

        <div>
          <p>
            <strong>Order Number:</strong>
          </p>
          <p>GHAS125SAD52</p>
        </div>

        <div>
          <p>
            <strong>Total Price:</strong>
          </p>
          <p>2,150 Taka</p>
        </div>

        <div>
          <p>
            <strong>Order Status:</strong>
          </p>
          <p className={styles.status}>Pending</p>
        </div>
        <Button>Details</Button>
      </div>
    </>
  );
};

export default OrderCard;
