import styles from "./SeeMore.module.css";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SeeMoreStore from "../components/UI/SeeMoreStore";
import { useState } from "react";

const NavSection = () => {
  const param = useParams();
  const navSection = useSelector((state) => state.nav.navSection);
  const navSecData = navSection.find((data) => data.name === param.id);
  console.log(navSecData);
  return (
    <div className={styles.container}>
      <div className={styles.title}>{param.id}</div>
      <div className={styles.grid}>
        {navSecData.shop.map((data, i) => (
          <Link
            key={i}
            className={styles.link}
            to={`/shop/${data.retailer_id}`}
          >
            <SeeMoreStore
              image={`https://admin.feerot.com/public/${data.retailer.thumbnail_image}`}
              discount={data.retailer.discount_percentage}
              was={data.retailer.previous_discount}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavSection;
