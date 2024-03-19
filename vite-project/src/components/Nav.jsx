import React from "react";
import "../App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion";
import logo from "../assets/logo.png"; // with import

function NavElement(props) {
  return (
    <motion.button
      className="px-4 py-6 md:py-2 rounded-md bg-slate-400 text-slate-900 hover:text-slate-600 hover:bg-orange-400 font-semibold "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95, rotate: "2.5deg" }}
    >
      <a href={props.href} className="hover:underline underline-offset-7 ">
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
          className="cursor-pointer"
          whileHover={{ scale: 1.5, rotate: "45deg" }}
          whileTap={{ scale: 1, rotate: "90deg" }}
        >
          <img src={logo} alt="logo" className="w-12 h-12" />
        </motion.span>
        <ul className="flex gap-4">
          <BsFillMoonStarsFill className="cursor-pointer text-3xl mt-2 mr-2" />
          <NavElement href="/">Home</NavElement>
          <NavElement href="/">Works</NavElement>
          <NavElement href="/">Contact</NavElement>
        </ul>
      </nav>
    </>
  );
}
