import styles from "./TopPicks.module.css";
import StoreSmall from "../../UI/StoreSmall";
import odyssey from "../../../image/odyssey.jpg";
import yellow from "../../../image/yellow.png";
import lotto from "../../../image/lotto.png";
import daraz from "../../../image/daraz.png";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    name: "Odyssey",
    image: odyssey,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Yellow",
    image: yellow,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Lotto",
    image: lotto,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Daraz",
    image: daraz,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Odyssey",
    image: odyssey,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Yellow",
    image: yellow,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Lotto",
    image: lotto,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Daraz",
    image: daraz,
    discount: "15% Cash Back",
    was: "25%",
  },
  {
    name: "Odyssey",
    image: odyssey,
    discount: "15% Cash Back",
    was: "25%",
  },
];

const TopPicks = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Our top picks at 15% Cash Back</p>
          <Link
            className={styles.link}
            to="/offers/Our_top_picks_at_15-percent_Cash_Back"
          >
            <p className={styles.seeMore}>See More</p>
          </Link>
        </div>

        <div className={styles.grid}>
          {DUMMY_DATA.map((data, i) => (
            <StoreSmall
              key={i}
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

export default TopPicks;
