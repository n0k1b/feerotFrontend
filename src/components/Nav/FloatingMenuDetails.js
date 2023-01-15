import styles from "./FloatingMenuDetails.module.css";
import RStore from "./RStore";
import { useDispatch, useSelector } from "react-redux";

const FloatingMenuDetails = (props) => {
  const menuData = useSelector((state) => state.nav.categoryData);
  const selectedCategory = menuData.find((menu) => menu.id === props.id);
  console.log(selectedCategory);

  ////
  const sections = useSelector((state) => state.homepageContent.sections);

  const selectedSection = sections.find((sec) => sec.section_order === "1");

  let tempShop = [];
  for (let x = 0; x <= 4; x++) {
    tempShop.push(selectedSection.shop[x]);
  }

  ////

  return (
    <>
      <div className={styles.clothing_items}>
        <div className={styles.cItem_categories}>
          {selectedCategory &&
            selectedCategory.sub_category.map((data) => (
              <div key={data.id} className={styles.cItem_category}>
                <img src={data.image} alt={data.name} />
                <p>{data.name}</p>
              </div>
            ))}
        </div>

        <div className={styles.cItem_rStores}>
          <p className={styles.cItem_rS_title}>Recommended Stores</p>
          {tempShop.map((data) => (
            <RStore
              key={data.id}
              id={data.id}
              name={data.name}
              offer={data.discount_percentage}
              btn="Shop Now"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingMenuDetails;
