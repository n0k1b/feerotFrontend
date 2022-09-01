import styles from "./HealthABeauty.module.css";
import StoreBig from "../../UI/StoreBig";

import bata from "../../../image/bata.png";
import zoro from "../../../image/zoro.png";
import visible from "../../../image/visible.png";
import { Link } from "react-router-dom";

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
        <div className={styles.titleContainer}>
          <p className={styles.title}>Health & Beauty with 15% Cash Back</p>
          <Link
            className={styles.link}
            to="/offers/Health_&_Beauty_with_15-percent_Cash_Back"
          >
            <p className={styles.seeMore}>See More</p>
          </Link>
        </div>

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
