import styles from "./AboutBrand.module.css";

const AboutBrand = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p className={styles.titleText}>About {props.brand}</p>
        </div>
        <div className={styles.description}>
          <p className={styles.descriptionText}>{props.about}</p>
        </div>
      </div>
    </>
  );
};

export default AboutBrand;
