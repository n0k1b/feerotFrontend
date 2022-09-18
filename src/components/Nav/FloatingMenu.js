import styles from "./FloatingMenu.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import FloatingMenuDetails from "./FloatingMenuDetails";

const FloatingMenu = () => {
  const [id, setId] = useState();
  const [showCL, setShowCL] = useState(true);
  const [showEL, setShowEL] = useState(false);

  const navCategorydata = useSelector((state) => state.nav.categoryData);

  const electronicsShow = () => {
    setShowCL(false);
    setShowEL(true);
  };

  const electronicsHide = () => {
    setShowCL(true);
    setShowEL(false);
  };

  const clickHandler = (id) => {
    setId(id);
  };

  return (
    <>
      <div className={styles.floatingMenu}>
        <div className={styles.categoryTitles}>
          {navCategorydata.map((data, i) => (
            <div
              key={i}
              onClick={() => clickHandler(data.id)}
              className={styles.categoryTitles_clothings}
            >
              <p>{data.name}</p>
            </div>
          ))}
          {/* <div
            onClick={electronicsHide}
            className={showCL ? styles.active : styles.categoryTitles_clothings}
          >
            <p>Clothings</p>
          </div>

          <div
            onClick={electronicsShow}
            className={
              showEL ? styles.active : styles.categoryTitles_electronics
            }
          >
            <p>Electronics</p>
          </div> */}
        </div>

        <div className={styles.categoryItems}>
          <FloatingMenuDetails id={id} />
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
