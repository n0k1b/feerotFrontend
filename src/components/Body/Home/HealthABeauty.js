import styles from "./HealthABeauty.module.css";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HealthABeauty = () => {
  const sections = useSelector((state) => state.homepageContent.sections);

  const selectedSection = sections.find((sec) => sec.section_order === "4");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{selectedSection.section_name}</p>
          <Link
            className={styles.link}
            to={`/detailed_section/${selectedSection.section_id}`}
          >
            <p className={styles.seeMore}>See More</p>
          </Link>
        </div>

        <div className={styles.grid}>
          {selectedSection.shop.map((data, i) => (
            <Link key={i} className={styles.link} to={`/shop/${data.id}`}>
              <StoreBig
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

export default HealthABeauty;
