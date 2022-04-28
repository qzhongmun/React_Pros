import React from "react";

export default function Footer(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="footer">
      {badgeText && <div className="soldout">{badgeText}</div>}
      <img className="img1" src={`../images/${props.coverImg}`} alt="" />
      <img className="img2" alt="" />
      <div className="card--stats">
        <img className="img3" alt="" />
        <div className="words">
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">USA</span>
        </div>
      </div>
      <p className="p1">{props.title}</p>
      <p className="p2">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </section>
  );
}
