import styles from "./Footer.module.css";

import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <div className={styles.about}>
            <p className={styles.title}>ABOUT</p>

            <p className={styles.item}>Getting Started</p>
            <p className={styles.item}>About Us</p>
            <p className={styles.item}>Blog</p>
            <p className={styles.item}>Help</p>
          </div>

          <div className={styles.storiesABrands}>
            <p className={styles.title}>STORIES AND BRANDS</p>

            <p className={styles.item}>Best Buy</p>
            <p className={styles.item}>JCPenny</p>
            <p className={styles.item}>Kohl's</p>
            <p className={styles.item}>Macy's</p>
            <p className={styles.item}>Nordstrom</p>
            <p className={styles.item}>Old Navy</p>
            <p className={styles.item}>Priceline</p>
          </div>

          <div className={styles.popularCategories}>
            <p className={styles.title}>POPULAR CATEGORIES</p>

            <p className={styles.item}>Baby & Toddler</p>
            <p className={styles.item}>Clothings</p>
            <p className={styles.item}>Accessories</p>
            <p className={styles.item}>Electronics</p>
            <p className={styles.item}>Travel & Vacation</p>
            <p className={styles.item}>Health & Beauty</p>
            <p className={styles.item}>Shoes</p>
            <p className={styles.item}>Home & Garden</p>
          </div>
        </div>

        <hr className={styles.hr} />

        <div className={styles.section2}>
          <div className={styles.credits}>
            <p className={styles.credit}>©2022 Feerot</p>
          </div>

          <div className={styles.socials}>
            <BsFacebook className={styles.icons} />
            <BsTwitter className={styles.icons} />
            <BsInstagram className={styles.icons} />
            <BsLinkedin className={styles.icons} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
