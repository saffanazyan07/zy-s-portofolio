import React from "react";
import {Fade} from "react-reveal";
import "./PublicationCard.scss";

export default function PublicationCard({cardInfo, isDark}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade right duration={1000}>
        <div
          className={isDark ? "dark-mode certificate-card" : "certificate-card"}
        >
          <div className="certificate-detail-div">
            <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
              {cardInfo.title}
            </h5>
            <div className="certificate-card-footer">
              {cardInfo.footer.map((v, i) => {
                return (
                  <span
                    key={i}
                    className={
                      v.url ?  
                      isDark ? "dark-mode certificate-tag" : "certificate-tag" :
                      isDark ? "dark-mode certificate-tag nohover" : "certificate-tag nohover"
                    }
                    onClick={() => openUrlInNewTab(v.url)}

                  >
                    {v.name}
                  </span>
                );
              })}
            </div>
            <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
              <b>Abstract.</b> {cardInfo.description}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
