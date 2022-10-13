import styles from "./FloatingMenuDetails.module.css";
import RStore from "./RStore";
import { useSelector } from "react-redux";

const NAV_CL_DUMMY_DATA = [
  {
    name: "MD HOSSAIN",
    offer: "Get 20% Discount",
  },
  {
    name: "KAISER RIJVI",
    offer: "Get 20% Discount",
  },
  {
    name: "DARAZ SUPER SHOP",
    offer: "Get 20% Discount",
  },
];

const FloatingMenuDetails = (props) => {
  const menuData = useSelector((state) => state.nav.categoryData);
  const selectedCategory = menuData.find((menu) => menu.id === props.id);

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
          {NAV_CL_DUMMY_DATA.map((data, i) => (
            <RStore
              key={i}
              name={data.name}
              offer={data.offer}
              btn="Shop Now"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingMenuDetails;
