import { Link, useParams } from "react-router-dom";
import styles from "./SeeMore.module.css";

import SeeMoreStore from "../components/UI/SeeMoreStore";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

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
      {isLoading && (
        <div className={styles.spinner}>
          <RotatingLines
            strokeColor="#195e73"
            strokeWidth="3"
            animationDuration="0.75"
            width="70"
            visible={true}
          />
        </div>
      )}

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
