import styles from "./CarouselMain.module.css";
import { useState } from "react";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import banner1 from "../../image/banner1.webp";
import banner2 from "../../image/banner2.webp";
import banner3 from "../../image/banner3.jpg";

const IMAGE_DATA = [banner1, banner2, banner3];

function CarouselMain() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide === IMAGE_DATA.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(IMAGE_DATA.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // setInterval(next, 4000);

  return (
    <>
      <div className={styles.carouselContainer}>
        <AiFillLeftCircle className={styles.btnL} onClick={prev} />
        <div className={styles.carouselItems}>
          {IMAGE_DATA.map((data, i) => (
            <img
              style={{ transform: `translateX(${100 * (i - currentSlide)}%)` }}
              key={i}
              className={styles.img}
              src={data}
              alt=""
            />
          ))}
        </div>
        <AiFillRightCircle className={styles.btnR} onClick={next} />
      </div>
    </>
  );
}

export default CarouselMain;
