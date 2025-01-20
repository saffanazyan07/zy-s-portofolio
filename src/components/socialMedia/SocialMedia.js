import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks) return;
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((link, i) => (
        <a
          key={i}
          href={link.name === "email" ? `mailto:${link.url}` : link.url}
          className={`icon-button ${link.name}`}
          target="_blank"
          rel="noopener noreferrer"
          {...(link.title && {title: link.title})}
        >
          <i className={link.icon}></i>
          <span></span>
        </a>
      ))}
    </div>
  );
}
