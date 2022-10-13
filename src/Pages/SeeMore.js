import { Link, useParams } from "react-router-dom";
import styles from "./SeeMore.module.css";

import bata from "../image/bata.png";
import md from "../image/md.png";
import odyssey from "../image/odyssey.jpg";
import yellow from "../image/yellow.png";
import SeeMoreStore from "../components/UI/SeeMoreStore";
import { useEffect, useState } from "react";

const DUMMY_DATA = [
  {
    title: "Bata",
    description: "Get 80% OFF at Bata Shoes.",
    image: bata,
    discount: 80,
    was: 20,
  },
  {
    title: "Perricone MD",
    description: "Get 80% OFF at Bata Shoes.",
    image: md,
    discount: 80,
    was: 20,
  },
  {
    title: "Odyssey",
    description: "Get 80% OFF at Bata Shoes.",
    image: odyssey,
    discount: 80,
    was: 20,
  },
  {
    title: "Yellow",
    description: "Get 80% OFF at Bata Shoes.",
    image: yellow,
    discount: 80,
    was: 20,
  },
  {
    title: "Bata",
    description: "Get 80% OFF at Bata Shoes.",
    image: bata,
    discount: 80,
    was: 20,
  },
  {
    title: "Perricone MD",
    description: "Get 80% OFF at Bata Shoes.",
    image: md,
    discount: 80,
    was: 20,
  },
  {
    title: "Odyssey",
    description: "Get 80% OFF at Bata Shoes.",
    image: odyssey,
    discount: 80,
    was: 20,
  },
  {
    title: "Yellow",
    description: "Get 80% OFF at Bata Shoes.",
    image: yellow,
    discount: 80,
    was: 20,
  },
  {
    title: "Bata",
    description: "Get 80% OFF at Bata Shoes.",
    image: bata,
    discount: 80,
    was: 20,
  },
  {
    title: "Perricone MD",
    description: "Get 80% OFF at Bata Shoes.",
    image: md,
    discount: 80,
    was: 20,
  },
  {
    title: "Odyssey",
    description: "Get 80% OFF at Bata Shoes.",
    image: odyssey,
    discount: 80,
    was: 20,
  },
  {
    title: "Yellow",
    description: "Get 80% OFF at Bata Shoes.",
    image: yellow,
    discount: 80,
    was: 20,
  },
];

const SeeMore = () => {
  const params = useParams();
  const id = params.id;

  const [isLoading, setIsLoading] = useState(true);
  const [seeMoreData, setSeeMoreData] = useState([]);

  const seeMoreFetch = async () => {
    setIsLoading(true);

    const response = await fetch(
      `https://admin.feerot.com/api/section-shop-all/${parseInt(id)}`
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    console.log(data);

    setSeeMoreData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    seeMoreFetch();
  }, []);

  return (
    <>
      {!isLoading && (
        <div className={styles.container}>
          <p className={styles.title}>{seeMoreData.section_name}</p>
          <div className={styles.grid}>
            {seeMoreData.data.map((data, i) => (
              <Link key={i} className={styles.link} to={`/shop/${data.id}`}>
                <SeeMoreStore
                  image={data.banner_image}
                  discount={data.discount_percentage}
                  was={data.previous_discount}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SeeMore;
