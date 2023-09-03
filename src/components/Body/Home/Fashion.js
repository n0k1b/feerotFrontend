import styles from "./Fashion.module.css";
import BrandCard from "../../UI/BrandCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Fashion = () => {
  const sections = useSelector((state) => state.homepageContent.sections);

  const selectedSection = sections.find((sec) => sec.section_order === 7);

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
            <BrandCard
              key={i}
              id={data.id}
              title={data.name}
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

export default Fashion;
