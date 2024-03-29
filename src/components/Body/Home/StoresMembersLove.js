import styles from "./StoresMembersLove.module.css";
import StoreBig from "../../UI/StoreBig";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { homepageContentActions } from "../../../redux/homepage-content-slice";

const StoresMembersLove = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.homepageContent.sections);

  const selectedSection = sections.find((sec) => sec.section_order === 1);

  let tempShop = [];
  for (let x = 0; x <= 4; x++) {
    tempShop.push(selectedSection.shop[x]);
  }

  const clickHandler = (data) => {
    dispatch(homepageContentActions.setSelectedShop(data));
  };

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
        <div className={styles.stores}>
          {tempShop.map((data, i) => (
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

        {/* <div>
          <CarouselJS data={selectedSection.shop} />
        </div> */}
      </div>
    </>
  );
};

export default StoresMembersLove;
