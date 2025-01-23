import  {useEffect} from "react";
import "./TrainingEvent.scss";
import {Carousel} from "react-bootstrap";

export default function TrainingEvent({training}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <Carousel className="w-75 d-flex justify-content-center">
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                width="500"
                height="400"
                alt="img"
                src={require("../../assets/images/esMasPadelClub/2.jpg")}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                width="600"
                height="400"
                alt="img"
                src={require("../../assets/images/esMasPadelClub/4.png")}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                width="400"
                height="400"
                alt="img"
                src={require("../../assets/images/esMasPadelClub/5.png")}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                width="400"
                height="400"
                alt="img"
                src={require("../../assets/images/esMasPadelClub/6.png")}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                width="400"
                height="400"
                alt="img"
                src={require("../../assets/images/esMasPadelClub/7.png")}
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                width="400"
                height="400"
                alt="img"
                src={require("../../assets/images/esMasPadelClub/8.png")}
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="timeline">
        {training.milestones.map((milestone, i) => {
          if (i % 2 === 0) {
            return (
              <div className="containerTimeline left">
                <div className="contentTimeline">
                  <h2>{milestone.title}</h2>
                  {milestone.contents.map(content => {
                    return (
                      <div>
                        <b>{content.time} -</b> {content.content}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div className="containerTimeline right">
                <div className="contentTimeline">
                  <h2>{milestone.title}</h2>
                  {milestone.contents.map(content => {
                    return (
                      <div>
                        <b>{content.time} -</b> {content.content}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
