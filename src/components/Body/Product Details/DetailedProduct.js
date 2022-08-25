import styles from "./DetailedProduct.module.css";

import img1 from "../../../image/1.webp";
import img2 from "../../../image/2.webp";
import img3 from "../../../image/3.webp";
import img4 from "../../../image/4.webp";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

import { useState } from "react";
import OfferCode from "../../UI/OfferCode";

const IMAGE_LIST = [img1, img2, img3, img4];

const DetailedProduct = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(IMAGE_LIST[activeImgIndex]);

  const clickHandler = (e) => {
    setActiveImg(e.target.src);
  };

  const next = () => {
    if (activeImgIndex === IMAGE_LIST.length - 1) {
      setActiveImgIndex(0);
      setActiveImg(IMAGE_LIST[activeImgIndex]);
    } else {
      setActiveImgIndex(activeImgIndex + 1);
      setActiveImg(IMAGE_LIST[activeImgIndex]);
    }
  };

  const prev = () => {
    if (activeImgIndex === 0) {
      setActiveImgIndex(IMAGE_LIST.length - 1);
      setActiveImg(IMAGE_LIST[activeImgIndex]);
    } else {
      setActiveImgIndex(activeImgIndex - 1);
      setActiveImg(IMAGE_LIST[activeImgIndex]);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <div className={styles.imgSmall}>
            {IMAGE_LIST.map((data) => (
              <img onClick={clickHandler} src={data} alt="" />
            ))}
          </div>

          <div className={styles.imgActive}>
            <img src={activeImg} alt="" />
            <div className={styles.arrowContainer}>
              <AiOutlineLeft onClick={prev} className={styles.arrow} />
              <AiOutlineRight onClick={next} className={styles.arrow} />
            </div>
          </div>
        </div>

        <div className={styles.textContainer}>
          <p className={styles.textTitle}>
            Lacoste L003 retro inspired sneakers in white and green
          </p>
          <p className={styles.price}>$200</p>
          <p>Or 4 payments of $50.00 with afterpay or with Klarna</p>
          <OfferCode
            offer="25% OFF EVERYTHING! IT'S AN EOFYS THING With code:"
            code="HAUL"
          />
          <p>COLOR: WHITE</p>

          <div className={styles.sizeTitle}>
            <p>
              <strong>SIZE:</strong>
            </p>
            <p className={styles.sizeGuide}>Size Guide</p>
          </div>

          <select className={styles.sizeSelector}>
            <option value="volvo">Please Select</option>
            <option value="saab">AU 6</option>
            <option value="fiat">AU 7</option>
            <option value="audi">AU 8</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default DetailedProduct;
