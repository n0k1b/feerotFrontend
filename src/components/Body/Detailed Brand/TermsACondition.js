import List from "./List";
import styles from "./TermsACondition.module.css";

const DUMMY_DATA = [
  {
    title: "What could stop me from getting Cash Back?",
    list: [
      "Cash Back is not available on Hurley Wetsuits, Air Jordan Retros, HyperAdapt, Adapt BB, or purchases made on employee website. Cash Back not available on purchases made through the Bata SNKRS app.",
      "Orders deemed by Bata to be used for reselling purposes.",
      "The purchase or redemption of gift cards.",
      "Student, Military or Birthday coupon codes will not be eligible for cash back.",
    ],
  },

  {
    title: "What else is essential?",
    list: [
      "Cash Back is not available on Hurley Wetsuits, Air Jordan Retros, HyperAdapt, Adapt BB, or purchases made on employee website. Cash Back not available on purchases made through the Bata SNKRS app.",
      "Orders deemed by Bata to be used for reselling purposes.",
      "The purchase or redemption of gift cards.",
      "Student, Military or Birthday coupon codes will not be eligible for cash back.",
    ],
  },

  {
    title: "Good to know",
    list: [
      "Cash Back is not available on Hurley Wetsuits, Air Jordan Retros, HyperAdapt, Adapt BB, or purchases made on employee website. Cash Back not available on purchases made through the Bata SNKRS app.",
      "Orders deemed by Bata to be used for reselling purposes.",
      "The purchase or redemption of gift cards.",
      "Student, Military or Birthday coupon codes will not be eligible for cash back.",
    ],
  },
];

const TermsACondition = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <p>Terms & Conditions</p>
        </div>

        <div className={styles.list}>
          {DUMMY_DATA.map((data) => (
            <List title={data.title} list={data.list} />
          ))}
        </div>

        <div className={styles.disclaimer}>
          <p>
            Please note the terms & conditions above are in addition to our
            general terms & conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsACondition;
