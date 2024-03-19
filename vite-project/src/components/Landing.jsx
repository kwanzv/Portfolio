/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import { Button } from "./ui/button.jsx";

const defaultAnimations = {
  show: {
    opacity: 1,
  },
  hide: {
    opacity: 0,
  },
};

const animateText = (text, className) => {
  if (text) {
    return (
      <div className="text-wrapper block">
        <motion.span
          initial="hide"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              className={className}
              variants={defaultAnimations}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </div>
    );
  }
  return null; // Returning null in case text is falsy
};

export default function Landing() {
  return (
    <section className="landing py-6 container">
      <h1 className="text-5xl text-center py-2 inline-block ">
        Hi, I'm <span className="text-orange-500 font-bold">Kwan</span>
      </h1>
      {animateText(
        "I'm a freelance web developer.",
        "text-3xl text-center py-2 inline-block"
      )}

      <div className="social-wrapper flex justify-center items-center gap-x-8 py-12">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kwanzv"
          rel="noreferrer"
        >
          <SlSocialLinkedin className="text-4xl text-orange-400 hover:scale-105 hover:rotate-2 cursor-pointer" />
        </a>
        <a target="_blank" href="https://github.com/kwanzv" rel="noreferrer">
          <SlSocialGithub className="text-4xl text-orange-400 hover:scale-105 hover:rotate-2 cursor-pointer" />
        </a>
      </div>
      <p className="text-2xl text-center justify-center m-auto py-2 max-w-2xl">
        I love to build things for the web, and I'm always looking for new
        projects to work on.
      </p>
      <p className="text-2xl text-center py-2 justify-left m-auto max-w-2xl">
        I have experience in HTML, CSS, SCSS, JavaScript, Bootstrap, tailwind
        CSS, React JS, Framer motion and ThreeJS.
      </p>
      <Button>Get Started</Button>
    </section>
  );
}
