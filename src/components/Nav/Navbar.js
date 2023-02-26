import styles from "./Navbar.module.css";

import logo from "../../image/Logo/logo_cash.png";

import { FaSearch } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";
import { BsGift, BsCaretDownFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { BsLightningCharge } from "react-icons/bs";
import { BsChat } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FloatingMenu from "./FloatingMenu";
import { useDispatch, useSelector } from "react-redux";
import CartComponentSmall from "../Body/Cart/CartComponentSmall";
import Search from "./Search";
import { navSliceActions } from "../../redux/nav-slice";

const Navbar = () => {
  const dispatch = useDispatch();

  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [search, setSearch] = useState(false);
  const [userDropdown, setUserDropdown] = useState();

  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([0]);

  const cartItem = useSelector((state) => state.shop.cartItem);
  const isSignedIn = useSelector((state) => state.nav.isSignedIn);
  const userData = useSelector((state) => state.nav.userData);
  const navSection = useSelector((state) => state.nav.navSection);

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

  const searchOpenHandler = () => {
    setSearch(true);
  };

  const searchCloseHandler = () => {
    setSearch(false);
  };

  const userOpenHandler = () => {
    setUserDropdown(true);
  };

  const userCloseHandler = () => {
    setUserDropdown(false);
  };

  const logoutHandler = () => {
    dispatch(navSliceActions.setIsSignedIn(false));
    dispatch(navSliceActions.setUserData([]));
    localStorage.removeItem("user_data");
  };

  useEffect(() => {
    if (!searchText) {
      searchCloseHandler();
    }
  }, [searchText]);

  // const searchBlurHandler = () => {
  //   setSearch(false);
  // };

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
    setSearchData(data);
  };

  useEffect(() => {
    searchResultFetch();
  }, []);

  return (
    <>
      <div>
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
              onFocus={searchOpenHandler}
              onChange={searchChangeHandler}
            />
            <div className={styles.search} onClick={searchResultFetch}>
              <FaSearch className={styles.searchIcon} />
            </div>

            {search && (
              <div className={styles.searchResult}>
                <div className={styles.searchRContainer}>
                  <Search searchClose={searchCloseHandler} data={searchData} />
                </div>
              </div>
            )}
          </div>

          {!isSignedIn && (
            <Link className={styles.link} to="/signin">
              <div className={styles.signIn}>
                <FaLock className={styles.lockIcon} />
                <p>Sign in</p>
              </div>
            </Link>
          )}

          {isSignedIn && (
            <div
              className={styles.user}
              onMouseEnter={userOpenHandler}
              onMouseLeave={userCloseHandler}
            >
              <FaUserAlt className={styles.userIcon} />
              <p>{userData.user.name}</p>
              <BsCaretDownFill className={styles.userIcon} />

              {userDropdown && (
                <div className={styles.userDd}>
                  <div className={styles.containerUser}>
                    <Link className={styles.link} to="/my_order">
                      <p>My Order</p>
                    </Link>
                    <p onClick={logoutHandler}>Log Out</p>
                  </div>
                </div>
              )}
            </div>
          )}

          <div
            onMouseEnter={cartMouseEnter}
            onMouseLeave={cartMouseLeave}
            className={styles.cart}
          >
            <BsCartCheckFill className={styles.cartIcon} />
            <p className={styles.cartTitle}>Cart ({cartItem.length})</p>

            {cart && (
              <div className={styles.floatingcart}>
                <CartComponentSmall />
              </div>
            )}
          </div>
        </div>

        <div className={styles.hr}></div>

        <div className={styles.section2}>
          {navSection.map((data) => (
            <Link
              key={data.id}
              className={styles.link}
              to={`/trending/${data.name}`}
            >
              <div className={styles.new}>
                {data.id === 1 && <BsGift className={styles.icon} />}
                {data.id === 2 && <AiOutlineHeart className={styles.icon} />}
                {data.id === 3 && <BsLightningCharge className={styles.icon} />}
                <p>{data.name}</p>
              </div>
            </Link>
          ))}

          {/* <Link className={styles.link} to={`nav_sec/${navSection[0].name}`}>
            <div className={styles.new}>
              <BsGift className={styles.icon} />
              <p>{navSection[0].name}</p>
            </div>
          </Link>

          <Link className={styles.link} to={`nav_sec/${navSection[1].name}`}>
            <div className={styles.popular}>
              <AiOutlineHeart className={styles.icon} />
              <p>{navSection[1].name}</p>
            </div>
          </Link>

          <Link className={styles.link} to={`nav_sec/${navSection[2].name}`}>
            <div className={styles.hotDeals}>
              <BsLightningCharge className={styles.icon} />
              <p>{navSection[2].name}</p>
            </div>
          </Link> */}

          <Link className={styles.link} to="/trending/Help">
            <div className={styles.help}>
              <BsChat className={styles.icon} />
              <p>Help</p>
            </div>
          </Link>
        </div>

        <div className={styles.hr}></div>
      </div>
    </>
  );
};

export default Navbar;
