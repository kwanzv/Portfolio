import React from "react";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";

function NavElement(props) {
  return (
    <motion.button
      className="px-4 py-6 md:py-2 rounded-md bg-orange-400 text-black hover:text-white font-semibold "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: "2.5deg" }}
    >
      <a href={props.href} className="hover:underline underline-offset-8 ">
        {props.children}
      </a>
    </motion.button>
  );
}

export default function Nav() {
  return (
    <>
      <nav className="flex justify-between py-6 mb-12 container">
        <motion.span
          className="text-3xl text-orange-400 font-bold"
          whileTap={{ scale: 0.95, rotate: "5deg" }}
        >
          KwanZV
        </motion.span>
        <ul className="flex gap-4">
          <li>
            <BsFillMoonStarsFill className="cursor-pointer text-3xl" />
          </li>
          <NavElement href="/">Home</NavElement>
          <NavElement href="/">About me</NavElement>
          <NavElement href="/">Portfolio</NavElement>
          <NavElement href="/">Contact</NavElement>
        </ul>
      </nav>
    </>
  );
}
