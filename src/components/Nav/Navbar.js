import styles from "./Navbar.module.css";

import logo from "../../image/Logo/logo_cash.png";

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
import { Link } from "react-router-dom";
import FloatingMenu from "./FloatingMenu";
import { useSelector } from "react-redux";
import CartComponent from "../Body/Cart/CartComponent";
import Search from "./Search";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState(false);

  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const cartQuantity = useSelector((state) => state.shop.totalQuantity);

  const mouseEnter = () => {
    setMenu(true);
  };

  const mouseLeave = () => {
    setMenu(false);
  };

  const cartMouseEnter = () => {
    setCart(true);
  };

  const cartMouseLeave = () => {
    setCart(false);
  };

  const searchHandler = () => {
    setSearch(!search);
  };

  const searchChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchResultFetch = async () => {
    const response = await fetch(
      "https://admin.feerot.com/api/get_search_result",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input_value: searchText,
        }),
      }
    );

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    console.log(data);

    setSearchData(data);
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

          {menu && <FloatingMenu />}
        </div>

        <div className={styles.searchBarSection}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search Product by Name, Category..."
            onFocus={searchHandler}
            onBlur={searchHandler}
            onChange={searchChangeHandler}
          />
          <div className={styles.search} onClick={searchResultFetch}>
            <FaSearch className={styles.searchIcon} />
          </div>

          {search && (
            <div className={styles.searchResult}>
              <div className={styles.searchRContainer}>
                <Search data={searchData} />
              </div>
            </div>
          )}
        </div>

        <div className={styles.signIn}>
          <FaLock className={styles.lockIcon} />
          <p>Sign in</p>
        </div>

        <Link className={styles.link} to="/cart">
          <div
            onMouseEnter={cartMouseEnter}
            onMouseLeave={cartMouseLeave}
            className={styles.cart}
          >
            <BsCartCheckFill className={styles.cartIcon} />
            <p className={styles.cartTitle}>Cart ({cartQuantity})</p>

            {cart && (
              <div className={styles.floatingcart}>
                <CartComponent />
              </div>
            )}
          </div>
        </Link>
      </div>

      <div className={styles.hr}></div>

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
