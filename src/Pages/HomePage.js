import HealthABeauty from "../components/Body/HealthABeauty";
import ShoesAFashion from "../components/Body/ShoesAFashion";
import StoresMembersLove from "../components/Body/StoresMembersLove";
import TopPicks from "../components/Body/TopPicks";
import CarouselMain from "../components/Carousel/CarouselMain";
import Navbar from "../components/Nav/Navbar";
import styles from "./HomePage.module.css";

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
      </div>
    </>
  );
};

export default HomePage;
