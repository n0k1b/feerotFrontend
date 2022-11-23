import styles from "./PromoCode.module.css";
import { BsTag } from "react-icons/bs";
import { AiOutlineGift } from "react-icons/ai";
import ButtonBlack from "../../UI/ButtonBlack";
import { useState } from "react";

const PromoCode = () => {
  const [promo, setPromo] = useState(true);
  const [voucher, setVoucher] = useState(false);

  const promoClickHandler = () => {
    setPromo(true);
    setVoucher(false);
  };

  const voucherClickHandler = () => {
    setPromo(false);
    setVoucher(true);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>PROMO CODE</p>

      <div className={styles.PrVoSection}>
        <div className={styles.buttonContainer}>
          <div
            className={promo ? styles.active : styles.promo}
            onClick={promoClickHandler}
          >
            <BsTag className={styles.tag} />
            <p>PROMO CODE</p>
          </div>
          {/* <div
            className={voucher ? styles.active : styles.voucher}
            onClick={voucherClickHandler}
          >
            <AiOutlineGift className={styles.gift} />
            <p>VOUCHER</p>
          </div> */}
        </div>

        {promo && (
          <div className={styles.promoSection}>
            <p className={styles.promoTitle}>ADD A PROMO CODE</p>
            <p className={styles.pCodeTitle}>PROMO CODE</p>

            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" />
              <ButtonBlack>APPLY CODE</ButtonBlack>
            </div>

            <div className={styles.NeedToKnow}>
              <p className={styles.ntkTitle}>NEED TO KNOW</p>
              <ul className={styles.ul}>
                <li>
                  You can only use one discount/promo code per order. This
                  applies to our free-delivery codes, too.
                </li>
                <li>
                  Discount/promo codes cannot be used when buying gift vouchers.
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* {voucher && (
          <div className={styles.voucherSection}>
            <p className={styles.promoTitle}>ADD A VOUCHER</p>
            <p className={styles.pCodeTitle}>16-DIGIT VOUCHER CODE</p>

            <div className={styles.inputContainer}>
              <input className={styles.input} type="text" />
              <ButtonBlack>APPLY CODE</ButtonBlack>
            </div>

            <div className={styles.NeedToKnow}>
              <p className={styles.giftCardMsg}>
                Got a gift card? Visit My Account to add it to your gift-voucher
                balance before you can redeem it at checkout.
              </p>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default PromoCode;
