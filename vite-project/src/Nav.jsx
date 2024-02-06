import React from "react";
import "./App.css";
import { BsFillMoonStarsFill } from "react-icons/bs";

function NavElement(props) {
  return (
    <li className="px-4 py-6 md:py-2 rounded-md bg-orange-400 text-black hover:text-white font-semibold ">
      <a href={props.href} className="hover:underline underline-offset-8 ">
        {props.children}
      </a>
    </li>
  );
}

export default function Nav() {
  return (
    <>
      <nav className="flex justify-between py-6 mb-12 container">
        <span className="text-3xl text-orange-400 font-bold">KwanZV</span>
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
