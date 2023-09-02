import styles from "./Pages.module.css";
import BrandCover from "../components/Body/Detailed Brand/BrandCover";
import Products from "../components/Body/Detailed Brand/Products";

import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { shopActions } from "../redux/shop-slice";
import BASE_URL from "../api";

const BrandWOShop = (props) => {
  const [isLoading, setIsLoading] = useState();
  const [shopData, setShopData] = useState([]);
  const [productsData, setProductsData] = useState([]);

  const dispatch = useDispatch();

  const getShopData = async () => {
    setIsLoading(true);
    const response = await fetch(`${BASE_URL}/get_shop_product/${props.id}`);

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    setShopData(data.shop_details);
    setProductsData(data.products);

    dispatch(shopActions.setShopData(data));

    setIsLoading(false);
  };

  useEffect(() => {
    getShopData().catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isLoading && (
          <div className={styles.spinner}>
            <RotatingLines
              strokeColor="#195e73"
              strokeWidth="3"
              animationDuration="0.75"
              width="70"
              visible={true}
            />
          </div>
        )}
        {!isLoading && (
          <>
            <BrandCover
              brand={shopData.shop_name}
              cover={shopData.banner_image}
              logo={shopData.thumbnail_image}
              discount="Get up to 8% of your purchase back when you shop with"
              btn="Get Cash Back Now"
            />
            <Products productsData={productsData} />
          </>
        )}
      </div>
    </>
  );
};

export default BrandWOShop;
