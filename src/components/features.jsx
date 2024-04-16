import React from "react";
import db from "../assets/db.svg";
import fast from "../assets/fast.svg";
import code from "../assets/code.svg";

export default function Features() {
  return <div id="features">
    <h2>Features</h2>
    <Feature
      title="Fast"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      svg={fast}
    />
    <Feature
      title="No Database"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      svg={db}  
    />
    <Feature
        title="No Backend"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        svg={code}
    />
  </div>;
}

function Feature({ title, description, svg }) {
  return (
    <div className="feature">
      <div className="title">
        <img src={svg} alt={title} />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
