import styles from "./DetailedProduct.module.css";

import img1 from "../../../image/1.webp";
import img2 from "../../../image/2.webp";
import img3 from "../../../image/3.webp";
import img4 from "../../../image/4.webp";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsHeartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowReturnLeft } from "react-icons/bs";

import { useEffect, useState } from "react";
import OfferCode from "../../UI/OfferCode";
import ButtonGreen from "../../UI/ButtonGreen";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { shopActions } from "../../../redux/shop-slice";

const IMAGE_LIST = [img1, img2, img3, img4];

const DetailedProduct = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(IMAGE_LIST[activeImgIndex]);
  const [liked, setLiked] = useState(false);

  const clickHandler = (e) => {
    setActiveImg(e.target.src);
  };

  const likeHandler = () => {
    setLiked(!liked);
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

  const getProductData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://admin.feerot.com/api/product_details/${id}`
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    console.log(data.product_details, "VVI1")

    props.dataHandler(data);

    setProductData(data.product_details);

    setIsLoading(false);
  };

  useEffect(() => {
    getProductData().catch((err) => console.error(err));
  }, []);


  const addToCartHandler = () => {
    dispatch(
      shopActions.setCartItem({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        color: productData.color,
        size: productData.size,
        quantity: 1,
        image: productData.thumbnail_image,
      })
    );
  };

  return (
    <>
      {!isLoading && (
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <div className={styles.imgSmall}>
              {productData.detail_image.map((data, i) => (
                <img
                  key={i}
                  className={styles.smallImg}
                  onClick={clickHandler}
                  src={data}
                  alt=""
                />
              ))}
            </div>

            <div className={styles.imgActive}>
              <img src={productData.detail_image[0]} alt="" />
              <div className={styles.arrowContainer}>
                <AiOutlineLeft onClick={prev} className={styles.arrow} />
                <AiOutlineRight onClick={next} className={styles.arrow} />
              </div>
            </div>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textTitle}>{productData.name}</p>

            <p className={styles.price}>${productData.discount_price} <span className={styles.was}>was ${productData.price}</span></p>

            <p>
              Or 4 payments of ${productData.price / 4} with afterpay or with
              Klarna
            </p>
            <OfferCode
              offer="25% OFF EVERYTHING! IT'S AN EOFYS THING With code:"
              code="HAUL"
            />
            <p>COLOR: {productData.color}</p>

            <div className={styles.sizeTitle}>
              <p>
                <strong>SIZE:</strong>
              </p>
              <p className={styles.sizeGuide}>Size Guide</p>
            </div>

            <select className={styles.sizeSelector}>
              <option >Please Select</option>
                {productData.size.map((size, i) => <option key={i} >{size}</option>)}
            </select>

            <div className={styles.addToBag}>
              <div
                onClick={addToCartHandler}
                className={styles.buttonContainer}
              >
                <ButtonGreen>ADD TO BAG</ButtonGreen>
              </div>
              <div className={styles.heartContainer}>
                {!liked && (
                  <BsHeartFill
                    onClick={likeHandler}
                    className={styles.heart1}
                  />
                )}
                {liked && (
                  <BsHeartFill
                    onClick={likeHandler}
                    className={styles.heart2}
                  />
                )}
              </div>
            </div>

            <div className={styles.deliveryOptions}>
              <div className={styles.fDelivery}>
                <TbTruckDelivery className={styles.icon} />
                <p>Free Shipping</p>
              </div>

              <div className={styles.fReturn}>
                <BsArrowReturnLeft className={styles.icon} />
                <p>Free Return</p>
              </div>

              <p>Ts&C apply. Learn More.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailedProduct;
