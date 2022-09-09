import styles from "./StoresMembersLove.module.css";
import StoreBig from "../../UI/StoreBig";
import bata from "../../../image/bata.png";
import zoro from "../../../image/zoro.png";
import visible from "../../../image/visible.png";
import yellow from "../../../image/yellow.png";
import { Link } from "react-router-dom";

const DUMMY_DATA = [
  {
    name: "bata",
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "yellow",
    image: yellow,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "visible",
    image: visible,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "bata",
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "zoro",
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "visible",
    image: visible,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "bata",
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "zoro",
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "visible",
    image: visible,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "bata",
    image: bata,
    discount: "80% Discount",
    was: "20%",
  },
  {
    name: "zoro",
    image: zoro,
    discount: "80% Discount",
    was: "20%",
  },
];

const StoresMembersLove = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Stores Our Members Love</p>
          <Link className={styles.link} to="/offers/Stores_Our_Members_Love">
            <p className={styles.seeMore}>See More</p>
          </Link>
        </div>
        <div className={styles.stores}>
          {DUMMY_DATA.map((data, i) => (
            <Link key={i} className={styles.link} to={`/${data.name}`}>
              <StoreBig
                image={data.image}
                discount={data.discount}
                was={data.was}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoresMembersLove;
