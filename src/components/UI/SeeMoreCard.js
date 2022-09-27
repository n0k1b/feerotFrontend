import classes from "./SeeMoreCard.module.css";
// import { Link } from "react-router-dom";

const SeeMoreCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.card}>
        <div className={classes.img}>
          <img src={props.data.image} alt={props.data.title} />
        </div>
        <div className={classes.title}>
          <div>
            <h5 className={classes.brandTitle}>{props.data.title}</h5>
            <p>{props.data.description}</p>
          </div>
          <p>{props.data.discount}</p>
        </div>
        {/* <Link to={`/advertisement/${props.data.id}`}> */}
        <button className={classes.btn}>View</button>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default SeeMoreCard;
