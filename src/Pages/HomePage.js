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
import { useEffect, useState } from "react";

const HomePage = () => {
  const sectionTitles = useSelector(
    (state) => state.homepageContent.sectionTitles
  );

  const [hasStoresMLove, setHasStoreMLove] = useState();
  const [hasTopPicks, setHasTopPicks] = useState();
  const [hasShoesAFashion, setHasShoesAFashion] = useState();
  const [hasHealthABeauty, setHasHealthABeauty] = useState();
  const [hasPopular, setHasPopular] = useState();
  const [haDealsOTWeek, setHasDealsOTWeek] = useState();
  const [hasFashion, setHasFashion] = useState();

  const SML = sectionTitles.includes("1");
  const topPicks = sectionTitles.includes("2");
  const SAndF = sectionTitles.includes("3");
  const HAndB = sectionTitles.includes("4");
  const popular = sectionTitles.includes("5");
  const DOTW = sectionTitles.includes("6");
  const FashionSection = sectionTitles.includes("7");

  useEffect(() => {
    setHasStoreMLove(SML);
    setHasTopPicks(topPicks);
    setHasShoesAFashion(SAndF);
    setHasHealthABeauty(HAndB);
    setHasPopular(popular);
    setHasDealsOTWeek(DOTW);
    setHasFashion(FashionSection);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <CarouselMain />
        {hasStoresMLove && <StoresMembersLove />}
        {hasTopPicks && <TopPicks />}
        {hasShoesAFashion && <ShoesAFashion />}
        {hasHealthABeauty && <HealthABeauty />}
        {hasPopular && <Popular />}
        {haDealsOTWeek && <DealsOTWeek />}
        {hasFashion && <Fashion />}
      </div>
    </>
  );
};

export default HomePage;
