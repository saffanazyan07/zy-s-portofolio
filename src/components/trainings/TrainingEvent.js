import {useEffect} from "react";
import {useContext} from "react";
import "./TrainingEvent.scss";
import PadelCarouselV2 from "../carousel/PadelCarouselV2";
import StyleContext from "../../contexts/StyleContext";
import TrainingCard from "../../components/trainingCard/TrainingCard";

export default function TrainingEvent({training}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {isDark} = useContext(StyleContext);

  return (
    <>
      <div style={{marginRight:"10%", marginLeft:"10%"}}>
        <TrainingCard key={training.id} isDark={isDark} training={training} />
      </div>
      <div style={{margin: "5%"}}>

      <PadelCarouselV2></PadelCarouselV2>
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
