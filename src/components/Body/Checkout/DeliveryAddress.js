import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import ButtonGreen from "../../UI/ButtonGreen";
import styles from "./DeliveryAddress.module.css";
import Payment from "./Payment";

const DeliveryAddress = () => {
  const cartItems = useSelector((state) => state.shop.cartItem);
  const isSignedIn = useSelector((state) => state.nav.isSignedIn);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [paymentOption, setPaymentOption] = useState();

  const [formNotOk, setFormNotOk] = useState();
  const [cartEmpty, setCartEmpty] = useState();
  const [successMsg, setSuccessMsg] = useState();

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

  const paymentOptionHandler = (value) => {
    setPaymentOption(value);
  };

  const postFormData = async (fData) => {
    const response = await fetch("https://admin.feerot.com/api/submit_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fData),
    });

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
        typeof postCode === "number" &&
        paymentOption
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
          payment_option: paymentOption,
        };

        console.log(formData, "formData");
        postFormData(formData);
      } else {
        setFormNotOk(true);
      }
    }
  };

  const cartEmptyClose = () => {
    setCartEmpty(false);
  };

  const formNotOkClose = () => {
    setFormNotOk(false);
  };

  return (
    <>
      <div className={styles.deliveryAddress}>
        <p className={styles.title}>DELIVERY ADDRESS</p>

        <Snackbar
          open={formNotOk}
          autoHideDuration={6000}
          onClose={formNotOkClose}
        >
          <Alert
            severity="warning"
            sx={{ width: "100%" }}
            onClose={formNotOkClose}
          >
            Please enter your data correctly!
          </Alert>
        </Snackbar>

        <Snackbar
          open={cartEmpty}
          autoHideDuration={6000}
          onClose={cartEmptyClose}
        >
          <Alert
            severity="warning"
            sx={{ width: "100%" }}
            onClose={cartEmptyClose}
          >
            Your cart is empty!
          </Alert>
        </Snackbar>

        <Snackbar
          open={successMsg}
          autoHideDuration={6000}
          onClose={cartEmptyClose}
        >
          <Alert
            severity="success"
            sx={{ width: "100%" }}
            onClose={cartEmptyClose}
          >
            {successMsg}!
          </Alert>
        </Snackbar>

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

        {/* <div onClick={submitFormHandler}>
          <ButtonBlack>DELIVER TO THIS ADDRESS</ButtonBlack>
        </div> */}
      </div>
      <Payment paymentOptionHandler={paymentOptionHandler} />
      <div onClick={submitFormHandler}>
        <ButtonGreen>PLACE ORDER</ButtonGreen>
      </div>
    </>
  );
};

export default DeliveryAddress;
