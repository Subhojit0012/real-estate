"use client";

import React from "react";
import { motion } from "motion/react";
import { IconClick } from "@tabler/icons-react";

export default function AnimatedTestimonialsDemo() {
  const tests = [
    "Home",
    "Apartment",
    "Condo",
    "Villa",
    "Townhouse",
    "Penthouse",
    "Studio",
  ];

  const [currentTest, setCurrentTest] = React.useState(tests[0]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="relative mb-20 -left-120 -top-25 ml-5 pl-5 flex flex-col justify-self-end items-center">
        <h1 className="p-4 font-bold text-4xl text-gray-900 font-sans">
          Trying to find a new <span>{currentTest}</span>
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
          magnam.
        </p>
      </div>
    </div>
  );
}
