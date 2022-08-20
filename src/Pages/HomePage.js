import HealthABeauty from "../components/Body/Home/HealthABeauty";
import Popular from "../components/Body/Home/Popular";
import ShoesAFashion from "../components/Body/Home/ShoesAFashion";
import StoresMembersLove from "../components/Body/Home/StoresMembersLove";
import TopPicks from "../components/Body/Home/TopPicks";
import CarouselMain from "../components/Carousel/CarouselMain";
import styles from "./HomePage.module.css";
import DealsOTWeek from "../components/Body/Home/DealsOTWeek";
import Fashion from "../components/Body/Home/Fashion";

const HomePage = () => {
  return (
    <>
      <div className={styles.container}>
        <CarouselMain />
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
