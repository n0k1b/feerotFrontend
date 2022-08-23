import styles from "./TermsACondition.module.css";

const TermsACondition = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p>Terms & Conditions</p>
        </div>

        <div className={styles.list}></div>
      </div>
    </>
  );
};

export default TermsACondition;
