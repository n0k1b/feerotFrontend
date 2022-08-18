import HealthABeauty from "../components/Body/HealthABeauty";
import Popular from "../components/Body/Popular";
import ShoesAFashion from "../components/Body/ShoesAFashion";
import StoresMembersLove from "../components/Body/StoresMembersLove";
import TopPicks from "../components/Body/TopPicks";
import CarouselMain from "../components/Carousel/CarouselMain";
import Navbar from "../components/Nav/Navbar";
import styles from "./HomePage.module.css";
import DealsOTWeek from "../components/Body/DealsOTWeek";
import Fashion from "../components/Body/Fashion";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* <div className={styles.carousel}>
        <CarouselMain />
      </div> */}

      <div className={styles.container}>
        <StoresMembersLove />
        <TopPicks />
        <ShoesAFashion />
        <HealthABeauty />
        <Popular />
        <DealsOTWeek />
        <Fashion />
      </div>
    </>
  );
};

export default HomePage;
