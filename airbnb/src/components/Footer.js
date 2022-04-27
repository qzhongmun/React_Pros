import React from "react";

export default function Footer(props) {
  return (
    <section className="footer">
      <img className="img1" />
      <img className="img2" />
      <div className="card--stats">
        <img className="img3" />
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
