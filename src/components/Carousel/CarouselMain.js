import Carousel from "react-bootstrap/Carousel";
import styles from "./CarouselMain.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function CarouselMain() {
  return (
    <>
      <div className={styles.caraoselContainer}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselMain;
