import React from "react";
import Header from "./components/header";
import "./App.css";
import Frameworks from "./components/frameworks";
import Hero from "./components/hero";
import Example from "./components/example";
import Features from "./components/features";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Frameworks />
      <Example />
      <Features />
    </>
  );
}
