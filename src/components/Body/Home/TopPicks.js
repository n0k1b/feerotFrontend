import styles from "./TopPicks.module.css";
import StoreSmall from "../../UI/StoreSmall";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TopPicks = () => {
  const sections = useSelector(state => state.homepageContent.sections);

  const selectedSection = sections.find(
    (sec) => sec.section_name === "Our top picks at 15% Cash Back"
  );

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
          {selectedSection.shop.map((data, i) => (
            <Link
              key={i}
              className={styles.link}
              to={`/shop/${data.id}`}
            >
              <StoreSmall
                name={data.name}
                image={data.thumbnail_image}
                discount={data.discount_percentage}
                was={data.previous_discount}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopPicks;
