import styles from "./Pages.module.css";
import BrandCover from "../components/Body/Detailed Brand/BrandCover";
import Products from "../components/Body/Detailed Brand/Products";

import banner from "../image/yellow_banner.webp";
import yellow from "../image/yellow.png";

const BrandWShop = () => {
  return (
    <>
      <div className={styles.container}>
        <BrandCover
          brand="Yellow"
          cover={banner}
          logo={yellow}
          discount="Get up to 8% of your purchase back when you shop with Yellow"
          btn="Get Cash Back Now"
        />
        <Products />
      </div>
    </>
  );
};

export default BrandWShop;
