import styles from "./Popular.module.css";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Popular = () => {
  const sections = useSelector(state => state.homepageContent.sections);

  const selectedSection = sections.find(
    (sec) => sec.section_name === "Popular"
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Popular</p>
          <Link className={styles.link} to="/offers/Popular">
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

export default Popular;
