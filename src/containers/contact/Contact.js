import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo, isHireable} from "../../portfolio";
import {Fade} from "react-reveal";
import emailAnimation from "../../assets/lottie/manEmailBalloon";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact({prof}) {
  const {isDark} = useContext(StyleContext);
  prof.hireable = isHireable ? "Yes" : "No";

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className={`contact-info-div ${isDark ? "dark-mode" : ""}`}>
            <div className="contact-heading">
              <h1 className="contact-title">{contactInfo.title}</h1>
              <p className="subTitle contact-subtitle">
                {contactInfo.subtitle}
              </p>
            </div>
            {contactInfo.number && (
              <>
                <a className="contact-phone" href={"tel:" + contactInfo.number}>
                  {contactInfo.number}
                </a>
              </>
            )}
            {prof.location !== null && (
              <div className="contact-country">
                <svg
                  viewBox="-0.5 -2 20 19"
                  version="1.1"
                  width="22"
                  height="16"
                  aria-hidden="true"
                  stroke="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  ></path>
                </svg>
                {prof.location}
              </div>
            )}
            <div className="contact-open-to-hire">
              Open for opportunities: {prof.hireable}
            </div>
            <SocialMedia />
          </div>
          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={emailAnimation} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg").default}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
