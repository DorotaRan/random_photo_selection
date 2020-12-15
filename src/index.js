import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function CoinToss() {
  let n = Math.random() < 0.5 ? "heads" : "tails";
  let pics = {
    kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
    doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg"
  };
  return <img alt="" src={pics[n === "heads" ? "kitty" : "doggy"]} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CoinToss />
  </React.StrictMode>,
  rootElement
);
