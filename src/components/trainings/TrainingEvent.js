import React, {  useEffect } from 'react';
import "./TrainingEvent.scss";

export default function TrainingEvent({training}) {
  
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
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
