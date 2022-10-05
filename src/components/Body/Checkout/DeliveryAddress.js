import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonBlack from "../../UI/ButtonBlack";
import styles from "./DeliveryAddress.module.css";

const DeliveryAddress = () => {
  const cartItems = useSelector((state) => state.shop.cartItem);
  const isSignedIn = useSelector((state) => state.nav.isSignedIn);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();

  const [formNotOk, setFormNotOk] = useState();
  const [cartEmpty, setCartEmpty] = useState();
  const [successMsg, setSuccessMsg] = useState();

  const [signedIn, setSignedIn] = useState(isSignedIn);

  const fNameChangeHandler = (e) => {
    setFirstName(e.target.value);
  };

  const lNameChangeHandler = (e) => {
    setLastName(e.target.value);
  };

  const mobileChangeHandler = (e) => {
    setMobile(parseInt(e.target.value));
  };

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const cityChangeHandler = (e) => {
    setCity(e.target.value);
  };

  const postCodeChangeHandler = (e) => {
    setPostCode(parseInt(e.target.value));
  };

  const postFormData = async (fData) => {
    const response = await fetch("https://admin.feerot.com/api/submit_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fData),
    });

    console.log("LENGTH");

    if (!response.ok) {
      return;
    }

    const data = await response.json();
    console.log(data);
    setSuccessMsg(data.message);
  };

  const submitFormHandler = () => {
    if (cartItems.length === 0) {
      setCartEmpty(true);
    } else {
      if (
        firstName &&
        lastName &&
        mobile &&
        address &&
        city &&
        postCode &&
        cartItems.length !== 0 &&
        typeof mobile === "number" &&
        typeof postCode === "number"
      ) {
        setFormNotOk(false);

        const formData = {
          first_name: firstName,
          last_name: lastName,
          mobile,
          address,
          city,
          post_code: postCode,
          cart_items: [...cartItems],
        };

        postFormData(formData);
      } else {
        setFormNotOk(true);
      }
    }
  };

  return (
    <>
      <div className={styles.emailContainer}>
        <p className={styles.title}>EMAIL ADDRESS</p>
        <p className={styles.email}>xyz@gmail.com</p>
      </div>

      <div className={styles.deliveryAddress}>
        <p className={styles.title}>DELIVERY ADDRESS</p>
        <p className={styles.secondaryTitle}>ADD ADDRESS :</p>

        {formNotOk && (
          <p className={styles.error}>Please enter your data correctly!</p>
        )}
        {cartEmpty && <p className={styles.error}>Your cart is empty!</p>}
        {successMsg && <p className={styles.success}>{successMsg}!</p>}

        {!signedIn && (
          <p className={styles.error}>Please sign in to continue!</p>
        )}

        <p className={styles.inputTitle}>FIRST NAME :</p>
        <input
          className={styles.input}
          onChange={fNameChangeHandler}
          type="text"
        />

        <p className={styles.inputTitle}>LAST NAME :</p>
        <input
          className={styles.input}
          onChange={lNameChangeHandler}
          type="text"
        />

        <p className={styles.inputTitle}>MOBILE (For delivery updates) :</p>
        <input
          className={styles.input}
          onChange={mobileChangeHandler}
          type="text"
        />

        <p className={styles.inputTitle}>ADDRESS :</p>
        <input
          className={styles.input}
          onChange={addressChangeHandler}
          type="text"
        />

        <p className={styles.inputTitle}>CITY :</p>
        <input
          className={styles.input}
          onChange={cityChangeHandler}
          type="text"
        />

        <p className={styles.inputTitle}>POSTCODE :</p>
        <input
          className={styles.input}
          onChange={postCodeChangeHandler}
          type="text"
        />

        <div onClick={submitFormHandler}>
          <ButtonBlack>DELIVER TO THIS ADDRESS</ButtonBlack>
        </div>
      </div>
    </>
  );
};

export default DeliveryAddress;
