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

  const SML = sectionTitles.includes("Stores Our Member Love");
  const topPicks = sectionTitles.includes("Our top picks at 15% Cash Back");
  const SAndF = sectionTitles.includes("Shoes & Fashion with 30% Cash Back");
  const HAndB = sectionTitles.includes("Health & Beauty with 15% Cash Back");
  const popular = sectionTitles.includes("Popular");
  const DOTW = sectionTitles.includes("Deals of the week");
  const FashionSection = sectionTitles.includes("Fashion with 50% Cash Back");

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
