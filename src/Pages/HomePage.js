import HealthABeauty from "../components/Body/Home/HealthABeauty";
import Popular from "../components/Body/Home/Popular";
import ShoesAFashion from "../components/Body/Home/ShoesAFashion";
import StoresMembersLove from "../components/Body/Home/StoresMembersLove";
import TopPicks from "../components/Body/Home/TopPicks";
import CarouselMain from "../components/Carousel/CarouselMain";
import styles from "./HomePage.module.css";
import DealsOTWeek from "../components/Body/Home/DealsOTWeek";
import Fashion from "../components/Body/Home/Fashion";
import { useSelector } from "react-redux";
import { useState } from "react";

const HomePage = () => {
  const sections = useSelector((state) => state.homepageContent.sections);
  // for (let i = 0; i <= sections.length - 1; i++) {
  //   if (sections[i].section_name === "Stores Our Member Love") {
  //     setStoreMLove(true);
  //   }
  // }

  const sectionTitles = useSelector(
    (state) => state.homepageContent.sectionTitles
  );

  const [hasStoresMLove, setHasStoreMLove] = useState();
  // const [hasTopPicks, setHasTopPicks] = useState();
  // const [hasShoesAFashion, setHasShoesAFashion] = useState();
  // const [hasHealthABeauty, setHasHealthABeauty] = useState();
  // const [hasPopular, setHasPopular] = useState();
  // const [haDealsOTWeek, setHasDealsOTWeek] = useState();
  // const [hasFashion, setHasFashion] = useState();

  const SML = sectionTitles.includes("Stores Our Member Love"); //true
  // setHasStoreMLove(SML); //error

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
