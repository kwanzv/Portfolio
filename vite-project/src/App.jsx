import React from "react";
import "./App.css";
import Nav from "./Nav";
import Landing from "./Landing.jsx";
import About from "./About.jsx";
export default function App() {
  return (
    <>
      <main>
        <Nav />
        <Landing />
        <About />
      </main>
    </>
  );
}
