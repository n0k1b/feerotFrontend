import styles from "./Popular.module.css";
import StoreBig from "../../UI/StoreBig";

import bata from "../../../image/bata.png";
import lotto from "../../../image/lotto.png";
import odyssey from "../../../image/odyssey2.png";
import zoro from "../../../image/zoro.png";
import daraz from "../../../image/daraz.png";
import yellow from "../../../image/yellow.png";

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
];

const Popular = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Popular</p>

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

export default Popular;
