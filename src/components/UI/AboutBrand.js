import styles from "./AboutBrand.module.css";

const AboutBrand = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>About {props.brand}</p>
        </div>
        <div className={styles.discription}>
          <p>{props.about}</p>
        </div>
      </div>
    </>
  );
};

export default AboutBrand;
