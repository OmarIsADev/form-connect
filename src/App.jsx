import React from "react";
import Header from "./components/header";
import "./App.css";
import Frameworks from "./components/frameworks";

export default function App() {
  return (
    <>
      <Header />
      <div className="hero">
        <h1>
          Send E-mails real easy with{" "}
          <span className="highlight">Form Connect</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          reprehenderit voluptas maiores sunt magnam velit provident quae, omnis
          quo nostrum saepe animi impedit eius doloribus perferendis eveniet.
          Asperiores, veritatis ipsa.
        </p>
        <a href="#" className="button-link">
          Get started
        </a>
      </div>
      <Frameworks />
    </>
  );
}
