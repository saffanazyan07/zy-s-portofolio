import React, {useState, createRef} from "react";
import "./TrainingCard.scss";
import ColorThief from "colorthief";
import {useNavigate} from "react-router-dom";

export default function TrainingCard({training, isDark}) {
  const navigate = useNavigate();
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div
      className={isDark ? "training-card-dark" : "training-card"}
      onClick={() => navigate(`/${training.id}`)}
    >
      <div style={{background: rgb(colorArrays)}} className="training-banner">
        <div className="training-blurred_div"></div>
        <div className="training-div-company">
          <h5 className="training-text-company">{training.club}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="training-roundedimg"
          src={training.clubLogo}
          alt={training.club}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="training-text-details">
        <h5
          className={
            isDark ? "training-text-role dark-mode-text" : "training-text-role"
          }
        >
          {training.level}
        </h5>
        <h5
          className={
            isDark ? "training-text-date dark-mode-text" : "training-text-date"
          }
        >
          {training.date}
        </h5>
        <p
          className={
            isDark
              ? "subTitle training-text-desc dark-mode-text"
              : "subTitle training-text-desc"
          }
        >
          {training.desc}
        </p>
      </div>
    </div>
  );
}
