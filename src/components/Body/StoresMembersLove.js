import StoreBig from "../UI/StoreBig";
import styles from "./StoresMembersLove.module.css";
import bata from "../../image/bata.png";
import zoro from "../../image/zoro.png";
import visible from "../../image/visible.png";

const DUMMY_DATA = [
  {
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: visible,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: visible,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: visible,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
];

const StoresMembersLove = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Stores Our Members Love</p>
        <div className={styles.stores}>
          {DUMMY_DATA.map((data) => (
            <StoreBig
              image={data.image}
              discount={data.discount}
              was={data.was}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default StoresMembersLove;
