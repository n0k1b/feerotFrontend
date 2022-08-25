import Item from "../../UI/Item";
import styles from "./Products.module.css";
import sneakerImg from "../../../image/shoe.webp";
import sneakerImg2 from "../../../image/extra-3.webp";
import sneakerImg3 from "../../../image/extra-4.webp";
import sneakerImg4 from "../../../image/extra-5.webp";
import sneakerImg5 from "../../../image/extra-6.webp";
import { Link } from "react-router-dom";

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
            <Link className={styles.link} to="/product">
              <Item
                key={i}
                image={data.image}
                title={data.title}
                price={data.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
