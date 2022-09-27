import styles from "./SpecialDealsACoupons.module.css";

import bata from "../../../image/bata.png";
import Deals from "../../UI/Deals";

const DUMMY_DATA = [
  {
    title: "Shop New Women's Sale Styles at Bata.com",
    image: bata,
    discount: "30% Cash Back",
  },
  {
    title: "Save up to 40% on Select Boy's Styles!",
    image: bata,
    discount: "30% Cash Back",
  },
  {
    title: "Shop Spring Essentials at Bata.com",
    image: bata,
    discount: "30% Cash Back",
  },
  {
    title: "Free Shipping with $150 order.",
    image: bata,
    discount: "30% Cash Back",
  },
];

const SpecialDealsACoupons = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Special Deals & Coupons</p>
      <div className={styles.cards}>
        {DUMMY_DATA.map((data, i) => (
          <Deals
            key={i}
            title={data.title}
            image={data.image}
            discount={data.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialDealsACoupons;
