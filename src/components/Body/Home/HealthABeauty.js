import styles from "./HealthABeauty.module.css";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HealthABeauty = () => {
  const sections = useSelector(state => state.homepageContent.sections);

  const selectedSection = sections.find(
    (sec) => sec.section_name === "Health & Beauty with 15% Cash Back"
  );

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
          {selectedSection.shop.map((data, i) => (
            <Link
              key={i}
              className={styles.link}
              to={`/shop/${data.id}`}
            >
              <StoreBig
                name={data.name}
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

export default HealthABeauty;
