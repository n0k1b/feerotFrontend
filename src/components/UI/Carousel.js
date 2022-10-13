import styles from "./Carousel.module.css";
import { useState } from "react";

import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import StoreBig from "./StoreBig";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselJS(props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => {
    if (currentSlide === props.data.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prev = () => {
    if (currentSlide === 0) {
      setCurrentSlide(props.data.length - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <>
      <div className={styles.carouselContainer}>
        {/* <AiFillLeftCircle className={styles.btnL} onClick={prev} />
        <div className={styles.carouselItems}>
          {props.data.map((data, i) => ( 
          <div key={i} className={styles.store} >
            <StoreBig 
              image={data.thumbnail_image}
              discount={data.discount_percentage}
              was={data.previous_discount}
            />
          </div>
          ))}
        </div>
        <AiFillRightCircle className={styles.btnR} onClick={next} /> */}

            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div>
    </>
  );
}

export default CarouselJS;