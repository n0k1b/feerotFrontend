import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./OrderStatus.module.css";
import { MdAccessTimeFilled, MdLocalShipping } from "react-icons/md";
import { FaCheckCircle, FaHome } from "react-icons/fa";

const OrderStatus = () => {
  const params = useParams();
  const num = params.num;
  const dataAll = useSelector((state) => state.shop.orders);
  const order = dataAll.find((data) => data.order_no === num);
  console.log(order.status);

  if (order.status === "pending") {
    console.log("Working");
  }
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Order Status</h1>
        <div className={styles.dataContainer}>
          <div>
            <p>
              <strong>Order Number:</strong> {order.order_no}
            </p>
          </div>
          <div>
            <p>
              <strong>Order Date:</strong> {order.order_date}
            </p>
          </div>
          <div>
            <p>
              <strong>Delivery Address:</strong> {order.delivery_address}
            </p>
          </div>
          <div>
            <p>
              <strong>Order Status:</strong> {order.status}
            </p>
          </div>
          <div>
            <p>
              <strong>Total Amount:</strong> {order.subtotal}
            </p>
          </div>

          <div className={styles.indiContainer}>
            <div className={styles.indicator}>
              <MdAccessTimeFilled className={styles.icon} />
              <p>Pending</p>
            </div>
            <div className={styles.indicator}>
              <FaCheckCircle className={styles.icon} />
              <p>Confirmed</p>
            </div>
            <div className={styles.indicator}>
              <MdLocalShipping className={styles.icon} />
              <p>Shipped</p>
            </div>
            <div className={styles.indicator}>
              <FaHome className={styles.icon} />
              <p>Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderStatus;
