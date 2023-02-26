import styles from "./SignIn.module.css";
import ButtonBlack from "../../UI/ButtonBlack";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { navSliceActions } from "../../../redux/nav-slice";

const SignIn = () => {
  const dispatch = useDispatch();

  const willRedirect = useSelector((state) => state.nav.willRedirect);
  const userData = useSelector((state) => state.nav.userData);

  console.log(userData);

  const [number, setNumber] = useState();
  const [numberError, setNumberError] = useState(false);
  const [numberSection, setNumberSection] = useState(true);

  const [otpSection, setOtpSection] = useState();
  const [otp, setOtp] = useState();
  const [otpInput, setOtpInput] = useState();
  const [otpError, setOtpError] = useState(false);

  const [regSection, setRegSection] = useState();
  const [userStatus, setUserStatus] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState();
  const [regError, setRegError] = useState();

  const [token, setToken] = useState();

  const pnNextHandler = () => {
    if (parseInt(number)) {
      setNumberError(false);

      const sendNumberFetch = async () => {
        const response = await fetch("https://admin.feerot.com/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobile_number: parseInt(number),
          }),
        });

        if (!response.ok) {
          return;
        }

        const data = await response.json();
        console.log(data);

        setOtp(data.otp);
        setNumberSection(false);
        setOtpSection(true);
      };

      try {
        sendNumberFetch();
      } catch (error) {
        console.error(error);
      }
    } else {
      setNumberError(true);
    }
  };

  const pnChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  const otpChangeHandler = (e) => {
    setOtpInput(e.target.value);
  };

  const otpNextHandler = () => {
    if (parseInt(otpInput) === otp) {
      const otpSecFetch = async () => {
        const response = await fetch(
          "https://admin.feerot.com/api/submit_otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mobile_number: number,
              otp: otp,
            }),
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        console.log(data);
        setToken(data.token);
        localStorage.setItem("user_data", JSON.stringify(data));

        dispatch(navSliceActions.setUserData(data));
        // Authorization: `Bearer ${token}

        setUserStatus(data);
        setOtpSection(false);

        if (data.user_status === "new") {
          setRegSection(true);
        } else {
          setRedirect(true);
          dispatch(navSliceActions.setIsSignedIn(true));
        }
      };

      try {
        otpSecFetch();
      } catch (err) {
        console.error(err);
      }
    } else {
      setOtpError(true);
    }
  };

  const fullNameChangeHandler = (e) => {
    setFullName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const regNextHandler = () => {
    if (fullName !== "" && email !== "") {
      const regFetch = async () => {
        const response = await fetch(
          "https://admin.feerot.com/api/registration",
          {
            method: "POST",
            headers: {
              "Content-Type": "applicatin/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              name: fullName,
              email: email,
              mobile_number: number,
            }),
          }
        );

        if (!response.ok) {
          return;
        }

        const data = await response.json();

        console.log(data);

        if (data.status_code === 200) {
          setRedirect(true);
          dispatch(navSliceActions.setIsSignedIn(true));
          dispatch(navSliceActions.setUserData(data));
        }
      };

      try {
        regFetch();
      } catch (err) {
        console.error(err);
      }
    } else {
      setRegError(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {numberSection && (
          <div className={styles.numberSection}>
            <p className={styles.nsTitle}>Please enter your phone number!</p>
            {numberError && (
              <p className={styles.nsError}>
                Please enter a valid phone number!
              </p>
            )}
            <input
              className={styles.input}
              type="text"
              placeholder="Phone Number"
              onChange={pnChangeHandler}
            />
            <div className={styles.btn} onClick={pnNextHandler}>
              <ButtonBlack>Next</ButtonBlack>
            </div>
          </div>
        )}

        {otpSection && (
          <div className={styles.otpSection}>
            <p className={styles.nsTitle}>Please enter your OTP!</p>
            {otpError && (
              <p className={styles.nsError}>The OTP you entered is wrong!</p>
            )}
            <input
              className={styles.input}
              type="text"
              placeholder="OTP"
              onChange={otpChangeHandler}
            />
            <div className={styles.btn} onClick={otpNextHandler}>
              <ButtonBlack>Next</ButtonBlack>
            </div>
          </div>
        )}

        {regSection && (
          <div className={styles.registration}>
            <p className={styles.nsTitle}>Please enter information!</p>
            <input
              className={styles.input}
              type="text"
              placeholder="Full Name"
              onChange={fullNameChangeHandler}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
              onChange={emailChangeHandler}
            />
            <div className={styles.btn} onClick={regNextHandler}>
              <ButtonBlack>Next</ButtonBlack>
            </div>
          </div>
        )}

        {redirect && willRedirect && <Redirect to="/checkout" />}
        {redirect && !willRedirect && <Redirect to="/" />}
      </div>
    </>
  );
};

export default SignIn;
