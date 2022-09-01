import styles from "./CarouselMain.module.css";
import { useState } from "react";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import banner1 from "../../image/banner1.webp";
import banner2 from "../../image/banner2.webp";
import banner3 from "../../image/banner3.jpg";
import CarouselItem from "./CarouselItem";

const IMAGE_DATA = [banner1, banner2, banner3];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselMain() {
  // const [activeImg, setActiveImg] = useState(0);

  // const next = () => {
  //   if (activeImg === IMAGE_DATA.length - 1) {
  //     setActiveImg(0);
  //   } else {
  //     setActiveImg(activeImg + 1);
  //   }
  // };

  // const prev = () => {
  //   if (activeImg === 0) {
  //     setActiveImg(IMAGE_DATA.length - 1);
  //   } else {
  //     setActiveImg(activeImg - 1);
  //   }
  // };

  return (
    <>
      {/* <div className={styles.caraoselContainer}>
        <AiFillLeftCircle onClick={prev} className={styles.btn} />
        <img className={styles.img} src={IMAGE_DATA[activeImg]} alt="" />
        <AiFillRightCircle onClick={next} className={styles.btn} />
      </div> */}
      <Carousel
        containerClass={styles.caraoselContainer}
        responsive={responsive}
        itemClass={styles.img}
      >
        <CarouselItem image={banner1} />
        <CarouselItem image={banner2} />
        <CarouselItem image={banner3} />
        <CarouselItem image={banner1} />
        <CarouselItem image={banner2} />
        <CarouselItem image={banner3} />
      </Carousel>
    </>
  );
}

export default CarouselMain;
