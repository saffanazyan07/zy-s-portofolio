import {useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PadelCarousel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 5
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1
    }
  };
  return (
    <div >
      <Carousel responsive={responsive}>
        <div >
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/2.jpg")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/5.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/6.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/7.png")}
          />
        </div>
        <div>
          <img
            width="400"
            height="400"
            alt="img"
            src={require("../../assets/images/esMasPadelClub/8.png")}
          />
        </div>
      </Carousel>
    </div>
  );
}
