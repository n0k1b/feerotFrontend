import SignIn from "../components/Body/Sign In/SignIn";
import styles from "./Pages.module.css";

const SignInPage = () => {
  return (
    <>
      <div className={styles.signinContainer}>
        <SignIn />
      </div>
    </>
  );
};

export default SignInPage;
