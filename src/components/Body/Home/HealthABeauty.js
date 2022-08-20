import styles from "./HealthABeauty.module.css";
import StoreBig from "../../UI/StoreBig";

import bata from "../../../image/bata.png";
import zoro from "../../../image/zoro.png";
import visible from "../../../image/visible.png";

const DUMMY_DATA = [
  {
    image: bata,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: zoro,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: visible,
    discount: "15% Cash Back",
    was: "20%",
  },

  {
    image: zoro,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: bata,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: visible,
    discount: "15% Cash Back",
    was: "20%",
  },

  {
    image: zoro,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: bata,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: visible,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: bata,
    discount: "15% Cash Back",
    was: "20%",
  },
  {
    image: zoro,
    discount: "15% Cash Back",
    was: "20%",
  },
];

const HealthABeauty = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Health & Beauty with 15% Cash Back</p>

        <div className={styles.grid}>
          {DUMMY_DATA.map((data) => (
            <StoreBig
              name={data.name}
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

export default HealthABeauty;
