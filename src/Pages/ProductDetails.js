import DetailedProduct from "../components/Body/Product Details/DetailedProduct";
import styles from "./Pages.module.css";
import DetailsCardList from "../components/UI/DetailsCardList";
import DetailsCard from "../components/UI/DetailsCard";
import YouMightAlsoLike from "../components/Body/Product Details/YouMightAlsoLike";
import RecentlyViewed from "../components/Body/Product Details/RecentlyViewed";
import { useEffect, useState } from "react";
import StoresMembersLove from "../components/Body/Home/StoresMembersLove";

const DUMMY_DATA = [
  {
    title: "Sneakers by Lacoste",
    list: [
      "Made for unboxing.",
      "Low-profile design.",
      "Pull tab for easy entry.",
      "Padded tongue and cuff.",
      "Signature Lacoste branding",
      "Chunky midsole",
      "Textured grip tread",
    ],
  },
];

const ProductDetails = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const dataHandler = (dataInput) => {
    setData(dataInput);
  };

  return (
    <>
      <div className={styles.PDcontainer}>
        <DetailedProduct
          dataHandler={dataHandler}
          loadingHandler={setIsLoading}
        />
        {!isLoading && (
          <>
            <DetailsCardList
              title="Product Details"
              description={DUMMY_DATA[0]}
            />
            <DetailsCard
              title="Brand"
              description="Famed for its iconic crocodile emblem, Lacoste was founded by tennis superstar René Lacoste in 1933 and was first to introduce the pique polo shirt. Utilising its sporting background, Lacoste fuses functionality with style to create its contemporary collections, embracing a bold use of colour in a wide range of products that include its timeless polo shirt, as well as shoes, trainers and signature fragrances – and it's all available right here in the Lacoste at ASOS edit."
            />
            <DetailsCard
              title="Look After Me"
              description="Treat with a suitable leather protector (not included) and avoid contact with liquids"
            />
            <DetailsCard
              title="About Me"
              description="Breathable mesh and leather upper Lining: 100% Textile, Sole: 100% Other materials, Upper: 100% Real leather."
            />
            <YouMightAlsoLike data={data} />
            {/* <RecentlyViewed /> */}
            <StoresMembersLove />
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetails;
