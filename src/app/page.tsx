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
    <div className="w-full h-screen max-w-7xl mx-auto">
      <nav className="w-full flex items-center justify-between p-4">
        <div className="text-2xl font-bold">RealEstate</div>
        <div className="flex space-x-4">
          {navitems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-gray-600 hover:text-gray-800"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Contact Us
        </button>
      </nav>
      <header className="relative w-full h-[70vh]">
        <Image
          src="/img/Hero.webp"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore the best properties in the city
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </header>
      <main className="p-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What Our Clients Say
          </h2>
          <div className="relative w-full h-48 overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500"
              style={{
                transform: `translateX(-${tests.indexOf(currentTest) * 100}%)`,
              }}
            >
              {tests.map((test) => (
                <div
                  key={test}
                  className="w-full flex-shrink-0 flex items-center justify-center px-4"
                >
                  <p className="text-lg italic text-gray-700">
                    "{test} is an amazing place to live!"
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-2">
            {tests.map((test) => (
              <button
                key={test}
                onClick={() => setCurrentTest(test)}
                className={`w-3 h-3 rounded-full ${
                  currentTest === test ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center">
            Explore Our Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/img/property-${num}.webp`}
                  alt={`Property ${num}`}
                  width={400}
                  height={250}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">Property {num}</h3>
                  <p className="text-gray-600 mb-4">
                    A beautiful property located in a prime area.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
