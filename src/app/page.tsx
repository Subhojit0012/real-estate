"use client";

import React from "react";
import Image from "next/image";
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
  const navitems = [
    {
      name: "Features",
      link: "#",
    },
    {
      name: "About",
      lnik: "#",
    },
    {
      name: "Pricing",
      link: "#",
    },
  ];

  const [currentTest, setCurrentTest] = React.useState(tests[0]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-mint-500 relative">
      {/* Navigation */}
      <div className="flex justify-between items-center w-full  px-4 py-2 bg-white shadow-md absolute top-0 z-10">
        <div className="bg-blue-300">
          <h1>LoGO</h1>
        </div>
        <div className="flex items-center justify-around w-[30%] min-w-[20%] bg-red-300">
          {navitems.map((item, index) => {
            return <div key={`index-${index}`}>{item.name}</div>;
          })}
        </div>
      </div>

      {/* Hero */}
      <div className="mb-20 w-full/2 pl-5 flex flex-col justify-end items-center bg-yellow-200">
        <h1 className="p-4 font-bold text-4xl text-gray-900 font-sans">
          Trying to find a new <span>{currentTest}</span>
        </h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita ex
          unde in officiis mollitia. Iusto vel ipsam perferendis itaque magni
          deleniti repudiandae, quis neque amet. Eius saepe non quos
          accusantium.
        </p>
      </div>
    </div>
  );
}
