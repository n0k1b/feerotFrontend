import styles from "./DetailedProduct.module.css";

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
import Counter from "../../UI/Counter";
import { Alert, Snackbar } from "@mui/material";

const DetailedProduct = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [productData, setProductData] = useState([]);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [activeImg, setActiveImg] = useState();
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [addToBag, setAddToBag] = useState();

  const clickHandler = (e) => {
    setActiveImg(e.target.src);
  };

  const likeHandler = () => {
    setLiked(!liked);
  };

  const getProductData = async () => {
    setIsLoading(true);
    props.loadingHandler(true);
    const response = await fetch(
      `https://admin.feerot.com/api/product_details/${parseInt(id)}`
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    // console.log(data.product_details);

    props.dataHandler(data);

    setProductData(data.product_details);

    setIsLoading(false);
    props.loadingHandler(false);
  };

  useEffect(() => {
    getProductData().catch((err) => console.error(err));
  }, [id]);

  const addToCartHandler = () => {
    dispatch(
      shopActions.setCartItem({
        id: productData.id,
        name: productData.name,
        price: productData.discount_price,
        color: productData.color,
        size: productData.size,
        quantity: quantity,
        image: productData.thumbnail_image,
      })
    );
    setAddToBag(true);
  };

  const addToBagClose = () => {
    setAddToBag(false);
  };

  const quantityHandler = (number) => {
    setQuantity(number);
  };

  const next = () => {
    if (!isLoading) {
      if (activeImgIndex === productData.detail_image.length - 1) {
        setActiveImgIndex(0);
        setActiveImg(productData.detail_image[activeImgIndex]);
      } else {
        setActiveImgIndex(activeImgIndex + 1);
        setActiveImg(productData.detail_image[activeImgIndex]);
      }
    }
  };

  const prev = () => {
    if (!isLoading) {
      if (activeImgIndex === 0) {
        setActiveImgIndex(productData.detail_image.length - 1);
        setActiveImg(productData.detail_image[activeImgIndex]);
      } else {
        setActiveImgIndex(activeImgIndex - 1);
        setActiveImg(productData.detail_image[activeImgIndex]);
      }
    }
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
              <img
                src={!activeImg ? productData.detail_image[0] : activeImg}
                alt=""
              />
              <div className={styles.arrowContainer}>
                <AiOutlineLeft onClick={prev} className={styles.arrow} />
                <AiOutlineRight onClick={next} className={styles.arrow} />
              </div>
            </div>
          </div>

          <div className={styles.textContainer}>
            <p className={styles.textTitle}>{productData.name}</p>

            <p className={styles.price}>
              {/* ${productData.discount_price}
              <span className={styles.was}>was ${productData.price}</span> */}
              ${productData.discount_price}
              <span className={styles.was}>
                <s>${productData.price}</s>
              </span>
            </p>

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
              <option>Please Select</option>
              {productData.size.map((size, i) => (
                <option key={i}>{size}</option>
              ))}
            </select>

            <div className={styles.addToBag}>
              <div
                onClick={addToCartHandler}
                className={styles.buttonContainer}
              >
                <ButtonGreen>ADD TO BAG</ButtonGreen>
              </div>

              <Counter numberHandler={quantityHandler} />

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
      <Snackbar open={addToBag} autoHideDuration={6000} onClose={addToBagClose}>
        <Alert
          severity="success"
          sx={{ width: "100%" }}
          onClose={addToBagClose}
        >
          Added to cart!
        </Alert>
      </Snackbar>
    </>
  );
};

export default DetailedProduct;
