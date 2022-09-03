import { useParams } from "react-router-dom";
import styles from "./SeeMore.module.css";

import SeeMoreCard from "../components/UI/SeeMoreCard";

import bata from "../image/bata.png";
import md from "../image/md.png";
import odyssey from "../image/odyssey.jpg";
import yellow from "../image/yellow.png";

const DUMMY_DATA = [
  {
    title: "Bata",
    description: "Get 80% OFF at Bata Shoes.",
    image: bata,
    discount: "80% OFF",
  },
  {
    title: "Perricone MD",
    description: "Get 80% OFF at Bata Shoes.",
    image: md,
    discount: "80% OFF",
  },
  {
    title: "Odyssey",
    description: "Get 80% OFF at Bata Shoes.",
    image: odyssey,
    discount: "80% OFF",
  },
  {
    title: "Yellow",
    description: "Get 80% OFF at Bata Shoes.",
    image: yellow,
    discount: "80% OFF",
  },
  {
    title: "Bata",
    description: "Get 80% OFF at Bata Shoes.",
    image: bata,
    discount: "80% OFF",
  },
  {
    title: "Perricone MD",
    description: "Get 80% OFF at Bata Shoes.",
    image: md,
    discount: "80% OFF",
  },
  {
    title: "Odyssey",
    description: "Get 80% OFF at Bata Shoes.",
    image: odyssey,
    discount: "80% OFF",
  },
  {
    title: "Yellow",
    description: "Get 80% OFF at Bata Shoes.",
    image: yellow,
    discount: "80% OFF",
  },
  {
    title: "Bata",
    description: "Get 80% OFF at Bata Shoes.",
    image: bata,
    discount: "80% OFF",
  },
  {
    title: "Perricone MD",
    description: "Get 80% OFF at Bata Shoes.",
    image: md,
    discount: "80% OFF",
  },
  {
    title: "Odyssey",
    description: "Get 80% OFF at Bata Shoes.",
    image: odyssey,
    discount: "80% OFF",
  },
  {
    title: "Yellow",
    description: "Get 80% OFF at Bata Shoes.",
    image: yellow,
    discount: "80% OFF",
  },
];

const SeeMore = () => {
  const params = useParams();
  const titleModified = params.title.replace(/_/g, " ");
  const title = titleModified.replace("-percent", "%");

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <div className={styles.grid}>
          {DUMMY_DATA.map((data) => (
            <SeeMoreCard data={data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SeeMore;
