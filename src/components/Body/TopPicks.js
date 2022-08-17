import StoreSmall from "../UI/StoreSmall";
import styles from "./TopPicks.module.css";
import bata from "../../image/bata.png";
import odyssey from "../../image/odyssey.jpg";
import yellow from "../../image/yellow.png";
import lotto from "../../image/lotto.png";
import daraz from "../../image/daraz.png";

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
        <p className={styles.title}>Our top picks at 15% Cash Back</p>
        <div className={styles.grid}>
          {DUMMY_DATA.map((data) => (
            <StoreSmall
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
