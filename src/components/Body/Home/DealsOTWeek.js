import styles from "./DealsOTWeek.module.css";
import StoreBigSD from "../../UI/StoreBigSD";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DealsOTWeek = () => {
  const sections = useSelector(state => state.homepageContent.sections);

  const selectedSection = sections.find(
    (sec) => sec.section_order === "6"
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{selectedSection.section_name}</p>
          
            <p className={styles.seeMore}>See More</p>
     
        </div>

        <div className={styles.grid}>
          {selectedSection.shop.map((data, i) => (
             <Link
              key={i}
              className={styles.link}
              to={`/shop/${data.id}`}
            >
              <StoreBigSD
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

export default DealsOTWeek;
