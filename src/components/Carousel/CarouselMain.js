import styles from "./CarouselMain.module.css";
import { useState } from "react";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import banner1 from "../../image/banner1.webp";
import banner2 from "../../image/banner2.webp";
import banner3 from "../../image/banner3.jpg";

const IMAGE_DATA = [banner1, banner2, banner3];

function CarouselMain() {
  const [activeImg, setActiveImg] = useState(0);

  const next = () => {
    if (activeImg === IMAGE_DATA.length - 1) {
      setActiveImg(0);
    } else {
      setActiveImg(activeImg + 1);
    }
  };

  const prev = () => {
    if (activeImg === 0) {
      setActiveImg(IMAGE_DATA.length - 1);
    } else {
      setActiveImg(activeImg - 1);
    }
  };

  return (
    <>
      <div className={styles.caraoselContainer}>
        <AiFillLeftCircle onClick={prev} className={styles.btn} />
        <img className={styles.img} src={IMAGE_DATA[activeImg]} alt="" />
        <AiFillRightCircle onClick={next} className={styles.btn} />
      </div>
    </>
  );
}

export default CarouselMain;
