import styles from "./StoresMembersLove.module.css";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { homepageContentActions } from "../../../redux/homepage-content-slice";

const StoresMembersLove = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.homepageContent.sections);

  const selectedSection = sections.find(
    (sec) => sec.section_name === "Stores Our Member Love"
  );

  const clickHandler = (data) => {
    dispatch(homepageContentActions.setSelectedShop(data));
  };

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
          {selectedSection.shop.map((data, i) => (
            <Link
              key={i}
              className={styles.link}
              to={`/shop/${data.id}`}
              onClick={() => clickHandler(data)}
            >
              <StoreBig
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

export default StoresMembersLove;
