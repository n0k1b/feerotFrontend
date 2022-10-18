import styles from "./CarouselMain.module.css";
import { useEffect, useState } from "react";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import { useSelector } from "react-redux";

function CarouselMain() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banner = useSelector((state) => state.homepageContent.banner);

  const next = () => {
    if (currentSlide === banner.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(banner.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // useEffect(() => {
  //   setTimeout(next, 4000);
  // }, []);

  return (
    <>
      <div className={styles.carouselContainer}>
        <AiFillLeftCircle className={styles.btnL} onClick={prev} />
        <div className={styles.carouselItems}>
          {banner.map((data, i) => (
            <img
              style={{
                transform: `translateX(${102 * (i - currentSlide)}%)`,
              }}
              key={i}
              id={data.id}
              className={styles.img}
              src={data.image}
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
