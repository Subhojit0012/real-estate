"use client";

import React from "react";
import { motion } from "motion/react";
import { IconClick } from "@tabler/icons-react";

export default function AnimatedTestimonialsDemo() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* the div will appear from up-word(initial) to down-word(animate) */}
      <motion.button
        className="bg-blue-500 text-white p-4 rounded-lg shadow-lg flex flex-row justify-center items-center gap-2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Click Me
        <IconClick />
      </motion.button>
    </div>
  );
}
