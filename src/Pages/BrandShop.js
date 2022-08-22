import styles from "./Pages.module.css";
import BrandCover from "../components/Body/Detailed Brand/BrandCover";

import banner from "../image/bata_banner.jpg";
import bata from "../image/bata.png";
import Offer from "../components/UI/Offer";
import AboutBrand from "../components/UI/AboutBrand";
import SpecialDealsACoupons from "../components/Body/Detailed Brand/SpecialDealsACoupons";

const BrandShop = () => {
  return (
    <>
      <div className={styles.container}>
        <BrandCover
          brand="Bata"
          cover={banner}
          logo={bata}
          discount="Get up to 8% of your purchase back when you shop with Bata"
          btn="Get Cash Back Now"
        />

        <Offer
          brand="Bata"
          type="Cash Back"
          title="Online Purchase"
          description="Flash Sale items will earn 3% Cash Back"
          amount="8%"
        />

        <AboutBrand
          brand="Bata"
          about="Bata.com is the ultimate online source for Bata shoes. Shop Bata
            online for new releases and collections featuring the latest styles
            and Bata innovations. And check out BataiD, where you can customize
            one-of-a-kind shoes and clothing with your favorite colors,
            materials and performance options."
        />

        <SpecialDealsACoupons />
      </div>
    </>
  );
};

export default BrandShop;
