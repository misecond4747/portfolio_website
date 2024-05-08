"use client";
import Image from "next/image";
import React from "react";
import Buttons from "./Buttons";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="text-white mt-24">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600">
              Hello, I&apos;m
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "  Ibrahim",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              deletionSpeed={20}
              className="mt-4 inline-block"
              omitDeletionAnimation={true}
            />
          </h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6 mr-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatem, id cumque.
          </p>
          <div>
            <Buttons content={"Hire me"} type="primary" />
            <Buttons content={"Downlaod CV"} type="secondary" />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src={"/images/hero-image.png"}
              height={300}
              width={300}
              alt="Hero Image"
              className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
