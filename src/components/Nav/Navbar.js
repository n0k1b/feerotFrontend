import styles from "./Navbar.module.css";

import logo from "../../image/Logo/logo_cash.png";
import mens from "../../image/mens.png";
import womens from "../../image/womens.png";
import babies from "../../image/babies.png";
import active from "../../image/active.png";
import pc from "../../image/pc.png";
import phone from "../../image/phone.png";
import wearable from "../../image/wearable.png";
import tv from "../../image/tv.png";

import { FaSearch } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { BsGift } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";

import { useState } from "react";
import RStore from "./RStore";
import { Link } from "react-router-dom";

const NAV_CL_DUMMY_DATA = [
  {
    name: "MD HOSSAIN",
    offer: "Get 20% Discount",
  },
  {
    name: "KAISER RIJVI",
    offer: "Get 20% Discount",
  },
  {
    name: "DARAZ SUPER SHOP",
    offer: "Get 20% Discount",
  },
];

const NAV_EL_DUMMY_DATA = [
  {
    name: "MD HOSSAIN",
    offer: "Get 20% Cashback",
  },
  {
    name: "KAISER RIJVI",
    offer: "Get 20% Cashback",
  },
  {
    name: "DARAZ SUPER SHOP",
    offer: "Get 20% Cashback",
  },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showCL, setShowCL] = useState(true);
  const [showEL, setShowEL] = useState(false);

  const mouseEnter = () => {
    setMenu(true);
  };

  const mouseLeave = () => {
    setMenu(false);
  };

  const electronicsShow = () => {
    setShowCL(false);
    setShowEL(true);
  };

  const electronicsHide = () => {
    setShowCL(true);
    setShowEL(false);
  };

  return (
    <>
      <div className={styles.container}>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>

        <div
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onClick={mouseEnter}
          className={styles.category}
        >
          <GiHamburgerMenu className={styles.hamburger} />
          <p>Category</p>
          <FiChevronDown className={styles.downArrow} />
        </div>

        <div className={styles.searchBarSection}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search Product by Name, Category..."
          />
          <div className={styles.search}>
            <FaSearch className={styles.searchIcon} />
          </div>
        </div>

        <div className={styles.signIn}>
          <FaLock className={styles.lockIcon} />
          <p>Sign in</p>
        </div>

        <Link className={styles.link} to="/cart">
          <div className={styles.cart}>
            <BsCartCheckFill className={styles.cartIcon} />
            <p className={styles.cartTitle}>Cart (8)</p>
          </div>
        </Link>
      </div>

      <div className={styles.hr}></div>

      {menu && (
        <div
          className={styles.floatingMenu}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <div className={styles.categoryTitles}>
            <div
              onClick={electronicsHide}
              className={
                showCL ? styles.active : styles.categoryTitles_clothings
              }
            >
              <p>Clothings</p>
            </div>

            <div
              onClick={electronicsShow}
              className={
                showEL ? styles.active : styles.categoryTitles_electronics
              }
            >
              <p>Electronics</p>
            </div>
          </div>

          <div className={styles.categoryItems}>
            {showCL && (
              <div className={styles.clothing_items}>
                <div className={styles.cItem_categories}>
                  <div className={styles.cItem_category}>
                    <img src={mens} alt="Men's Clothing" />
                    <p>Men's Clothing</p>
                  </div>
                  <div className={styles.cItem_category}>
                    <img src={womens} alt="Womens clothings" />
                    <p>Womens clothings</p>
                  </div>
                  <div className={styles.cItem_category}>
                    <img src={babies} alt="Babies Clothings" />
                    <p>Babies Clothings</p>
                  </div>
                  <div className={styles.cItem_category}>
                    <img src={active} alt="Active Wears" />
                    <p>Active Wears</p>
                  </div>
                </div>

                <div className={styles.cItem_rStores}>
                  <p className={styles.cItem_rS_title}>Recommended Stores</p>
                  {NAV_CL_DUMMY_DATA.map((data) => (
                    <RStore
                      name={data.name}
                      offer={data.offer}
                      btn="Shop Now"
                    />
                  ))}
                </div>
              </div>
            )}

            {showEL && (
              <div className={styles.ectronic_items}>
                <div className={styles.clothing_items}>
                  <div className={styles.cItem_categories}>
                    <div className={styles.cItem_category}>
                      <img src={pc} alt="Computer and Tablets" />
                      <p>Computer and Tablets</p>
                    </div>
                    <div className={styles.cItem_category}>
                      <img src={phone} alt="Cell Phones" />
                      <p>Cell Phones</p>
                    </div>
                    <div className={styles.cItem_category}>
                      <img src={wearable} alt="Wearable Tech" />
                      <p>Wearable Tech</p>
                    </div>
                    <div className={styles.cItem_category}>
                      <img src={tv} alt="Tv and Home Theatre" />
                      <p>Tv and Home Theatre</p>
                    </div>
                  </div>

                  <div className={styles.cItem_rStores}>
                    <p className={styles.cItem_rS_title}>Recommended Stores</p>
                    {NAV_EL_DUMMY_DATA.map((data) => (
                      <RStore
                        name={data.name}
                        offer={data.offer}
                        btn="Shop Now"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <div className={styles.section2}>
        <div className={styles.new}>
          <BsGift className={styles.icon} />
          <p>New</p>
        </div>

        <div className={styles.popular}>
          <AiOutlineHeart className={styles.icon} />
          <p>Popular</p>
        </div>

        <div className={styles.hotDeals}>
          <BsLightningCharge className={styles.icon} />
          <p>Hot Deals</p>
        </div>

        <div className={styles.help}>
          <BsChat className={styles.icon} />
          <p>Help</p>
        </div>
      </div>

      <div className={styles.hr}></div>
    </>
  );
};

export default Navbar;
