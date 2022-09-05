import CartItemDelete from "../../UI/CartItemDelete";
import styles from "./CartComponent.module.css";

import img1 from "../../../image/1.webp";
import img2 from "../../../image/2.webp";

const CART_ITEM = [
  {
    name: "Reebok Club C Mid II sneakers in chalk",
    price: "$93.50",
    size: "WHITE AU 13",
    quantity: 1,
    image: img1,
  },
  {
    name: "Reebok Club C 85 sneakers in white",
    price: "$130.50",
    size: "WHITE AU 13",
    quantity: 1,
    image: img2,
  },
];

const CartComponent = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.upperSection}>
          <p className={styles.itemQuantity}>{CART_ITEM.length} ITEMS</p>
        </div>

        <hr className={styles.hr} />

        <div className={styles.middleSection}>
          {CART_ITEM.map((data) => (
            <CartItemDelete
              name={data.name}
              price={data.price}
              size={data.size}
              wuantity={data.quantity}
              image={data.image}
            />
          ))}
        </div>

        <hr className={styles.hr} />

        <div className={styles.lowerSection}>
          <div className={styles.subTotal}>
            <p>Subtotal</p>
            <p>$223.50</p>
          </div>

          <div className={styles.total}>
            <p>TOTAL TO PAY</p>
            <p>$223.50</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartComponent;
