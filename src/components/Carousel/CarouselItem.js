import styles from "./CarouselItem.module.css";

const CarouselItem = (props) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={props.image} alt="" />
    </div>
  );
};

export default CarouselItem;
