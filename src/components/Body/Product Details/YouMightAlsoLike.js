import styles from "./YouMightAlsoLike.module.css";
import Item from "../../UI/Item";

import sneakerImg from "../../../image/shoe.webp";
import sneakerImg2 from "../../../image/extra-3.webp";
import sneakerImg3 from "../../../image/extra-4.webp";
import sneakerImg4 from "../../../image/extra-5.webp";
import sneakerImg5 from "../../../image/extra-6.webp";

const DUMMY_DATA = [
  {
    image: sneakerImg,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
  {
    image: sneakerImg2,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
  {
    image: sneakerImg3,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
  {
    image: sneakerImg4,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
  {
    image: sneakerImg5,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
];

const YouMightAlsoLike = (props) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>YOU MIGHT ALSO LIKE</p>
        {props.data && <div className={styles.products}>
                  {props.data.you_might_also_like.map((data, i) => (
                    <Item
                      key={i}
                      id={data.id}
                      image={data.thumbnail_image}
                      title={data.name}
                      price={data.discount_price}
                      was={data.price}
                    />
                  ))}
                </div>}
      </div>
    </>
  );
};

export default YouMightAlsoLike;
