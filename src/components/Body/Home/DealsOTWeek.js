import styles from "./DealsOTWeek.module.css";
import StoreBigSD from "../../UI/StoreBigSD";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const DealsOTWeek = () => {
  const sections = useSelector(state => state.homepageContent.sections);

  const selectedSection = sections.find(
    (sec) => sec.section_name === "Deals of the week"
  );

  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Deals of the week</p>
          <Link className={styles.link} to="/offers/Deals_of_the_week">
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
              <StoreBigSD
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

export default DealsOTWeek;
