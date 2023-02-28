import React from "react";
import { Link } from "react-router-dom";
import styles from "./OrderTable.module.css";

const OrderTable = ({ orders }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Order date</th>
            <th>Order number</th>
            <th>Total price</th>
            <th>Order status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.order_date}</td>
              <td>{order.order_no}</td>
              <td>${order.subtotal}</td>
              <td className={styles.status}>{order.status}</td>
              <td>
                <Link
                  className={styles.link}
                  to={`/my_order/${order.order_no}`}
                >
                  <button>Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
