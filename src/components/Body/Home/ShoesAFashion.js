import styles from "./ShoesAFashion.module.css";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShoesAFashion = () => {
  const sections = useSelector((state) => state.homepageContent.sections);

  const selectedSection = sections.find((sec) => sec.section_order === "3");

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
            <StoreBig
              key={i}
              name={data.name}
              image={data.thumbnail_image}
              discount={data.discount_percentage}
              was={data.previous_discount}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoesAFashion;
