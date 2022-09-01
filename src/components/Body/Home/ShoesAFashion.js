import styles from "./ShoesAFashion.module.css";

import bata from "../../../image/bata.png";
import lotto from "../../../image/lotto.png";
import odyssey from "../../../image/odyssey2.png";
import zoro from "../../../image/zoro.png";
import daraz from "../../../image/daraz.png";
import yellow from "../../../image/yellow.png";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    name: "Zoro",
    image: zoro,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Yellow",
    image: yellow,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Bata",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Daraz",
    image: daraz,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Odyssey",
    image: odyssey,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Lotto",
    image: lotto,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Bata",
    image: bata,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Daraz",
    image: daraz,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Odyssey",
    image: odyssey,
    discount: "30% Cash Back",
    was: "15%",
  },

  {
    name: "Yellow",
    image: yellow,
    discount: "30% Cash Back",
    was: "15%",
  },
  {
    name: "Zoro",
    image: zoro,
    discount: "30% Cash Back",
    was: "15%",
  },
];

const ShoesAFashion = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Shoes & Fashion with 30% Cash Back</p>
          <Link
            className={styles.link}
            to="/offers/Shoes_&_Fashion_with_30-percent_Cash_Back"
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

export default ShoesAFashion;
