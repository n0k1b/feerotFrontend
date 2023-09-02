import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderTable from "../components/UI/OrderTable";
import { shopActions } from "../redux/shop-slice";
import styles from "./MyOrder.module.css";
import BASE_URL from "../api";

const MyOrder = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState([]);

  const token = useSelector((state) => state.nav.userData.token);

  const orderFetch = async () => {
    setIsLoading(true);
    const res = await fetch(`${BASE_URL}/user_order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      return;
    }

    const data = await res.json();
    console.log(data);
    setOrder(data);
    dispatch(shopActions.updateOrders(data.order));
    setIsLoading(false);
  };

  useEffect(() => {
    orderFetch();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className={styles.container}>
          <h1 className={styles.title}>My Orders</h1>
          <div className={styles.orderContainer}>
            <OrderTable orders={order.order} />
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrder;
