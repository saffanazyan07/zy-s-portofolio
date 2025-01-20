import React from "react";
import "./TrainingOne.scss";

export default function TrainingOne({training}) {
  return (
    <>
      <div className="timeline">
        <div className="containerTimeline left">
          <div className="contentTimeline">
            <h2>2017</h2>
            <p>{training.name}</p>
          </div>
        </div>
        <div className="containerTimeline right">
          <div className="contentTimeline">
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="containerTimeline left">
          <div className="contentTimeline">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="containerTimeline left">
          <div className="contentTimeline">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
        <div className="containerTimeline left">
          <div className="contentTimeline">
            <h2>2017</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </>
  );
}
