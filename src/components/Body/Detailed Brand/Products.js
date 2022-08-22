import Item from "../../UI/Item";
import styles from "./Products.module.css";
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
  {
    image: sneakerImg,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
  {
    image: sneakerImg5,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
  {
    image: sneakerImg3,
    title: "Adidas Original Retrocopy F2 Sneakers",
    price: 120,
  },
];

const Products = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>Products</p>
        <div className={styles.products}>
          {DUMMY_DATA.map((data, i) => (
            <Item
              key={i}
              image={data.image}
              title={data.title}
              price={data.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
