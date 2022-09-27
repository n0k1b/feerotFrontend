import styles from "./Fashion.module.css";
import BrandCard from "../../UI/BrandCard";

import bata from "../../../image/bata.png";
import lotto from "../../../image/lotto.png";
import odyssey from "../../../image/odyssey2.png";
import zoro from "../../../image/zoro.png";
import daraz from "../../../image/daraz.png";
import yellow from "../../../image/yellow.png";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: zoro,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: yellow,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: daraz,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: odyssey,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: lotto,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: daraz,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: odyssey,
    discount: "30% Cash Back",
    was: "15%",
  },

  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: yellow,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: zoro,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    title:
      "Bang & Olufsen speakerBang & Olufsen speaker + gift card w/ select device purchase.",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
];

const Fashion = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Fashion with 50% Cash Back</p>
          <Link
            className={styles.link}
            to="/offers/Fashion_with_50-percent_Cash_Back"
          >
            <p className={styles.seeMore}>See More</p>
          </Link>
        </div>

        <div className={styles.grid}>
          {DUMMY_DATA.map((data, i) => (
            <BrandCard
              key={i}
              title={data.title}
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

export default Fashion;
