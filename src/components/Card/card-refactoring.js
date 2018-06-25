import React from "react";
import "./cardStyles.css";
import "../../app.css";
import PictureCard from "./components/PictureCard";
import { randomId } from "../../utils/Helpers";

const Card = (
  {
    label,
    labelBold,
    labelLast,
    tabOrder,
    cardName,
    cardKey,
    cardLabel,
    cardInfo,
    classes,
    meta: { touched, error }
  },
  props
) => {
  return (
    <div className={classes}>
      <label>
        {label} <strong>{labelBold}</strong> {labelLast}?
      </label>
      <div className="question__input">
        <div className="question__single-choice">Pick one please</div>
        {/* Radio Buttons */}
        <ul className="question__choices flex--wrap">
          {cardInfo.map(card => (
            <PictureCard
              key={randomId()}
              thumbnail={card.thumbnail}
              thumbnailAlt={card.thumbnailAlt}
              cardName={card.cardName}
              cardKey={card.cardKey}
              cardLabel={card.cardLabel}
              tabOrder={card.tabOrder}
            />
          ))}
          {touched && error && <span>{error}</span>}
        </ul>
      </div>
    </div>
  );
};

export default Card;
