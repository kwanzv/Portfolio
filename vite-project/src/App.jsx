import React from "react";
import "../App.css";
import Nav from "./components/Nav";
import Landing from "./components/Landing.jsx";
import Projects from "./components/Projects.jsx";

export default function App() {
  return (
    <>
      <div className="gradient-wrapper">
        <main>
          <div className="gradients-container">
            <div className="gradient-one"></div>
            <div className="gradient-two"></div>
          </div>

          <Nav />
          <Landing />
          <Projects />
        </main>
      </div>
    </>
  );
}

document.addEventListener("DOMContentLoaded", () => {
  const bubble = document.querySelector(".gradient-one");
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  function move() {
    curX += tgX - curX;
    curY += tgY - curY;
    bubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(
      curY
    )}px)`;
    requestAnimationFrame(() => {
      move();
    });
  }

  document.addEventListener("mousemove", (event) => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});
