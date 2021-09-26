import React, {useContext} from "react";
import "./Publication.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
export default function Publication() {
  const {isDark} = useContext(StyleContext);
  if (!publicationSection.display) {
    return null;
  }
  return (
    <div className="main" id="publications">
      <div className="publication-main-div">
        <div className="publication-header">
          <h1
            className={
              isDark
                ? "dark-mode heading publication-heading"
                : "heading publication-heading"
            }
          >
            {publicationSection.title}
          </h1>
          <p
            className={
              isDark
                ? "dark-mode subTitle publication-subtitle"
                : "subTitle publication-subtitle"
            }
          >
            {publicationSection.subtitle}
          </p>
        </div>
        <div className="publication-cards-div">
          {publicationSection.publicationsCards.map((card, i) => {
            return (
              <PublicationCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.abstract,
                  footer: card.authors
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
