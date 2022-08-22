import BrandCard from "../../UI/BrandCard";
import styles from "./SpecialDealsACoupons.module.css";

import bata from "../../../image/bata.png";

const DUMMY_DATA = [
  {
    title: "Shop New Women's Sale Styles at Bata.com",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title: "Save up to 40% on Select Boy's Styles!",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title: "Shop Spring Essentials at Bata.com",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title: "Free Shipping with $150 order.",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
];

const SpecialDealsACoupons = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Special Deals & Coupons</p>
      <div className={styles.cards}>
        {DUMMY_DATA.map((data) => (
          <BrandCard
            title={data.title}
            image={data.image}
            discount={data.discount}
            was={data.was}
          />
        ))}
      </div>
    </div>
  );
};

export default SpecialDealsACoupons;
