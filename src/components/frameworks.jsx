import React from "react";
import vue from "../assets/vue.png";
import html from "../assets/html.png";
import angular from "../assets/angular.png";
import react from "../assets/react.png";
import nuxt from "../assets/nuxt.png";
import next from "../assets/nextjs.png";

const data = [
    {
      name: "html",
      img: html,
    },
    {
        name: "react",
        img: react,
    },
    {
        name: "vue",
        img: vue,
    },
    {
        name: "angular",
        img: angular,
    },
    {
      name: "nuxt",
      img: nuxt,
    },
];

export default function Frameworks() {
  return (
    <div className="tech">
      <h2>Works with every technology</h2>
      <div>
        {data.map((item) => (
          <img key={item.name} src={item.img} alt={item.name} />
        ))}
        <img src={next} alt="nextjs" className="nextjs" />
      </div>
    </div>
  );
}
