import React, {useContext} from "react";
import "./Training.scss";
import TrainingCard from "../../components/trainingCard/TrainingCard";
import {trainings} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Training() {
  const {isDark} = useContext(StyleContext);
  if (trainings.display) {
    return (
      <div id="training">
        <Fade bottom duration={1000} distance="20px">
          <div className="training-container" id="training">
            <div>
              <h1 className="training-heading">Trainings</h1>
              <div className="training-cards-div">
                {trainings.trainings.map((training, i) => {
                  return (
                    <TrainingCard
                      key={i}
                      isDark={isDark}
                      training={training}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
