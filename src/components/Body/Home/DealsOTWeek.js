import styles from "./DealsOTWeek.module.css";
import StoreBigSD from "../../UI/StoreBigSD";

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

const DealsOTWeek = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Deals of the week</p>

        <div className={styles.grid}>
          {DUMMY_DATA.map((data) => (
            <StoreBigSD
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

export default DealsOTWeek;
