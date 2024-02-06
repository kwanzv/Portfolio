import React from "react";
import "./App.css";
import { motion } from "framer-motion";
import {
  SlSocialLinkedin,
  SlSocialGithub,
  SlSocialInstagram,
} from "react-icons/sl";

export default function Landing() {
  return (
    <motion.section className="landing py-12 container  min-h-screen">
      <motion.h2
        className="text-9xl font-bold text-left "
        animate={{ opacity: 0, x: 200 }}
        inititial={{ opacity: 0.01, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Hi,
      </motion.h2>

      <motion.h2
        className="text-9xl font-bold text-left"
        inititial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 300 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I'm <span className="text-orange-400">KwanZV</span>
      </motion.h2>
      <motion.p className="text-3xl text-center py-2">
        I'm a freelance web developer based in HCMC
      </motion.p>

      <div className="social-wrapper flex justify-center items-center gap-x-8 py-12">
        <SlSocialLinkedin className="text-4xl text-orange-400  cursor-pointer" />
        <SlSocialGithub className="text-4xl text-orange-400 cursor-pointer" />
        <SlSocialInstagram className="text-4xl text-orange-400 cursor-pointer" />
      </div>
    </motion.section>
  );
}
